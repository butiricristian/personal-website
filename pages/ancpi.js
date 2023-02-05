import Head from "next/head";
import styles from "../styles/Ancpi.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Input from "../components/common/Input";
import Select from "react-select";
import {
  JUDETE,
  PROPERTY_TYPES,
  IPOTECI_TYPES,
  REQUEST_TYPES,
} from "../constants";
import { useTranslation } from "next-i18next";
import { ProgressBar } from 'react-loader-spinner'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
      baseUrl: getBaseUrl(),
    },
  };
}

function getBaseUrl() {
  if (process && process.env.NODE_ENV === "production") {
    return `https://ancpi-data-provider.netlify.app/.netlify/functions`;
  }
  return `http://localhost:9999/.netlify/functions`;
}

async function getData(baseUrl, params = {}) {
  const resCereri = await axios.get(`${baseUrl}/cereri`, {
    transformResponse: (res) => res,
    params: params,
  });
  const cereri = JSON.parse(resCereri.data);
  const resVanzari = await axios.get(`${baseUrl}/vanzari`, {
    transformResponse: (res) => res,
    params: params,
  });
  const vanzari = JSON.parse(resVanzari.data);
  const resIpoteci = await axios.get(`${baseUrl}/ipoteci`, {
    transformResponse: (res) => res,
    params: params,
  });
  const ipoteci = JSON.parse(resIpoteci.data);

  return {
    cereri,
    vanzari,
    ipoteci,
  };
}

function translateDateRo(dateString) {
  const monthNames = [
    "Ianuarie",
    "Februarie",
    "Martie",
    "Aprilie",
    "Mai",
    "Iunie",
    "Iulie",
    "August",
    "Septembrie",
    "Octombrie",
    "Noiembrie",
    "Decembrie",
  ];
  const actualDate = new Date(dateString);
  const month = monthNames[actualDate.getMonth()];
  const year = actualDate.getFullYear().toString();
  return `${month}, ${year}`;
}

function translateDate(dateString, t) {
  const monthNames = t('ancpi.months', {returnObjects: true})
  const actualDate = new Date(dateString);
  const month = monthNames[actualDate.getMonth()];
  const year = actualDate.getFullYear().toString();
  return `${month}, ${year}`;
}

function translateConsts(constToTranslate, t) {
  return constToTranslate.map(x => {
    if (x.options) {
      return {
        ...x,
        label: t(`ancpi.${x.label}`),
        options: translateConsts(x.options, t),
      }
    }
    return {
      ...x,
      label: t(`ancpi.${x.label}`),
    }
  })
}


export default function Ancpi({ baseUrl }) {
  const { t, i18n } = useTranslation();

  const [cereri, setCereri] = useState({});
  const [vanzari, setVanzari] = useState({});
  const [ipoteci, setIpoteci] = useState({});

  const minDate = new Date(2017, 0, 1),
    maxDate = new Date();
  const [startDate, setStartDate] = useState(minDate);
  const [endDate, setEndDate] = useState(maxDate);
  const [judet, setJudet] = useState("TOTAL");
  const [ipoteciActive, setIpoteciActive] = useState(true);
  const [cereriType, setCereriType] = useState("receptie");
  const [propertyType, setPropertyType] = useState("Total");
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const startDateString = translateDateRo(startDate).toLowerCase();
    const endDateString = translateDateRo(endDate).toLowerCase();
    const params = {
      dateStart: startDateString,
      dateEnd: endDateString,
      judet: judet,
      requestType: cereriType,
      ipoteciActive: ipoteciActive,
    };

    const req = async () => {
      const {
        cereri: cereriData,
        vanzari: vanzariData,
        ipoteci: ipoteciData,
      } = await getData(baseUrl, params);

      setCereri(cereriData);
      setVanzari(vanzariData);
      setIpoteci(ipoteciData);
      setLoading(false)
    };
    req();
  }, [startDate, endDate, judet, cereriType, ipoteciActive]);

  function filterCereriData(data) {
    if (!data || data === {}) return [];
    return Object.values(data).map((value) => value?.Total);
  }

  function filterVanzariData(data) {
    if (!data || data === {}) return [];
    return Object.values(data).map((value) => value && value[propertyType]);
  }

  function filterIpoteciData(data) {
    if (!data || data === {}) return [];
    return Object.values(data).map((value) => value && value[propertyType]);
  }

  function getLabels() {
    if (cereri && Object.keys(cereri).length > 0) {
      return Object.keys(cereri).map((x) => translateDate(x, t));
    }
    if (vanzari &&  Object.keys(vanzari).length > 0) {
      return Object.keys(vanzari).map((x) => translateDate(x, t));
    }
    if (ipoteci &&  Object.keys(ipoteci).length > 0) {
      return Object.keys(ipoteci).map((x) => translateDate(x, t));
    }
    return [];
  }

  const data = {
    labels: getLabels(),
    datasets: [
      {
        label: t("ancpi.requests"),
        data: filterCereriData(cereri),
        borderColor: "rgb(253, 219, 91)",
        backgroundColor: "rgba(253, 219, 91, 0.9)",
      },
      {
        label: t("ancpi.sales"),
        data: filterVanzariData(vanzari),
        borderColor: "rgb(65, 105, 225)",
        backgroundColor: "rgba(65, 105, 225, 0.9)",
      },
      {
        label: t("ancpi.mortgages"),
        data: filterIpoteciData(ipoteci),
        borderColor: "rgb(255, 87, 83)",
        backgroundColor: "rgba(255, 87, 83, 0.9)",
      },
    ],
  };

  const selectStyles = {
    control: (state) => ({
      ...state,
      border: "solid 1px #eee",
      padding: "0.3rem",
      margin: 0,
    }),
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: "center"}}>
      <Head>
        <title>Cristian Butiri - Senior Software Engineer</title>
        <link rel="icon" href="/CB.ico" />
      </Head>

      <main className={styles.container}>
        <h1>{t('ancpi.title')}</h1>
        <p>{t('ancpi.subtitle')}</p>
        <div className={styles.specificFilters}>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t("ancpi.state")}</h5>
            </div>
            <div className={styles.filtersContainer}>
              <Select
                options={JUDETE.map((j) => ({ value: j, label: j }))}
                className={styles.select}
                styles={selectStyles}
                isSearchable
                onChange={({ value }) => setJudet(value)}
                defaultValue={{ value: judet, label: judet }}
                placeholder={t("ancpi.state")}
              />
            </div>
          </div>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t("ancpi.from")}</h5>
            </div>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                minDate={minDate}
                maxDate={maxDate}
                customInput={<Input />}
                showPopperArrow={false}
                wrapperClassName={styles.datepickerWrapper}
                calendarClassName="ancpi-date-picker"
              />
            </div>
          </div>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t("ancpi.to")}</h5>
            </div>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                minDate={minDate}
                maxDate={maxDate}
                customInput={<Input />}
                showPopperArrow={false}
                wrapperClassName={styles.datepickerWrapper}
                calendarClassName="ancpi-date-picker"
              />
            </div>
          </div>
        </div>
        <div className={styles.specificFilters}>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t('ancpi.asset_type')}</h5>
              {/* <div className={styles.colorContainer} style={{backgroundColor: 'var(--secondary)'}}></div> */}
            </div>
            <div className={styles.filtersContainer}>
              <Select
                options={translateConsts(PROPERTY_TYPES, t)}
                className={styles.select}
                styles={selectStyles}
                onChange={({ value }) => setPropertyType(value)}
                defaultValue={translateConsts(PROPERTY_TYPES, t).find(
                  (pt) => pt.value === propertyType
                )}
                placeholder="Property Type"
              />
            </div>
          </div>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t('ancpi.mortgages')}</h5>
            </div>
            <div className={styles.filtersContainer}>
              <Select
                options={translateConsts(IPOTECI_TYPES, t)}
                className={styles.select}
                styles={selectStyles}
                onChange={({ value }) => setIpoteciActive(value)}
                defaultValue={translateConsts(IPOTECI_TYPES, t).find(
                  (it) => it.value === ipoteciActive.toString()
                )}
                placeholder="Active/Inactive"
              />
            </div>
          </div>
          <div className={styles.titleAndFilter}>
            <div className={styles.titleContainer}>
              <h5>{t('ancpi.request_type')}</h5>
            </div>
            <div className={styles.filtersContainer}>
              <Select
                options={translateConsts(REQUEST_TYPES, t)}
                className={styles.select}
                styles={selectStyles}
                onChange={({ value }) => setCereriType(value)}
                defaultValue={translateConsts(REQUEST_TYPES, t).find(
                  (rt) => rt.value === cereriType
                )}
                placeholder="Request Type"
              />
            </div>
          </div>
        </div>
        <ProgressBar visible={loading} barColor="var(--primary)" borderColor="var(--primary)" />
        <div className={styles.chartContainer}>
          <Line data={data} />
        </div>
      </main>
    </div>
  );
}

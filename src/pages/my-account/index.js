import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import { LayoutTwo } from "../../components/Layout";
import { BreadcrumbOne } from "../../components/Breadcrumb";

import Cookies from 'universal-cookie';



function pad (str, max) {
  str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
}

const MyAccount = () => {

  return (
    <>aas</>
  );
};

export default MyAccount;

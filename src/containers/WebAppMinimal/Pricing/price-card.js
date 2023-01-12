//import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import Text from "common/components/Text";
import React from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { PriceColumn } from "./pricing.style";
// import { openModal, closeModal } from "@redq/reuse-modal";
// import LoginModal from "../LoginModal";
// import PriceCardModal from "../PriceCardModal/index";
// import Form from "../contactform";
import { useState } from "react";
import Button from "common/components/Button";
import Modal from "react-bootstrap/Modal";
// import { BsGrid } from "react-icons/bs";

import { miscellaneousTool, socialServiceTool, marketingTool, businessTool, writtingTool, allServiceTool } from "../../../common/data/sevices/index";

import {Card} from "./card";

const PriceCard = ({ priceTable, isMonthly, ...rest }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <PriceColumn
      className={
        priceTable.isActive
          ? "active animate__animated animate__fadeInUp"
          : "animate__animated animate__fadeInUp"
      }
      {...rest}
    >
      <div
        style={
          priceTable.title == "Ultimate Plan" || priceTable.title == "VIP Plan"
            ? { filter: "blur(5px)" }
            : {}
        }
      >
        <Heading
          content={`${priceTable.currencySymbol}${
            isMonthly ? priceTable.price.monthly : priceTable.price.annual
          }`}
        />
        <Heading as="h5" content={priceTable.title} />
        <Text content={priceTable.desc} />
        <figure>
          <Image src={priceTable.icon?.src} alt={priceTable.title} />
        </figure>
        <a
          href={
            priceTable.title == "Ultimate Plan" ||
            priceTable.title == "VIP Plan"
              ? "/"
              : "#"
          }
          target={
            priceTable.title == "Ultimate Plan" ||
            priceTable.title == "VIP Plan"
              ? ""
              : "_blank"
          }
        >
          <Button
            disabled={
              priceTable.title == "Ultimate Plan" ||
              priceTable.title == "VIP Plan"
                ? true
                : false
            }
            title={priceTable.button.label}
          />
        </a>
        <div>
          <p
            style={{ margin: "10px" }}
            onClick={
              priceTable.title == "Ultimate Plan" ||
              priceTable.title == "VIP Plan"
                ? handleClose
                : handleShow
            }
          >
            {priceTable.details.label}{" "}
            <Icon size={20} icon={ic_keyboard_arrow_right} />
          </p>
        </div>

        {/* dialogClassName="modal-90w" */}
        <Modal
          show={show}
          size="xl"
          onHide={handleClose}
          style={{ marginTop: "100px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{`${priceTable.title} includes ${
              priceTable.title == "Starter Plan" ? "37 Ai Tools " : " 71 Ai Tools "
            }`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <h6>{priceTable.desc}</h6>
            <h6>{`${priceTable.currencySymbol}${
              isMonthly ? priceTable.price.monthly : priceTable.price.annual
            }`}</h6> */}

            {/* <div style={{ display: "flex" }}>
              <BsGrid style={{ marginTop: "2px" }} />
              <h6 style={{ marginLeft: "2px", fontWeight: "bold" }}>
                Services
              </h6>
            </div> */}

            <div className="ml-5">
              <div className="ml-5 row">
                {socialServiceTool.map((item) => {
                  return (
                    <div className="col-6 col-lg-4 col-md-4 col-sm-4">
                      <Card
                        index={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="ml-5 row">
                {marketingTool.map((item) => {
                  return (
                    <div className="col-6 col-lg-4 col-md-4 col-sm-4">
                      <Card
                        index={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  );
                })}
              </div>
              {priceTable.title == "Premium Plan" ? (
                <>
                  <div className="ml-5 row">
                {allServiceTool.map((item) => {
                  return (
                    <div className="col-6 col-lg-4 col-md-4 col-sm-4">
                      <Card
                        index={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  );
                })}
              </div>
                  {/* <div className="ml-5 row">
                {writtingTool.map((item) => {
                  return (
                    <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                      <Card
                        index={item.id}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  );
                })}
              </div> */}
                  {/* <div className="ml-5 row">
                {miscellaneousTool.map((item) => {
                  return (
                    // <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                    //   <Card
                    //     index={item.id}
                    //     icon={item.icon}
                    //     title={item.title}
                    //     desc={item.desc}
                    //   />
                    // </div>
                  );
                })}
              </div> */}
                  {/* <div className="ml-5 row">
                {allServiceTool.map((item) => {
                  return (
                    // <div className="col-3 col-lg-3 col-md-3 col-sm-3">
                    //   <Card
                    //     index={item.id}
                    //     icon={item.icon}
                    //     title={item.title}
                    //     desc={item.desc}
                    //   />
                    // </div>
                  );
                })}
              </div> */}
                </>
              ) : (
                <></>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>

      <Text
        style={{ fontWeight: "bold", fontSize: "20px" }}
        content={
          priceTable.title == "Ultimate Plan" || priceTable.title == "VIP Plan"
            ? "Coming Soon!"
            : ""
        }
      />
    </PriceColumn>
  );
};

export default PriceCard;

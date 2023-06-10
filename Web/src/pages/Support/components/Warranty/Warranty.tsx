import React, { useState } from "react";
import "./Warranty.scss";
import warranty from "data/Support/warrantyContext";
import Img from "library/Images/Image";
import { IMAGES } from "constants/index";
const Warranty: React.FC = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = warranty.length;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // const currentItems = warranty.slice(indexOfFirstItem, indexOfLastItem);

  // currentItems.map((item) => {
  //   return { item };
  // });

  return (
    <div className="warranty">
      <h1>
        <Img width={100} img={IMAGES.COMPANY_LOGOS.WARRANTY_LOGO} />
        <p>Wizmax Global Warranty Policy</p>
      </h1>
      {warranty.map((context) => {
        return (
          <div className="warranty-container">
            {context.page.map((body) => {
              return (
                <div className="warranty-page">
                  {body.title ? (
                    <p className="title">{body.title}</p>
                  ) : (
                    <p className="warning-title">{body.warningTitle}</p>
                  )}
                  <p className="content">
                    {body.content} <span>{body.warningText}</span>
                  </p>
                  <p className="additional-content">{body.additionalContent}</p>

                  {body.bullets?.map((bulletText: any) => {
                    return (
                      <p className="bullets">
                        {bulletText.text ? <li>{bulletText.text}</li> : ""}
                      </p>
                    );
                  })}
                  {body.table.length !== 0 ? (
                    <div className="table">
                      <div className="headers">
                        <h3 className="header-products">Products</h3>
                        <h3 className="header-warranty">Warranty</h3>
                      </div>

                      {body.table?.map((tableData) => {
                        return (
                          <div className="table-data">
                            <div className="table-data-title">
                              <p>{tableData.title}</p>
                            </div>

                            <div className="table-data-description">
                              <p>{tableData.description}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Warranty;

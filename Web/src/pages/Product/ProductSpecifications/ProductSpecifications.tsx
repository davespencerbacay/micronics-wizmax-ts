import useResponsive from "hooks/useResponsive";
import React from "react";
import { Table } from "reactstrap";
import "./ProductSpecifications.scss";

interface IProductSpecifications {
  specifications: any;
}

const ProductSpecifications: React.FC<IProductSpecifications> = (props) => {
  const isMobile = useResponsive("mobile");
  return (
    <React.Fragment>
      {isMobile ? (
        <div className="specifications-container">
          <div className="specifications-table">
            {props.specifications.map((specs: any) => {
              if (specs.subname && specs.subdescription !== null) {
                return (
                  <div className="specifications-body">
                    <h2>{specs.name}</h2>
                    <div className="subspecs-container">
                      {specs.subname && (
                        <div className="subname-container">
                          {specs.subname.map((name: any) => {
                            return (
                              <p
                                className="specs-subname"
                                style={{
                                  fontSize: name.length > 15 ? "1.3rem" : "",
                                }}
                              >
                                {name}
                              </p>
                            );
                          })}
                        </div>
                      )}
                      {specs.subdescription && (
                        <div className="subdescription-container">
                          {specs.subdescription.map((description: any) => {
                            return (
                              <p
                                className="specs-subdescription"
                                style={{
                                  fontSize:
                                    description.length > 20 ? "1.3rem" : "",
                                }}
                              >
                                {description}
                              </p>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="specifications-body">
                    <h2>{specs.name}</h2>
                    <p>{specs.description}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <div className="specifications-container">
          <Table className="specifications-table">
            <tbody>
              {props.specifications.map((specs: any) => {
                if (specs.subname && specs.subdescription !== null) {
                  return (
                    <tr>
                      <th className="specs-name">{specs.name}</th>
                      <td>
                        {specs.subname && (
                          <div className="subname-container">
                            {specs.subname.map((name: any) => {
                              return <th className="specs-subname">{name}</th>;
                            })}
                          </div>
                        )}
                      </td>
                      <td>
                        {specs.subdescription && (
                          <div className="subdescription-container">
                            {specs.subdescription.map((description: any) => {
                              return (
                                <td className="specs-subdescription">
                                  {description}
                                </td>
                              );
                            })}
                          </div>
                        )}
                      </td>

                      <td className="specs-description">{specs.description}</td>
                    </tr>
                  );
                } else {
                  return (
                    <tr>
                      <th className="specs-name">{specs.name}</th>
                      <td></td>
                      <td></td>
                      <td className="specs-description">{specs.description}</td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductSpecifications;

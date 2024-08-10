import "./dashboard.css";
import HeadData from "./utils/dashboardheaddata";
import TopAgent from "./utils/topAgentsBoxData";
import LatestSales from "./utils/latestSalesData";
import PropertyReferral from "./utils/propertyReferralsData";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import { IoIosArrowRoundUp } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import BtnPropertyList from "../../component/propertylistBtns/ButtonPropertyList";
import propertyList from "./utils/propertyListData";
import Properties from "../../component/properties/Properties";
import { BarChartOne } from "../../component/charts/BarChartOne";
import CustomersChatOne from "../../assets/customersChat1.png"
import CustomersChatTwo from "../../assets/customersChat2.png"
const Dashboard = () => {
  const [cardData, setcardData] = useState(HeadData);
  const [agent, setAgent] = useState(TopAgent);
  const [sales, setSales] = useState(LatestSales);
  const [referral, setReferral] = useState(PropertyReferral);
  const [property, setProperty] = useState(propertyList);
  const [value, setValue] = useState(0);
  return (
    <>
      <section className="dashboard-container">
        <h4 className="dashboard-title">Dashboard</h4>

        {/* head cards */}
        <section>
          <div className="dashboard-head">
            {cardData.map((item) => {
              return (
                <div key={item.id} className="dashboard-head-cards">
                  <div className="title-result">
                    <p className="card-title">{item.title}</p>
                    <p className="result">{item.result}</p>
                  </div>
                  <div className="chart">
                    <img src={item.chart} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* head cards end */}

        {/* dashboard grid */}
        <section>
          <div className="dashboard-grid-container">
            {/* total revenue */}
            <article className="total-revenue-span-2 grid-item">
              <div className="total-revenue-head">
                <div className="total-revenue-title-container">
                  <p className="total-revenue-title">Total Revenue</p>
                  <div className="total-revenue-icon-container-mobile">
                    <SlOptions className="total-revenue-icon" />
                  </div>
                </div>
                <div className="total-revenue-head-right">
                  <div className="last-month">
                    <span className="eclipse-1"></span>
                    <p>Last Month</p>
                  </div>
                  <div className="running-month">
                    <span className="eclipse-2"></span>
                    <p>Running Month</p>
                  </div>
                  <div className="total-revenue-icon-container-desktop">
                    <SlOptions className="total-revenue-icon" />
                  </div>
                </div>
              </div>
              <div className="total-revenue-content">
                <div className="revenue">
                  <h4>$236,535</h4>
                </div>
                <div className="revenue-percentage">
                  <div className="percentag-rise">
                    <IoIosArrowRoundUp className="arrow-up" />
                  </div>
                  <div className="percentage-month">
                    <span className="percentage">0.8%</span>
                    <span className="month">Than Last Month</span>
                  </div>
                </div>
              </div>

              <div className="chart-container">
                <BarChartOne />
              </div>
            </article>
            {/* total revenue end*/}

            {/* property referrals */}
            <article className="property-referrals grid-item">
              <div className="property-referrals-head">
                <p className="property-referrals-title">Property Referrals</p>
              </div>

              <div className="property-referrals-content">
                {referral.map((refer) => {
                  return (
                    <div className="refferals" key={refer.id}>
                      <label htmlFor="" className="progress-label-container">
                        <span className="referral">{refer.referral}</span>
                        <span className="number-of-referral">
                          {refer.referralResult}
                        </span>
                      </label>
                      {refer.progressBar}
                    </div>
                  );
                })}
              </div>
            </article>
            {/* property referrals end*/}

            {/* top agent */}
            <article className="top-agent grid-item">
              <div className="top-agent-head">
                <p className="top-agent-title">Top Agent</p>
                <div className="view-all-btn-container">
                  <button className="view-all-btn">View All</button>
                </div>
              </div>

              <div className="top-agent-agents-container">
                {agent.map((agent) => {
                  return (
                    <div key={agent.id} className="top-agent-agents-contents">
                      <div className="agent-image-name-role-container">
                        <img src={agent.image} alt="agent avarter" />
                        <div className="agent-name-role">
                          <p className="agent-name">{agent.name}</p>
                          <p className="agent-role">{agent.role}</p>
                        </div>
                      </div>
                      <img
                        className="option-menu-icon"
                        src={agent.optionIcon}
                        alt="option menu icon"
                      />
                    </div>
                  );
                })}
              </div>
            </article>
            {/* top agent end*/}

            {/* customers */}
            <article className="customers grid-item">
              <div className="customers-head">
                <h4 className="customers-title">Customers</h4>
                <div className="customers-option-menu-container">
                  <SlOptionsVertical className="option-menu-icon" />
                </div>
              </div>

              <div className="customers-contents">
                <div className="total-customers-container">
                  <div className="total-customers">
                    <div className="total-customers-content">
                      <p>Total Customers</p>
                      <div className="total-customers-figure">
                        <h4>5007k</h4>
                        <span>21.77%</span>
                      </div>
                    </div>
                  </div>
                  <div className="total-customers-graph">
                    <img src={CustomersChatOne} alt="" />
                  </div>
                </div>
                <hr />
                <div className="new-customers-container">
                  <div className="new-customers">
                    <div className="new-customers-content">
                      <p>New Customers This Month</p>
                      <div className="new-customers-figure">
                        <h4>12k</h4>
                        <span>21.77%</span>
                      </div>
                    </div>
                  </div>
                  <div className="new-customers-graph">
                    <img src={CustomersChatTwo} alt="" />
                  </div>
                </div>
              </div>
            </article>
            {/* customers end*/}

            {/* latest sales */}
            <article className="latest-sales grid-item">
              <div className="latest-sales-head">
                <p className="latest-sales-title">Latest Sales</p>
                <div className="arrow-right-container">
                  <GoArrowRight className="arrow-right-icon" />
                </div>
              </div>

              <div className="latest-sales-sales-container">
                {sales.map((sale) => {
                  return (
                    <div key={sale.id} className="latest-sales-contents">
                      <div className="apartment-name-locaion-container">
                        <img src={sale.image} alt="agent" />
                        <div className="apartment-name-location">
                          <p className="agartment-name">{sale.name}</p>
                          <p className="location">{sale.location}</p>
                        </div>
                      </div>
                      <div className="price-cotainer">
                        <p className="price">{sale.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
            {/* latest sales end*/}
          </div>
        </section>
        {/* dashboard grid end */}

        {/* property list */}
        <section>
          <div className="property-list-container">
            <div className="property-list-head">
              <h4 className="property-list-title">Property List</h4>
              <div className="property-list-cartigories-main-container">
                <BtnPropertyList
                  propertyList={property}
                  value={value}
                  setValue={setValue}
                />
              </div>
            </div>

            <div className="property-list-main">
              <Properties propertyList={property} value={value} />
            </div>
          </div>
        </section>
        {/* property list end */}
      </section>
    </>
  );
};
export default Dashboard;

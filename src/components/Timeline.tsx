import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import sumoIcon from '../assets/images/sumoicon.png';
import cbIcon from '../assets/images/cbicon.jpg';
import kekaIcon from '../assets/images/kekaicon.jpg';
import tezoIcon from '../assets/images/tezoicon.jpg';
import shoptypeIcon from '../assets/images/shoptypeicon.jpg';

import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2022 - Apr 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.sumo-digital.com/" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Senior Programmer</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>Sumo-Digital Ltd</u>, Pune, India & Sheffield, UK</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={sumoIcon} />
            <p data-pm-slice="1 1 []"><strong>Implemented and Refactored Backend systems &amp; tools</strong> for two unannounced AAA cross-platform games, focusing on Ranked PVP/PVE systems, ELO/Rating calculations, matchmaking, rewards, telemetry, and LiveOps tooling.</p>
            <p><br /></p>
            <p><strong>Unannounced Sports Game (2K Games):</strong></p>
            <ul>
              <li>
                <p><strong>Designed and Developed Backend services/APIs</strong> for Ranked Mode: ELO/Rating calculations, reward distribution (daily/monthly/seasonal), and player state management.</p>
              </li>
              <li>
                <p>Hooked up various implemented systems with the game&apos;s <strong>Client and Server flows</strong> <strong>(C++)</strong>.</p>
              </li>
              <li>
                <p><strong>Developed</strong> currency, store, and wallet related <strong>services</strong>.</p>
              </li>
              <li>
                <p><strong>Ported legacy matchmaking ELO system</strong> on the client and server.</p>
              </li>
              <li>
                <p><strong>Implemented debugging cheats/APIs</strong> for modifying player state and match outcomes.</p>
              </li>
            </ul>
            <p><br /></p>
            <p><strong>Unannounced Platformer/Co-op/Team Game (Tencent Games):</strong></p>
            <ul>
              <li>
                <p><strong>Designed and Implemented ELO/Rating services</strong> for multiple game modes (Solo, FFA, Team), with layered, tweakable player state structures.</p>
              </li>
              <li>
                <p><strong>Developed and integrated Telemetry custom and event driven services&nbsp;</strong>using <strong>Redis&nbsp;</strong>and Player KV Data.</p>
              </li>
              <li>
                <p><strong>Upgraded matchmaking&nbsp;</strong>to support <strong>cross-platform&nbsp;</strong>pools.</p>
              </li>
              <li>
                <p><strong>Built LiveOps Tools&nbsp;</strong>for syncing player data related templates/schemas and versioned definitions.</p>
              </li>
            </ul>
            <p><br /></p>
            <p><strong>Additional Contributions:</strong></p>
            <ul>
              <li>
                <p><strong>Integrated above services with a Live Data System</strong> for real-time parameter tuning alongside <strong>extensive test coverage</strong>.</p>
              </li>
              <li>
                <p><strong>Created Debug UI elements and systems&nbsp;</strong>for Ratings and Telemetry in <strong>Unreal Engine</strong>.</p>
              </li>
              <li>
                <p><strong>Implemented live/title data versioning&nbsp;</strong>based on platform, region, and sandbox.</p>
              </li>
              <li>
                <p>Worked with the DevOps team to <strong>develop deployment pipelines&nbsp;</strong>for cloud services.</p>
              </li>
              <li>
                <p><strong>Investigated&nbsp;</strong>various libraries, platforms and related software before implementation/integration.</p>
              </li>
            </ul>
            <p><br /></p>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>GoLang</strong>,<strong>&nbsp;.Net Core (C#)</strong>, <strong>C++</strong>, Python, <strong>Unreal Engine</strong>, ImGUI, <strong>NodeJs</strong>, <strong>Redis</strong>, Google Cloud, <strong>Perforce</strong>, <strong>Azure DevOps</strong>, <strong>Docker&nbsp;</strong>and<strong>,</strong> Proprietary Tools, Cloud Services/DB &amp; Engines</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sept 2020 - Oct 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.shoptype.com/" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Senior/Lead Engineer - Shoptype</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>Coffeebeans Consulting LLP</u>, Bangalore, India</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={shoptypeIcon} />
            <ul data-pm-slice="3 3 []">
              <li>
                <p><strong>Led feature development&nbsp;</strong>across <strong>Frontend&nbsp;</strong>and <strong>Backend&nbsp;</strong>on a community-powered network marketplace enabling shopping, content sharing, and revenue generation for various user groups (shoppers, influencers, brands, etc.).&nbsp;</p>
              </li>
            </ul>
            <ul>
              <li>
                <p><strong>Handled team management</strong>, and <strong>planning</strong> of new features with timelines based on research.&nbsp;</p>
              </li>
              <li>
                <p><strong>Hands-on experience</strong> with microservices, third-party integrations (Shopify, WooCommerce, <strong>Widget development and integration</strong>), CRON jobs, and Fintech components (Ledgers, Wallets, Payment Gateways), <strong>performance optimizations&nbsp;</strong>and DevOps.&nbsp;</p>
              </li>
            </ul>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>GoLang</strong>, <strong>Apache Kafka</strong>, Neo4j, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Typescript</strong>, <strong>GraphQL</strong>,<strong>&nbsp;</strong>Kubernetes, <strong>Jenkins</strong>, <strong>NodeJs</strong>, Javascript, Elastic Email &amp; Search, <strong>Git</strong>, JIRA, <strong>AWS</strong>, <strong>Docker</strong>, Kubernetes, Jenkins, <strong>HTML5, CSS</strong>, SEO</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2019 - Aug 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >

            <a href="https://www.unibiz.com/products/r2.html" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Senior Consultant - R4 - Unibiz Software Solutions Pvt Ltd</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>Coffeebeans Consulting LLP</u>, Bangalore, India</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={cbIcon} />
            <ul data-pm-slice="3 3 []">
              <li>
                <p><strong>Developed and maintained</strong> a next-gen, fully configurable Rental Equipment Management Software.&nbsp;</p>
              </li>
              <li>
                <p><strong>Led</strong> performance optimizations, code refactoring, and <strong>implementation of best practices&nbsp;</strong>across the application &amp; team.&nbsp;</p>
              </li>
              <li>
                <p><strong>Worked on both Frontend and Backend microservices</strong>.</p>
              </li>
              <li>
                <p><strong>Conducted deep analysis&nbsp;</strong>to identify and <strong>resolve bottlenecks</strong>, memory leaks, and inefficient code, <strong>resulting in 150-200% faster Backend API and Frontend performance</strong>.</p>
              </li>
            </ul>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>.NET Core (C#)</strong>, <strong>React</strong>, <strong>Redux&nbsp;</strong>(Sagas), NGINX, <strong>NodeJS</strong>, <strong>Javscript</strong>, <strong>Typescript</strong>, <strong>MongoDB</strong>, <strong>Redis</strong>, Docker, <strong>Kubernetes</strong>, Git, JIRA, Visual Studio Profiler, JMeter, Jaeger Tracing</p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2019 - Nov 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.tezo.com/" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Senior Engineer - Travelogixx</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>Cox and Kings Ltd, Mumbai & Technovert/Tezo</u>, Hyderabad</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={tezoIcon} />
            <ul data-pm-slice="3 3 []">
              <li>
                <p><strong>Developed Web Experience Management application</strong> for Cox &amp; Kings Ltd, enabling reservations for flights, trains, buses, and hotels/packages.&nbsp;</p>
              </li>
              <li>
                <p><strong>Integration of Microsoft Dynamics CRM</strong> to handle leads, customer interactions and reservations management</p>
              </li>
              <li>
                <p><strong>Worked with Microservice</strong>s built around the Helix Architecture (<strong>Sitecore</strong>) and various Frontend tasks and optimizations.</p>
              </li>
              <li>
                <p><strong>Coordinated cross-team communication</strong> and <strong>task management</strong>/breakdown<strong>.</strong></p>
              </li>
            </ul>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>.NET (C#),</strong> WebAPI, <strong>Redis</strong>, <strong>ASP.NET MVC 5, Sitecore, MySQL, AngularJS, Typescript</strong>, <strong>Javascript</strong>, jQuery, <strong>HTML5, CSS,&nbsp;</strong>IIS, <strong>Git</strong></p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2018 - May 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.keka.com/" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Full Stack Developer - Keka</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>KEKA/Technovert/Tezo</u>, Hyderabad</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={kekaIcon} />
            <ul data-pm-slice="3 3 []">
              <li>
                <p><strong>Led the implementation of a new responsive Angular 7 based Frontend codebase for Keka</strong> (A Human Resource Management and Payroll software), including customization features like themes and widgets.&nbsp;</p>
              </li>
              <li>
                <p><strong>Developed key modules&nbsp;</strong>for the Engage feature (timeline, announcements, polls, and articles).</p>
              </li>
              <li>
                <p><strong>Migrated the Performance Management System</strong> from <strong>AngularJS/JavaScript</strong> to a modern stack.</p>
              </li>
            </ul>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>.NET (C#), WebAPI, MySQL, Azure CosmosDB, AngularJS, Angular 7</strong>, <strong>Typescript, HTML5, CSS</strong>, SASS, <strong>Git</strong></p>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2017 - Nov 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <a href="https://www.keka.com/" target="_blank" rel="noreferrer">
              <h3 className="vertical-timeline-element-title">Full Stack Developer - KekaHire</h3>
              <h4 className="vertical-timeline-element-subtitle"><u>Technovert/Tezo</u>, Hyderabad</h4>
            </a>
            <img className="vertical-timeline-element--image" alt="" src={kekaIcon} />
            <ul data-pm-slice="3 3 []">
              <li>
                <p><strong>Led Development&nbsp;</strong>of a comprehensive Applicant Tracking System from scratch, <strong>migrating a legacy AngularJS MVP to Angular 4 (Typescript) with a complete Frontend and Backend overhaul</strong> for scalability and maintainability.&nbsp;</p>
              </li>
            </ul>
            <ul>
              <li>
                <p><strong>Implemented key features&nbsp;</strong>such as resume parsing, CRON jobs, advanced role management, LinkedIn integration, interview scheduling, and email templating.&nbsp;</p>
              </li>
              <li>
                <p><strong>Stepped up as the Lead when needed</strong> and handled DevOps tasks.</p>
              </li>
            </ul>
            <p className="vertical-timeline-element--techused"><strong>Tech Used:</strong> <strong>.NET (C#), WebAPI, ASP.NET MVC 5, MySQL, Angular 4&ndash;7, Azure CosmosDB, HTML5, CSS&nbsp;</strong>(SASS/SCSS), Bootstrap 4, <strong>TypeScript</strong>, jQuery, <strong>Git</strong>, IIS</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
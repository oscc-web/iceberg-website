import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>开源IP</>,
    imageUrl: "img/getting-started.svg",
    description: (
      <>
      构建安全芯片IP组件、通用处理和接口IP等核心IP组件库，丰富开源RISC-V生态，支撑高性能通用处理器及智能处理器设计，支持芯片敏捷设计平台实现规模化量产和培养芯片设计人才。
      </>
    ),
    pageUrl: "docs/project/ip/index"
  },
  {
    title: <>开源EDA</>,
    imageUrl: "img/sdks-samples.svg",
    description: (
      <>
      深入研究芯片设计流程中涉及的关键EDA工具，分析工具间的数据交互方式。结合问题拆解，设计对应数据结构，制定严格细致的工具间和工具内接口，弱化工具本身的EDA属性，形成开源EDA基础框架。
      </>
    ),
    pageUrl: "docs/project/eda/index"
  },
  {
    title: <>云平台</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
      构建形成芯片敏捷设计云平台，集成开源智能EDA工具、开源IP、开源基础软件等，支持用户快速定制，支撑RISC-V处理器核应用规模超100亿，在全球开源共享的RISC-V新生态中发挥关键核心作用。
      </>
    ),
    pageUrl: "docs/project/cloud/index"
  },
  {
    title: <>一生一芯</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
        通过理论与实践并重的教学机制来降低处理器芯片设计门槛，让更多的学生能够全流程的参与到处理器芯片设计的每一个环节中，从而为我国培养计算机系统领域全栈式拔尖人才。
      </>
    ),
    pageUrl: "docs/project/ysyx/index"
  },
];

function Feature({imageUrl, title, description, pageUrl}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more"><a href={pageUrl}>更多内容 →</a></p>
    </div>

  );
}

const iframe = "<iframe src='https://d3metalab.substack.com/embed’ width='480' height='320' style='border:1px solid #EEE; background:white;' frameborder='0' scrolling='no'></iframe>"

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs.">
      <header className={classnames("hero hero--secondary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button cta-btn button--outline button--primary button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/started/index")}>
              <i className="feather icon-arrow-right"></i> 快速上手
            </Link>
            <Link
              className={classnames(
                "button cta-btn button--outline button--success button--lg",
                styles.getStarted,
              )}
              to={useBaseUrl("docs/project/index")}>
              <i className="feather icon-github"></i> 项目列表
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

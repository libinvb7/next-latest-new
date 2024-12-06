

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="lg:w-2/5 flex flex-col">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`px-4 py-5 mb-3 bg-white tab-shadow rounded-lg  ${
            index === activeTab ? "btn btn-primary" : ""
          }`}
          // onClick={() => setActiveTab(index)}
        >
          <div className={`flex gap-3 ${index === activeTab ? "active" : ""}`}>
            <div
              className={`${
                index === activeTab ? "border border-l-2 border-white" : ""
              }`}
            ></div>
            <h2
              className={`font-bold text-2xl ${
                index === activeTab ? "text-white" : "text-[#115991]"
              }`}
            >
              {tab.title}
            </h2>
          </div>
          {index === activeTab ? (
            <p className="text-lg font-normal py-3">{tab.subTitle}</p>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

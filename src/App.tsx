import React, { useState } from "react";

import Accordeon from "./components/Organism/Accordeon/accordeon";
import RctsComptBtn from "./components/Atom/button/button";
import Radio from "./components/Atom/radio/radio";
import Checkbox from "./components/Atom/checkbox/checkbox";
import Alert from "./components/Molecule/alert/alert";
import Loader from "./components/Atom/loader/loader";
import Toggle from "./components/Atom/toggle/toggle";
import Card from "./components/Molecule/card/card";
import Breadcrumb from "./components/Molecule/breadcrumb/breadcrumb";
import RctsComptSelect from "./components/Atom/select/select";
import RctsComptInput from "./components/Atom/input/input";
import Tabs from "./components/Organism/tabs/tabs";
import CustomTable from "./components/Organism/table/table";
import Carousel from "./components/Organism/carousel/carousel";
import "./App.css";
const App: React.FC = () => {
  // State variables
  const [selectedRadioOption, setSelectedRadioOption] = useState<string>("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);
  const [alert, setAlert] = useState<{
    type: "success" | "danger" | "info";
    message: string;
  } | null>(null);
  const [isToggleOn, setIsToggleOn] = useState<boolean>(false);

  // Sample data for CustomTable
  const tableData = {
    "0-0": { content: "Row1-Col1" },
    "0-1": { content: "Row1-Col2" },
    "0-2": { content: "Row1-Col3" },
    "1-0": { content: "Row2-Col1" },
    "1-1": { content: "Row2-Col2" },
    "1-2": { content: "Row2-Col3" },
    "2-0": { content: "Row3-Col1" },
    "2-1": { content: "Row3-Col2" },
    "2-2": { content: "Row3-Col3" },
    "3-0": { content: "Row4-Col1" },
    "3-1": { content: "Row4-Col2" },
    "3-2": { content: "Row4-Col3" },
    "4-0": { content: "Row5-Col1" },
    "4-1": { content: "Row5-Col2" },
    "4-2": { content: "Row5-Col3" },
  };

  const columnNames = ["Column 1", "Column 2", "Column 3"];
  const rowNames = ["Row 1", "Row 2", "Row 3", "Row 4", "Row 5"];

  // Sample slides for Carousel
  const slides = [
    {
      content: <h2>Slide 1</h2>,
      backgroundUrl: "https://via.placeholder.com/600x200?text=Slide+1",
    },
    {
      content: <h2>Slide 2</h2>,
      backgroundUrl: "https://via.placeholder.com/600x200?text=Slide+2",
    },
    {
      content: <h2>Slide 3</h2>,
      backgroundUrl: "https://via.placeholder.com/600x200?text=Slide+3",
    },
  ];

  // Sample data for Breadcrumb
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Electronics", href: "/products/electronics" },
    { label: "Laptops" }, // Current page, no link
  ];

  // Sample data for Tabs
  const tabsData = [
    {
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <div>Content for Tab 3</div>,
    },
  ];

  // Handler functions
  const handleRadioChange = (value: string) => {
    setSelectedRadioOption(value);
    console.log("Selected radio option:", value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  const showAlert = (type: "success" | "danger" | "info", message: string) => {
    setAlert({ type, message });
  };

  const handleAlertClose = () => {
    setAlert(null);
  };

  const handleToggleChange = (checked: boolean) => {
    setIsToggleOn(checked);
    console.log("Toggle is now", checked ? "On" : "Off");
  };

  return (
    <div className="grid-container">
            {/* Personnalisation des props */}
            <div className="grid-item-large">
              <div style={{ padding: "20px" }}>
                  <Accordeon
                  name="exampleAccordeon"
                  text="accordeon"
                  data={[
                      { title: "Optandi citroque si temporis dispexerint.", body: "Et et in ac pro patriam olim amore subire cum et patriam qui facitis amore tela cum vosmet dimicatione me.", value: "value1" },
                      { title: "Optandi citroque si temporis dispexerint.", body: "Et et in ac pro patriam olim amore subire cum et patriam qui facitis amore tela cum vosmet dimicatione me.", value: "value2" },
                      { title: "tOptandi citroque si temporis dispexerint.", body: "Et et in ac pro patriam olim amore subire cum et patriam qui facitis amore tela cum vosmet dimicatione me.", value: "value3" },
                  ]}
                  onChange={(indexClick, openIndexes) => {
                    console.log("Section Cliquée : " + indexClick);
                    console.log("Section Ouvert : " + openIndexes);
                }}
                  withLabel={true}
                  multiple={true}
                  fontSize="fontSizeMedium"
                  border
                  size="large"
                  />
              </div>
            </div>
      {/* Breadcrumb */}
      <div className="grid-item">
        <Breadcrumb
          items={breadcrumbItems}
          separator=">"
          className="breadcrumb"
        />
      </div>

      <div className="grid-item">
        <Card
          title="Sample Card"
          description="This is a sample card description."
          imageUrl="https://via.placeholder.com/300x150"
          imageAlt="Sample Image"
          actions={
            <RctsComptBtn
              text="Learn More"
              size="small"
              onClick={() => alert("Card button clicked!")}
            />
          }
        />
      </div>

      {/* Existing components */}
      <div className="grid-item">
        <RctsComptBtn
          text="Show Alert"
          size="medium"
          onClick={() => showAlert("info", "This is an informational alert!")}
        />
        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={handleAlertClose}
            autoClose={false}
            size="medium"
            buttonText="Close"
          />
        )}
      </div>

      {/* Tabs */}
      <div className="grid-item-large">
        <Tabs
          tabs={tabsData}
          defaultActiveTab={0}
          tabBorderColor="#ccc"
          tabBorderWidth="1px"
          tabBorderRadius="5px"
          tabFontFamily="Arial"
          tabFontSize="16px"
        />
      </div>

      <div className="grid-item">
        <RctsComptInput
          type="text"
          withLabel={true}
          text="Your Name"
          display="above"
          fontSize="fontSizeMedium"
          id="nameInput"
          name="name"
          required
          size="medium"
        />
      </div>

      <div className="grid-item">
        <RctsComptSelect
          id="carSelect"
          name="car"
          data={[
            {
              group: "Renault",
              options: [
                { value: "clio2", label: "Clio 2" },
                { value: "megane3", label: "Megane 3" },
              ],
            },
            {
              group: "Peugeot",
              options: [
                { value: "206", label: "206" },
                { value: "5008", label: "5008" },
              ],
            },
            { value: "autre", label: "Autre" },
          ]}
          withLabel={true}
          text="Select a Car"
          size="medium"
          display="above"
          multiple
          onChange={(e) => console.log("Selected car:", e.target.value)}
        />
      </div>

      <div className="grid-item">
        <Loader
          size={40}
          color="#7e17d3"
          speed={1}
          text="Connection Satelite en cours..."
          text-color="#7e17d3"
        />
      </div>

      <div className="grid-item">
        <Radio
          options={["Male", "Female", "Other"]}
          name="gender"
          onChange={handleRadioChange}
        />
      </div>

      <div className="grid-item">
        <Checkbox
          name="hobbies"
          data={[
            { value: "reading", label: "Reading" },
            { value: "traveling", label: "Traveling" },
            { value: "cooking", label: "Cooking" },
          ]}
          onChange={handleCheckboxChange}
          text="Select Hobbies"
          display="vertical"
          size="medium"
        />
      </div>

      <div className="grid-item">
        <Toggle
          isOn={isToggleOn}
          onToggle={handleToggleChange}
          onColor="#6B238E"
          offColor="gray"
          size="medium"
        />
      </div>

      <div className="grid-item-large">
        <Carousel
          slides={slides}
          navigationButtons={true}
          autoplay={true}
          autoplayInterval={5000}
          borderRadius="8px"
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
          arrowColor="#333"
          paginationColor="#333"
          slideAnimationDuration="0.5s"
          enableSlidingAnimation={true}
        />
      </div>

      <div className="grid-item-large">
        <CustomTable
          rows={5}
          columns={3}
          data={tableData}
          columnNames={columnNames}
          rowNames={rowNames}
          borderColor="#ddd"
          borderWidth="1px"
          enableSorting={true}
          enablePagination={false}
          enableSelection={true}
        />
      </div>
    </div>
  );
};

export default App;

import Sidebar from "./components/Sidebar";


function App() {

  const menuData = [
    {
      key: "home",
      name: "Home",
      children: null,
    },
    {
      key: "about",
      name: "About",
      children: [
        {
          key: "team",
          name: "Team",
          children: [
            { key: "leadership", name: "Leadership", children: null },
            { key: "staff", name: "Staff", children: null },
          ],
        },
        { key: "history", name: "History", children: null },
      ],
    },
    {
      key: "services",
      name: "Services",
      children: [
        {
          key: "web",
          name: "Web Development",
          children: null,
        },
        {
          key: "mobile",
          name: "Mobile Development",
          children: [
            { key: "ios", name: "iOS", children: null },
          
          ],
        },
      ],
    },
    {
      key: "contact",
      name: "Contact",
      children: [
        { key: "ioss1", name: "iOS1", children:[ 
          { key: "android1", name: "Android", children: [
            { key: "androidw", name: "Androidf", children: [
            
            ]}
          ] },
        ] },
      ]
    },
    {
      key: "contact",
      name: "Contact",
      children: [
        {
          key: "contact",
          name: "Contact",
          children: [
            { key: "ioss1", name: "iOS1", children:[ 
              { key: "android1", name: "Android", children: [
                { key: "androidw", name: "Androidf", children: [
                
                ]}
              ] },
            ] },
          ]
        },
        { key: "ioss1", name: "iOS1", children:[ 
          { key: "android1", name: "Android", children: [
            { key: "androidw", name: "Androidf", children: [
            
            ]}
          ] },
        ] },
      ]
    },
  ];
  

  


  return (
    <div style={{ display: "flex" }}>
      <aside
        style={{
        width: "250px",
          borderRight: "1px solid #ddd",
          padding: "20px",
          height: "100vh",
          textWrap:"clip",
          whiteSpace: "nowrap",
          overflow:"auto",
        }}
      >
        <Sidebar menu={menuData} />
      </aside>
    </div>
  );
}

export default App;

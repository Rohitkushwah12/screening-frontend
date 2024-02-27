(this["webpackJsonpreact-tailwind-table"]=this["webpackJsonpreact-tailwind-table"]||[]).push([[0],{10:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),c=(a(10),a(5));function l(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var o=a(1);function m(e){let{value:t}=e;const a=t?t.toLowerCase():"unknown";return Object(o.jsx)("span",{className:l("px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm bg-blue-100 text-gray-500"),children:a})}function d(e){let{value:t,column:a,row:r}=e;return Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:Object(o.jsx)("img",{className:"h-10 w-10 rounded-full",src:r.original[a.imgAccessor],alt:""})}),Object(o.jsxs)("div",{className:"ml-4",children:[Object(o.jsx)("div",{className:"text-sm font-medium text-gray-900",children:t}),Object(o.jsx)("div",{className:"text-sm text-gray-500",children:r.original[a.phone]})]})]})}var p=function(e){let{columns:t,data:a}=e;const{getTableProps:r,getTableBodyProps:i,headerGroups:s,prepareRow:n,rows:l}=Object(c.useTable)({columns:t,data:a});return Object(o.jsx)("div",{className:"mt-4 flex flex-col",children:Object(o.jsx)("div",{className:"-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8",children:Object(o.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(o.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(o.jsxs)("table",{...r(),className:"min-w-full divide-y divide-gray-200",children:[Object(o.jsx)("thead",{className:"bg-gray-50",children:s.map((e=>Object(o.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(o.jsx)("th",{scope:"col",className:"group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",...e.getHeaderProps(e),children:Object(o.jsx)("div",{className:"flex items-center justify-between",children:e.render("Header")})})))})))}),Object(o.jsx)("tbody",{...i(),className:"bg-white divide-y divide-gray-200",children:l.map(((e,t)=>(n(e),Object(o.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>Object(o.jsx)("td",{...e.getCellProps(),className:"px-6 py-4 whitespace-nowrap",role:"cell",children:"defaultRenderer"===e.column.Cell.name?Object(o.jsx)("div",{className:"text-sm text-gray-500",children:e.render("Cell")}):e.render("Cell")})))}))))})]})})})})})},h=a(2);var x=function(){const e=i.a.useMemo((()=>[{Header:"PATIENTS",accessor:"patient_name",Cell:d,imgAccessor:"imgUrl",phone:"mobile_number"},{Header:"DATE",accessor:"appointment_date",Cell:e=>{let{value:t}=e;const a=new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"});return Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)(h.a,{className:"h-5 w-5 text-gray-400 mr-1"}),a]})}},{Header:"TIME",accessor:"appointment_time",Cell:e=>{let{value:t}=e;return Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)(h.b,{className:"h-5 w-5 text-gray-400 mr-1"}),t.replace(/(AM|PM)/gi,"")]})}},{Header:"DOCTOR",accessor:"doctor",Cell:e=>{let{row:t}=e;return Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)(h.d,{className:"h-5 w-5 text-yellow-500 mr-1"}),t.original.doctor," "]})}},{Header:"INJURY",accessor:"injury",Cell:m},{Header:"ACTION",accessor:"ACTION",Cell:()=>Object(o.jsx)("div",{className:"flex items-center",children:Object(o.jsx)(h.c,{className:"h-5 w-5 text-gray-500 cursor-pointer"})})}]),[]),t=i.a.useMemo((()=>[{patient_name:"John Doe",mobile_number:"+123-456-7890",appointment_date:"2024-02-26",appointment_time:"10:00 AM",doctor:"Dr. Smith",injury:"Sprained ankle",imgUrl:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"},{patient_name:"Jane Smith",mobile_number:"+987-654-3210",appointment_date:"2024-02-26",appointment_time:"11:30 AM",doctor:"Dr. Johnson",injury:"Back pain",imgUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"},{patient_name:"Michael Johnson",mobile_number:"+456-789-0123",appointment_date:"2024-02-26",appointment_time:"1:00 PM",doctor:"Dr. Lee",injury:"Headache",imgUrl:"https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"},{patient_name:"Emily Davis",mobile_number:"+789-012-3456",appointment_date:"2024-02-26",appointment_time:"2:30 PM",doctor:"Dr. Patel",injury:"Sore throat",imgUrl:"https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"},{patient_name:"David Wilson",mobile_number:"+321-654-9870",appointment_date:"2024-02-26",appointment_time:"4:00 PM",doctor:"Dr. Garcia",injury:"Fever",imgUrl:"https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"},{patient_name:"Sarah Brown",mobile_number:"+654-321-0987",appointment_date:"2024-02-26",appointment_time:"5:30 PM",doctor:"Dr. Kim",injury:"Cough",imgUrl:"https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"}]),[]);return Object(o.jsx)("div",{className:"min-h-screen bg-gray-100 text-gray-900",children:Object(o.jsxs)("main",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4",children:[Object(o.jsx)("div",{className:"",children:Object(o.jsx)("h4",{className:"text-xl font-semibold",children:"Today's Appointment List"})}),Object(o.jsx)("div",{className:"mt-6",children:Object(o.jsx)(p,{columns:e,data:t})})]})})};var b=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((t=>{let{getCLS:a,getFID:r,getFCP:i,getLCP:s,getTTFB:n}=t;a(e),r(e),i(e),s(e),n(e)}))};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1497d80f.chunk.js.map
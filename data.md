const data = [
   { month:"Jan", revenue:45000, expense:32000},
   { month:"Feb", revenue:52000, expense:38000},
   { month:"Mar", revenue:48000, expense:35000},
   { month:"Apr", revenue:61000, expense:42000},
   { month:"May", revenue:55000, expense:40000},
   { month:"Jun", revenue:67000, expense:45000},
   { month:"Jul", revenue:72000, expense:48000},
   { month:"Aug", revenue:69000, expense:46000},
   { month:"Sep", revenue:78000, expense:52000},
   { month:"Oct", revenue:74000, expense:50000},
   { month:"Nov", revenue:82000, expense:55000},
   { month:"Dec", revenue:89000, expense:58000},
  
]
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
ResponsiveContainer,
Tooltip,

const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Emma Johnson",
    product: "Wireless Headphones",
    amount: "$199",
    status: "pending",
    date: "2024-02-10",
  },
  {
    id: "#3849",
    customer: "Michael Brown",
    product: "Smartphone X12",
    amount: "$999",
    status: "shipped",
    date: "2024-03-05",
  },
  {
    id: "#3850",
    customer: "Sarah Davis",
    product: "Fiction Novel Bundle",
    amount: "$45",
    status: "completed",
    date: "2024-04-20",
  },
  {
    id: "#3851",
    customer: "David Wilson",
    product: "Gaming Console",
    amount: "$499",
    status: "cancelled",
    date: "2024-05-12",
  },
  {
    id: "#3852",
    customer: "Lisa Taylor",
    product: "Smartwatch Series 5",
    amount: "$299",
    status: "processing",
    date: "2024-06-08",
  },
];

const getStatusColor = (status) =>{
   switch(status){
      case "completed":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
         return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "canceled":
         return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
   }
}

const topProducts = [
  {
    name:'MacBook Pro 16',
    sales:124.7,
    revenue:"$2,987,530",
    trend:"up",
    change:"+12",
  },
  {
    name:"Iphone 15 Pro",
    sales:2156,
    revenue: "$2,587,844",
    trend:"up",
    change:"+8%",
  },
  {
    name:"AirPods Pro",
    sales:3421,
    revenue:"$852,229",
    trend:"down",
    change:"-3%",
  },
  {
    name:"iPad Air",
    sales:987,
    revenue:"$591,213",
    trend:"up",
    change:"+15%",
  },
]

const activities = [{
  id:1,
  type:"user",
  icon:User,
  title:"New user registered",
  description:"John Smit create an account",
  time:"2 minutes ago",
  color:"text-blue-50",
  bgColor:"bg-blue-100 dark:bg-blue-900/30",

},
{
  id:2,
  type:"order",
  icon:ShoppingCart,
  title:"New order received",
  description:"Order #3847",
  time:"5 minutes ago",
  color:"text-emerald-50",
  bgColor:"bg-emerald-100 dark:bg-emerald-900/30",

},
{
  id:3,
  type:"payment",
  icon:CreditCart,
  title:"Payment processed",
  description:"Payment of $1,999 completed",
  time:"",
  color:"text-blue-50",
  bgColor:"bg-blue-100 dark:bg-blue-900/30",

},
{
  id:4,
  type:"system",
  icon:Settings,
  title:"",
  description:"Database backup completed",
  time:"1 hour ago",
  color:"text-orange-50",
  bgColor:"bg-orange-100 dark:bg-orange-900/30",

},
{
  id:5,
  type:"notification",
  icon:Bell,
  title:"Low stock alert",
  description:"iPhone 15 Pro stock is low",
  time:"2 hours ago",
  color:"text-red-50",
  bgColor:"bg-red-100 dark:bg-red-900/30",

},
]
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import CartDetail from './Components/CartDetail';
import CartList from './Components/CartList';
import SunDetail from './Components/SunDetail';
import SunList from './Components/SunList';
import AdminCheckout from './Components/AdminCheckout';
import Sidebar from './Components/Sidebar';
import AdminEye from './Components/AdminEye';
import AdminSun from './Components/AdminSun';
import EditCart from './Components/EditCart';
import AddFrame from './Components/AddFrame';
import Signup from './Components/Signup';
import Login from './Components/Login';
import LandingPage from './Components/LandinPage';
import Payment from './Components/Payment';
import Card from './Components/Card';
import EditSun from './Components/EditSun';
import AddSun from './Components/AddSun';
import Cart from './Components/Cart';
import ContactUs from './Components/Contactus';
import FeedbackForm from './Components/FeedbackForm';
import { CartProvider } from './Components/CartContext';
import CustomizationForm from './Components/CustomizationForm';
import AdminHome from './Components/Adminhome';
import AdminCustomization from './Components/AdminCustomization';
import OrderHistory from './Components/OrderHistory';
import SunCart from './Components/SunCart';
import UserProfile from './Components/UserProfile';
import AdminFeedback from './Components/AdminFeedback';
import AboutUs from './Components/AboutUs';
import Termsandconditions from './Components/TermsandConditions';
import FAQPage from './Components/FAQPage';
import PrivacyPolicy from './Components/PrivacyPolicy';
function App() {
  return (
    
    <BrowserRouter>
    <CartProvider>
    <Routes>
     <Route path="/eye" element={<CartList />} />
     <Route path="/carddetails/:id" element={<CartDetail />} />
       <Route path="/sun" element={<SunList/>} />
       <Route path="/sundetails/:id" element={<SunDetail/>} />
       <Route path='/Admin' element={<AdminCheckout/>}/>
       <Route path='/Sidebar' element={<Sidebar/>}/>
       <Route path='/Admineye' element={<AdminEye/>}/>
       <Route path='/Adminsun' element={<AdminSun/>}/>
       <Route path='/edit/:id' element={<EditCart/>}/>
       <Route path='/add-frame' element={<AddFrame/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/' element={<Login/>}/>
       <Route path='/home' element={<LandingPage/>}/>
       <Route path="/cart/:id" element={<Cart/>}/>
       <Route path="/checkout" element={<Payment/>}/>
       <Route path="/card" element={<Card/>}/>
       <Route path='/editsun/:id' element={<EditSun/>}/>
       <Route path='/addsun' element={<AddSun/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
       <Route path='/feedback' element={<FeedbackForm/>}/>
       <Route path='/customize' element={<CustomizationForm/>}/>
       <Route path='/admin-home' element={<AdminHome/>}/>
       <Route path='/admin-customize' element={<AdminCustomization/>}/>
       <Route path='/history' element={<OrderHistory/>}/>
       <Route path="/cartsun/:id" element={<SunCart/>}/>
       <Route path="/user-details" element={<UserProfile/>}/>
       <Route path="/admin-feedback" element={<AdminFeedback/>}/>
       <Route path="/about" element={<AboutUs/>}/>
       <Route path="/terms" element={<Termsandconditions/>}/>
       <Route path="/faq" element={<FAQPage/>}/>
       <Route path="/privacy" element={<PrivacyPolicy/>}/>
       </Routes>
       </CartProvider>
       </BrowserRouter>
    );
  }
  
  export default App;

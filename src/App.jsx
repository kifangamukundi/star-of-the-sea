import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";
import { Navbar, Footer } from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Example, // Md files if needed

        // Auth stuff
        Register, 
        Home,
        Login,  
        ActivateAccount,
        ForgotPassword,
        PasswordReset,
        // School
        AboutUs,
        Academics,
        Admission,
        ClubsAndSocieties,
        CoreValues,
        Curriculum,
        Downloads,
        Gallery,
        Performance,
        StudentWelfare,
        SupportStaff,
        TeachingStaff,
        Tenders,
        // legal
        PrivacyPolicy,
        TermsOfUse} from "./pages";

// In case they need a dashboard
import ProtectedRoute from "./security/protectedRoute";

const App = () => (
  <BrowserRouter>
    <div className="bg-white w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-blue-800`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* School */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/clubs-and-societies" element={<ClubsAndSocieties />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/student-welfare" element={<StudentWelfare />} />
            <Route path="/support-staff" element={<SupportStaff />} />
            <Route path="/teaching-staff" element={<TeachingStaff />} />
            <Route path="/tenders" element={<Tenders />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />


            {/* Account stuff */}
            <Route path="/register" element={<Register/>} />
            <Route path="/activate-account/:activationToken" element={<ActivateAccount/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
            <Route path="/password-reset/:resetToken" element={<PasswordReset/>} />

          </Routes>
          {/* Toast */}
          <ToastContainer />
          
        </div>
      </div>

      <div className="bg-blue-800">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>

    </div>
  </BrowserRouter>
);

export default App;

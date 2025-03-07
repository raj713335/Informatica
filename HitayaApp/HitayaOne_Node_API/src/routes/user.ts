import { Router } from 'express';
import { checkUsername, getUserDetails, login, sendOtpOnMobile, signup, verifyMobileOtp, signUpWithGoogle, getuserInterest, googleCallback, successLogin, failedLogin, registerUserDetails } from '../controllers/user';
import { knowHealthIssuesGetAll, knowHealthIssuesPost } from '../controllers/knownHealthConditions';
import { userHealthHistoryPost, UserHealthHistoryGetAll } from '../controllers/userHealthHistory';
import { userFamilyPost, UserFamilyGetAll } from '../controllers/userFamily';
import { userHealthActivityPost, userHealthActivityGetAll } from '../controllers/userHealthActivity';
import { userAppointmentsPost, userAppointmentsGetAll } from '../controllers/userAppointments';
import { verifyToken,requireLogin } from '../middleware/auth';

const router = Router();

router.post('/signup', signup);

router.post('/login', login);

router.post('/login/sendOtpOnMobile', sendOtpOnMobile);

router.post('/checkUsername', checkUsername);

router.get('/', verifyToken, getUserDetails);

router.post('/register-user-details', verifyToken, registerUserDetails);
router.get('/get-user-details', verifyToken, getUserDetails);


/* TWILLO MOBILE AUTHENTICATION */
router.post('/send-otp-mobile', verifyToken, sendOtpOnMobile);
router.post('/verify-mobile-otp', verifyToken, verifyMobileOtp);

/*Google Auth API*/
router.get('/login/authGoogle', signUpWithGoogle);

/*router.get('/googleAuth', googleSignupTest);*/
router.get('/google/callback', googleCallback);
router.get('/successLogin', requireLogin, successLogin);
router.get('/failedLogin', failedLogin);

router.get('/get-user-interest', getuserInterest);


/* KNOW HEALTH ISSUES */

router.get('/get-all-know-health-issue', verifyToken, knowHealthIssuesGetAll);
router.post('/add-know-health-issue', verifyToken, knowHealthIssuesPost);

/* USER HEALTH HISTORY */

router.get('/get-all-user-health-history', verifyToken, UserHealthHistoryGetAll);
router.post('/add-user-health-history', verifyToken, userHealthHistoryPost);


/* USER FAMILY */

router.get('/get-all-user-family', verifyToken, UserFamilyGetAll);
router.post('/add-user-family', verifyToken, userFamilyPost);


/* USER HEALTH ACTIVITY */

router.get('/get-all-user-health-activity', verifyToken, userHealthActivityGetAll);
router.post('/add-user-health-activity', verifyToken, userHealthActivityPost);

/* USER HEALTH APPOINTMENTS */

router.get('/get-all-user-appointments', verifyToken, userAppointmentsGetAll);
router.post('/add-user-appointments', verifyToken, userAppointmentsPost);


export default router;
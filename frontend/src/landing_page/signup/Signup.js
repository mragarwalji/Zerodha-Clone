import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (mobile.length === 10) {
            setIsLoading(true);
            // Simulate API call delay
            setTimeout(() => {
                setIsLoading(false);
                setShowOtpField(true);
                alert(`OTP sent to ${mobile}`);
            }, 1500);
        } else {
            alert('Please enter a valid 10-digit mobile number');
        }
    };

   const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === '123456') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userMobile', mobile);

        // Redirect to another server (port 3001)
        window.location.href = "http://localhost:3001/";
    } else {
        alert('Invalid OTP. Please enter 123456 to proceed');
    }
};


    const handleMobileChange = (e) => {
        const value = e.target.value;
        // Allow only numbers and limit to 10 digits
        if (/^\d*$/.test(value) && value.length <= 10) {
            setMobile(value);
        }
    };

    const handleOtpChange = (e) => {
        const value = e.target.value;
        // Allow only numbers and limit to 6 digits
        if (/^\d*$/.test(value) && value.length <= 6) {
            setOtp(value);
        }
    };

    return ( 
        <div className='container mb-5'>
            <div className='text-center mt-5 p-3'>
                <h1 className='fs-2 fw-bold'>Open a free demat and trading account online</h1>
                <h3 className='text-muted mt-4 fs-4'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h3>
            </div>

            <div className='row mt-5'>
                {/* Left Column - Image */}
                <div className='col-md-6'>
                    <img 
                        src="media/images/signup.png" 
                        alt="signup" 
                        className='img-fluid'
                        style={{width: "90%", height: "auto"}}
                    />
                </div>
                
                {/* Right Column - Signup Form */}
                <div className='col-md-6'>
                    <div className='p-4'>
                        <h4 className='text-left fw-bold mb-3'>
                            {showOtpField ? 'Enter OTP' : 'Signup now'}
                        </h4>
                        <p className='text-muted text-left mb-4 fs-5'>
                            {showOtpField 
                                ? `Enter OTP sent to ${mobile}` 
                                : 'Or track your existing application'
                            }
                        </p>
                        
                        <form onSubmit={showOtpField ? handleVerifyOtp : handleSendOtp}>
                            {!showOtpField ? (
                                <div className='mb-3'>
                                    <input 
                                        type="text" 
                                        className='form-control form-control-lg' 
                                        id="name" 
                                        placeholder='Enter your Name' 
                                        required
                                    />
                                </div>
                            ) : null}
                            
                            <div className='mb-3'>
                                <input 
                                    type="text" 
                                    className='form-control form-control-lg' 
                                    id="mobile" 
                                    placeholder='Enter your 10-digit mobile number' 
                                    value={mobile}
                                    onChange={handleMobileChange}
                                    required
                                    maxLength="10"
                                    pattern="\d{10}"
                                    disabled={showOtpField}
                                />
                            </div>
                            
                            {showOtpField && (
                                <div className='mb-3'>
                                    <input 
                                        type="text" 
                                        className='form-control form-control-lg' 
                                        id="otp" 
                                        placeholder='Enter 6-digit OTP (Use: 123456)' 
                                        value={otp}
                                        onChange={handleOtpChange}
                                        required
                                        maxLength="6"
                                        pattern="\d{6}"
                                    />
                                    <small className="text-muted">
                                        Demo OTP: <strong>123456</strong>
                                    </small>
                                </div>
                            )}
                            
                            <button 
                                type="submit" 
                                className='btn btn-primary btn-lg w-100 py-3 fw-bold'
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        {showOtpField ? 'Verifying...' : 'Sending OTP...'}
                                    </span>
                                ) : (
                                    showOtpField ? 'Verify OTP' : 'Send OTP'
                                )}
                            </button>
                        </form>
                        
                        {showOtpField && (
                            <div className="text-center mt-3">
                                <button 
                                    className="btn btn-link text-decoration-none"
                                    onClick={() => {
                                        setShowOtpField(false);
                                        setOtp('');
                                    }}
                                >
                                    ← Change Mobile Number
                                </button>
                            </div>
                        )}
                        
                        <p className='text-center text-muted mt-4 small'>
                            By proceeding, you agree to the Zerodha{' '}
                            <Link to="/terms" className='text-decoration-none'>terms</Link>{' '}
                            &{' '}
                            <Link to="/privacy" className='text-decoration-none'>privacy policy</Link>
                        </p>
                        
                        <div className='text-center mt-3'>
                            <Link 
                                to="/nri-account" 
                                className='text-primary text-decoration-none fw-bold'
                            >
                                Looking to open NRI account? Click here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
import { useState } from "react";
import styles from "./styles/SignUp.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const socialProviders = [
  {
    name: "Google",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const perks = [
  "Free 14-day trial — no credit card needed",
  "Unlimited tasks & projects",
  "Up to 5 team members included",
  "Cancel anytime",
];

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.includes("@")) e.email = "Enter a valid email";
    if (form.password.length < 8) e.password = "At least 8 characters";
    if (!agreed) e.agreed = "Please accept the terms";
    return e;
  };
const navigate = useNavigate()
  const handleSubmit = async() => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    else{
      try{
        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password")
        const res = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({username: username.value, email: email.value, password: password.value})
        })
        const data = await res.json();
        console.log(res);
        navigate("/login")
      }catch(err){
        
      }
    }
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#3b82f6", "#16a34a"][
    strength
  ];
  return (
    <div className={styles.page}>
      {/* Left panel — branding */}
      <aside className={styles.panel}>
        <div className={styles.panelInner}>
          <div className={styles.panelLogo}>
            <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M11 7L15 9.5V14.5L11 17L7 14.5V9.5L11 7Z"
                fill="#fff"
                opacity="0.3"
              />
              <circle cx="11" cy="11" r="2" fill="#fff" />
            </svg>
            <span className={styles.panelLogoText}>Coalesce</span>
          </div>

          <div className={styles.panelContent}>
            <h1 className={styles.panelTitle}>
              Coordinate your work with
              <br />
              <em>Efficiency and Flow</em>
            </h1>
            <p className={styles.panelSub}>
              Join thousands of teams who ship faster, collaborate smarter, and
              never miss a deadline.
            </p>

            <ul className={styles.perks}>
              {perks.map((p) => (
                <li key={p} className={styles.perk}>
                  <span className={styles.perkCheck}>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Social proof */}
          <div className={styles.proof}>
            <div className={styles.proofAvatars}>
              {["#c7d2fe", "#a5b4fc", "#818cf8", "#6366f1"].map((c, i) => (
                <div
                  key={i}
                  className={styles.proofAvatar}
                  style={{ background: c, zIndex: 4 - i }}
                />
              ))}
            </div>
            <div className={styles.proofText}>
              <span className={styles.proofStar}>★★★★★</span>
              <span className={styles.proofLabel}>Loved by 10,000+ teams</span>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
        </div>
      </aside>

      {/* Right panel — form */}
      <main className={styles.formPanel}>
        <div className={styles.formWrap}>
          {/* Mobile logo */}
          <div className={styles.mobileLogo}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path
                d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z"
                stroke="#4f46e5"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="11" cy="11" r="2" fill="#4f46e5" />
            </svg>
            <span className={styles.mobileLogoText}>Coalesce</span>
          </div>

          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Create your account</h2>
            <p className={styles.formSub}>
              Already have one?{" "}
              <a href="#" className={styles.formLink}>
                Sign in
              </a>
            </p>
          </div>

          {/* Social buttons */}
          <div className={styles.socials}>
            {socialProviders.map((s) => (
              <button key={s.name} className={styles.socialBtn}>
                {s.icon}
                <span>Continue with {s.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>or sign up with email</span>
            <span className={styles.dividerLine} />
          </div>

          {/* Fields */}
          <div className={styles.fields}>
            {/* Name */}
            <div
              className={`${styles.field} ${focused === "name" ? styles.fieldFocused : ""} ${errors.name ? styles.fieldError : ""}`}
            >
              <label className={styles.label}>Username</label>
              <div className={styles.inputWrap}>
                <svg
                  className={styles.inputIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className={styles.input}
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  id="username"
                />
              </div>
              {errors.name && (
                <span className={styles.errorMsg}>{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div
              className={`${styles.field} ${focused === "email" ? styles.fieldFocused : ""} ${errors.email ? styles.fieldError : ""}`}
            >
              <label className={styles.label}>Work email</label>
              <div className={styles.inputWrap}>
                <svg
                  className={styles.inputIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 8l10 6 10-6" />
                </svg>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className={styles.input}
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  id="email"
                />
              </div>
              {errors.email && (
                <span className={styles.errorMsg}>{errors.email}</span>
              )}
            </div>

            {/* Password */}
            <div
              className={`${styles.field} ${focused === "password" ? styles.fieldFocused : ""} ${errors.password ? styles.fieldError : ""}`}
            >
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrap}>
                <svg
                  className={styles.inputIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  className={styles.input}
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused(null)}
                  id="password"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPass((v) => !v)}
                  tabIndex={-1}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {/* Strength meter */}
              {form.password && (
                <div className={styles.strengthWrap}>
                  <div className={styles.strengthBars}>
                    {[1, 2, 3, 4].map((n) => (
                      <div
                        key={n}
                        className={styles.strengthBar}
                        style={{
                          background: n <= strength ? strengthColor : undefined,
                        }}
                      />
                    ))}
                  </div>
                  <span
                    className={styles.strengthLabel}
                    style={{ color: strengthColor }}
                  >
                    {strengthLabel}
                  </span>
                </div>
              )}
              {errors.password && (
                <span className={styles.errorMsg}>{errors.password}</span>
              )}
            </div>
          </div>

          {/* Terms */}
          <label
            className={`${styles.checkRow} ${errors.agreed ? styles.checkRowError : ""}`}
          >
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={agreed}
              onChange={(e) => {
                setAgreed(e.target.checked);
                setErrors((err) => ({ ...err, agreed: undefined }));
              }}
            />
            <span className={styles.checkText}>
              I agree to the{" "}
              <a href="#" className={styles.formLink}>
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className={styles.formLink}>
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreed && (
            <span className={styles.errorMsg} style={{ marginTop: -8 }}>
              {errors.agreed}
            </span>
          )}

          {/* Submit */}
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Create free account
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <p className={styles.footNote}>
            By signing up you agree to receive occasional product updates.
            Unsubscribe anytime.
          </p>
        </div>
      </main>
    </div>
  );
}

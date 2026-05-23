import { useState } from "react";
import styles from "./styles/Login.module.css";
import { useNavigate } from "react-router-dom";
const socialProviders = [
  {
    name: "Google",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

const recentWorkspaces = [
  { name: "Acme Corp", initial: "A", color: "#c7d2fe" },
  { name: "Design Studio", initial: "D", color: "#a5b4fc" },
];

export default function Login() {
  const [form, setForm]       = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);
  const [focused, setFocused]   = useState(null);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [view, setView]         = useState("login"); // "login" | "forgot"

  const validate = () => {
    const e = {};
    if (!form.email.includes("@")) e.email = "Enter a valid email";
    if (view === "login" && form.password.length < 1) e.password = "Password is required";
    return e;
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };
 const navigate = useNavigate();
  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (view === "forgot") { setForgotSent(true); }
      else { setSuccess(true); }
    }, 1400);
    const login = async () => {
    try{
      const email = document.querySelector("#email");
      const password = document.querySelector("#password")
        const res = await fetch("http://localhost:3000/loginAuth", {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify({email: email.value, password: password.value})
        })
        const data = await res.json();
        console.log(data)
        navigate("/user")
    }catch(err){
      console.log(err)
    }
  }
  login()
  };

  // ── Forgot password sent ──────────────────────────────
  if (forgotSent) {
    return (
      <div className={styles.page}>
        <div className={styles.centered}>
          <div className={styles.successIcon}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="#4f46e5" strokeWidth="2"/>
              <path d="M2 8l10 6 10-6" stroke="#4f46e5" strokeWidth="2"/>
            </svg>
          </div>
          <h2 className={styles.successTitle}>Check your inbox</h2>
          <p className={styles.successSub}>
            We sent a password reset link to <strong>{form.email}</strong>. It expires in 15 minutes.
          </p>
          <button className={styles.ghostBtn} onClick={() => { setForgotSent(false); setView("login"); }}>
            ← Back to sign in
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.page}>

      {/* ── Left panel ── */}
      <aside className={styles.panel}>
        <div className={styles.panelInner}>

          <div className={styles.panelLogo}>
            <svg width="24" height="24" viewBox="0 0 22 22" fill="none">
              <path d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z" stroke="#fff" strokeWidth="2" fill="none"/>
              <path d="M11 7L15 9.5V14.5L11 17L7 14.5V9.5L11 7Z" fill="#fff" opacity="0.3"/>
              <circle cx="11" cy="11" r="2" fill="#fff"/>
            </svg>
            <span className={styles.panelLogoText}>Coalesce</span>
          </div>

          <div className={styles.panelContent}>
            {/* Mini dashboard preview */}
            <div className={styles.dashPreview}>
              <div className={styles.dashHeader}>
                <span className={styles.dashTitle}>Platform Launch</span>
                <span className={styles.dashBadge}>Active</span>
              </div>
              <div className={styles.dashProgress}>
                <div className={styles.dashProgressFill} />
              </div>
              <p className={styles.dashPct}>72% completed</p>
              <div className={styles.dashTasks}>
                {[
                  { label: "Finalize API spec", done: true },
                  { label: "Design system review", done: true },
                  { label: "Deploy to staging", done: false },
                ].map((t) => (
                  <div key={t.label} className={styles.dashTask}>
                    <span className={`${styles.dashCheck} ${t.done ? styles.dashCheckDone : ""}`}>
                      {t.done ? "✓" : "○"}
                    </span>
                    <span className={`${styles.dashTaskLabel} ${t.done ? styles.dashTaskDone : ""}`}>
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className={styles.quote}>
              <p className={styles.quoteText}>
                "Coalesce cut our sprint planning from 3 hours to 20 minutes. I'll never go back."
              </p>
              <footer className={styles.quoteAuthor}>
                <div className={styles.quoteAvatar} />
                <div>
                  <div className={styles.quoteName}>Sarah K.</div>
                  <div className={styles.quoteRole}>Head of Product, Vercel</div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className={styles.blob1} aria-hidden="true" />
          <div className={styles.blob2} aria-hidden="true" />
        </div>
      </aside>

      {/* ── Right / form panel ── */}
      <main className={styles.formPanel}>
        <div className={styles.formWrap}>

          {/* Mobile logo */}
          <div className={styles.mobileLogo}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
              <path d="M11 1L20 6.5V15.5L11 21L2 15.5V6.5L11 1Z" stroke="#4f46e5" strokeWidth="2" fill="none"/>
              <circle cx="11" cy="11" r="2" fill="#4f46e5"/>
            </svg>
            <span className={styles.mobileLogoText}>Coalesce</span>
          </div>

          {view === "login" ? (
            <>
              {/* Header */}
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Welcome back</h2>
                <p className={styles.formSub}>
                  No account?{" "}
                  <a href="#" className={styles.formLink}>Sign up free</a>
                </p>
              </div>

              {/* Recent workspaces */}
              {recentWorkspaces.length > 0 && (
                <div className={styles.workspaces}>
                  <p className={styles.workspacesLabel}>Continue as</p>
                  <div className={styles.workspaceList}>
                    {recentWorkspaces.map((ws) => (
                      <button key={ws.name} className={styles.workspaceBtn}>
                        <span className={styles.workspaceInitial} style={{ background: ws.color }}>
                          {ws.initial}
                        </span>
                        <span className={styles.workspaceName}>{ws.name}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Social */}
              <div className={styles.socials}>
                {socialProviders.map((s) => (
                  <button key={s.name} className={styles.socialBtn}>
                    {s.icon}
                    <span>{s.name}</span>
                  </button>
                ))}
              </div>

              <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>or with email</span>
                <span className={styles.dividerLine} />
              </div>

              {/* Fields */}
              <div className={styles.fields}>

                <div className={`${styles.field} ${focused === "email" ? styles.fieldFocused : ""} ${errors.email ? styles.fieldError : ""}`}>
                  <label className={styles.label}>Email address</label>
                  <div className={styles.inputWrap}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/>
                    </svg>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className={styles.input}
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      id="email"
                    />
                  </div>
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>

                <div className={`${styles.field} ${focused === "password" ? styles.fieldFocused : ""} ${errors.password ? styles.fieldError : ""}`}>
                  <div className={styles.labelRow}>
                    <label className={styles.label}>Password</label>
                    <button
                      type="button"
                      className={styles.forgotLink}
                      onClick={() => { setView("forgot"); setErrors({}); }}
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className={styles.inputWrap}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Your password"
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
                      aria-label={showPass ? "Hide" : "Show"}
                    >
                      {showPass ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <span className={styles.errorMsg}>{errors.password}</span>}
                </div>

              </div>

              {/* Remember me */}
              <label className={styles.rememberRow}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className={styles.rememberText}>Keep me signed in for 30 days</span>
              </label>

              {/* Submit */}
              <button
                className={`${styles.submitBtn} ${loading ? styles.submitBtnLoading : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.spinner} />
                ) : (
                  <>
                    Sign in
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
            </>
          ) : (
            /* ── Forgot password view ── */
            <>
              <button className={styles.backBtn} onClick={() => { setView("login"); setErrors({}); }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                Back to sign in
              </button>

              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Reset your password</h2>
                <p className={styles.formSub}>Enter your email and we'll send a reset link right away.</p>
              </div>

              <div className={styles.fields}>
                <div className={`${styles.field} ${focused === "email" ? styles.fieldFocused : ""} ${errors.email ? styles.fieldError : ""}`}>
                  <label className={styles.label}>Email address</label>
                  <div className={styles.inputWrap}>
                    <svg className={styles.inputIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/>
                    </svg>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className={styles.input}
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
                </div>
              </div>

              <button
                className={`${styles.submitBtn} ${loading ? styles.submitBtnLoading : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? <span className={styles.spinner} /> : "Send reset link"}
              </button>
            </>
          )}

          <p className={styles.footNote}>
            Protected by reCAPTCHA · <a href="#" className={styles.footLink}>Privacy</a> · <a href="#" className={styles.footLink}>Terms</a>
          </p>

        </div>
      </main>
    </div>
  );
}
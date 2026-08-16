import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  User,
  X,
} from "lucide-react"

function AuthModal({ isOpen, mode, onClose, onChangeMode }) {
  const [showPassword, setShowPassword] = useState(false)

  const isLogin = mode === "login"

  function handleSubmit(event) {
    event.preventDefault()

    if (isLogin) {
      alert("Demo login successful.")
    } else {
      alert("Demo account created successfully.")
    }

    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 p-8 shadow-2xl shadow-black/50"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-lg p-2 text-slate-500 transition hover:bg-slate-800 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="relative">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <ShieldCheck size={25} />
              </div>

              <h2 className="text-3xl font-bold">
                {isLogin ? "Welcome back" : "Create your account"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {isLogin
                  ? "Sign in to access your SentinelX security dashboard."
                  : "Start monitoring your infrastructure with SentinelX."}
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {!isLogin && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Full name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-slate-300">
                      Password
                    </label>

                    {isLogin && (
                      <button
                        type="button"
                        className="text-xs text-cyan-400 hover:text-cyan-300"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      minLength={6}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {isLogin ? "Sign in" : "Create account"}
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-slate-500">
                {isLogin ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => onChangeMode("signup")}
                      className="font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      Start free
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => onChangeMode("login")}
                      className="font-medium text-cyan-400 hover:text-cyan-300"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </div>

              <p className="mt-6 text-center text-xs text-slate-600">
                Demo interface — no account data is stored.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
import React, { useState, useEffect } from "react";

function App({ taskId }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // فرض می‌کنیم taskId همیشه ارسال میشه
    fetch(`http://localhost:8080/engine-rest/task/${taskId}/variables`)
      .then((res) => res.json())
      .then((data) => {
        // داده‌ها معمولا یه ساختار دارن، باید ایمیل رو از داده‌ها استخراج کنیم
        // مثلا فرض کنیم ساختار data این شکلیه:
        // { email: { value: "test@example.com", type: "String" }, ... }
        if (data.email && data.email.value) {
          setEmail(data.email.value);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت ایمیل:", err);
        setLoading(false);
      });
  }, [taskId]);

  if (loading) return <div>در حال بارگذاری...</div>;

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center" dir="rtl">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold text-purple-700 mb-6">فرم ورود</h2>

        <label className="block text-right font-semibold mb-1">ایمیل</label>
        <input
          type="email"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-right"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block text-right font-semibold mb-1">رمز عبور</label>
        <input
          type="password"
          className="w-full mb-4 p-2 border border-gray-300 rounded text-right"
          placeholder="رمز عبور خود را وارد کنید"
        />

        <button
          type="submit"
          className="w-full bg-purple-400 hover:bg-purple-500 text-white font-bold py-2 rounded transition"
        >
          ورود
        </button>
      </form>
    </div>
  );
}

export default App;

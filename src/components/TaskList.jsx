import { useEffect, useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/engine-rest/task?assignee=demo')
      .then(res => res.json())
      .then(setTasks)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>در حال بارگیری...</p>;
  if (tasks.length === 0) return <p>تسکی برای کاربر demo پیدا نشد.</p>;

  return (
    <div>
      <h2>تسک‌های باز</h2>
      <ul>
        {tasks.map(task => {
          // 🟡 استخراج مسیر فرم از formKey
          const formPath =
            task.formKey?.replace('http://localhost:5173/', '') || 'InputData';

          return (
            <li key={task.id}>
              {task.name} - 
              <a
                href={`/${formPath}?taskId=${task.id}&callbackUrl=http://localhost:8081/camunda/app/tasklist/default`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 10 }}
              >
                باز کردن فرم
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useState } from 'react'

const events = [
  { id: 1, title: "Tech Conference 2026", date: "April 20, 2026", location: "Bangalore", seats: 50, price: "Free" },
  { id: 2, title: "Music Festival", date: "April 25, 2026", location: "Chennai", seats: 100, price: "₹299" },
  { id: 3, title: "Startup Meetup", date: "May 1, 2026", location: "Mumbai", seats: 30, price: "Free" }
]

function App() {
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({name:'', email:'', phone:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Registered for ${selected.title}!`)
    setSelected(null)
    setForm({name:'', email:'', phone:''})
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">EventEase</h1>
      </nav>
      <main className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-600">📅 {event.date}</p>
              <p className="text-gray-600">📍 {event.location}</p>
              <p className="text-gray-600">🎫 {event.seats} seats</p>
              <p className="text-blue-600 font-bold">{event.price}</p>
              <button onClick={() => setSelected(event)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Register Now
              </button>
            </div>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 w-96">
              <h3 className="text-xl font-bold mb-4">Register for {selected.title}</h3>
              <form onSubmit={handleSubmit}>
                <input required placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border p-2 rounded mb-3"/>
                <input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border p-2 rounded mb-3"/>
                <input required placeholder="Phone" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border p-2 rounded mb-3"/>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Confirm Registration</button>
                <button type="button" onClick={() => setSelected(null)} className="w-full mt-2 border py-2 rounded">Cancel</button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
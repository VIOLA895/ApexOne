# 🏎️ ApexOne

### Making Formula 1 easier to understand.

ApexOne is an interactive Formula 1 web application designed to help beginners understand the world of F1 while giving fans an easy way to explore the **2026 FIA Formula 1 season**, race schedules, driver performance, and Grand Prix statistics.

Built with **React**, **JavaScript**, and the **OpenF1 API**, ApexOne combines real-world F1 data with a clean, modern interface inspired by the speed and energy of Formula 1.

---

## ✨ Features

### 🏁 2026 Race Calendar

Explore the complete 2026 Formula 1 race schedule.

* Grand Prix calendar
* Race dates
* Circuit locations
* Upcoming and completed races
* Race status indicators
* Interactive Grand Prix selection
* Direct navigation from a race to its statistics

### 📊 Grand Prix Statistics

Select any available Grand Prix and explore its race data.

* 🏆 Podium
* 🥇 Finishing positions
* 👤 Driver information
* 🏎️ Team information
* ⏱️ Finishing times
* 🚫 DNF
* ❌ DNS
* ⚠️ DSQ
* Full race classification

Classified drivers are automatically separated from non-classified drivers so that DNF, DNS, and DSQ drivers cannot incorrectly appear among the podium positions.

### 🔄 Interactive Grand Prix Selector

The Stats page includes a Grand Prix dropdown that allows users to quickly switch between races without returning to the schedule.

Each selection loads the statistics for the exact race session.

### 🔐 Authentication UI

ApexOne includes a clean authentication experience with:

* Sign In
* Create Account
* Password fields
* Form validation
* Consistent ApexOne visual design

### 📚 Learn F1

ApexOne is designed with beginners in mind.

The learning section introduces important Formula 1 concepts and terminology in a simple and accessible way.

Topics include concepts such as:

* Race weekends
* Tyres
* DRS
* Pit stops
* F1 terminology
* Race procedures

### 🎨 ApexOne Design System

The interface uses a distinctive motorsport-inspired visual style:

* 🖤 Black backgrounds
* 🔴 Red accents
* High-contrast typography
* Modern cards and panels
* Responsive layouts
* Subtle hover effects
* Lucide icons
* Clean navigation

---

## 🛠️ Tech Stack

| Technology      | Purpose                       |
| --------------- | ----------------------------- |
| ⚛️ React        | Frontend framework            |
| 🟨 JavaScript   | Application logic             |
| 🎨 CSS          | Styling and responsive design |
| 🧭 React Router | Page navigation               |
| 🌐 OpenF1 API   | Formula 1 data                |
| 🎯 Lucide React | Interface icons               |
| 📦 Vite         | Development and build tooling |
| 🐙 Git & GitHub | Version control               |

---

## 🌐 OpenF1 API

ApexOne uses the **OpenF1 API** to retrieve Formula 1 data.

The application communicates with endpoints for information such as:

* Grand Prix meetings
* Race sessions
* Drivers
* Session results
* Championship standings
* Race control
* Lap data
* Pit stops
* Tyre stints
* Driver positions
* Intervals
* Starting grids

The API service is centralized in:

```text
src/services/openF1.js
```

This keeps API communication separate from the UI components and makes the application easier to maintain.

---

## 🧠 How ApexOne Handles Race Results

One important part of ApexOne is the race classification logic.

Drivers are not simply sorted by whatever order the API returns.

ApexOne separates results into:

```text
CLASSIFIED
     ↓
DNF
     ↓
DNS
     ↓
DSQ
```

Within the classified group, drivers are ordered according to their finishing position.

This prevents a driver who did not finish the race from incorrectly appearing above a classified driver or inside the podium.

---

## 🔗 Schedule → Stats

The Schedule page and Stats page are connected.

When a user selects a Grand Prix:

```text
Schedule
   ↓
Select Grand Prix
   ↓
Race Session Key
   ↓
Stats Page
   ↓
Load exact race data
```

The selected race is passed through the URL:

```text
/stats?session_key=...
```

This allows the Stats page to identify exactly which Grand Prix the user selected.

---

## 📁 Project Structure

```text
ApexOne/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   └── Footer/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Schedule/
│   │   ├── Stats/
│   │   ├── Learn/
│   │   ├── SignIn/
│   │   └── SignUp/
│   │
│   ├── services/
│   │   └── openF1.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/VIOLA895/ApexOne.git
```

### 2. Move into the project

```bash
cd ApexOne
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development address, usually:

```text
http://localhost:5173
```

Open it in your browser.

---

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔧 Development

ApexOne follows a component-based React architecture.

The project separates:

```text
UI Components
      ↓
Pages
      ↓
Services
      ↓
OpenF1 API
```

This separation makes it easier to modify the interface without rewriting the API logic.

---

## 🎯 Project Goals

ApexOne was created around a simple idea:

> **Formula 1 shouldn't feel complicated when you're just getting started.**

The project aims to make F1 information:

* Easier to understand
* Easier to navigate
* More visually engaging
* Accessible to beginners
* Useful for following the current season

Instead of overwhelming users with technical terminology and statistics, ApexOne presents information through focused pages and interactive components.

---

## 💡 What I Learned

Building ApexOne provided hands-on experience with:

* React component architecture
* React Router
* API integration
* Asynchronous JavaScript
* `fetch()` and API requests
* Managing loading and error states
* Processing external API data
* Sorting and filtering datasets
* URL query parameters
* Reusable components
* Responsive CSS
* Git and GitHub workflows
* Debugging frontend applications
* Designing interfaces around real-world data

One of the biggest lessons was that consuming an API is not just about fetching data.

The application also needs to handle:

```text
API response
     ↓
Validate data
     ↓
Transform data
     ↓
Sort/filter data
     ↓
Display meaningful information
```

---

## 🏎️ Why ApexOne?

Formula 1 has a huge amount of information.

For someone new to the sport, terms like:

```text
DRS
DNF
DSQ
Parc Fermé
Formation Lap
Undercut
Overcut
Sprint
Pole Position
```

can make the sport feel intimidating.

ApexOne aims to bridge that gap by combining **education + real F1 data** in one place.

---

## 🔮 Future Improvements

Although the current version is complete, ApexOne could eventually grow with features such as:

* 👤 Driver profile pages
* 🏎️ Constructor/team profiles
* 📈 Championship points charts
* 🗺️ Interactive circuit information
* 🏁 Live race timing
* 📡 Live race control
* 🛞 Tyre strategy visualization
* 📊 Driver performance comparisons
* 🏆 Championship predictions
* 🌍 Circuit maps
* 📱 Progressive Web App support

---

## 🤝 Contributing

Contributions and ideas are welcome.

If you'd like to contribute:

```bash
git fork
```

Create a feature branch:

```bash
git checkout -b feature/your-feature
```

Make your changes, commit them:

```bash
git add .
git commit -m "Add your feature"
```

Push your branch:

```bash
git push origin feature/your-feature
```

Then open a pull request.

---

## 📜 License

This project was created for educational and portfolio purposes.

Formula 1 and related trademarks belong to their respective owners.

ApexOne is an independent project and is not affiliated with or endorsed by Formula 1, the FIA, or any F1 team.

---

## 👩🏽‍💻 Author

**Viola Kambuni**

Computer Science & Mathematics
Nairobi, Kenya

Built with:

```text
React + JavaScript + CSS + OpenF1 API
```

---

# 🏁 ApexOne

### Learn F1. Follow the grid. Understand the race.

**Built for anyone who wants to understand Formula 1.**

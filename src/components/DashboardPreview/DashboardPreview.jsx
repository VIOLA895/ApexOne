import "./DashboardPreview.css";

function DashboardPreview() {
  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <h2>Live Season Dashboard</h2>
        <p>Follow the latest championship standings and race information.</p>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <span className="card-icon">🏆</span>
          <h3>Championship Leader</h3>
          <h4>Oscar Piastri</h4>
          <p>P1 • 266 Points</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">🏁</span>
          <h3>Next Grand Prix</h3>
          <h4>Dutch Grand Prix</h4>
          <p>Zandvoort</p>
        </div>

        <div className="dashboard-card">
          <span className="card-icon">🏎️</span>
          <h3>Constructors Leader</h3>
          <h4>McLaren</h4>
          <p>516 Points</p>
        </div>

      </div>
    </section>
  );
}

export default DashboardPreview;
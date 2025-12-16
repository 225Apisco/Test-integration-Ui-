import React from 'react';

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="header-content">
          <div className="header-brand">
            <h1>Gestionnaire de Transactions</h1>
            <p className="header-subtitle">Visualisez et gérez vos transactions financières</p>
          </div>
          
          <div className="header-actions">
            <button className="btn btn-primary">
              <span className="btn-icon">+</span>
              Nouvelle transaction
            </button>
            <button className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
              Exporter
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
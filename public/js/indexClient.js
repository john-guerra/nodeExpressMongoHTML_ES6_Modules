function Index() {
  const index = {};

  const quakesDiv = document.querySelector("div#quakes");

  function renderQuakes(quakes) {
    // do something

    quakesDiv.innerHTML = "";
    console.log("render Quakes", quakes);
    for (let q of quakes) {
      const qDiv = document.createElement("div");

      qDiv.className = "col-xs-6 col-sm-4 card";
      qDiv.innerHTML = `
        <div class="card-body">
          <div class="card-title"><label>Location: <output>${q.location}</output></label></div>
          <div><label>Scale: <output>${q.scale}</output></label></div>
          <div><label>Date: <output>${q.date}</output></label></div>      
        </div>
      `;

      quakesDiv.appendChild(qDiv);
    }
  }

  async function fetchQuakes() {
    const res = await fetch("./getQuakes");
    const quakes = await res.json();

    renderQuakes(quakes);
  }

  fetchQuakes();
  return index;
}

Index();

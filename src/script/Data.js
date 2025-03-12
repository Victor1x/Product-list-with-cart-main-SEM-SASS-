// --- Dados do Menu --- 
let dataMenu = [];
async function data() {
  try {
    const response = await fetch("../../data.json");
    dataMenu = await response.json();

    menu(dataMenu);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}
data()

# ⛏️ Mining Emission & Filtration

**Predicts CO₂ output and machine failure for mining equipment, then recommends the filtration system that fits the site.**

🏆 **Winner, HackIndia 2025 preliminary round** (team Neural Titans) · the result that sent our team to nationals, which we then won with [Q-Guardian OS](https://github.com/Rishini-Dharan/HackIndia2026).

**[▶ Open the live site](https://rishini-dharan.github.io/HackIndia-Spark-1-2025-Nueral-Titans/)**

---

## The problem

Mining sites burn large amounts of energy and release CO₂, SO₂ and NOx, while heavy equipment fails without much warning. Operators usually find out about both too late: after emissions breach limits, or after a machine stops.

## What it does

| Tool | Input | Output |
|---|---|---|
| **Machine failure diagnosis** | Temperature, vibration, cumulative operating hours | Risk of structural or mechanical failure |
| **CO₂ footprint estimation** | Tons of ore processed, electricity used (MWh), processing method | Estimated CO₂ emissions |
| **Filter recommendation** | Local air-emission and water-quality readings (single entry or bulk CSV) | The filtration system best suited to the site |
| **Assistant bots** | Questions in plain language | Guided help for the emission and CO₂ tools |

## How it's built

```
Web front end (this repo: HTML, CSS, JavaScript on GitHub Pages)
  ├── Company sign-up / login and upload pages
  ├── Machine failure + CO₂ predictor ── Streamlit app, scikit-learn + TensorFlow → Datadeveloper03/co2-and-machine
  ├── Filter recommender ─────────────── Streamlit app, Plotly charts        → Datadeveloper03/filtertype
  └── Emission and CO₂ assistant bots ── Landbot
```

The machine-learning apps live in my teammate's repositories, linked above. This repository is the product front end that ties the tools together for a mining company.

## Run it locally

It's a static site, so no build step is needed:

```bash
git clone https://github.com/Rishini-Dharan/HackIndia-Spark-1-2025-Nueral-Titans
cd HackIndia-Spark-1-2025-Nueral-Titans
python -m http.server 8000   # then open http://localhost:8000
```

To run the ML apps, follow the READMEs in [co2-and-machine](https://github.com/Datadeveloper03/co2-and-machine) and [filtertype](https://github.com/Datadeveloper03/filtertype) (`pip install -r requirements.txt`, then `streamlit run app.py`).

## What's next

[`Future-Goals.txt`](Future-Goals.txt) sketches the hardware stage: CO₂, SO₂ and NOx sensors on an ESP32, logging to an SD card, so sites can build their own emission datasets instead of relying on synthetic data.

## Team

Built by **Neural Titans** for HackIndia 2025. More of my work: [portfolio](https://rishini-dharan.github.io/Rishini-Dharan-T-Portfolio/) · [GitHub](https://github.com/Rishini-Dharan).

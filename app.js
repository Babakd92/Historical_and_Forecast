const SIGNUP_ENDPOINT = "";
const FALLBACK_EMAIL = "dialameh.babak@gmail.com";
const SENSOR_LATITUDE = 40.743336;
const SENSOR_LONGITUDE = -84.24808;
const dashboardUpdatedAt = "2026-05-14 08:57";
const chartHoverTargets = {
  precipChart: [],
  tempChart: []
};

const precipData = [
  {
    "date": "2026-05-07",
    "value": 0.05,
    "type": "past"
  },
  {
    "date": "2026-05-08",
    "value": 1.7,
    "type": "past"
  },
  {
    "date": "2026-05-09",
    "value": 0.0,
    "type": "past"
  },
  {
    "date": "2026-05-10",
    "value": 0.0,
    "type": "past"
  },
  {
    "date": "2026-05-11",
    "value": 0.0,
    "type": "past"
  },
  {
    "date": "2026-05-12",
    "value": 0.0,
    "type": "past"
  },
  {
    "date": "2026-05-13",
    "value": 1.44,
    "type": "past"
  },
  {
    "date": "2026-05-14",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-15",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-16",
    "value": 19.0,
    "type": "future"
  },
  {
    "date": "2026-05-17",
    "value": 1.7,
    "type": "future"
  },
  {
    "date": "2026-05-18",
    "value": 1.3,
    "type": "future"
  },
  {
    "date": "2026-05-19",
    "value": 1.2,
    "type": "future"
  },
  {
    "date": "2026-05-20",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-21",
    "value": 0.3,
    "type": "future"
  },
  {
    "date": "2026-05-22",
    "value": 5.7,
    "type": "future"
  },
  {
    "date": "2026-05-23",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-24",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-25",
    "value": 0.0,
    "type": "future"
  },
  {
    "date": "2026-05-26",
    "value": 2.7,
    "type": "future"
  },
  {
    "date": "2026-05-27",
    "value": 5.7,
    "type": "future"
  }
];

const tempData = [
  {
    "date": "2026-05-07",
    "pastMin": 8.55,
    "pastMax": 12.35
  },
  {
    "date": "2026-05-08",
    "pastMin": 6.42,
    "pastMax": 15.3
  },
  {
    "date": "2026-05-09",
    "pastMin": 11.6,
    "pastMax": 22.15
  },
  {
    "date": "2026-05-10",
    "pastMin": 10.12,
    "pastMax": 17.0
  },
  {
    "date": "2026-05-11",
    "pastMin": 1.8,
    "pastMax": 19.23
  },
  {
    "date": "2026-05-12",
    "pastMin": 3.88,
    "pastMax": 21.77
  },
  {
    "date": "2026-05-13",
    "pastMin": 8.25,
    "pastMax": 15.12
  },
  {
    "date": "2026-05-14",
    "futureMin": 6.3,
    "futureMax": 18.1
  },
  {
    "date": "2026-05-15",
    "futureMin": 4.7,
    "futureMax": 23.1
  },
  {
    "date": "2026-05-16",
    "futureMin": 12.3,
    "futureMax": 24.1
  },
  {
    "date": "2026-05-17",
    "futureMin": 16.6,
    "futureMax": 26.3
  },
  {
    "date": "2026-05-18",
    "futureMin": 17.8,
    "futureMax": 28.0
  },
  {
    "date": "2026-05-19",
    "futureMin": 14.2,
    "futureMax": 26.1
  },
  {
    "date": "2026-05-20",
    "futureMin": 11.3,
    "futureMax": 19.1
  },
  {
    "date": "2026-05-21",
    "futureMin": 9.8,
    "futureMax": 21.7
  },
  {
    "date": "2026-05-22",
    "futureMin": 11.2,
    "futureMax": 18.4
  },
  {
    "date": "2026-05-23",
    "futureMin": 7.2,
    "futureMax": 15.7
  },
  {
    "date": "2026-05-24",
    "futureMin": 7.2,
    "futureMax": 19.5
  },
  {
    "date": "2026-05-25",
    "futureMin": 9.9,
    "futureMax": 23.9
  },
  {
    "date": "2026-05-26",
    "futureMin": 14.5,
    "futureMax": 24.3
  },
  {
    "date": "2026-05-27",
    "futureMin": 18.4,
    "futureMax": 26.4
  }
];

const forecastRiskData = [
  {
    "date": "2026-05-14",
    "rain": 0.0,
    "rainProbability": 0.0,
    "wind": 20.3
  },
  {
    "date": "2026-05-15",
    "rain": 0.0,
    "rainProbability": 12.0,
    "wind": 21.2
  },
  {
    "date": "2026-05-16",
    "rain": 19.0,
    "rainProbability": 69.0,
    "wind": 31.2
  },
  {
    "date": "2026-05-17",
    "rain": 1.7,
    "rainProbability": 60.0,
    "wind": 22.9
  },
  {
    "date": "2026-05-18",
    "rain": 1.3,
    "rainProbability": 8.0,
    "wind": 29.6
  },
  {
    "date": "2026-05-19",
    "rain": 1.2,
    "rainProbability": 51.0,
    "wind": 35.8
  },
  {
    "date": "2026-05-20",
    "rain": 0.0,
    "rainProbability": 40.0,
    "wind": 16.9
  }
];

const historicalSummaryData = [
  {
    "date": "2026-05-07",
    "minTemp": 8.55,
    "maxTemp": 12.35,
    "precipitation": 0.05,
    "solarRadiation": 8.36,
    "windSpeed": 1.39
  },
  {
    "date": "2026-05-08",
    "minTemp": 6.42,
    "maxTemp": 15.3,
    "precipitation": 1.7,
    "solarRadiation": 101.19,
    "windSpeed": 1.55
  },
  {
    "date": "2026-05-09",
    "minTemp": 11.6,
    "maxTemp": 22.15,
    "precipitation": 0.0,
    "solarRadiation": 268.21,
    "windSpeed": 2.76
  },
  {
    "date": "2026-05-10",
    "minTemp": 10.12,
    "maxTemp": 17.0,
    "precipitation": 0.0,
    "solarRadiation": 264.81,
    "windSpeed": 1.33
  },
  {
    "date": "2026-05-11",
    "minTemp": 1.8,
    "maxTemp": 19.23,
    "precipitation": 0.0,
    "solarRadiation": 280.78,
    "windSpeed": 1.43
  },
  {
    "date": "2026-05-12",
    "minTemp": 3.88,
    "maxTemp": 21.77,
    "precipitation": 0.0,
    "solarRadiation": 272.45,
    "windSpeed": 1.62
  },
  {
    "date": "2026-05-13",
    "minTemp": 8.25,
    "maxTemp": 15.12,
    "precipitation": 1.44,
    "solarRadiation": 184.15,
    "windSpeed": 2.85
  }
];

const forecastTableData = [
  {
    "date": "2026-05-14",
    "condition": "Overcast",
    "maxTemp": 18.1,
    "minTemp": 6.3,
    "rainMm": 0.0,
    "rainProbability": 0.0,
    "windKmh": 20.3
  },
  {
    "date": "2026-05-15",
    "condition": "Overcast",
    "maxTemp": 23.1,
    "minTemp": 4.7,
    "rainMm": 0.0,
    "rainProbability": 12.0,
    "windKmh": 21.2
  },
  {
    "date": "2026-05-16",
    "condition": "Moderate showers",
    "maxTemp": 24.1,
    "minTemp": 12.3,
    "rainMm": 19.0,
    "rainProbability": 69.0,
    "windKmh": 31.2
  },
  {
    "date": "2026-05-17",
    "condition": "Dense drizzle",
    "maxTemp": 26.3,
    "minTemp": 16.6,
    "rainMm": 1.7,
    "rainProbability": 60.0,
    "windKmh": 22.9
  },
  {
    "date": "2026-05-18",
    "condition": "Moderate drizzle",
    "maxTemp": 28.0,
    "minTemp": 17.8,
    "rainMm": 1.3,
    "rainProbability": 8.0,
    "windKmh": 29.6
  },
  {
    "date": "2026-05-19",
    "condition": "Light drizzle",
    "maxTemp": 26.1,
    "minTemp": 14.2,
    "rainMm": 1.2,
    "rainProbability": 51.0,
    "windKmh": 35.8
  },
  {
    "date": "2026-05-20",
    "condition": "Overcast",
    "maxTemp": 19.1,
    "minTemp": 11.3,
    "rainMm": 0.0,
    "rainProbability": 40.0,
    "windKmh": 16.9
  }
];

const secondWeekForecastTableData = [
  {
    "date": "2026-05-21",
    "condition": "Light drizzle",
    "maxTemp": 21.7,
    "minTemp": 9.8,
    "rainMm": 0.3,
    "rainProbability": 19.0,
    "windKmh": 18.3
  },
  {
    "date": "2026-05-22",
    "condition": "Slight showers",
    "maxTemp": 18.4,
    "minTemp": 11.2,
    "rainMm": 5.7,
    "rainProbability": 24.0,
    "windKmh": 30.6
  },
  {
    "date": "2026-05-23",
    "condition": "Overcast",
    "maxTemp": 15.7,
    "minTemp": 7.2,
    "rainMm": 0.0,
    "rainProbability": 29.0,
    "windKmh": 19.2
  },
  {
    "date": "2026-05-24",
    "condition": "Overcast",
    "maxTemp": 19.5,
    "minTemp": 7.2,
    "rainMm": 0.0,
    "rainProbability": 22.0,
    "windKmh": 17.5
  },
  {
    "date": "2026-05-25",
    "condition": "Overcast",
    "maxTemp": 23.9,
    "minTemp": 9.9,
    "rainMm": 0.0,
    "rainProbability": 40.0,
    "windKmh": 10.5
  },
  {
    "date": "2026-05-26",
    "condition": "Moderate drizzle",
    "maxTemp": 24.3,
    "minTemp": 14.5,
    "rainMm": 2.7,
    "rainProbability": 58.0,
    "windKmh": 24.4
  },
  {
    "date": "2026-05-27",
    "condition": "Slight showers",
    "maxTemp": 26.4,
    "minTemp": 18.4,
    "rainMm": 5.7,
    "rainProbability": 48.0,
    "windKmh": 22.8
  }
];

function formatDateLabel(date) {
  const parts = date.split("-").map(Number);
  const parsedDate = parts.length === 3
    ? new Date(parts[0], parts[1] - 1, parts[2])
    : new Date(2026, parts[0] - 1, parts[1]);
  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const chartHeight = Math.max(320, rect.width * 0.58);
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(chartHeight * ratio));
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, width: rect.width, height: chartHeight };
}

function getChartTooltip() {
  let tooltip = document.getElementById("chartTooltip");
  if (!tooltip) {
    tooltip = document.createElement("div");
    tooltip.id = "chartTooltip";
    tooltip.className = "chart-tooltip";
    document.body.appendChild(tooltip);
  }
  return tooltip;
}

function hideChartTooltip() {
  const tooltip = getChartTooltip();
  tooltip.classList.remove("visible");
}

function showChartTooltip(event, target) {
  const tooltip = getChartTooltip();
  tooltip.innerHTML = target.tooltip;
  tooltip.classList.add("visible");

  const offset = 14;
  const tooltipRect = tooltip.getBoundingClientRect();
  let left = event.clientX + offset;
  let top = event.clientY + offset;

  if (left + tooltipRect.width > window.innerWidth - 8) {
    left = event.clientX - tooltipRect.width - offset;
  }
  if (top + tooltipRect.height > window.innerHeight - 8) {
    top = event.clientY - tooltipRect.height - offset;
  }

  tooltip.style.left = `${Math.max(8, left)}px`;
  tooltip.style.top = `${Math.max(8, top)}px`;
}

function setupChartHover(canvas) {
  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const targets = chartHoverTargets[canvas.id] || [];
    let match = null;

    for (const target of targets) {
      if (target.kind === "bar") {
        if (x >= target.x && x <= target.x + target.width && y >= target.y && y <= target.y + target.height) {
          match = target;
          break;
        }
      } else {
        const distance = Math.hypot(x - target.x, y - target.y);
        if (distance <= target.radius) {
          match = target;
          break;
        }
      }
    }

    canvas.style.cursor = match ? "pointer" : "default";
    if (match) {
      showChartTooltip(event, match);
    } else {
      hideChartTooltip();
    }
  });
  canvas.addEventListener("mouseleave", () => {
    canvas.style.cursor = "default";
    hideChartTooltip();
  });
}

function drawAxes(ctx, width, height, maxValue, labels, yAxisLabel, minValue = 0) {
  const pad = { top: 66, right: 22, bottom: 98, left: 64 };
  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.left, pad.top);
  ctx.lineTo(pad.left, height - pad.bottom);
  ctx.lineTo(width - pad.right, height - pad.bottom);
  ctx.stroke();

  ctx.fillStyle = "#64748b";
  ctx.font = "11px Arial";
  ctx.textAlign = "right";
  ctx.textBaseline = "alphabetic";
  for (let i = 0; i <= 4; i += 1) {
    const value = minValue + ((maxValue - minValue) / 4) * i;
    const y = height - pad.bottom - ((height - pad.top - pad.bottom) * i) / 4;
    ctx.fillText(value.toFixed(0), pad.left - 8, y + 4);
    ctx.strokeStyle = "rgba(215, 222, 232, 0.65)";
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  ctx.save();
  ctx.translate(14, pad.top + (height - pad.top - pad.bottom) / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = "#334155";
  ctx.font = "12px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(yAxisLabel, 0, 0);
  ctx.restore();

  ctx.textAlign = "center";
  labels.forEach((label, index) => {
    const x = pad.left + ((width - pad.left - pad.right) * (index + 0.5)) / labels.length;

    ctx.strokeStyle = "rgba(215, 222, 232, 0.55)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, pad.top);
    ctx.lineTo(x, height - pad.bottom);
    ctx.stroke();

    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(x, height - pad.bottom);
    ctx.lineTo(x, height - pad.bottom + 5);
    ctx.stroke();

    ctx.save();
    ctx.translate(x, height - pad.bottom + 8);
    ctx.rotate(Math.PI / 2);
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#64748b";
    ctx.font = "11px Arial";
    ctx.fillText(label, 0, 0);
    ctx.restore();
  });
  return pad;
}

function drawLegend(ctx, items, x, y, maxWidth) {
  ctx.font = "11px Arial";
  ctx.textAlign = "left";
  let cursorX = x;
  let cursorY = y;

  items.forEach((item) => {
    const markerWidth = item.kind === "bar" ? 18 : 24;
    const itemWidth = markerWidth + ctx.measureText(item.label).width + 20;
    if (cursorX > x && cursorX + itemWidth > x + maxWidth) {
      cursorX = x;
      cursorY += 18;
    }

    ctx.strokeStyle = item.color;
    ctx.fillStyle = item.color;
    ctx.lineWidth = 2;

    if (item.kind === "bar") {
      ctx.fillRect(cursorX, cursorY - 8, 13, 9);
    } else {
      if (item.dashed) ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(cursorX, cursorY - 4);
      ctx.lineTo(cursorX + 18, cursorY - 4);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(cursorX + 9, cursorY - 4, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = "#334155";
    ctx.fillText(item.label, cursorX + markerWidth, cursorY - 1);
    cursorX += itemWidth;
  });
}

function getExtendedPrecipData() {
  const seen = new Set(precipData.map((item) => `${item.type}:${item.date}`));
  const secondWeek = secondWeekForecastTableData
    .map((row) => ({ date: row.date, value: row.rainMm, type: "future" }))
    .filter((item) => Number.isFinite(item.value) && !seen.has(`${item.type}:${item.date}`));
  return [...precipData, ...secondWeek];
}

function getExtendedTempData() {
  const seen = new Set(tempData.map((item) => (
    `${item.date}:${Number.isFinite(item.futureMin) ? "future" : "past"}`
  )));
  const secondWeek = secondWeekForecastTableData
    .map((row) => ({ date: row.date, futureMin: row.minTemp, futureMax: row.maxTemp }))
    .filter((item) => (
      Number.isFinite(item.futureMin)
      && Number.isFinite(item.futureMax)
      && !seen.has(`${item.date}:future`)
    ));
  return [...tempData, ...secondWeek];
}

function drawPrecipChart() {
  const canvas = document.getElementById("precipChart");
  const { ctx, width, height } = setupCanvas(canvas);
  chartHoverTargets.precipChart = [];
  const chartData = getExtendedPrecipData();
  const labels = chartData.map((item) => formatDateLabel(item.date));
  const maxValue = Math.max(...chartData.map((item) => item.value), 1) * 1.15;
  const pad = drawAxes(ctx, width, height, maxValue, labels, "Precipitation (mm)");
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;
  const barWidth = Math.max(4, (plotWidth / chartData.length) * 0.58);

  drawLegend(ctx, [
    { label: "Past 7 days", color: "#5b9bd5", kind: "bar" },
    { label: "Forecast", color: "#70ad47", kind: "bar" }
  ], pad.left, 24, plotWidth);

  chartData.forEach((item, index) => {
    const x = pad.left + (plotWidth * (index + 0.5)) / chartData.length - barWidth / 2;
    const barHeight = (item.value / maxValue) * plotHeight;
    const y = height - pad.bottom - barHeight;
    ctx.fillStyle = item.type === "past" ? "#5b9bd5" : "#70ad47";
    ctx.fillRect(x, y, barWidth, barHeight);
    chartHoverTargets.precipChart.push({
      kind: "bar",
      x,
      y: Math.min(y, height - pad.bottom - 2),
      width: barWidth,
      height: Math.max(4, barHeight + 2),
      tooltip: `<strong>${formatDateLabel(item.date)}</strong><br>${item.type === "past" ? "Past 7 days" : "Forecast"} precipitation: ${item.value.toFixed(1)} mm`
    });
  });
}

function drawLine(ctx, points, color, dashed) {
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  if (dashed) ctx.setLineDash([5, 4]);
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();
  ctx.setLineDash([]);
  points.forEach((point) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawTempChart() {
  const canvas = document.getElementById("tempChart");
  const { ctx, width, height } = setupCanvas(canvas);
  chartHoverTargets.tempChart = [];
  const chartData = getExtendedTempData();
  const labels = chartData.map((item) => formatDateLabel(item.date));
  const values = chartData.flatMap((item) => [
    item.pastMin,
    item.pastMax,
    item.futureMin,
    item.futureMax
  ]).filter((value) => Number.isFinite(value));
  const maxValue = Math.max(...values) + 3;
  const minValue = Math.min(...values) - 3;
  const pad = drawAxes(ctx, width, height, maxValue, labels, "Temperature (°C)", minValue);
  const plotWidth = width - pad.left - pad.right;
  const plotHeight = height - pad.top - pad.bottom;

  drawLegend(ctx, [
    { label: "Past 7d min", color: "#5b9bd5", dashed: true },
    { label: "Past 7d max", color: "#c00000", dashed: true },
    { label: "Future min", color: "#5b9bd5", dashed: false },
    { label: "Future max", color: "#c00000", dashed: false }
  ], pad.left, 24, plotWidth);

  function pointFor(item, value) {
    const index = chartData.indexOf(item);
    const x = pad.left + (plotWidth * (index + 0.5)) / chartData.length;
    const y = height - pad.bottom - ((value - minValue) / (maxValue - minValue)) * plotHeight;
    return { x, y, date: item.date, value };
  }

  const pastMin = chartData.filter((item) => Number.isFinite(item.pastMin)).map((item) => pointFor(item, item.pastMin));
  const pastMax = chartData.filter((item) => Number.isFinite(item.pastMax)).map((item) => pointFor(item, item.pastMax));
  const futureMin = chartData.filter((item) => Number.isFinite(item.futureMin)).map((item) => pointFor(item, item.futureMin));
  const futureMax = chartData.filter((item) => Number.isFinite(item.futureMax)).map((item) => pointFor(item, item.futureMax));

  drawLine(ctx, pastMin, "#5b9bd5", true);
  drawLine(ctx, pastMax, "#c00000", true);
  drawLine(ctx, futureMin, "#5b9bd5", false);
  drawLine(ctx, futureMax, "#c00000", false);

  [
    ["Past 7d min", pastMin],
    ["Past 7d max", pastMax],
    ["Future min", futureMin],
    ["Future max", futureMax]
  ].forEach(([label, points]) => {
    points.forEach((point) => {
      chartHoverTargets.tempChart.push({
        kind: "point",
        x: point.x,
        y: point.y,
        radius: 9,
        tooltip: `<strong>${formatDateLabel(point.date)}</strong><br>${label}: ${point.value.toFixed(1)} °C`
      });
    });
  });
}

function average(values) {
  const valid = values.filter((value) => Number.isFinite(value));
  if (!valid.length) return 0;
  return valid.reduce((sum, value) => sum + value, 0) / valid.length;
}

function updateForecastInsights() {
  const next7Rain = forecastTableData
    .map((row) => row.rainMm)
    .filter((value) => Number.isFinite(value));
  const secondWeekRain = secondWeekForecastTableData
    .map((row) => row.rainMm)
    .filter((value) => Number.isFinite(value));
  const next7RainTotal = next7Rain.reduce((sum, value) => sum + value, 0);
  const next14RainTotal = [...next7Rain, ...secondWeekRain].reduce((sum, value) => sum + value, 0);
  const futureRain = getExtendedPrecipData().filter((item) => item.type === "future");
  const pastRain = precipData.filter((item) => item.type === "past");
  const pastRainTotal = pastRain.reduce((sum, item) => sum + item.value, 0);
  const wettestDay = futureRain.reduce((wettest, item) => (
    item.value > wettest.value ? item : wettest
  ), futureRain[0]);

  document.getElementById("rainTotal").textContent = `${next7RainTotal.toFixed(1)} mm expected in the next 7 days`;
  document.getElementById("rainWettest").textContent = `${next14RainTotal.toFixed(1)} mm expected in the next 14 days. Wettest forecast day: ${formatDateLabel(wettestDay.date)} (${wettestDay.value.toFixed(1)} mm).`;

  const futureMins = tempData.map((item) => item.futureMin).filter((value) => Number.isFinite(value));
  const futureMaxes = tempData.map((item) => item.futureMax).filter((value) => Number.isFinite(value));
  const coldestMin = Math.min(...futureMins);
  const hottestMax = Math.max(...futureMaxes);
  const maxWind = Math.max(...forecastRiskData.map((item) => item.wind));
  const highRainDay = forecastRiskData.find((item) => item.rain >= 10 || item.rainProbability >= 80);
  const riskBadges = [
    {
      label: highRainDay ? `Rain risk ${formatDateLabel(highRainDay.date)}` : "Low rain risk",
      warning: Boolean(highRainDay)
    },
    {
      label: coldestMin <= 2 ? "Frost risk" : "No frost risk",
      warning: coldestMin <= 2
    },
    {
      label: hottestMax >= 30 ? "Heat risk" : "No heat risk",
      warning: hottestMax >= 30
    },
    {
      label: maxWind >= 30 ? `High wind ${maxWind.toFixed(1)} km/h` : "Winds moderate",
      warning: maxWind >= 30
    }
  ];
  document.getElementById("riskBadges").innerHTML = riskBadges.map((badge) => (
    `<span class="risk-badge ${badge.warning ? "warning" : "clear"}">${badge.label}</span>`
  )).join("");

  const pastAvgTemp = average(tempData.map((item) => (
    Number.isFinite(item.pastMin) && Number.isFinite(item.pastMax)
      ? (item.pastMin + item.pastMax) / 2
      : NaN
  )));
  const next7AvgTemp = average(forecastTableData.map((item) => (
    Number.isFinite(item.minTemp) && Number.isFinite(item.maxTemp)
      ? (item.minTemp + item.maxTemp) / 2
      : NaN
  )));
  const next14AvgTemp = average([...forecastTableData, ...secondWeekForecastTableData].map((item) => (
    Number.isFinite(item.minTemp) && Number.isFinite(item.maxTemp)
      ? (item.minTemp + item.maxTemp) / 2
      : NaN
  )));
  const next7TempDelta = next7AvgTemp - pastAvgTemp;
  const next14TempDelta = next14AvgTemp - pastAvgTemp;

  document.getElementById("comparisonTemp").textContent = `Next 7 days will be ${Math.abs(next7TempDelta).toFixed(1)} °C ${next7TempDelta >= 0 ? "warmer" : "cooler"} than the past 7 days.`;
  document.getElementById("comparisonRain").textContent = `Next 14 days will be ${Math.abs(next14TempDelta).toFixed(1)} °C ${next14TempDelta >= 0 ? "warmer" : "cooler"} than the past 7 days.`;
}

async function submitSignup(email) {
  if (!SIGNUP_ENDPOINT) {
    const subject = encodeURIComponent("Zentra weekly report signup");
    const body = encodeURIComponent(`Please add this email to the Zentra weekly report list:\n\n${email}`);
    window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`;
    return "Your email app should open with a prepared request.";
  }

  const response = await fetch(SIGNUP_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source: "zentra-dashboard" })
  });

  if (!response.ok) {
    throw new Error("Signup request failed.");
  }
  return "Thanks. Your request was submitted.";
}

document.getElementById("signupForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = document.getElementById("formMessage");
  const email = new FormData(form).get("email");
  message.className = "form-message";
  message.textContent = "Submitting...";

  try {
    const result = await submitSignup(email);
    message.classList.add("success");
    message.textContent = result;
    form.reset();
  } catch (error) {
    message.classList.add("error");
    message.textContent = "The request could not be submitted. Please try again.";
  }
});

document.getElementById("togglePreview").addEventListener("click", (event) => {
  const preview = document.getElementById("emailPreview");
  const compact = preview.classList.toggle("compact");
  event.currentTarget.textContent = compact ? "Full view" : "Compact view";
  event.currentTarget.setAttribute("aria-expanded", String(!compact));
});

function displayValue(value, suffix = "") {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "";
  }
  return `${value}${suffix}`;
}

function renderReportMetadata() {
  const metaRunTime = document.getElementById("metaRunTime");
  const metaHistoricalPeriod = document.getElementById("metaHistoricalPeriod");
  const metaForecastPeriod = document.getElementById("metaForecastPeriod");

  if (metaRunTime) {
    metaRunTime.textContent = dashboardUpdatedAt;
  }

  if (metaHistoricalPeriod) {
    const firstDate = historicalSummaryData[0]?.date;
    const lastDate = historicalSummaryData[historicalSummaryData.length - 1]?.date;
    metaHistoricalPeriod.textContent = firstDate && lastDate
      ? `${firstDate} to ${lastDate} - ${historicalSummaryData.length} days`
      : "--";
  }

  if (metaForecastPeriod) {
    const forecastRows = [...forecastTableData, ...secondWeekForecastTableData];
    const firstDate = forecastRows[0]?.date;
    const lastDate = forecastRows[forecastRows.length - 1]?.date;
    metaForecastPeriod.textContent = firstDate && lastDate
      ? `${firstDate} to ${lastDate} - ${forecastRows.length} days`
      : "--";
  }
}

function renderDataTables() {
  const historicalBody = document.getElementById("historicalSummaryBody");
  if (historicalBody) {
    historicalBody.innerHTML = historicalSummaryData.map((row) => `
      <tr>
        <td>${row.date}</td>
        <td>${displayValue(row.minTemp)}</td>
        <td>${displayValue(row.maxTemp)}</td>
        <td>${displayValue(row.precipitation)}</td>
        <td>${displayValue(row.solarRadiation)}</td>
        <td>${displayValue(row.windSpeed)}</td>
      </tr>
    `).join("");
  }

  const forecastBody = document.getElementById("forecastTableBody");
  if (forecastBody) {
    forecastBody.innerHTML = forecastTableData.map((row) => `
      <tr>
        <td>${row.date}</td>
        <td>${row.condition}</td>
        <td>${displayValue(row.maxTemp)}</td>
        <td>${displayValue(row.minTemp)}</td>
        <td>${displayValue(row.rainMm)}</td>
        <td>${displayValue(row.rainProbability, "%")}</td>
        <td>${displayValue(row.windKmh)}</td>
      </tr>
    `).join("");
  }

  const secondWeekForecastBody = document.getElementById("secondWeekForecastTableBody");
  if (secondWeekForecastBody) {
    secondWeekForecastBody.innerHTML = secondWeekForecastTableData.length
      ? secondWeekForecastTableData.map((row) => `
      <tr>
        <td>${row.date}</td>
        <td>${row.condition}</td>
        <td>${displayValue(row.maxTemp)}</td>
        <td>${displayValue(row.minTemp)}</td>
        <td>${displayValue(row.rainMm)}</td>
        <td>${displayValue(row.rainProbability, "%")}</td>
        <td>${displayValue(row.windKmh)}</td>
      </tr>
    `).join("")
      : '<tr><td colspan="7">Run the Python updater to load the 8-14 day forecast.</td></tr>';
  }
}

function tableToRows(table) {
  return Array.from(table.querySelectorAll("tr")).map((row) => (
    Array.from(row.querySelectorAll("th, td")).map((cell) => cell.textContent.trim())
  ));
}

function downloadSummaryWorkbook() {
  if (typeof XLSX === "undefined") {
    alert("The XLSX download library is still loading. Please try again in a moment.");
    return;
  }

  const tables = document.querySelectorAll(".data-table");
  const pastSummaryTable = tables[0];
  const forecastTable = document.querySelector(".forecast-table");
  const secondWeekForecastTable = document.querySelector(".second-week-forecast-table");
  const workbook = XLSX.utils.book_new();

  if (pastSummaryTable) {
    const pastSheet = XLSX.utils.aoa_to_sheet(tableToRows(pastSummaryTable));
    XLSX.utils.book_append_sheet(workbook, pastSheet, "Past Summary");
  }

  if (forecastTable) {
    const forecastSheet = XLSX.utils.aoa_to_sheet(tableToRows(forecastTable));
    XLSX.utils.book_append_sheet(workbook, forecastSheet, "Forecast");
  }

  if (secondWeekForecastTable) {
    const secondWeekForecastSheet = XLSX.utils.aoa_to_sheet(tableToRows(secondWeekForecastTable));
    XLSX.utils.book_append_sheet(workbook, secondWeekForecastSheet, "Forecast 8-14");
  }

  XLSX.writeFile(workbook, "zentra_summary_tables.xlsx");
}

document.getElementById("downloadSummary").addEventListener("click", downloadSummaryWorkbook);

function drawCharts() {
  drawPrecipChart();
  drawTempChart();
}

setupChartHover(document.getElementById("precipChart"));
setupChartHover(document.getElementById("tempChart"));

function initSensorMap() {
  const mapElement = document.getElementById("sensorMap");
  if (!mapElement || typeof L === "undefined") {
    return;
  }

  const map = L.map(mapElement, {
    scrollWheelZoom: false
  }).setView([SENSOR_LATITUDE, SENSOR_LONGITUDE], 14);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([SENSOR_LATITUDE, SENSOR_LONGITUDE])
    .addTo(map)
    .bindPopup("<strong>ATMOS-41 (z6-27971)</strong>")
    .openPopup();
}

window.addEventListener("resize", drawCharts);
renderReportMetadata();
renderDataTables();
drawCharts();
updateForecastInsights();
initSensorMap();

import plotly.graph_objects as go
import pandas as pd

mapbox_access_token = open(".mapbox_token").read()

text = []
#file = open("High-School-Data.csv", "r")
#reader = csv.reader(file)
data = pd.read_csv("High-School-Data.csv")
lats = data["Latitute"].tolist()
longs = data["Longitude"].tolist()

fig = go.Figure(go.Scattermapbox(
        lat = lats,
        lon = longs,
        mode='markers',
        marker=go.scattermapbox.Marker(size=9),
        for line in reader:
                text.append(line[2])
))

fig.update_layout(
    autosize=True,
    hovermode='closest',
    mapbox=go.layout.Mapbox(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=go.layout.mapbox.Center(
            lat=40.73
            lon=-73.96
        ),
        pitch=0,
        zoom=10
    ),
)



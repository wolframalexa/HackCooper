import plotly.graph_objects as go
import pandas as pd
import plotly.express as px

import plotly.io as pio

mapbox_access_token = open(".mapbox_token").read()


data = pd.read_csv("High-School-Data.csv")
data.dropna(subset=["College Readiness Index"], inplace=True)
data.to_csv("High-School-Data.csv")

lats = data["Latitude"].tolist()
longs = data["Longitude"].tolist()
names = data["School Name"].tolist()

fig = go.Figure(px.scatter_mapbox(data,
        lat = "Latitude",
        lon = "Longitude",
	color = 'Diversity',
	size = 'College Persistance',
	color_continuous_scale = px.colors.sequential,
	size_max = 15,
	zoom = 10,
        text = "School Name",
))

fig.update_layout(
    autosize=True,
    hovermode='closest',
    mapbox=go.layout.Mapbox(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=go.layout.mapbox.Center(
            lat=40.73,
            lon=-73.96,
        ),
        pitch=0,
        zoom=10
    ),
    width = None,
    height = None
)
pio.write_html(fig, file = "hello_world.html", auto_open=True)
fig.show()

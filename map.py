import plotly.graph_objects as go
import csv

mapbox_access_token = open(".mapbox_token").read()


fig = go.Figure(go.Scattermapbox(
	lat = []
	lon = []
	text = []
	file = open("High-School-Data.csv", "r")
	reader = csv.reader(file)
	for i in range(0, 477):
		#READ LATITUDES AND LONGITUDES		        
		lat.append(#latitude)
		lon.append(#longitude)
		text.append(#HS Name)
	mode='markers',
	marker=go.scattermapbox.Marker(size=9),
))

fig.update_layout(
    autosize=True,
    hovermode='closest',
    mapbox=go.layout.Mapbox(
        accesstoken=mapbox_access_token,
        bearing=0,
        center=go.layout.mapbox.Center(
            lat=38.92,
            lon=-77.07
        ),
        pitch=0,
        zoom=10
    ),
)

fig.show()

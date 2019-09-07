import plotly.graph_objects as go
import csv

mapbox_access_token = open(".mapbox_token").read()


fig = go.Figure(go.Scattermapbox(
	lat = []
	lon = []
	text = []
	file = open("High-School-Data.csv", "r")
	reader = csv.reader(file)
	for idx,line in reader:
		if idx>0:
			#READ LATITUDES AND LONGITUDES		        
			lat.append(line[9])
			lon.append(line[10])
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

fig.show()

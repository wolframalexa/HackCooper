#Code is a placeholder for now

import plotly.express as px


gapminder = px.data.gapminder().query("year==2007")
fig = px.scatter_geo(gapminder, locations="iso_alpha", color="continent",
                     hover_name="country", size="pop",
                     projection="natural earth")
fig.show()



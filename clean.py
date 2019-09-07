import pandas as pd

data = pd.read_csv("High-School-Data.csv")
data.dropna(subset = ["College Readiness Index"], inplace = True)
data.to_csv("new.csv")

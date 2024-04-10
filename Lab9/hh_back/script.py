from api.models import Company, Vacancy

# List of real-life company names
company_names = [
    "Google",
    "Apple",
    "Microsoft",
    "Amazon",
    "Facebook",
    "Tesla",
    "Netflix",
    "Uber",
    "Airbnb",
    "Salesforce"
]

# Create 10 placeholder companies using real company names
for name in company_names:
    Company.objects.create(
        name=name,
        description=f'Description for {name}',
        city='Silicon Valley',  # Assuming all companies are based in Silicon Valley for simplicity
        address='Silicon Valley, California, USA'  # Assuming all companies have the same address for simplicity
    )


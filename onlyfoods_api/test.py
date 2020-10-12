#python3 manage.py tenant_command createsuperuser --schema=test
#./manage.py shell < myscript.py
from tenant.models import Client, Domain

# # create your public tenant
# tenant = Tenant(schema_name='public',
#                 name='Hyperfoods Inc.',
#                 paid_until='2020-12-12',
#                 on_trial=False)
# tenant.save()

# # Add one or more domains for the tenant
# domain = Domain()
# domain.domain = 'hyperfoods.azurewebsites.net' # don't add your port or www here! on a local server you'll want to use localhost here
# domain.tenant = tenant
# domain.is_primary = True
# domain.save()

tenant = Client(schema_name='lospolloshermanos',
                name='Pollos hermanos Inc.',
                paid_until='2020-12-12',
                on_trial=True)
Client.save()

# Add one or more domains for the tenant
domain = Domain()
domain.domain = 'lospolloshermanos.onlyfoods.digital' # don't add your port or www here! on a local server you'll want to use localhost here
domain.tenant = Client
domain.is_primary = True
domain.save()
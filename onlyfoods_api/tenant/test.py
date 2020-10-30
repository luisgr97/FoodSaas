from .models import Client, Domain, Plan

plan = Plan(name='Premium')
plan.save()

tenant = Client(schema_name='kokoriko',
                name='kokoriko',
                paid_until='2020-12-05',
                on_trial=False,
                plan=plan)
tenant.save()

domain = Domain()
domain.domain = 'kokoriko.localhost' # don't add your port or www here! on a local server you'll want to use localhost here
domain.tenant = tenant
domain.is_primary = True
domain.save()

tenant1 = Client(schema_name='dominos',
                name='dominos',
                paid_until='2020-12-05',
                on_trial=False,
                plan=plan)
tenant1.save()

domain1 = Domain()
domain1.domain = 'dominos.localhost' # don't add your port or www here! on a local server you'll want to use localhost here
domain1.tenant = tenant1
domain1.is_primary = True
domain1.save()
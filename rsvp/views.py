# rsvp/views.py
from django.shortcuts import render, redirect
from .forms import RSVPForm
from .models import RSVP

def rsvp_view(request):
    message = None
    if request.method == 'POST':
        form = RSVPForm(request.POST)
        if form.is_valid():
            form.save()
            response = form.cleaned_data['response']
            if response == 'NO':
                message = "Lets do we have some great food and drinks 😂"
            else:
                message = "Please come to the gym before 7:00."'\n' "Pasie jarur lana 😂"
               
    else:
        form = RSVPForm()

    yes_count = RSVP.objects.filter(response='YES').count()
    no_count = RSVP.objects.filter(response='NO').count()
    yes_names = RSVP.objects.filter(response='YES').values_list('name', flat=True)
    no_names = RSVP.objects.filter(response='NO').values_list('name', flat=True)
    return render(request, 'rsvp/rsvp.html', {'form': form, 'message': message, 'yes_count': yes_count, 'no_count': no_count, 'yes_names': yes_names, 'no_names': no_names})

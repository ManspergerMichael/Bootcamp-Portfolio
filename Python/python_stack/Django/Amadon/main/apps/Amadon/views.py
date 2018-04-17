from django.shortcuts import render, redirect

# Create your views here.
def cart(request):
    return render(request, "cart.html")

def buy(request):
    if 'totalItems' and 'totalSpent' not in request.session:
        request.session['totalItems'] = 0
        request.session['totalSpent'] = 0
        request.session['orderPrice'] = 0

    print request.POST['quantity']
    print request.POST['price']
    orderPrice = int(request.POST['quantity']) * float(request.POST['price'])
    print orderPrice
    request.session['totalItems'] += int(request.POST['quantity'])
    request.session['totalSpent'] += float(request.POST['price'])
    request.session['orderPrice'] = orderPrice
    request.session.modified = True
    return redirect("Amadon/checkout")
def checkout(request):
    return render(request, "checkout.html")

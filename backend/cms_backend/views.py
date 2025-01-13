from django.http import HttpResponse

def home(request):
    return HttpResponse("""
        <h1>Welcome to the PectoCMS Backend</h1>
        <p>Use the <a href="/admin/">Admin Panel</a> to manage data.</p>
        <p>API is available at <a href="/api/words/">/api/words/</a></p>
    """)

import http.server
import socketserver
import webbrowser
import threading
import os
import sys
import mimetypes



PORT = 5000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Explicitly register standard MIME types to override potential broken Windows Registry mappings
mimetypes.init()
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/png', '.png')
mimetypes.add_type('image/jpeg', '.jpg')
mimetypes.add_type('image/jpeg', '.jpeg')
mimetypes.add_type('text/html', '.html')

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        # Route clean URL requests to actual HTML files in the services folder
        if self.path == '/services/web-development':
            self.path = '/services/web-development.html'
        elif self.path == '/services/mobile-app-development':
            self.path = '/services/mobile-app-development.html'
        elif self.path == '/services/social-media-management':
            self.path = '/services/social-media-management.html'
        return super().do_GET()

    def guess_type(self, path):
        """Override to guarantee correct Content-Type response headers on all OS environments."""
        if path.endswith('.js'):
            return 'application/javascript'
        elif path.endswith('.css'):
            return 'text/css'
        elif path.endswith('.svg'):
            return 'image/svg+xml'
        elif path.endswith('.html'):
            return 'text/html'
        return super().guess_type(path)

    def end_headers(self):
        """Add security headers and ensure no caching for development convenience."""
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    # Allow port reuse to prevent address-already-in-use errors
    socketserver.TCPServer.allow_reuse_address = True
    try:
        if hasattr(sys.stdout, 'reconfigure'):
            sys.stdout.reconfigure(encoding='utf-8')
            sys.stderr.reconfigure(encoding='utf-8')
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("\n" + "="*50)
            print("ElavateX Premium Local Dev Server Active!")
            print(f"Serving folder: {DIRECTORY}")
            print(f"Local URL:      http://localhost:{PORT}")
            print("Press Ctrl+C to terminate the server.")
            print("="*50 + "\n")
            httpd.serve_forever()
    except Exception as e:
        print(f"Failed to start server: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    # Open default web browser after 1 second delay
    threading.Timer(1.0, lambda: webbrowser.open(f"http://localhost:{PORT}/services/social-media-management.html")).start()
    
    try:
        start_server()
    except KeyboardInterrupt:
        print("\nServer shutdown. See you soon!")
        sys.exit(0)

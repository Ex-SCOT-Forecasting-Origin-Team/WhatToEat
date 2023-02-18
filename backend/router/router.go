package router

import (
	"backend/views"
	"net/http"

	"github.com/savsgio/atreugo/v11"
)

type Route struct {
	HTTPMethod string
	URLPath string
	URLHandler atreugo.View
}

var routes = []Route {
	{ "GET", "/accounts/create/", views.GetUsers },
}

// Creates a new instance of Atreugo Server: https://pkg.go.dev/github.com/savsgio/atreugo/v11#New
// Port 443 is a virtual port that computers use to divert network traffic. :
func New() *atreugo.Atreugo {
	router := atreugo.New(atreugo.Config{
		Addr: ":443",
		TLSEnable: true,
		CertKey: "/etc/ssl/private/selfsigned.key",
		CertFile: "/etc/ssl/certs/selfsigned.cert",
		Reuseport: true,
	})
	router.RedirectTrailingSlash(true)
	
	for _, route := range routes {
		router.Path(route.HTTPMethod, route.URLPath, route.URLHandler)
	}

	return router
}

// Redirects all HTTP requests to the HTTPS server.
// Port 80 is the port number assigned to HTTP.
// It is the default network port used to send and receive unencrypted web pages.
func Redirect() *atreugo.Atreugo {
	return atreugo.New(atreugo.Config{
		Addr: ":80",
		Reuseport: true,
		NotFoundView: func(context *atreugo.RequestCtx) error {
			views.LogHTTP(http.StatusPermanentRedirect, context)
			return context.RedirectResponse("https://" + string(context.Host()) + string(context.RequestURI()), http.StatusPermanentRedirect)
		},
	})
}

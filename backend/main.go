package main

import(
	"log"
	"backend/router"
	"backend/views"
)

func main() {
	views.New()
	// For redirecting HTTP to HTTPS
	go func() { log.Fatal(router.Redirect().ListenAndServe()) } ()
	// For serving HTTPS web server
	log.Fatal(router.New().ListenAndServe())
}

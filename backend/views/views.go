package views

import (
	"context"
	"log"
	"net/http"

	"github.com/savsgio/atreugo/v11"
	"github.com/jackc/pgx/v4/pgxpool"
)

type UserInfo struct {
	Username string `json:"username"`
	Password string `json:"password"`
	Address  string `json:"address"`
}

var emptyJSON = struct {
	Empty *string `json:"-"`
}{}

func LogHTTP(status int, ctx *atreugo.RequestCtx) {
	log.Println("[ATR] |", status, `|`, ctx.RemoteAddr().String(), `|`, string(ctx.Method()), string(ctx.RequestURI()))
}

// Initializing an emtpy context
var ctx = context.Background()
var whattoeatDB *pgxpool.Pool

// The New() function instantiates a new views by allocating a pool of open connections to our PostgreSQL whattoeatdb database.
// Maintaining a pool of open connections avoids the cost of opening and closing a connection on every database operation.
func New() {
	var err error
	const (
		psqlUser = "eater"
		psqlPassword = "whattoeat"
		psqlDB = "whattoeatdb"
	)

	whattoeatDB, err = pgxpool.Connect(ctx, "host=localhost user=" + psqlUser + " password=" + psqlPassword + " dbname=" + psqlDB)
	if err != nil {
		panic(err)
	}
}

func GetUsers(requestCtx * atreugo.RequestCtx) error {
	var users [][]any
	var userInfo UserInfo

	rows, err := whattoeatDB.Query(ctx, `SELECT username FROM whattoeat`)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	for rows.Next() {
		rows.Scan(&userInfo.Username)
		users = append(users, []any{userInfo.Username})
	}

	LogHTTP(http.StatusOK, requestCtx)
	return requestCtx.JSONResponse(map[string][][]any{"users": users}, http.StatusOK)
}



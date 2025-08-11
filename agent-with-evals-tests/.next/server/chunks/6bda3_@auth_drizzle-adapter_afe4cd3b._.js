module.exports = {

"[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/mysql.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MySqlDrizzleAdapter": ()=>MySqlDrizzleAdapter,
    "defineTables": ()=>defineTables
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$int$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/columns/int.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/columns/timestamp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/columns/varchar.js [app-route] (ecmascript)");
;
;
function defineTables(schema = {}) {
    const usersTable = schema.usersTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mysqlTable"])("user", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id", {
            length: 255
        }).primaryKey().$defaultFn(()=>crypto.randomUUID()),
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("name", {
            length: 255
        }),
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("email", {
            length: 255
        }).unique(),
        emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("emailVerified", {
            mode: "date",
            fsp: 3
        }),
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("image", {
            length: 255
        })
    });
    const accountsTable = schema.accountsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mysqlTable"])("account", {
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("userId", {
            length: 255
        }).notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("type", {
            length: 255
        }).$type().notNull(),
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("provider", {
            length: 255
        }).notNull(),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("providerAccountId", {
            length: 255
        }).notNull(),
        refresh_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("refresh_token", {
            length: 255
        }),
        access_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("access_token", {
            length: 255
        }),
        expires_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$int$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["int"])("expires_at"),
        token_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("token_type", {
            length: 255
        }),
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("scope", {
            length: 255
        }),
        id_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("id_token", {
            length: 2048
        }),
        session_state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("session_state", {
            length: 255
        })
    }, (account)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    account.provider,
                    account.providerAccountId
                ]
            })
        }));
    const sessionsTable = schema.sessionsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mysqlTable"])("session", {
        sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("sessionToken", {
            length: 255
        }).primaryKey(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("userId", {
            length: 255
        }).notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires", {
            mode: "date"
        }).notNull()
    });
    const verificationTokensTable = schema.verificationTokensTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mysqlTable"])("verificationToken", {
        identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("identifier", {
            length: 255
        }).notNull(),
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("token", {
            length: 255
        }).notNull(),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires", {
            mode: "date"
        }).notNull()
    }, (verficationToken)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    verficationToken.identifier,
                    verficationToken.token
                ]
            })
        }));
    const authenticatorsTable = schema.authenticatorsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mysqlTable"])("authenticator", {
        credentialID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("credentialID", {
            length: 255
        }).notNull().unique(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("userId", {
            length: 255
        }).notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("providerAccountId", {
            length: 255
        }).notNull(),
        credentialPublicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("credentialPublicKey", {
            length: 255
        }).notNull(),
        counter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$int$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["int"])("counter").notNull(),
        credentialDeviceType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("credentialDeviceType", {
            length: 255
        }).notNull(),
        credentialBackedUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("credentialBackedUp").notNull(),
        transports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["varchar"])("transports", {
            length: 255
        })
    }, (authenticator)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    authenticator.userId,
                    authenticator.credentialID
                ]
            })
        }));
    return {
        usersTable,
        accountsTable,
        sessionsTable,
        verificationTokensTable,
        authenticatorsTable
    };
}
function MySqlDrizzleAdapter(client, schema) {
    const { usersTable, accountsTable, sessionsTable, verificationTokensTable, authenticatorsTable } = defineTables(schema);
    return {
        async createUser (data) {
            const { id, ...insertData } = data;
            const hasDefaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableColumns"])(usersTable)["id"]["defaultFn"];
            const [insertedUser] = await client.insert(usersTable).values(hasDefaultId ? insertData : {
                ...insertData,
                id
            }).$returningId();
            return client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, insertedUser ? insertedUser.id : id)).then((res)=>res[0]);
        },
        async getUser (userId) {
            return client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, userId)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async getUserByEmail (email) {
            return client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.email, email)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async createSession (data) {
            await client.insert(sessionsTable).values(data);
            return client.select().from(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, data.sessionToken)).then((res)=>res[0]);
        },
        async getSessionAndUser (sessionToken) {
            return client.select({
                session: sessionsTable,
                user: usersTable
            }).from(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken)).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, sessionsTable.userId)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async updateUser (data) {
            if (!data.id) {
                throw new Error("No user id.");
            }
            await client.update(usersTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, data.id));
            const [result] = await client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, data.id));
            if (!result) {
                throw new Error("No user found.");
            }
            return result;
        },
        async updateSession (data) {
            await client.update(sessionsTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, data.sessionToken));
            return client.select().from(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, data.sessionToken)).then((res)=>res[0]);
        },
        async linkAccount (data) {
            await client.insert(accountsTable).values(data);
        },
        async getUserByAccount (account) {
            const result = await client.select({
                account: accountsTable,
                user: usersTable
            }).from(accountsTable).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.userId, usersTable.id)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, account.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, account.providerAccountId))).then((res)=>res[0]);
            const user = result?.user ?? null;
            return user;
        },
        async deleteSession (sessionToken) {
            await client.delete(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken));
        },
        async createVerificationToken (data) {
            await client.insert(verificationTokensTable).values(data);
            return client.select().from(verificationTokensTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.identifier, data.identifier)).then((res)=>res[0]);
        },
        async useVerificationToken (params) {
            const deletedToken = await client.select().from(verificationTokensTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.identifier, params.identifier), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.token, params.token))).then((res)=>res.length > 0 ? res[0] : null);
            if (deletedToken) {
                await client.delete(verificationTokensTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.identifier, params.identifier), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.token, params.token)));
            }
            return deletedToken;
        },
        async deleteUser (id) {
            await client.delete(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, id));
        },
        async unlinkAccount (params) {
            await client.delete(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, params.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, params.providerAccountId)));
        },
        async getAccount (providerAccountId, provider) {
            return client.select().from(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, providerAccountId))).then((res)=>res[0] ?? null);
        },
        async createAuthenticator (data) {
            await client.insert(authenticatorsTable).values(data);
            return await client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, data.credentialID)).then((res)=>res[0] ?? null);
        },
        async getAuthenticator (credentialID) {
            return await client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).then((res)=>res[0] ?? null);
        },
        async listAuthenticatorsByUserId (userId) {
            return await client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.userId, userId)).then((res)=>res);
        },
        async updateAuthenticatorCounter (credentialID, newCounter) {
            await client.update(authenticatorsTable).set({
                counter: newCounter
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID));
            const authenticator = await client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).then((res)=>res[0]);
            if (!authenticator) throw new Error("Authenticator not found.");
            return authenticator;
        }
    };
}
}),
"[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/pg.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "PostgresDrizzleAdapter": ()=>PostgresDrizzleAdapter,
    "defineTables": ()=>defineTables
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/text.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-route] (ecmascript)");
;
;
function defineTables(schema = {}) {
    const usersTable = schema.usersTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("user", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey().$defaultFn(()=>crypto.randomUUID()),
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name"),
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").unique(),
        emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("emailVerified", {
            mode: "date"
        }),
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image")
    });
    const accountsTable = schema.accountsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("account", {
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("type").$type().notNull(),
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("provider").notNull(),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("providerAccountId").notNull(),
        refresh_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("refresh_token"),
        access_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("access_token"),
        expires_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("expires_at"),
        token_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token_type"),
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("scope"),
        id_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_token"),
        session_state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("session_state")
    }, (account)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    account.provider,
                    account.providerAccountId
                ]
            })
        }));
    const sessionsTable = schema.sessionsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("session", {
        sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("sessionToken").primaryKey(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires", {
            mode: "date"
        }).notNull()
    });
    const verificationTokensTable = schema.verificationTokensTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("verificationToken", {
        identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull(),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timestamp"])("expires", {
            mode: "date"
        }).notNull()
    }, (verificationToken)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    verificationToken.identifier,
                    verificationToken.token
                ]
            })
        }));
    const authenticatorsTable = schema.authenticatorsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pgTable"])("authenticator", {
        credentialID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialID").notNull().unique(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("providerAccountId").notNull(),
        credentialPublicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialPublicKey").notNull(),
        counter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("counter").notNull(),
        credentialDeviceType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialDeviceType").notNull(),
        credentialBackedUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["boolean"])("credentialBackedUp").notNull(),
        transports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("transports")
    }, (authenticator)=>({
            compositePK: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    authenticator.userId,
                    authenticator.credentialID
                ]
            })
        }));
    return {
        usersTable,
        accountsTable,
        sessionsTable,
        verificationTokensTable,
        authenticatorsTable
    };
}
function PostgresDrizzleAdapter(client, schema) {
    const { usersTable, accountsTable, sessionsTable, verificationTokensTable, authenticatorsTable } = defineTables(schema);
    return {
        async createUser (data) {
            const { id, ...insertData } = data;
            const hasDefaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableColumns"])(usersTable)["id"]["hasDefault"];
            return client.insert(usersTable).values(hasDefaultId ? insertData : {
                ...insertData,
                id
            }).returning().then((res)=>res[0]);
        },
        async getUser (userId) {
            return client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, userId)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async getUserByEmail (email) {
            return client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.email, email)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async createSession (data) {
            return client.insert(sessionsTable).values(data).returning().then((res)=>res[0]);
        },
        async getSessionAndUser (sessionToken) {
            return client.select({
                session: sessionsTable,
                user: usersTable
            }).from(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken)).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, sessionsTable.userId)).then((res)=>res.length > 0 ? res[0] : null);
        },
        async updateUser (data) {
            if (!data.id) {
                throw new Error("No user id.");
            }
            const [result] = await client.update(usersTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, data.id)).returning();
            if (!result) {
                throw new Error("No user found.");
            }
            return result;
        },
        async updateSession (data) {
            return client.update(sessionsTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, data.sessionToken)).returning().then((res)=>res[0]);
        },
        async linkAccount (data) {
            await client.insert(accountsTable).values(data);
        },
        async getUserByAccount (account) {
            const result = await client.select({
                account: accountsTable,
                user: usersTable
            }).from(accountsTable).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.userId, usersTable.id)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, account.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, account.providerAccountId))).then((res)=>res[0]);
            const user = result?.user ?? null;
            return user;
        },
        async deleteSession (sessionToken) {
            await client.delete(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken));
        },
        async createVerificationToken (data) {
            return client.insert(verificationTokensTable).values(data).returning().then((res)=>res[0]);
        },
        async useVerificationToken (params) {
            return client.delete(verificationTokensTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.identifier, params.identifier), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.token, params.token))).returning().then((res)=>res.length > 0 ? res[0] : null);
        },
        async deleteUser (id) {
            await client.delete(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, id));
        },
        async unlinkAccount (params) {
            await client.delete(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, params.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, params.providerAccountId)));
        },
        async getAccount (providerAccountId, provider) {
            return client.select().from(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, providerAccountId))).then((res)=>res[0] ?? null);
        },
        async createAuthenticator (data) {
            return client.insert(authenticatorsTable).values(data).returning().then((res)=>res[0] ?? null);
        },
        async getAuthenticator (credentialID) {
            return client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).then((res)=>res[0] ?? null);
        },
        async listAuthenticatorsByUserId (userId) {
            return client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.userId, userId)).then((res)=>res);
        },
        async updateAuthenticatorCounter (credentialID, newCounter) {
            const authenticator = await client.update(authenticatorsTable).set({
                counter: newCounter
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).returning().then((res)=>res[0]);
            if (!authenticator) throw new Error("Authenticator not found.");
            return authenticator;
        }
    };
}
}),
"[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/sqlite.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SQLiteDrizzleAdapter": ()=>SQLiteDrizzleAdapter,
    "defineTables": ()=>defineTables
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sql/expressions/conditions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sqlite-core/columns/integer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sqlite-core/primary-keys.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sqlite-core/table.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sqlite-core/columns/text.js [app-route] (ecmascript)");
;
;
function defineTables(schema = {}) {
    const usersTable = schema.usersTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("user", {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id").primaryKey().$defaultFn(()=>crypto.randomUUID()),
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("name"),
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("email").unique(),
        emailVerified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("emailVerified", {
            mode: "timestamp_ms"
        }),
        image: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("image")
    });
    const accountsTable = schema.accountsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("account", {
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("type").$type().notNull(),
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("provider").notNull(),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("providerAccountId").notNull(),
        refresh_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("refresh_token"),
        access_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("access_token"),
        expires_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("expires_at"),
        token_type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token_type"),
        scope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("scope"),
        id_token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("id_token"),
        session_state: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("session_state")
    }, (account)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    account.provider,
                    account.providerAccountId
                ]
            })
        }));
    const sessionsTable = schema.sessionsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("session", {
        sessionToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("sessionToken").primaryKey(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("expires", {
            mode: "timestamp_ms"
        }).notNull()
    });
    const verificationTokensTable = schema.verificationTokensTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("verificationToken", {
        identifier: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("identifier").notNull(),
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("token").notNull(),
        expires: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("expires", {
            mode: "timestamp_ms"
        }).notNull()
    }, (verficationToken)=>({
            compositePk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    verficationToken.identifier,
                    verficationToken.token
                ]
            })
        }));
    const authenticatorsTable = schema.authenticatorsTable ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$table$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sqliteTable"])("authenticator", {
        credentialID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialID").notNull().unique(),
        userId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("userId").notNull().references(()=>usersTable.id, {
            onDelete: "cascade"
        }),
        providerAccountId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("providerAccountId").notNull(),
        credentialPublicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialPublicKey").notNull(),
        counter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("counter").notNull(),
        credentialDeviceType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("credentialDeviceType").notNull(),
        credentialBackedUp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["integer"])("credentialBackedUp", {
            mode: "boolean"
        }).notNull(),
        transports: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["text"])("transports")
    }, (authenticator)=>({
            compositePK: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$primary$2d$keys$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["primaryKey"])({
                columns: [
                    authenticator.userId,
                    authenticator.credentialID
                ]
            })
        }));
    return {
        usersTable,
        accountsTable,
        sessionsTable,
        verificationTokensTable,
        authenticatorsTable
    };
}
function SQLiteDrizzleAdapter(client, schema) {
    const { usersTable, accountsTable, sessionsTable, verificationTokensTable, authenticatorsTable } = defineTables(schema);
    return {
        async createUser (data) {
            const { id, ...insertData } = data;
            const hasDefaultId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTableColumns"])(usersTable)["id"]["hasDefault"];
            return client.insert(usersTable).values(hasDefaultId ? insertData : {
                ...insertData,
                id
            }).returning().get();
        },
        async getUser (userId) {
            const result = await client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, userId)).get() ?? null;
            return result;
        },
        async getUserByEmail (email) {
            const result = await client.select().from(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.email, email)).get() ?? null;
            return result;
        },
        async createSession (data) {
            return client.insert(sessionsTable).values(data).returning().get();
        },
        async getSessionAndUser (sessionToken) {
            const result = await client.select({
                session: sessionsTable,
                user: usersTable
            }).from(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken)).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, sessionsTable.userId)).get() ?? null;
            return result;
        },
        async updateUser (data) {
            if (!data.id) {
                throw new Error("No user id.");
            }
            const result = await client.update(usersTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, data.id)).returning().get();
            if (!result) {
                throw new Error("User not found.");
            }
            return result;
        },
        async updateSession (data) {
            const result = await client.update(sessionsTable).set(data).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, data.sessionToken)).returning().get();
            return result ?? null;
        },
        async linkAccount (data) {
            await client.insert(accountsTable).values(data).run();
        },
        async getUserByAccount (account) {
            const result = await client.select({
                account: accountsTable,
                user: usersTable
            }).from(accountsTable).innerJoin(usersTable, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.userId, usersTable.id)).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, account.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, account.providerAccountId))).get();
            const user = result?.user ?? null;
            return user;
        },
        async deleteSession (sessionToken) {
            await client.delete(sessionsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(sessionsTable.sessionToken, sessionToken)).run();
        },
        async createVerificationToken (data) {
            return client.insert(verificationTokensTable).values(data).returning().get();
        },
        async useVerificationToken (params) {
            const result = await client.delete(verificationTokensTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.identifier, params.identifier), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(verificationTokensTable.token, params.token))).returning().get();
            return result ?? null;
        },
        async deleteUser (id) {
            await client.delete(usersTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(usersTable.id, id)).run();
        },
        async unlinkAccount (params) {
            await client.delete(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, params.provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, params.providerAccountId))).run();
        },
        async getAccount (providerAccountId, provider) {
            return client.select().from(accountsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.provider, provider), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(accountsTable.providerAccountId, providerAccountId))).then((res)=>res[0] ?? null);
        },
        async createAuthenticator (data) {
            return client.insert(authenticatorsTable).values(data).returning().then((res)=>res[0] ?? null);
        },
        async getAuthenticator (credentialID) {
            return client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).then((res)=>res[0] ?? null);
        },
        async listAuthenticatorsByUserId (userId) {
            return client.select().from(authenticatorsTable).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.userId, userId)).then((res)=>res);
        },
        async updateAuthenticatorCounter (credentialID, newCounter) {
            const authenticator = await client.update(authenticatorsTable).set({
                counter: newCounter
            }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["eq"])(authenticatorsTable.credentialID, credentialID)).returning().then((res)=>res[0]);
            if (!authenticator) throw new Error("Authenticator not found.");
            return authenticator;
        }
    };
}
}),
"[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 *  <p>Official <a href="https://orm.drizzle.team">Drizzle ORM</a> adapter for Auth.js / NextAuth.js.</p>
 *  <a href="https://orm.drizzle.team">
 *   <img style={{display: "block"}} src="/img/adapters/drizzle.svg" width="38" />
 *  </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn
 * npm install drizzle-orm @auth/drizzle-adapter
 * npm install drizzle-kit --save-dev
 * ```
 *
 * @module @auth/drizzle-adapter
 */ __turbopack_context__.s({
    "DrizzleAdapter": ()=>DrizzleAdapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/entity.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/mysql-core/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/pg-core/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/drizzle-orm@0.33.0_@opentelemetry+api@1.9.0_@types+react@18.3.23_better-sqlite3@11.10.0_postgres@3.4.7_react@18.3.1/node_modules/drizzle-orm/sqlite-core/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$mysql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/mysql.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$pg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/pg.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$sqlite$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+drizzle-adapter@1.10.0/node_modules/@auth/drizzle-adapter/lib/sqlite.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
function DrizzleAdapter(db, schema) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(db, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$mysql$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MySqlDatabase"])) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$mysql$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MySqlDrizzleAdapter"])(db, schema);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(db, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PgDatabase"])) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$pg$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PostgresDrizzleAdapter"])(db, schema);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$entity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["is"])(db, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$drizzle$2d$orm$40$0$2e$33$2e$0_$40$opentelemetry$2b$api$40$1$2e$9$2e$0_$40$types$2b$react$40$18$2e$3$2e$23_better$2d$sqlite3$40$11$2e$10$2e$0_postgres$40$3$2e$4$2e$7_react$40$18$2e$3$2e$1$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["BaseSQLiteDatabase"])) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$drizzle$2d$adapter$40$1$2e$10$2e$0$2f$node_modules$2f40$auth$2f$drizzle$2d$adapter$2f$lib$2f$sqlite$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SQLiteDrizzleAdapter"])(db, schema);
    }
    throw new Error(`Unsupported database type (${typeof db}) in Auth.js Drizzle adapter.`);
}
}),

};

//# sourceMappingURL=6bda3_%40auth_drizzle-adapter_afe4cd3b._.js.map
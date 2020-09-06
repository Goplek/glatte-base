var late;
(function (late) {
    class I18 {
        static resolve(str) {
            if (I18.lang in str && !!str[I18.lang]) {
                return str[I18.lang];
            }
            else if (I18.defaultLang in str) {
                return str[I18.defaultLang];
            }
            else if (!I18.lang) {
                console.warn(`No lang specified. Set I18.lang = "en"`);
            }
            else {
                console.warn(`Not found lang "${I18.lang}"`);
            }
        }
    }
    I18.defaultLang = 'en';
    I18.lang = 'en';
    late.I18 = I18;
})(late || (late = {}));
var latte;
(function (latte) {
    var I18 = late.I18;
    class strings {
        static get DataLatte() {
            return I18.resolve({
                "en": "DataLatte",
                "es": "DataLatte"
            });
        }
        static get info() {
            return I18.resolve({
                "en": "Info",
                "es": "Info"
            });
        }
        static get edit() {
            return I18.resolve({
                "en": "Edit",
                "es": "Editar"
            });
        }
        static get save() {
            return I18.resolve({
                "en": "Save",
                "es": "Guardar"
            });
        }
        static get saveAndClose() {
            return I18.resolve({
                "en": "Save and Close",
                "es": "Guardar y Cerrar"
            });
        }
        static get saveAndNew() {
            return I18.resolve({
                "en": "Save and New",
                "es": "Guardar y Nuevo"
            });
        }
        static get selectMonth() {
            return I18.resolve({
                "en": "Select",
                "es": "Seleccionar"
            });
        }
        static get defaultBool() {
            return I18.resolve({
                "en": "Yes/No",
                "es": "Sí/No"
            });
        }
        static get add() {
            return I18.resolve({
                "en": "Add",
                "es": "Agregar"
            });
        }
        static get addNew() {
            return I18.resolve({
                "en": "Add New",
                "es": "Agregar Nuevo"
            });
        }
        static get change() {
            return I18.resolve({
                "en": "Change",
                "es": "Cambiar"
            });
        }
        static get see() {
            return I18.resolve({
                "en": "See",
                "es": "Ver"
            });
        }
        static get newKey() {
            return I18.resolve({
                "en": "new",
                "es": "Nuevo"
            });
        }
        static get listof() {
            return I18.resolve({
                "en": "List of %s",
                "es": "Lista de %s"
            });
        }
        static get ok() {
            return I18.resolve({
                "en": "OK",
                "es": "Aceptar"
            });
        }
        static get cancel() {
            return I18.resolve({
                "en": "Cancel",
                "es": "Cancelar"
            });
        }
        static get selectObject() {
            return I18.resolve({
                "en": "Select Object",
                "es": "Seleccionar objeto"
            });
        }
        static get listOfVar() {
            return I18.resolve({
                "en": "List of (%s)",
                "es": "Lista de (%s)"
            });
        }
        static get pick() {
            return I18.resolve({
                "en": "Pick",
                "es": "Elegir"
            });
        }
        static get createNew() {
            return I18.resolve({
                "en": "Create New",
                "es": "Crear nuevo"
            });
        }
        static get create() {
            return I18.resolve({
                "en": "Create",
                "es": "Crear"
            });
        }
        static get secretPassword() {
            return I18.resolve({
                "en": "(Secret)",
                "es": "(Secreto)"
            });
        }
        static get passphrase() {
            return I18.resolve({
                "en": "Passphrase",
                "es": "Passphrase"
            });
        }
        static get managerDisabled() {
            return I18.resolve({
                "en": "Manager Disabled",
                "es": "Manager Disabled"
            });
        }
        static get managerCheckingEnabled() {
            return I18.resolve({
                "en": "Checking if Manager Enabled",
                "es": "Checking if Manager Enabled"
            });
        }
        static get managerCheckingReady() {
            return I18.resolve({
                "en": "Checking if Manager Ready",
                "es": "Checking if Manager Ready"
            });
        }
        static get managerCheckingLoggedIn() {
            return I18.resolve({
                "en": "Checking if logged in",
                "es": "Checking if logged in"
            });
        }
        static get enterPassphrase() {
            return I18.resolve({
                "en": "Enter Passphrase:",
                "es": "Enter Passphrase:"
            });
        }
        static get managerNotEnabled() {
            return I18.resolve({
                "en": "No passphrase configured. Please create a file named passphrase.php in datalatte-files directory. It must contain a PHP const named PASSPHRASE with the passphrase you wish to use for DataLatte Manager.",
                "es": "No passphrase configured. Please create a file named passphrase.php in datalatte-files directory. It must contain a PHP const named PASSPHRASE with the passphrase you wish to use for DataLatte Manager."
            });
        }
        static get managerNotReady() {
            return I18.resolve({
                "en": "Directory datalatte-files/ must have permissions to write.",
                "es": "Directory datalatte-files/ must have permissions to write."
            });
        }
        static get invalidPassphrase() {
            return I18.resolve({
                "en": "Invalid Passphrase.",
                "es": "Invalid Passphrase."
            });
        }
        static get logout() {
            return I18.resolve({
                "en": "Log Out",
                "es": "Cerrar sesión"
            });
        }
        static get connection() {
            return I18.resolve({
                "en": "Connection",
                "es": "Conexión"
            });
        }
        static get enterConnectionData() {
            return I18.resolve({
                "en": "Enter MYSQL connection data:",
                "es": "Datos de conexión MySQL"
            });
        }
        static get userName() {
            return I18.resolve({
                "en": "User name",
                "es": "Nombre de usuario"
            });
        }
        static get password() {
            return I18.resolve({
                "en": "Password",
                "es": "Contaseña"
            });
        }
        static get host() {
            return I18.resolve({
                "en": "Host",
                "es": "Servidor"
            });
        }
        static get dbName() {
            return I18.resolve({
                "en": "DataBase name",
                "es": "Base de datos"
            });
        }
        static get parametersError() {
            return I18.resolve({
                "en": "Can't establish connection using parameters:",
                "es": "No se puee establecer conexión con los parámetros:"
            });
        }
        static get recordsUpdated() {
            return I18.resolve({
                "en": "Records updated",
                "es": "Registros actualizados"
            });
        }
        static get fieldNotValid() {
            return I18.resolve({
                "en": "The field is not valid",
                "es": "El campo no es válido"
            });
        }
        static get fieldNotNumber() {
            return I18.resolve({
                "en": "The field is not a numeric value",
                "es": "El campo no es numérico"
            });
        }
        static get minValueIsS() {
            return I18.resolve({
                "en": "The minimum value is %s",
                "es": "El valor mínimo es: s%"
            });
        }
        static get maxValueIsS() {
            return I18.resolve({
                "en": "The maximum value is %s",
                "es": "The maximum value is %s"
            });
        }
        static get minLenValueIsS() {
            return I18.resolve({
                "en": "The minimum of characters is %s",
                "es": "Mínimo de caracteres es %s"
            });
        }
        static get maxLenValueIsS() {
            return I18.resolve({
                "en": "The maximum of characters is %s",
                "es": "Máximo de caracteres es %s"
            });
        }
        static get valueNotInteger() {
            return I18.resolve({
                "en": "Value is not an integer number",
                "es": "El valor no es un número entero"
            });
        }
        static get fieldMustHaveValue() {
            return I18.resolve({
                "en": "The field is mandatory. Must have a value.",
                "es": "El campo es obligatoio"
            });
        }
        static get home() {
            return I18.resolve({
                "en": "Home",
                "es": "Inicio"
            });
        }
        static get api() {
            return I18.resolve({
                "en": "API",
                "es": "API"
            });
        }
        static get datalatte() {
            return I18.resolve({
                "en": "DataLatte",
                "es": "DataLatte"
            });
        }
        static get dbConnection() {
            return I18.resolve({
                "en": "Connection",
                "es": "Conexión"
            });
        }
        static get updateRecords() {
            return I18.resolve({
                "en": "Update Records",
                "es": "Actualizar registros"
            });
        }
        static get settings() {
            return I18.resolve({
                "en": "Settings",
                "es": "Ajustes"
            });
        }
        static get cantConnectToServer() {
            return I18.resolve({
                "en": "Can't connect to server %s (user %s)",
                "es": "No se puede conectar al servidor %s (Usuario %s)"
            });
        }
        static get cantSelectDbS() {
            return I18.resolve({
                "en": "Can't select database %s",
                "es": "No se puede seleccionar la base de datos: %s"
            });
        }
        static get errorOnQueryS() {
            return I18.resolve({
                "en": "Error when executing a query: %s <sql>%s</sql>",
                "es": "Error al ejecutar el query: %s <sql>%s</sql>"
            });
        }
        static get greatScott() {
            return I18.resolve({
                "en": "Great Scott! Automatic Initialization througn connection.php failed!",
                "es": "Great Scott! Automatic Initialization through connection.php failed!"
            });
        }
        static get datalatteInitFailed() {
            return I18.resolve({
                "en": "No ConnectionParameters class defined and no datalatte-files/connection.php file. You may configure a connection in /datalatte with your web DetailView.",
                "es": "No ConnectionParameters class defined and no datalatte-files/connection.php file. You may configure a connection in /datalatte with your web DetailView."
            });
        }
        static get loading() {
            return I18.resolve({
                "en": "Loading",
                "es": "Cargando"
            });
        }
        static get saving() {
            return I18.resolve({
                "en": "Saving...",
                "es": "Guardando"
            });
        }
        static get tableData() {
            return I18.resolve({
                "en": "Data",
                "es": "Datos"
            });
        }
        static get tableColumns() {
            return I18.resolve({
                "en": "Columns",
                "es": "Columnas"
            });
        }
        static get insertNow() {
            return I18.resolve({
                "en": "Insert Now",
                "es": "Insertar ahora"
            });
        }
        static get columnName() {
            return I18.resolve({
                "en": "Column Name",
                "es": "Nombre de la columna"
            });
        }
        static get type() {
            return I18.resolve({
                "en": "Type",
                "es": "Tipo"
            });
        }
        static get lengthStr() {
            return I18.resolve({
                "en": "Length",
                "es": "Ancho"
            });
        }
        static get flags() {
            return I18.resolve({
                "en": "Flags",
                "es": "Flags"
            });
        }
        static get strNull() {
            return I18.resolve({
                "en": "Null",
                "es": "Null"
            });
        }
        static get strDefault() {
            return I18.resolve({
                "en": "Default",
                "es": "Default"
            });
        }
        static get extra() {
            return I18.resolve({
                "en": "Extra",
                "es": "Extra"
            });
        }
        static get yes() {
            return I18.resolve({
                "en": "Yes",
                "es": "Sí"
            });
        }
        static get no() {
            return I18.resolve({
                "en": "No",
                "es": "No"
            });
        }
        static get commit() {
            return I18.resolve({
                "en": "Commit",
                "es": "Cometer"
            });
        }
        static get revert() {
            return I18.resolve({
                "en": "Revert",
                "es": "Revertir"
            });
        }
        static get apply() {
            return I18.resolve({
                "en": "Apply",
                "es": "Aplicar"
            });
        }
        static get deleteRow() {
            return I18.resolve({
                "en": "Delete Row",
                "es": "Eliminar renglón"
            });
        }
        static get copy() {
            return I18.resolve({
                "en": "Copy",
                "es": "Copiar"
            });
        }
        static get paste() {
            return I18.resolve({
                "en": "Paste",
                "es": "Pegar"
            });
        }
        static get setAsNull() {
            return I18.resolve({
                "en": "Set as Null",
                "es": "Marcar como Null"
            });
        }
        static get autoIncrement() {
            return I18.resolve({
                "en": "Auto Increment",
                "es": "Auto Incremental"
            });
        }
        static get primaryKey() {
            return I18.resolve({
                "en": "Primary Key",
                "es": "Llave primaria"
            });
        }
        static get createTable() {
            return I18.resolve({
                "en": "Create table",
                "es": "Crear tabla"
            });
        }
        static get tableName() {
            return I18.resolve({
                "en": "Table name",
                "es": "Nombre de la tabla"
            });
        }
        static get dropTable() {
            return I18.resolve({
                "en": "Drop Table",
                "es": "Eliminar tabla"
            });
        }
        static get confirmDropTable() {
            return I18.resolve({
                "en": "Do you want to drop the table %s?",
                "es": "Deseas eliminar la tabla %s?"
            });
        }
        static get php() {
            return I18.resolve({
                "en": "PHP",
                "es": "PHP"
            });
        }
        static get userAgent() {
            return I18.resolve({
                "en": "User Agent",
                "es": "User Agent"
            });
        }
        static get database() {
            return I18.resolve({
                "en": "Database",
                "es": "Base de datos"
            });
        }
        static get app() {
            return I18.resolve({
                "en": "App",
                "es": "App"
            });
        }
        static get query() {
            return I18.resolve({
                "en": "Query",
                "es": "Query"
            });
        }
        static get execute() {
            return I18.resolve({
                "en": "Execute",
                "es": "Ejecutar"
            });
        }
        static get passphraseExplain() {
            return I18.resolve({
                "en": "Please enter the passphrase configured on datalatte-files/",
                "es": "Escribe el passphrase"
            });
        }
        static get errorExecutingQuery() {
            return I18.resolve({
                "en": "Error executing query",
                "es": "Error executing query"
            });
        }
        static get close() {
            return I18.resolve({
                "en": "Close",
                "es": "Cerrar"
            });
        }
        static get secret() {
            return I18.resolve({
                "en": "Secret",
                "es": "Secreto"
            });
        }
        static get writeComment() {
            return I18.resolve({
                "en": "Write Comment",
                "es": "Escribir comentario"
            });
        }
        static get showMoreCommentsS() {
            return I18.resolve({
                "en": "Show more comments (%s)",
                "es": "Mostrar más comentarios (%s)"
            });
        }
        static get uploadingS() {
            return I18.resolve({
                "en": "Uploading %s",
                "es": "Subiendo %s"
            });
        }
        static get uploadingSSPercent() {
            return I18.resolve({
                "en": "Uploading %s %s",
                "es": "Subiendo %s %s"
            });
        }
        static get error() {
            return I18.resolve({
                "en": "Error",
                "es": "Error"
            });
        }
        static get nameStr() {
            return I18.resolve({
                "en": "Name",
                "es": "Nombre"
            });
        }
        static get working() {
            return I18.resolve({
                "en": "Working",
                "es": "Trabajando"
            });
        }
        static get day() {
            return I18.resolve({
                "en": "Day",
                "es": "Día"
            });
        }
        static get week() {
            return I18.resolve({
                "en": "Week",
                "es": "Semana"
            });
        }
        static get workWeek() {
            return I18.resolve({
                "en": "Work Week",
                "es": "Semana laboral"
            });
        }
        static get month() {
            return I18.resolve({
                "en": "Month",
                "es": "Mes"
            });
        }
        static get fullWeek() {
            return I18.resolve({
                "en": "Full Week",
                "es": "Semana completa"
            });
        }
        static get pleaseSelect() {
            return I18.resolve({
                "en": "Select...",
                "es": "Seleccionar..."
            });
        }
        static get askSaveChanges() {
            return I18.resolve({
                "en": "Do you want to save your changes?",
                "es": "¿Deseas guardar los cambios?"
            });
        }
        static get unsavedChanges() {
            return I18.resolve({
                "en": "Unsaved Changes",
                "es": "Cambios sin guardar"
            });
        }
        static get yesSaveChanges() {
            return I18.resolve({
                "en": "Yes, save changes",
                "es": "Sí, guardar cambios"
            });
        }
        static get noIgnoreChanges() {
            return I18.resolve({
                "en": "No, ignore changes",
                "es": "No, ignorar los cambios"
            });
        }
        static get imageUrl() {
            return I18.resolve({
                "en": "Image's URL:",
                "es": "URL Imagen:"
            });
        }
        static get linkUrl() {
            return I18.resolve({
                "en": "Link's URL:",
                "es": " URL Hipervínculo:"
            });
        }
        static get bold() {
            return I18.resolve({
                "en": "Bold",
                "es": "Negrita"
            });
        }
        static get italics() {
            return I18.resolve({
                "en": "Italics",
                "es": "Cursiva"
            });
        }
        static get alignLeft() {
            return I18.resolve({
                "en": "Align left",
                "es": "Alinear a la izquierda"
            });
        }
        static get alignRight() {
            return I18.resolve({
                "en": "Align right",
                "es": "Alienar a la derecha"
            });
        }
        static get alignCenter() {
            return I18.resolve({
                "en": "Center text",
                "es": "Centrar Texto"
            });
        }
        static get alignJustify() {
            return I18.resolve({
                "en": "Justify text",
                "es": "Justificar texto"
            });
        }
        static get indent() {
            return I18.resolve({
                "en": "Indent",
                "es": "Indentar"
            });
        }
        static get outdent() {
            return I18.resolve({
                "en": "Outdent",
                "es": "Des-indentar"
            });
        }
        static get numberedList() {
            return I18.resolve({
                "en": "Numbered list",
                "es": "Lista numerada"
            });
        }
        static get bulletList() {
            return I18.resolve({
                "en": "List",
                "es": "Lista"
            });
        }
        static get eraseFormat() {
            return I18.resolve({
                "en": "Erase format",
                "es": "Borrar formato"
            });
        }
        static get insertImage() {
            return I18.resolve({
                "en": "Insert image",
                "es": "Insertar imagen"
            });
        }
        static get insertLink() {
            return I18.resolve({
                "en": "Insert link",
                "es": "Insertar Hipervínculo"
            });
        }
        static get nextPage() {
            return I18.resolve({
                "en": "Next page",
                "es": "Siguiente página"
            });
        }
        static get previousPage() {
            return I18.resolve({
                "en": "Previous page",
                "es": "Página anterior"
            });
        }
        static get underline() {
            return I18.resolve({
                "en": "Underline",
                "es": "Subrayar"
            });
        }
        static get insertHTML() {
            return I18.resolve({
                "en": "Insert HTML",
                "es": "Insertar HTML"
            });
        }
        static get videoURL() {
            return I18.resolve({
                "en": "Video URL",
                "es": "URL Video"
            });
        }
        static get urlNotYouTube() {
            return I18.resolve({
                "en": "URL is not recognized as YouTube",
                "es": "URL no es reconocido como YouTube"
            });
        }
        static get makeRelease() {
            return I18.resolve({
                "en": "Make Release",
                "es": "Crear Release"
            });
        }
        static get insertYouTube() {
            return I18.resolve({
                "en": "Insert YouTube",
                "es": "Insertar YouTube"
            });
        }
        static get clearText() {
            return I18.resolve({
                "en": "Clear Text",
                "es": "Limpiar texto"
            });
        }
        static get developedBy() {
            return I18.resolve({
                "en": "Developed by Goplek.com",
                "es": "Desarrollado por Goplek.com"
            });
        }
        static get confirmDeleteS() {
            return I18.resolve({
                "en": "Do you want to delete\"%s\"?",
                "es": "¿Desea eliminar \"%s\"?"
            });
        }
        static get cantBeUndone() {
            return I18.resolve({
                "en": "This action can't be undone.",
                "es": "Esta acción no se puede deshacer."
            });
        }
        static get yesDeleteS() {
            return I18.resolve({
                "en": "Yes, delete %s",
                "es": "Sí, eliminar %s"
            });
        }
        static get goToPage() {
            return I18.resolve({
                "en": "Go to page",
                "es": "Ir a página"
            });
        }
        static get refresh() {
            return I18.resolve({
                "en": "Refresh",
                "es": "Actualizar"
            });
        }
        static get switchOn() {
            return I18.resolve({
                "en": "On",
                "es": "Sí"
            });
        }
        static get switchOff() {
            return I18.resolve({
                "en": "Off",
                "es": "No"
            });
        }
        static get flagsNone() {
            return I18.resolve({
                "en": "(None)",
                "es": "(Ninguno)"
            });
        }
        static get nothingToShow() {
            return I18.resolve({
                "en": "Nothing to Show",
                "es": "Nada que mostrar"
            });
        }
        static get jumpToYear() {
            return I18.resolve({
                "en": "Jump to Year",
                "es": "Ir al año"
            });
        }
        static get justNow() {
            return I18.resolve({
                "en": "Now",
                "es": "Ahora"
            });
        }
        static get oneMinuteAgo() {
            return I18.resolve({
                "en": "One minute ago",
                "es": "Hace un minuto"
            });
        }
        static get SMinutesAgo() {
            return I18.resolve({
                "en": "%s minutes ago",
                "es": "Hace %s minutos"
            });
        }
        static get oneHourAgo() {
            return I18.resolve({
                "en": "One hour ago",
                "es": "Hace una hora"
            });
        }
        static get SHoursAgo() {
            return I18.resolve({
                "en": "%s hours ago",
                "es": "Hace %s horas"
            });
        }
        static get yesterday() {
            return I18.resolve({
                "en": "Yesterday",
                "es": "Ayer"
            });
        }
        static get SDaysAgo() {
            return I18.resolve({
                "en": "%s days ago",
                "es": "Hace %s días"
            });
        }
        static get oneWeekAgo() {
            return I18.resolve({
                "en": "One week ago",
                "es": "Hace una semana"
            });
        }
        static get SWeeksAgo() {
            return I18.resolve({
                "en": "%s weeks ago",
                "es": "Hace %s semanas"
            });
        }
        static get oneYearAgo() {
            return I18.resolve({
                "en": "One year ago",
                "es": "Hace un año"
            });
        }
        static get SYearsAgo() {
            return I18.resolve({
                "en": "%s years ago",
                "es": "Hace %s años"
            });
        }
        static get sunday() {
            return I18.resolve({
                "en": "Sunday",
                "es": "Domingo"
            });
        }
        static get monday() {
            return I18.resolve({
                "en": "Monday",
                "es": "Lunes"
            });
        }
        static get tuesday() {
            return I18.resolve({
                "en": "Tuesday",
                "es": "Martes"
            });
        }
        static get wednesday() {
            return I18.resolve({
                "en": "Wednesday",
                "es": "Miércoles"
            });
        }
        static get thursday() {
            return I18.resolve({
                "en": "Thursday",
                "es": "Jueves"
            });
        }
        static get friday() {
            return I18.resolve({
                "en": "Friday",
                "es": "Viernes"
            });
        }
        static get saturday() {
            return I18.resolve({
                "en": "Saturday",
                "es": "Sábado"
            });
        }
        static get sundayShort() {
            return I18.resolve({
                "en": "Sun",
                "es": "Dom"
            });
        }
        static get mondayShort() {
            return I18.resolve({
                "en": "Mon",
                "es": "Lun"
            });
        }
        static get tuesdayShort() {
            return I18.resolve({
                "en": "Tue",
                "es": "Mar"
            });
        }
        static get wednesdayShort() {
            return I18.resolve({
                "en": "Wed",
                "es": "Mié"
            });
        }
        static get thursdayShort() {
            return I18.resolve({
                "en": "Thu",
                "es": "Jue"
            });
        }
        static get fridayShort() {
            return I18.resolve({
                "en": "Fri",
                "es": "Vie"
            });
        }
        static get saturdayShort() {
            return I18.resolve({
                "en": "Sat",
                "es": "Sab"
            });
        }
        static get sundayInitial() {
            return I18.resolve({
                "en": "S",
                "es": "D"
            });
        }
        static get mondayInitial() {
            return I18.resolve({
                "en": "M",
                "es": "L"
            });
        }
        static get tuesdayInitial() {
            return I18.resolve({
                "en": "T",
                "es": "M"
            });
        }
        static get wednesdayInitial() {
            return I18.resolve({
                "en": "W",
                "es": "M"
            });
        }
        static get thursdayInitial() {
            return I18.resolve({
                "en": "T",
                "es": "J"
            });
        }
        static get fridayInitial() {
            return I18.resolve({
                "en": "F",
                "es": "V"
            });
        }
        static get saturdayInitial() {
            return I18.resolve({
                "en": "S",
                "es": "S"
            });
        }
        static get january() {
            return I18.resolve({
                "en": "January",
                "es": "Enero"
            });
        }
        static get february() {
            return I18.resolve({
                "en": "February",
                "es": "Febrero"
            });
        }
        static get march() {
            return I18.resolve({
                "en": "March",
                "es": "Marzo"
            });
        }
        static get april() {
            return I18.resolve({
                "en": "April",
                "es": "Abril"
            });
        }
        static get may() {
            return I18.resolve({
                "en": "May",
                "es": "Mayo"
            });
        }
        static get june() {
            return I18.resolve({
                "en": "June",
                "es": "Junio"
            });
        }
        static get july() {
            return I18.resolve({
                "en": "July",
                "es": "Julio"
            });
        }
        static get august() {
            return I18.resolve({
                "en": "August",
                "es": "Augosto"
            });
        }
        static get september() {
            return I18.resolve({
                "en": "September",
                "es": "Septiembre"
            });
        }
        static get october() {
            return I18.resolve({
                "en": "October",
                "es": "Octubre"
            });
        }
        static get november() {
            return I18.resolve({
                "en": "November",
                "es": "Noviembre"
            });
        }
        static get december() {
            return I18.resolve({
                "en": "December",
                "es": "Diciembre"
            });
        }
        static get januaryShort() {
            return I18.resolve({
                "en": "Jan",
                "es": "Ene"
            });
        }
        static get februaryShort() {
            return I18.resolve({
                "en": "Feb",
                "es": "Feb"
            });
        }
        static get marchShort() {
            return I18.resolve({
                "en": "Mar",
                "es": "Mar"
            });
        }
        static get aprilShort() {
            return I18.resolve({
                "en": "Apr",
                "es": "Abr"
            });
        }
        static get mayShort() {
            return I18.resolve({
                "en": "May",
                "es": "May"
            });
        }
        static get juneShort() {
            return I18.resolve({
                "en": "Jun",
                "es": "Jun"
            });
        }
        static get julyShort() {
            return I18.resolve({
                "en": "Jul",
                "es": "Jul"
            });
        }
        static get augustShort() {
            return I18.resolve({
                "en": "Aug",
                "es": "Ago"
            });
        }
        static get septemberShort() {
            return I18.resolve({
                "en": "Sept",
                "es": "Sep"
            });
        }
        static get octoberShort() {
            return I18.resolve({
                "en": "Oct",
                "es": "Oct"
            });
        }
        static get novemberShort() {
            return I18.resolve({
                "en": "Nov",
                "es": "Nov"
            });
        }
        static get decemberShort() {
            return I18.resolve({
                "en": "Dec",
                "es": "Dic"
            });
        }
        static get januaryInitial() {
            return I18.resolve({
                "en": "J",
                "es": "E"
            });
        }
        static get februaryInitial() {
            return I18.resolve({
                "en": "F",
                "es": "F"
            });
        }
        static get marchInitial() {
            return I18.resolve({
                "en": "M",
                "es": "M"
            });
        }
        static get aprilInitial() {
            return I18.resolve({
                "en": "A",
                "es": "A"
            });
        }
        static get mayInitial() {
            return I18.resolve({
                "en": "M",
                "es": "M"
            });
        }
        static get juneInitial() {
            return I18.resolve({
                "en": "J",
                "es": "J"
            });
        }
        static get julyInitial() {
            return I18.resolve({
                "en": "J",
                "es": "J"
            });
        }
        static get augustInitial() {
            return I18.resolve({
                "en": "A",
                "es": "A"
            });
        }
        static get septemberInitial() {
            return I18.resolve({
                "en": "S",
                "es": "S"
            });
        }
        static get octoberInitial() {
            return I18.resolve({
                "en": "O",
                "es": "O"
            });
        }
        static get novemberInitial() {
            return I18.resolve({
                "en": "N",
                "es": "N"
            });
        }
        static get decemberInitial() {
            return I18.resolve({
                "en": "D",
                "es": "D"
            });
        }
        static get Smillis() {
            return I18.resolve({
                "en": "%s milliseconds",
                "es": "%s milisegundos"
            });
        }
        static get oneSecond() {
            return I18.resolve({
                "en": "1 second",
                "es": "1 segundo"
            });
        }
        static get Sseconds() {
            return I18.resolve({
                "en": "%s seconds",
                "es": "%s segundos"
            });
        }
        static get oneMinute() {
            return I18.resolve({
                "en": "1 minute",
                "es": "1 minuto"
            });
        }
        static get Sminutes() {
            return I18.resolve({
                "en": "%s minutes",
                "es": "%s minutos"
            });
        }
        static get oneHour() {
            return I18.resolve({
                "en": "1 hour",
                "es": "1 hora"
            });
        }
        static get Shours() {
            return I18.resolve({
                "en": "%s hours",
                "es": "%s horas"
            });
        }
        static get oneDay() {
            return I18.resolve({
                "en": "1 day",
                "es": "1 día"
            });
        }
        static get Sdays() {
            return I18.resolve({
                "en": "%s days",
                "es": "%s días"
            });
        }
        static get oneWeek() {
            return I18.resolve({
                "en": "1 week",
                "es": "1 semana"
            });
        }
        static get Sweeks() {
            return I18.resolve({
                "en": "%s weeks",
                "es": "%s semanas"
            });
        }
        static get SmillisShort() {
            return I18.resolve({
                "en": "= %sms",
                "es": "= %sms"
            });
        }
        static get oneSecondShort() {
            return I18.resolve({
                "en": "1s",
                "es": "1s"
            });
        }
        static get SsecondsShort() {
            return I18.resolve({
                "en": "%ss",
                "es": "%ss"
            });
        }
        static get oneMinuteShort() {
            return I18.resolve({
                "en": "1m",
                "es": "1m"
            });
        }
        static get SminutesShort() {
            return I18.resolve({
                "en": "%sm",
                "es": "%sm"
            });
        }
        static get oneHourShort() {
            return I18.resolve({
                "en": "1h",
                "es": "1h"
            });
        }
        static get ShoursShort() {
            return I18.resolve({
                "en": "%sh",
                "es": "%sh"
            });
        }
        static get oneDayShort() {
            return I18.resolve({
                "en": "1d",
                "es": "1d"
            });
        }
        static get SdaysShort() {
            return I18.resolve({
                "en": "%sd",
                "es": "%sd"
            });
        }
        static get oneWeekShort() {
            return I18.resolve({
                "en": "1w",
                "es": "1w"
            });
        }
        static get SweeksShort() {
            return I18.resolve({
                "en": "%sw",
                "es": "%sw"
            });
        }
        static get tomorrow() {
            return I18.resolve({
                "en": "Tomorrow",
                "es": "Mañana"
            });
        }
        static get today() {
            return I18.resolve({
                "en": "Today",
                "es": "Hoy"
            });
        }
        static get nextWeekDayS() {
            return I18.resolve({
                "en": "Next %s",
                "es": "Próximo %s"
            });
        }
        static get SWeeksFromNow() {
            return I18.resolve({
                "en": "%s weeks from now",
                "es": "En %s semanas"
            });
        }
        static get SYearsFromNow() {
            return I18.resolve({
                "en": "%s years from now",
                "es": "En %s años"
            });
        }
        static get oneYearFromNow() {
            return I18.resolve({
                "en": "One year from now",
                "es": "En un año"
            });
        }
        static get reconnecting() {
            return I18.resolve({
                "en": "Reconnecting",
                "es": "Reconectando"
            });
        }
        static get reconnectingInS() {
            return I18.resolve({
                "en": "Reconnecting in %s seconds",
                "es": "Reconnectando en %s segundos"
            });
        }
    }
    latte.strings = strings;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Ajax {
        static get(url, success = null, error = null) {
            var xmlhttp;
            if (window['XMLHttpRequest']) {
                xmlhttp = new XMLHttpRequest();
            }
            else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        if (latte._isFunction(success))
                            success(xmlhttp.responseText);
                    }
                    else {
                        if (latte._isFunction(error))
                            error(latte.sprintf("Error %s: %s", xmlhttp.status, url));
                    }
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
        static post(url, data, success = null, error = null) {
            var req;
            var params = [];
            var query = null;
            if (window['XMLHttpRequest']) {
                req = new XMLHttpRequest();
            }
            else {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            req.onreadystatechange = () => {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        if (latte._isFunction(success))
                            success(req.responseText);
                    }
                    else {
                        if (latte._isFunction(error))
                            error(latte.sprintf("Error %s: %s", req.status, url));
                    }
                }
            };
            var fdata = new FormData();
            for (var i in data) {
                fdata.append(i, data[i]);
            }
            req.open("POST", url);
            try {
                req.send(fdata);
            }
            catch (e) { }
        }
    }
    latte.Ajax = Ajax;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let BindValueType;
    (function (BindValueType) {
        BindValueType[BindValueType["ANY"] = 0] = "ANY";
        BindValueType[BindValueType["NUMBER"] = 1] = "NUMBER";
        BindValueType[BindValueType["BOOLEAN"] = 2] = "BOOLEAN";
        BindValueType[BindValueType["STRING"] = 3] = "STRING";
        BindValueType[BindValueType["DATETIME"] = 4] = "DATETIME";
        BindValueType[BindValueType["TIMESPAN"] = 5] = "TIMESPAN";
    })(BindValueType = latte.BindValueType || (latte.BindValueType = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CancellableCallbackEvent {
        constructor() {
            this._callback = null;
        }
        get callback() {
            return this._callback;
        }
        set callback(value) {
            this._callback = value;
        }
    }
    latte.CancellableCallbackEvent = CancellableCallbackEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Collection {
        constructor(addCallback = null, removeCallback = null, context = null) {
            this.pointer = 0;
            this._context = null;
            this._length = 0;
            if (addCallback) {
                this.addItem.add(addCallback, context);
            }
            if (removeCallback) {
                this.removeItem.add(removeCallback, context);
            }
            this.context = context;
        }
        add(element, raiseEvent = true) {
            let e = new latte.CollectionEvent(element, this.length, true);
            if (e.cancel) {
                return null;
            }
            this[this._length++] = element;
            if (raiseEvent) {
                this.onAddItem(element, this.length);
            }
            return element;
        }
        addArray(elements, raiseEvent = true) {
            if (latte._isArray(elements)) {
                elements.forEach(e => this.add(e));
            }
            return elements;
        }
        addCollection(collection, raiseEvent = true) {
            for (var i = 0; i < collection.length; i++) {
                this.add(collection[i]);
            }
        }
        clear() {
            while (this.length > 0) {
                this.removeAt(0);
            }
        }
        contains(element) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] == element)
                    return true;
            }
            return false;
        }
        correctItems(elements) {
            for (let i = 0; i < this.length; i++)
                delete this[i];
            for (let i = 0; i < elements.length; i++)
                this[i] = elements[i];
            this._length = elements.length;
        }
        each(handler) {
            for (var i = 0; i < this.count; i++) {
                handler.call(this.context, this[i], i);
            }
        }
        eachBut(exclude, handler) {
            for (var i = 0; i < this.count; i++) {
                if (this[i] != exclude)
                    handler.call(this.context, this[i], i);
            }
        }
        indexOf(item) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === item) {
                    return i;
                }
            }
            return -1;
        }
        item(index) {
            return this[index];
        }
        next() {
            if (this.pointer >= this.length) {
                this.pointer = 0;
                return null;
            }
            var elem = this[this.pointer];
            this.pointer++;
            return elem;
        }
        onAddItem(item, index) {
            if (this._addItem) {
                this._addItem.raise(item, index);
            }
        }
        onRemoveItem(item, index) {
            if (this._removeItem) {
                this._removeItem.raise(item, index);
            }
        }
        onRemovingItem(e) {
            if (this._removingItem) {
                this._removingItem.raise(e);
            }
        }
        remove(item, raiseEvent = true) {
            let e = new latte.CollectionEvent(item, -1, true);
            this.onRemovingItem(e);
            if (e.cancel) {
                return null;
            }
            let buffer = [];
            let index = -1;
            let result;
            for (let i = 0; i < this.length; i++) {
                let t = this[i];
                delete this[i];
                if (t === item) {
                    result = item;
                    index = i;
                }
                else {
                    buffer.push(t);
                }
            }
            for (let i = 0; i < buffer.length; i++) {
                this[i] = buffer[i];
            }
            this._length = buffer.length;
            if (index >= 0) {
                if (raiseEvent) {
                    this.onRemoveItem(item, index);
                }
            }
            return result;
        }
        removeAt(index, raiseEvent = true) {
            this.remove(this[index], raiseEvent);
        }
        resetPointer() {
            this.pointer = 0;
        }
        toArray() {
            let a = [];
            this.each(i => a.push(i));
            return a;
        }
        get addingItem() {
            if (!this._addingItem) {
                this._addingItem = new latte.LatteEvent(this);
            }
            return this._addingItem;
        }
        onAddingItem(e) {
            if (this._addingItem) {
                this._addingItem.raise(e);
            }
        }
        get addItem() {
            if (!this._addItem) {
                this._addItem = new latte.LatteEvent(this);
                this._addItem.context = this.context;
            }
            return this._addItem;
        }
        get removeItem() {
            if (!this._removeItem) {
                this._removeItem = new latte.LatteEvent(this);
                this._addItem.context = this.context;
            }
            return this._removeItem;
        }
        get removingItem() {
            if (!this._removingItem) {
                this._removingItem = new latte.LatteEvent(this);
            }
            return this._removingItem;
        }
        get context() {
            return this._context;
        }
        set context(value) {
            this._context = value;
        }
        get count() {
            return this.length;
        }
        get first() {
            return this.length > 0 ? this[0] : null;
        }
        get last() {
            return (this.length > 0 ? this[this.length - 1] : null);
        }
        get length() {
            return this._length;
        }
    }
    latte.Collection = Collection;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CollectionEvent {
        constructor(item, itemIndex = -1, cancellable = false) {
            this._cancel = null;
            this._item = item;
            this._cancellable = cancellable;
            this._itemIndex = itemIndex;
        }
        get cancel() {
            return this._cancel;
        }
        set cancel(value) {
            this._cancel = value;
        }
        get cancellable() {
            return this._cancellable;
        }
        get item() {
            return this._item;
        }
        get itemIndex() {
            return this._itemIndex;
        }
    }
    latte.CollectionEvent = CollectionEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Color {
        constructor(r = 0, g = 0, b = 0, a = 255) {
            this._a = 255;
            this.r = r;
            this.g = g;
            this.b = b;
            this.a = a;
        }
        static fromHex(hexColor) {
            if (latte._isString(hexColor)) {
                if (hexColor.toLowerCase() == 'white') {
                    hexColor = '#FFF';
                }
                if (hexColor.toLowerCase() == 'black') {
                    hexColor = '#000';
                }
                if (hexColor.toLowerCase() == 'gray') {
                    hexColor = '#777';
                }
                if (hexColor.length == 0) {
                    hexColor = '#000';
                }
            }
            if (!latte._isString(hexColor) || hexColor.length == 0)
                throw new latte.InvalidArgumentEx('hexColor', hexColor);
            if (hexColor.charAt(0) == '#')
                hexColor = hexColor.substr(1);
            if (!(hexColor.length == 3 || hexColor.length == 6 || hexColor.length == 9))
                throw new latte.InvalidArgumentEx('hexColor', hexColor);
            var c = new latte.Color();
            var toDecimal = function (hex) { return parseInt(hex, 16); };
            if (hexColor.length == 3) {
                c.r = (toDecimal(hexColor.charAt(0) + hexColor.charAt(0)));
                c.g = (toDecimal(hexColor.charAt(1) + hexColor.charAt(1)));
                c.b = (toDecimal(hexColor.charAt(2) + hexColor.charAt(2)));
            }
            else {
                c.r = (toDecimal(hexColor.charAt(0) + hexColor.charAt(1)));
                c.g = (toDecimal(hexColor.charAt(2) + hexColor.charAt(3)));
                c.b = (toDecimal(hexColor.charAt(4) + hexColor.charAt(5)));
                if (hexColor.length == 9)
                    c.a = (toDecimal(hexColor.charAt(6) + hexColor.charAt(7)));
            }
            return c;
        }
        static cmykToRgb(c, m, y, k) {
            return [
                255 * (1 - c) * (1 - k),
                255 * (1 - m) * (1 - k),
                255 * (1 - y) * (1 - k)
            ];
        }
        static hsvToRgb(h, s, v) {
            var r, g, b;
            var i;
            var f, p, q, t;
            h = Math.max(0, Math.min(360, h));
            s = Math.max(0, Math.min(100, s));
            v = Math.max(0, Math.min(100, v));
            s /= 100;
            v /= 100;
            if (s == 0) {
                r = g = b = v;
                return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
            }
            h /= 60;
            i = Math.floor(h);
            f = h - i;
            p = v * (1 - s);
            q = v * (1 - s * f);
            t = v * (1 - s * (1 - f));
            switch (i) {
                case 0:
                    r = v;
                    g = t;
                    b = p;
                    break;
                case 1:
                    r = q;
                    g = v;
                    b = p;
                    break;
                case 2:
                    r = p;
                    g = v;
                    b = t;
                    break;
                case 3:
                    r = p;
                    g = q;
                    b = v;
                    break;
                case 4:
                    r = t;
                    g = p;
                    b = v;
                    break;
                default:
                    r = v;
                    g = p;
                    b = q;
            }
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        }
        static rgbToCmyk(red, green, blue) {
            var r = red / 255;
            var g = green / 255;
            var b = blue / 255;
            var k = 1 - Math.max(r, g, b);
            var ck = 1 - k;
            return [
                (1 - r - k) / ck,
                (1 - g - k) / ck,
                (1 - b - k) / ck,
                k
            ];
        }
        static rgbToHsv(red, green, blue) {
            var rr, gg, bb;
            var r = red / 255;
            var g = green / 255;
            var b = blue / 255;
            var h = 0;
            var s = 0;
            var v = Math.max(r, g, b);
            var diff = v - Math.min(r, g, b);
            var diffc = (c) => { return (v - c) / 6 / diff + 1 / 2; };
            if (diff == 0) {
                h = s = 0;
            }
            else {
                s = diff / v;
                rr = diffc(r);
                gg = diffc(g);
                bb = diffc(b);
                if (r === v) {
                    h = bb - gg;
                }
                else if (g === v) {
                    h = (1 / 3) + rr - bb;
                }
                else if (b === v) {
                    h = (2 / 3) + gg - rr;
                }
            }
            if (h < 0) {
                h += 1;
            }
            else if (h > 1) {
                h -= 1;
            }
            return [
                Math.round(h * 360),
                Math.round(s * 100),
                Math.round(v * 100)
            ];
        }
        static get black() {
            if (!this._black) {
                this._black = new Color(0, 0, 0);
            }
            return this._black;
        }
        static get white() {
            if (!this._white) {
                this._white = new Color(255, 255, 255);
            }
            return this._white;
        }
        static get red() {
            if (!this._red) {
                this._red = new Color(255, 0, 0);
            }
            return this._red;
        }
        static get green() {
            if (!this._green) {
                this._green = new Color(0, 128, 0);
            }
            return this._green;
        }
        static get blue() {
            if (!this._blue) {
                this._blue = new Color(0, 0, 255);
            }
            return this._blue;
        }
        static get transparent() {
            if (!this._transparent) {
                this._transparent = new Color(0, 0, 0, 0);
            }
            return this._transparent;
        }
        toHexString() {
            var d = function (s) { if (s.length == 1)
                return '0' + s; return s; };
            if (this.a != 255) {
                return '#' + d(this.r.toString(16)) + d(this.g.toString(16)) + d(this.b.toString(16)) + d(this.a.toString(16));
            }
            else {
                return '#' + d(this.r.toString(16)) + d(this.g.toString(16)) + d(this.b.toString(16));
            }
        }
        toString() {
            if (this.isTransparent) {
                return 'transparent';
            }
            else if (this.a != 255) {
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")";
            }
            else {
                return this.toHexString();
            }
        }
        get a() {
            return this._a;
        }
        set a(value) {
            if (value < 0 || value > 255)
                throw new latte.InvalidArgumentEx('value', value);
            this._a = value;
        }
        get b() {
            return this._b;
        }
        set b(value) {
            if (value < 0 || value > 255)
                throw new latte.InvalidArgumentEx('value', value);
            this._b = value;
        }
        get c() {
            return (1 - (this.r / 255) - this.k) / (1 - this.k);
        }
        set c(value) {
            this.r = 255 * (1 - value) * (1 - this.k);
        }
        get g() {
            return this._g;
        }
        set g(value) {
            if (value < 0 || value > 255)
                throw new latte.InvalidArgumentEx('value', value);
            this._g = value;
        }
        get k() {
            return 1 - Math.max(this.r / 255, this.g / 255, this.b / 255);
        }
        get m() {
            return (1 - (this.g / 255) - this.k) / (1 - this.k);
        }
        get y() {
            return (1 - (this.b / 255) - this.k) / (1 - this.k);
        }
        fade(alpha) {
            return new Color(this.r, this.g, this.b, alpha);
        }
        fadeFloat(alpha) {
            return new Color(this.r, this.g, this.b, alpha * 255);
        }
        get isDark() {
            return this.perceivedLuminosity > 0.5;
        }
        get isLight() {
            return this.perceivedLuminosity <= 0.5;
        }
        get isTransparent() {
            return this.a === 0;
        }
        get perceivedLuminosity() {
            var a = 1 - (this.r * 0.299 + this.g * 0.587 + this.b * 0.114) / 255;
            return a;
        }
        get r() {
            return this._r;
        }
        set r(value) {
            if (value < 0 || value > 255)
                throw new latte.InvalidArgumentEx('value', value);
            this._r = value;
        }
    }
    latte.Color = Color;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Country {
        static getCountrySelectOptions() {
            let r = {};
            Country.codes.forEach(code => {
                r[code] = Country[code].name;
            });
            return r;
        }
        static getCountryPhoneSelectOptions() {
            let r = {};
            Country.codes.forEach(code => {
                let p = Country[code].phone;
                r[p] = latte.sprintf("%s (%s)", Country[code].name, p);
            });
            return r;
        }
    }
    Country.codes = [
        'AF', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD',
        'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BR', 'IO', 'VG', 'BN', 'BG', 'BF', 'BI', 'KH',
        'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CK', 'CR', 'HR', 'CU', 'CW', 'CY', 'CZ', 'CD',
        'DK', 'DJ', 'DM', 'DO', 'TL', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'PF', 'GA', 'GM', 'GE',
        'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ',
        'IE', 'IM', 'IL', 'IT', 'CI', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'XK', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY',
        'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME',
        'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'KP', 'MP', 'NO', 'OM', 'PK', 'PW',
        'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'CG', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF',
        'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'KR', 'SS', 'ES', 'LK',
        'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'VI',
        'UG', 'UA', 'AE', 'GB', 'US', 'UY', 'UZ', 'VU', 'VA', 'VE', 'VN', 'WF', 'EH', 'YE', 'ZM', 'ZW'
    ];
    Country.AF = { name: 'Afghanistan', phone: '93', code: 'AFG', shortCode: 'AF' };
    Country.AL = { name: 'Albania', phone: '355', code: 'ALB', shortCode: 'AL' };
    Country.DZ = { name: 'Algeria', phone: '213', code: 'DZA', shortCode: 'DZ' };
    Country.AS = { name: 'American Samoa', phone: '1-684', code: 'ASM', shortCode: 'AS' };
    Country.AD = { name: 'Andorra', phone: '376', code: 'AND', shortCode: 'AD' };
    Country.AO = { name: 'Angola', phone: '244', code: 'AGO', shortCode: 'AO' };
    Country.AI = { name: 'Anguilla', phone: '1-264', code: 'AIA', shortCode: 'AI' };
    Country.AQ = { name: 'Antarctica', phone: '672', code: 'ATA', shortCode: 'AQ' };
    Country.AG = { name: 'Antigua and Barbuda', phone: '1-268', code: 'ATG', shortCode: 'AG' };
    Country.AR = { name: 'Argentina', phone: '54', code: 'ARG', shortCode: 'AR' };
    Country.AM = { name: 'Armenia', phone: '374', code: 'ARM', shortCode: 'AM' };
    Country.AW = { name: 'Aruba', phone: '297', code: 'ABW', shortCode: 'AW' };
    Country.AU = { name: 'Australia', phone: '61', code: 'AUS', shortCode: 'AU' };
    Country.AT = { name: 'Austria', phone: '43', code: 'AUT', shortCode: 'AT' };
    Country.AZ = { name: 'Azerbaijan', phone: '994', code: 'AZE', shortCode: 'AZ' };
    Country.BS = { name: 'Bahamas', phone: '1-242', code: 'BHS', shortCode: 'BS' };
    Country.BH = { name: 'Bahrain', phone: '973', code: 'BHR', shortCode: 'BH' };
    Country.BD = { name: 'Bangladesh', phone: '880', code: 'BGD', shortCode: 'BD' };
    Country.BB = { name: 'Barbados', phone: '1-246', code: 'BRB', shortCode: 'BB' };
    Country.BY = { name: 'Belarus', phone: '375', code: 'BLR', shortCode: 'BY' };
    Country.BE = { name: 'Belgium', phone: '32', code: 'BEL', shortCode: 'BE' };
    Country.BZ = { name: 'Belize', phone: '501', code: 'BLZ', shortCode: 'BZ' };
    Country.BJ = { name: 'Benin', phone: '229', code: 'BEN', shortCode: 'BJ' };
    Country.BM = { name: 'Bermuda', phone: '1-441', code: 'BMU', shortCode: 'BM' };
    Country.BT = { name: 'Bhutan', phone: '975', code: 'BTN', shortCode: 'BT' };
    Country.BO = { name: 'Bolivia', phone: '591', code: 'BOL', shortCode: 'BO' };
    Country.BA = { name: 'Bosnia and Herzegovina', phone: '387', code: 'BIH', shortCode: 'BA' };
    Country.BW = { name: 'Botswana', phone: '267', code: 'BWA', shortCode: 'BW' };
    Country.BR = { name: 'Brazil', phone: '55', code: 'BRA', shortCode: 'BR' };
    Country.IO = { name: 'British Indian Ocean Territory', phone: '246', code: 'IOT', shortCode: 'IO' };
    Country.VG = { name: 'British Virgin Islands', phone: '1-284', code: 'VGB', shortCode: 'VG' };
    Country.BN = { name: 'Brunei', phone: '673', code: 'BRN', shortCode: 'BN' };
    Country.BG = { name: 'Bulgaria', phone: '359', code: 'BGR', shortCode: 'BG' };
    Country.BF = { name: 'Burkina Faso', phone: '226', code: 'BFA', shortCode: 'BF' };
    Country.BI = { name: 'Burundi', phone: '257', code: 'BDI', shortCode: 'BI' };
    Country.KH = { name: 'Cambodia', phone: '855', code: 'KHM', shortCode: 'KH' };
    Country.CM = { name: 'Cameroon', phone: '237', code: 'CMR', shortCode: 'CM' };
    Country.CA = { name: 'Canada', phone: '1', code: 'CAN', shortCode: 'CA' };
    Country.CV = { name: 'Cape Verde', phone: '238', code: 'CPV', shortCode: 'CV' };
    Country.KY = { name: 'Cayman Islands', phone: '1-345', code: 'CYM', shortCode: 'KY' };
    Country.CF = { name: 'Central African Republic', phone: '236', code: 'CAF', shortCode: 'CF' };
    Country.TD = { name: 'Chad', phone: '235', code: 'TCD', shortCode: 'TD' };
    Country.CL = { name: 'Chile', phone: '56', code: 'CHL', shortCode: 'CL' };
    Country.CN = { name: 'China', phone: '86', code: 'CHN', shortCode: 'CN' };
    Country.CX = { name: 'Christmas Island', phone: '61', code: 'CXR', shortCode: 'CX' };
    Country.CC = { name: 'Cocos Islands', phone: '61', code: 'CCK', shortCode: 'CC' };
    Country.CO = { name: 'Colombia', phone: '57', code: 'COL', shortCode: 'CO' };
    Country.KM = { name: 'Comoros', phone: '269', code: 'COM', shortCode: 'KM' };
    Country.CK = { name: 'Cook Islands', phone: '682', code: 'COK', shortCode: 'CK' };
    Country.CR = { name: 'Costa Rica', phone: '506', code: 'CRI', shortCode: 'CR' };
    Country.HR = { name: 'Croatia', phone: '385', code: 'HRV', shortCode: 'HR' };
    Country.CU = { name: 'Cuba', phone: '53', code: 'CUB', shortCode: 'CU' };
    Country.CW = { name: 'Curacao', phone: '599', code: 'CUW', shortCode: 'CW' };
    Country.CY = { name: 'Cyprus', phone: '357', code: 'CYP', shortCode: 'CY' };
    Country.CZ = { name: 'Czech Republic', phone: '420', code: 'CZE', shortCode: 'CZ' };
    Country.CD = { name: 'Democratic Republic of the Congo', phone: '243', code: 'COD', shortCode: 'CD' };
    Country.DK = { name: 'Denmark', phone: '45', code: 'DNK', shortCode: 'DK' };
    Country.DJ = { name: 'Djibouti', phone: '253', code: 'DJI', shortCode: 'DJ' };
    Country.DM = { name: 'Dominica', phone: '1-767', code: 'DMA', shortCode: 'DM' };
    Country.DO = { name: 'Dominican Republic', phone: '1-809, 1-829, 1-849', code: 'DOM', shortCode: 'DO' };
    Country.TL = { name: 'East Timor', phone: '670', code: 'TLS', shortCode: 'TL' };
    Country.EC = { name: 'Ecuador', phone: '593', code: 'ECU', shortCode: 'EC' };
    Country.EG = { name: 'Egypt', phone: '20', code: 'EGY', shortCode: 'EG' };
    Country.SV = { name: 'El Salvador', phone: '503', code: 'SLV', shortCode: 'SV' };
    Country.GQ = { name: 'Equatorial Guinea', phone: '240', code: 'GNQ', shortCode: 'GQ' };
    Country.ER = { name: 'Eritrea', phone: '291', code: 'ERI', shortCode: 'ER' };
    Country.EE = { name: 'Estonia', phone: '372', code: 'EST', shortCode: 'EE' };
    Country.ET = { name: 'Ethiopia', phone: '251', code: 'ETH', shortCode: 'ET' };
    Country.FK = { name: 'Falkland Islands', phone: '500', code: 'FLK', shortCode: 'FK' };
    Country.FO = { name: 'Faroe Islands', phone: '298', code: 'FRO', shortCode: 'FO' };
    Country.FJ = { name: 'Fiji', phone: '679', code: 'FJI', shortCode: 'FJ' };
    Country.FI = { name: 'Finland', phone: '358', code: 'FIN', shortCode: 'FI' };
    Country.FR = { name: 'France', phone: '33', code: 'FRA', shortCode: 'FR' };
    Country.PF = { name: 'French Polynesia', phone: '689', code: 'PYF', shortCode: 'PF' };
    Country.GA = { name: 'Gabon', phone: '241', code: 'GAB', shortCode: 'GA' };
    Country.GM = { name: 'Gambia', phone: '220', code: 'GMB', shortCode: 'GM' };
    Country.GE = { name: 'Georgia', phone: '995', code: 'GEO', shortCode: 'GE' };
    Country.DE = { name: 'Germany', phone: '49', code: 'DEU', shortCode: 'DE' };
    Country.GH = { name: 'Ghana', phone: '233', code: 'GHA', shortCode: 'GH' };
    Country.GI = { name: 'Gibraltar', phone: '350', code: 'GIB', shortCode: 'GI' };
    Country.GR = { name: 'Greece', phone: '30', code: 'GRC', shortCode: 'GR' };
    Country.GL = { name: 'Greenland', phone: '299', code: 'GRL', shortCode: 'GL' };
    Country.GD = { name: 'Grenada', phone: '1-473', code: 'GRD', shortCode: 'GD' };
    Country.GU = { name: 'Guam', phone: '1-671', code: 'GUM', shortCode: 'GU' };
    Country.GT = { name: 'Guatemala', phone: '502', code: 'GTM', shortCode: 'GT' };
    Country.GG = { name: 'Guernsey', phone: '44-1481', code: 'GGY', shortCode: 'GG' };
    Country.GN = { name: 'Guinea', phone: '224', code: 'GIN', shortCode: 'GN' };
    Country.GW = { name: 'Guinea-Bissau', phone: '245', code: 'GNB', shortCode: 'GW' };
    Country.GY = { name: 'Guyana', phone: '592', code: 'GUY', shortCode: 'GY' };
    Country.HT = { name: 'Haiti', phone: '509', code: 'HTI', shortCode: 'HT' };
    Country.HN = { name: 'Honduras', phone: '504', code: 'HND', shortCode: 'HN' };
    Country.HK = { name: 'Hong Kong', phone: '852', code: 'HKG', shortCode: 'HK' };
    Country.HU = { name: 'Hungary', phone: '36', code: 'HUN', shortCode: 'HU' };
    Country.IS = { name: 'Iceland', phone: '354', code: 'ISL', shortCode: 'IS' };
    Country.IN = { name: 'India', phone: '91', code: 'IND', shortCode: 'IN' };
    Country.ID = { name: 'Indonesia', phone: '62', code: 'IDN', shortCode: 'ID' };
    Country.IR = { name: 'Iran', phone: '98', code: 'IRN', shortCode: 'IR' };
    Country.IQ = { name: 'Iraq', phone: '964', code: 'IRQ', shortCode: 'IQ' };
    Country.IE = { name: 'Ireland', phone: '353', code: 'IRL', shortCode: 'IE' };
    Country.IM = { name: 'Isle of Man', phone: '44-1624', code: 'IMN', shortCode: 'IM' };
    Country.IL = { name: 'Israel', phone: '972', code: 'ISR', shortCode: 'IL' };
    Country.IT = { name: 'Italy', phone: '39', code: 'ITA', shortCode: 'IT' };
    Country.CI = { name: 'Ivory Coast', phone: '225', code: 'CIV', shortCode: 'CI' };
    Country.JM = { name: 'Jamaica', phone: '1-876', code: 'JAM', shortCode: 'JM' };
    Country.JP = { name: 'Japan', phone: '81', code: 'JPN', shortCode: 'JP' };
    Country.JE = { name: 'Jersey', phone: '44-1534', code: 'JEY', shortCode: 'JE' };
    Country.JO = { name: 'Jordan', phone: '962', code: 'JOR', shortCode: 'JO' };
    Country.KZ = { name: 'Kazakhstan', phone: '7', code: 'KAZ', shortCode: 'KZ' };
    Country.KE = { name: 'Kenya', phone: '254', code: 'KEN', shortCode: 'KE' };
    Country.KI = { name: 'Kiribati', phone: '686', code: 'KIR', shortCode: 'KI' };
    Country.XK = { name: 'Kosovo', phone: '383', code: 'XKX', shortCode: 'XK' };
    Country.KW = { name: 'Kuwait', phone: '965', code: 'KWT', shortCode: 'KW' };
    Country.KG = { name: 'Kyrgyzstan', phone: '996', code: 'KGZ', shortCode: 'KG' };
    Country.LA = { name: 'Laos', phone: '856', code: 'LAO', shortCode: 'LA' };
    Country.LV = { name: 'Latvia', phone: '371', code: 'LVA', shortCode: 'LV' };
    Country.LB = { name: 'Lebanon', phone: '961', code: 'LBN', shortCode: 'LB' };
    Country.LS = { name: 'Lesotho', phone: '266', code: 'LSO', shortCode: 'LS' };
    Country.LR = { name: 'Liberia', phone: '231', code: 'LBR', shortCode: 'LR' };
    Country.LY = { name: 'Libya', phone: '218', code: 'LBY', shortCode: 'LY' };
    Country.LI = { name: 'Liechtenstein', phone: '423', code: 'LIE', shortCode: 'LI' };
    Country.LT = { name: 'Lithuania', phone: '370', code: 'LTU', shortCode: 'LT' };
    Country.LU = { name: 'Luxembourg', phone: '352', code: 'LUX', shortCode: 'LU' };
    Country.MO = { name: 'Macau', phone: '853', code: 'MAC', shortCode: 'MO' };
    Country.MK = { name: 'Macedonia', phone: '389', code: 'MKD', shortCode: 'MK' };
    Country.MG = { name: 'Madagascar', phone: '261', code: 'MDG', shortCode: 'MG' };
    Country.MW = { name: 'Malawi', phone: '265', code: 'MWI', shortCode: 'MW' };
    Country.MY = { name: 'Malaysia', phone: '60', code: 'MYS', shortCode: 'MY' };
    Country.MV = { name: 'Maldives', phone: '960', code: 'MDV', shortCode: 'MV' };
    Country.ML = { name: 'Mali', phone: '223', code: 'MLI', shortCode: 'ML' };
    Country.MT = { name: 'Malta', phone: '356', code: 'MLT', shortCode: 'MT' };
    Country.MH = { name: 'Marshall Islands', phone: '692', code: 'MHL', shortCode: 'MH' };
    Country.MR = { name: 'Mauritania', phone: '222', code: 'MRT', shortCode: 'MR' };
    Country.MU = { name: 'Mauritius', phone: '230', code: 'MUS', shortCode: 'MU' };
    Country.YT = { name: 'Mayotte', phone: '262', code: 'MYT', shortCode: 'YT' };
    Country.MX = { name: 'Mexico', phone: '52', code: 'MEX', shortCode: 'MX' };
    Country.FM = { name: 'Micronesia', phone: '691', code: 'FSM', shortCode: 'FM' };
    Country.MD = { name: 'Moldova', phone: '373', code: 'MDA', shortCode: 'MD' };
    Country.MC = { name: 'Monaco', phone: '377', code: 'MCO', shortCode: 'MC' };
    Country.MN = { name: 'Mongolia', phone: '976', code: 'MNG', shortCode: 'MN' };
    Country.ME = { name: 'Montenegro', phone: '382', code: 'MNE', shortCode: 'ME' };
    Country.MS = { name: 'Montserrat', phone: '1-664', code: 'MSR', shortCode: 'MS' };
    Country.MA = { name: 'Morocco', phone: '212', code: 'MAR', shortCode: 'MA' };
    Country.MZ = { name: 'Mozambique', phone: '258', code: 'MOZ', shortCode: 'MZ' };
    Country.MM = { name: 'Myanmar', phone: '95', code: 'MMR', shortCode: 'MM' };
    Country.NA = { name: 'Namibia', phone: '264', code: 'NAM', shortCode: 'NA' };
    Country.NR = { name: 'Nauru', phone: '674', code: 'NRU', shortCode: 'NR' };
    Country.NP = { name: 'Nepal', phone: '977', code: 'NPL', shortCode: 'NP' };
    Country.NL = { name: 'Netherlands', phone: '31', code: 'NLD', shortCode: 'NL' };
    Country.AN = { name: 'Netherlands Antilles', phone: '599', code: 'ANT', shortCode: 'AN' };
    Country.NC = { name: 'New Caledonia', phone: '687', code: 'NCL', shortCode: 'NC' };
    Country.NZ = { name: 'New Zealand', phone: '64', code: 'NZL', shortCode: 'NZ' };
    Country.NI = { name: 'Nicaragua', phone: '505', code: 'NIC', shortCode: 'NI' };
    Country.NE = { name: 'Niger', phone: '227', code: 'NER', shortCode: 'NE' };
    Country.NG = { name: 'Nigeria', phone: '234', code: 'NGA', shortCode: 'NG' };
    Country.NU = { name: 'Niue', phone: '683', code: 'NIU', shortCode: 'NU' };
    Country.KP = { name: 'North Korea', phone: '850', code: 'PRK', shortCode: 'KP' };
    Country.MP = { name: 'Northern Mariana Islands', phone: '1-670', code: 'MNP', shortCode: 'MP' };
    Country.NO = { name: 'Norway', phone: '47', code: 'NOR', shortCode: 'NO' };
    Country.OM = { name: 'Oman', phone: '968', code: 'OMN', shortCode: 'OM' };
    Country.PK = { name: 'Pakistan', phone: '92', code: 'PAK', shortCode: 'PK' };
    Country.PW = { name: 'Palau', phone: '680', code: 'PLW', shortCode: 'PW' };
    Country.PS = { name: 'Palestine', phone: '970', code: 'PSE', shortCode: 'PS' };
    Country.PA = { name: 'Panama', phone: '507', code: 'PAN', shortCode: 'PA' };
    Country.PG = { name: 'Papua New Guinea', phone: '675', code: 'PNG', shortCode: 'PG' };
    Country.PY = { name: 'Paraguay', phone: '595', code: 'PRY', shortCode: 'PY' };
    Country.PE = { name: 'Peru', phone: '51', code: 'PER', shortCode: 'PE' };
    Country.PH = { name: 'Philippines', phone: '63', code: 'PHL', shortCode: 'PH' };
    Country.PN = { name: 'Pitcairn', phone: '64', code: 'PCN', shortCode: 'PN' };
    Country.PL = { name: 'Poland', phone: '48', code: 'POL', shortCode: 'PL' };
    Country.PT = { name: 'Portugal', phone: '351', code: 'PRT', shortCode: 'PT' };
    Country.PR = { name: 'Puerto Rico', phone: '1-787, 1-939', code: 'PRI', shortCode: 'PR' };
    Country.QA = { name: 'Qatar', phone: '974', code: 'QAT', shortCode: 'QA' };
    Country.CG = { name: 'Republic of the Congo', phone: '242', code: 'COG', shortCode: 'CG' };
    Country.RE = { name: 'Reunion', phone: '262', code: 'REU', shortCode: 'RE' };
    Country.RO = { name: 'Romania', phone: '40', code: 'ROU', shortCode: 'RO' };
    Country.RU = { name: 'Russia', phone: '7', code: 'RUS', shortCode: 'RU' };
    Country.RW = { name: 'Rwanda', phone: '250', code: 'RWA', shortCode: 'RW' };
    Country.BL = { name: 'Saint Barthelemy', phone: '590', code: 'BLM', shortCode: 'BL' };
    Country.SH = { name: 'Saint Helena', phone: '290', code: 'SHN', shortCode: 'SH' };
    Country.KN = { name: 'Saint Kitts and Nevis', phone: '1-869', code: 'KNA', shortCode: 'KN' };
    Country.LC = { name: 'Saint Lucia', phone: '1-758', code: 'LCA', shortCode: 'LC' };
    Country.MF = { name: 'Saint Martin', phone: '590', code: 'MAF', shortCode: 'MF' };
    Country.PM = { name: 'Saint Pierre and Miquelon', phone: '508', code: 'SPM', shortCode: 'PM' };
    Country.VC = { name: 'Saint Vincent and the Grenadines', phone: '1-784', code: 'VCT', shortCode: 'VC' };
    Country.WS = { name: 'Samoa', phone: '685', code: 'WSM', shortCode: 'WS' };
    Country.SM = { name: 'San Marino', phone: '378', code: 'SMR', shortCode: 'SM' };
    Country.ST = { name: 'Sao Tome and Principe', phone: '239', code: 'STP', shortCode: 'ST' };
    Country.SA = { name: 'Saudi Arabia', phone: '966', code: 'SAU', shortCode: 'SA' };
    Country.SN = { name: 'Senegal', phone: '221', code: 'SEN', shortCode: 'SN' };
    Country.RS = { name: 'Serbia', phone: '381', code: 'SRB', shortCode: 'RS' };
    Country.SC = { name: 'Seychelles', phone: '248', code: 'SYC', shortCode: 'SC' };
    Country.SL = { name: 'Sierra Leone', phone: '232', code: 'SLE', shortCode: 'SL' };
    Country.SG = { name: 'Singapore', phone: '65', code: 'SGP', shortCode: 'SG' };
    Country.SX = { name: 'Sint Maarten', phone: '1-721', code: 'SXM', shortCode: 'SX' };
    Country.SK = { name: 'Slovakia', phone: '421', code: 'SVK', shortCode: 'SK' };
    Country.SI = { name: 'Slovenia', phone: '386', code: 'SVN', shortCode: 'SI' };
    Country.SB = { name: 'Solomon Islands', phone: '677', code: 'SLB', shortCode: 'SB' };
    Country.SO = { name: 'Somalia', phone: '252', code: 'SOM', shortCode: 'SO' };
    Country.ZA = { name: 'South Africa', phone: '27', code: 'ZAF', shortCode: 'ZA' };
    Country.KR = { name: 'South Korea', phone: '82', code: 'KOR', shortCode: 'KR' };
    Country.SS = { name: 'South Sudan', phone: '211', code: 'SSD', shortCode: 'SS' };
    Country.ES = { name: 'Spain', phone: '34', code: 'ESP', shortCode: 'ES' };
    Country.LK = { name: 'Sri Lanka', phone: '94', code: 'LKA', shortCode: 'LK' };
    Country.SD = { name: 'Sudan', phone: '249', code: 'SDN', shortCode: 'SD' };
    Country.SR = { name: 'Suriname', phone: '597', code: 'SUR', shortCode: 'SR' };
    Country.SJ = { name: 'Svalbard and Jan Mayen', phone: '47', code: 'SJM', shortCode: 'SJ' };
    Country.SZ = { name: 'Swaziland', phone: '268', code: 'SWZ', shortCode: 'SZ' };
    Country.SE = { name: 'Sweden', phone: '46', code: 'SWE', shortCode: 'SE' };
    Country.CH = { name: 'Switzerland', phone: '41', code: 'CHE', shortCode: 'CH' };
    Country.SY = { name: 'Syria', phone: '963', code: 'SYR', shortCode: 'SY' };
    Country.TW = { name: 'Taiwan', phone: '886', code: 'TWN', shortCode: 'TW' };
    Country.TJ = { name: 'Tajikistan', phone: '992', code: 'TJK', shortCode: 'TJ' };
    Country.TZ = { name: 'Tanzania', phone: '255', code: 'TZA', shortCode: 'TZ' };
    Country.TH = { name: 'Thailand', phone: '66', code: 'THA', shortCode: 'TH' };
    Country.TG = { name: 'Togo', phone: '228', code: 'TGO', shortCode: 'TG' };
    Country.TK = { name: 'Tokelau', phone: '690', code: 'TKL', shortCode: 'TK' };
    Country.TO = { name: 'Tonga', phone: '676', code: 'TON', shortCode: 'TO' };
    Country.TT = { name: 'Trinidad and Tobago', phone: '1-868', code: 'TTO', shortCode: 'TT' };
    Country.TN = { name: 'Tunisia', phone: '216', code: 'TUN', shortCode: 'TN' };
    Country.TR = { name: 'Turkey', phone: '90', code: 'TUR', shortCode: 'TR' };
    Country.TM = { name: 'Turkmenistan', phone: '993', code: 'TKM', shortCode: 'TM' };
    Country.TC = { name: 'Turks and Caicos Islands', phone: '1-649', code: 'TCA', shortCode: 'TC' };
    Country.TV = { name: 'Tuvalu', phone: '688', code: 'TUV', shortCode: 'TV' };
    Country.VI = { name: 'U.S. Virgin Islands', phone: '1-340', code: 'VIR', shortCode: 'VI' };
    Country.UG = { name: 'Uganda', phone: '256', code: 'UGA', shortCode: 'UG' };
    Country.UA = { name: 'Ukraine', phone: '380', code: 'UKR', shortCode: 'UA' };
    Country.AE = { name: 'United Arab Emirates', phone: '971', code: 'ARE', shortCode: 'AE' };
    Country.GB = { name: 'United Kingdom', phone: '44', code: 'GBR', shortCode: 'GB' };
    Country.US = { name: 'United States', phone: '1', code: 'USA', shortCode: 'US' };
    Country.UY = { name: 'Uruguay', phone: '598', code: 'URY', shortCode: 'UY' };
    Country.UZ = { name: 'Uzbekistan', phone: '998', code: 'UZB', shortCode: 'UZ' };
    Country.VU = { name: 'Vanuatu', phone: '678', code: 'VUT', shortCode: 'VU' };
    Country.VA = { name: 'Vatican', phone: '379', code: 'VAT', shortCode: 'VA' };
    Country.VE = { name: 'Venezuela', phone: '58', code: 'VEN', shortCode: 'VE' };
    Country.VN = { name: 'Vietnam', phone: '84', code: 'VNM', shortCode: 'VN' };
    Country.WF = { name: 'Wallis and Futuna', phone: '681', code: 'WLF', shortCode: 'WF' };
    Country.EH = { name: 'Western Sahara', phone: '212', code: 'ESH', shortCode: 'EH' };
    Country.YE = { name: 'Yemen', phone: '967', code: 'YEM', shortCode: 'YE' };
    Country.ZM = { name: 'Zambia', phone: '260', code: 'ZMB', shortCode: 'ZM' };
    Country.ZW = { name: 'Zimbabwe', phone: '263', code: 'ZWE', shortCode: 'ZW' };
    latte.Country = Country;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Culture {
        constructor() {
            this.shortDateFormat = 'dd/MM/yyyy';
            this.longDateFormat = 'dddd, d de MMMM de YYYY';
            this.currencyDecimals = 2;
            this.numberDecimalsSeparator = '.';
            this.numberThousandsSeparator = ',';
            this.currencySymbol = '$';
            this.floatValidator = /^[\d,]+([.][\d]+)?$/;
            this.intValidator = /^[\d,]+$/;
        }
        static get current() {
            if (!Culture._current) {
                Culture._current = Culture.enUs;
            }
            return this._current;
        }
        static set current(value) {
            this._current = value;
        }
        static get esEs() {
            if (!Culture._esEs) {
                var _zeroPad = (n) => { return n <= 9 ? '0' + n.toString() : n.toString(); };
                Culture._esEs = new Culture();
                Culture._esEs.currencyDecimals = 2;
                Culture._esEs.numberDecimalsSeparator = ',';
                Culture._esEs.numberThousandsSeparator = '.';
                Culture._esEs.currencySymbol = '$';
                Culture._esEs.shortDateFormat = 'dd/MMM/yyyy';
                Culture._esEs.longDateFormat = 'dddd, d de MMMM de yyyy';
                Culture._esEs.floatValidator = /^[\d.]+([,][\d]+)?$/;
                Culture._esEs.intValidator = /^[\d.]+$/;
                Culture._esEs.onFormatShortDate = (d) => {
                    return latte.sprintf("%s/%s/%s", _zeroPad(d.day), d.monthStringShort, d.year);
                };
                Culture._esEs.onFormatLongDate = (d) => {
                    return latte.sprintf("%s, %s de %s de %s", d.dayOfWeekString, d.day, d.monthString, d.year);
                };
            }
            return Culture._esEs;
        }
        static get esMx() {
            if (!Culture._esMx) {
                var _zeroPad = (n) => { return n <= 9 ? '0' + n.toString() : n.toString(); };
                Culture._esMx = new Culture();
                Culture._esMx.currencyDecimals = 2;
                Culture._esMx.numberDecimalsSeparator = '.';
                Culture._esMx.numberThousandsSeparator = ',';
                Culture._esMx.currencySymbol = '$';
                Culture._esMx.shortDateFormat = 'dd/MMM/yyyy';
                Culture._esMx.longDateFormat = 'dddd, d de MMMM de yyyy';
                Culture._esMx.onFormatShortDate = (d) => {
                    return latte.sprintf("%s/%s/%s", _zeroPad(d.day), d.monthStringShort, d.year);
                };
                Culture._esMx.onFormatLongDate = (d) => {
                    return latte.sprintf("%s, %s de %s de %s", d.dayOfWeekString, d.day, d.monthString, d.year);
                };
            }
            return Culture._esMx;
        }
        static get enUs() {
            if (!Culture._enUs) {
                var _zeroPad = (n) => { return n <= 9 ? '0' + n.toString() : n.toString(); };
                Culture._enUs = new Culture();
                Culture._enUs.currencyDecimals = 2;
                Culture._enUs.numberDecimalsSeparator = '.';
                Culture._enUs.numberThousandsSeparator = ',';
                Culture._enUs.currencySymbol = '$';
                Culture._enUs.shortDateFormat = 'MMM/dd/yyyy';
                Culture._enUs.longDateFormat = 'dddd, MMMM d yyyy';
                Culture._enUs.onFormatShortDate = (d) => {
                    return latte.sprintf("%s/%s/%s", d.monthStringShort, _zeroPad(d.day), d.year);
                };
                Culture._enUs.onFormatLongDate = (d) => {
                    return latte.sprintf("%s, %s %s %s", d.dayOfWeekString, d.monthString, d.day, d.year);
                };
            }
            return Culture._enUs;
        }
        static formatCurrency(n) {
            return Culture.current.onFormatCurrency(n);
        }
        static formatShortDate(d) {
            return Culture.current.onFormatShortDate(d);
        }
        static formatLongDate(d) {
            return Culture.current.onFormatLongDate(d);
        }
        static formatNumber(n, decimals = 0, symbol = '') {
            return Culture.current.onFormatNumber(n, decimals, symbol);
        }
        onFormatCurrency(n) {
            return this.onFormatNumber(n, this.currencyDecimals, this.currencySymbol);
        }
        onFormatNumber(n, decimals = 0, symbol = '') {
            let point = this.numberDecimalsSeparator;
            let separator = this.numberThousandsSeparator;
            let sign = (n < 0) ? '-' : '';
            let round = parseInt(Math.abs(n).toFixed(decimals)) + '';
            let length = round.length;
            let offset = ((length) > 3) ? length % 3 : 0;
            let a = sign;
            let b = symbol;
            let c = (offset ? round.substr(0, offset) + separator : '');
            let d = round.substr(offset).replace(/(\d{3})(?=\d)/g, "$1" + separator);
            let e = (decimals ? point + (Math.abs(n) - parseInt(round)).toFixed(decimals).slice(2) : '');
            return a + b + c + d + e;
        }
        onFormatLongDate(d) {
            return "NotImplemented";
        }
        onFormatShortDate(d) {
            return "NotImplemented";
        }
    }
    Culture._current = null;
    latte.Culture = Culture;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DateTime {
        constructor(year = 1, month = 1, day = 1, hour = 0, minute = null, second = null, millisecond = null) {
            let days = DateTime.absoluteDays(year, month, day);
            this._span = new latte.TimeSpan(days, hour, minute, second, millisecond);
        }
        static absoluteDays(year, month, day) {
            let div = function (a, b) { return Math.floor(a / b); };
            let arr = DateTime.isLeapYear(year) ?
                [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366] :
                [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            let num = year - 1;
            let num2 = ((((((num * 365) + div(num, 4)) - div(num, 100)) + div(num, 400)) + arr[month - 1]) + day) - 1;
            return num2;
        }
        static daysInMonth(year, month) {
            if (DateTime.isLeapYear(year)) {
                return DateTime.monthDaysLeapYear[month];
            }
            else {
                return DateTime.monthDays[month];
            }
        }
        static fromDateAndTime(date, time) {
            if (!(date instanceof DateTime))
                throw new latte.InvalidArgumentEx('date');
            if (!(time instanceof latte.TimeSpan))
                throw new latte.InvalidArgumentEx('time');
            return new DateTime(date.year, date.month, date.day, time.hours, time.minutes, time.seconds, time.milliseconds);
        }
        static fromMilliseconds(milliseconds) {
            let d = new DateTime();
            d._span = latte.TimeSpan.fromMilliseconds(milliseconds);
            return d;
        }
        static fromString(dateTimeString) {
            if (!latte._isString(dateTimeString))
                throw new latte.InvalidArgumentEx('dateTimeString', dateTimeString);
            if (dateTimeString.length === 0)
                return new DateTime();
            let year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0;
            let parts = dateTimeString.split(' ');
            let dateParts = parts.length > 0 ? parts[0].split('-') : [];
            let timeParts = parts.length > 1 ? parts[1].split(':') : [];
            if (dateParts.length === 3) {
                year = parseInt(dateParts[0], 10);
                month = parseInt(dateParts[1], 10);
                day = parseInt(dateParts[2], 10);
            }
            if (timeParts.length === 3) {
                hour = parseInt(timeParts[0], 10);
                minute = parseInt(timeParts[1], 10);
                second = parseInt(timeParts[2], 10);
            }
            if (year <= 0)
                year = 1;
            if (month <= 0)
                month = 1;
            if (day <= 0)
                day = 1;
            return new DateTime(year, month, day, hour, minute, second);
        }
        static isLeapYear(year) {
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                return true;
            }
            return false;
        }
        static get now() {
            let d = new Date();
            return new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
        }
        static get today() {
            let d = new Date();
            return new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate());
        }
        static get tomorrow() {
            let d = new Date();
            return (new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate())).addDays(1);
        }
        static get epoch() {
            return new DateTime(1970, 1, 1);
        }
        static get yesterday() {
            let d = new Date();
            return (new DateTime(d.getFullYear(), d.getMonth() + 1, d.getDate())).addDays(-1);
        }
        _zeroPad(n) {
            return n <= 9 ? '0' + n.toString() : n.toString();
        }
        fromTimeSpan(what) {
            let div = function (a, b) { return Math.floor(a / b); };
            let num2 = this._span.days;
            let num3 = div(num2, 146097);
            num2 -= num3 * 146097;
            let num4 = div(num2, 36524);
            if (num4 == 4) {
                num4 = 3;
            }
            num2 -= num4 * 36524;
            let num5 = div(num2, 1461);
            num2 -= num5 * 1461;
            let num6 = div(num2, 365);
            if (num6 == 4) {
                num6 = 3;
            }
            if (what == "year") {
                return (((((num3 * 400) + (num4 * 100)) + (num5 * 4)) + num6) + 1);
            }
            num2 -= num6 * 365;
            if (what == "dayyear") {
                return (num2 + 1);
            }
            let arr = ((num6 == 3) && ((num5 != 24) || (num4 == 3))) ?
                [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366] :
                [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            let index = num2 >> 6;
            while (num2 >= arr[index]) {
                index++;
            }
            if (what == "month") {
                return index;
            }
            return ((num2 - arr[index - 1]) + 1);
        }
        add(timespan) {
            return DateTime.fromMilliseconds(this._span.millis + timespan.millis);
        }
        addDays(days) {
            return DateTime.fromMilliseconds(this._span.millis + days * 86400000);
        }
        addHours(hours) {
            return DateTime.fromMilliseconds(this._span.millis + hours * 3600000);
        }
        addMilliseconds(milliseconds) {
            return DateTime.fromMilliseconds(this._span.millis + milliseconds);
        }
        addMinutes(minutes) {
            return DateTime.fromMilliseconds(this._span.millis + minutes * 60000);
        }
        addMonths(months) {
            let year = this.year;
            let month = this.month;
            let day = this.day;
            let newMonth = month - 1 + months;
            if (newMonth < 0) {
                month = 12 + (newMonth + 1) % 12;
                year += Math.ceil((newMonth - 11) / 12);
            }
            else {
                month = newMonth % 12 + 1;
                year += Math.floor(newMonth / 12);
            }
            if (year < 1 || year > 9999) {
                throw new latte.InvalidArgumentEx('months');
            }
            else {
                let daysInMonth = DateTime.daysInMonth(year, month);
                if (day > daysInMonth)
                    day = daysInMonth;
                return new DateTime(year, month, day);
            }
        }
        addSeconds(seconds) {
            return new DateTime(this._span.millis + seconds * 1000);
        }
        addYears(years) {
            return this.addMonths(years * 12);
        }
        compareTo(datetime) {
            return this._span.compareTo(datetime._span);
        }
        equals(datetime) {
            return this._span.equals(datetime._span);
        }
        onRange(start, end) {
            return this.compareTo(start) >= 0 && this.compareTo(end) <= 0;
        }
        subtractDate(datetime) {
            if (!(datetime instanceof DateTime))
                throw new latte.InvalidArgumentEx('datetime');
            return latte.TimeSpan.fromMilliseconds(this._span.millis - datetime._span.millis);
        }
        subtractTime(timespan) {
            if (!(timespan instanceof latte.TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return DateTime.fromMilliseconds(this._span.millis - timespan.millis);
        }
        toRelativeString(withTime = false) {
            let now = DateTime.now;
            let today = DateTime.today;
            let yesterday = DateTime.yesterday;
            let tomorrow = DateTime.tomorrow;
            let timePart = this._zeroPad(this.hour) + ':' + this._zeroPad(this.minute);
            let datePart = "";
            let d = this.date;
            let t = this.timeOfDay;
            let diff;
            if (this.date.equals(today)) {
                diff = now.timeOfDay.subtract(t);
                let hours = Math.ceil(diff.totalHours);
                let minutes = Math.ceil(diff.totalMinutes);
                if (diff.totalSeconds < 60) {
                    return latte.strings.justNow;
                }
                else if (diff.totalMinutes == 1) {
                    return latte.strings.oneMinuteAgo;
                }
                else if (minutes < 60) {
                    return latte.sprintf(latte.strings.SMinutesAgo, minutes);
                }
                else if (hours == 1) {
                    return latte.strings.oneHourAgo;
                }
                else {
                    return latte.sprintf(latte.strings.SHoursAgo, hours);
                }
            }
            else if (d.equals(tomorrow)) {
                datePart = latte.strings.tomorrow;
            }
            else if (d.equals(yesterday)) {
                datePart = latte.strings.yesterday;
            }
            else if (this.compareTo(today) < 0) {
                timePart = '';
                diff = today.subtractDate(this);
                let days = Math.ceil(diff.totalDays);
                let weeks = Math.ceil(days / 7);
                let years = Math.ceil(weeks / 51);
                if (days < 7) {
                    datePart = latte.sprintf(latte.strings.SDaysAgo, days);
                }
                else if (weeks == 1) {
                    datePart = latte.strings.oneWeekAgo;
                }
                else if (weeks < 51) {
                    datePart = latte.sprintf(latte.strings.SWeeksAgo, weeks);
                }
                else if (years == 1) {
                    datePart = latte.strings.oneYearAgo;
                }
                else {
                    datePart = latte.sprintf(latte.strings.SYearsAgo, years);
                }
            }
            else if (this.compareTo(today) > 0) {
                timePart = '';
                diff = today.subtractDate(this);
                let weekd = this.dayOfWeekString;
                let days = Math.abs(Math.ceil(diff.totalDays));
                let weeks = Math.ceil(days / 7);
                let years = Math.ceil(weeks / 51);
                if (days < 8) {
                    datePart = latte.sprintf(latte.strings.nextWeekDayS, weekd);
                }
                else if (weeks < 51) {
                    datePart = latte.sprintf(latte.strings.SWeeksFromNow, weeks);
                }
                else if (years == 1) {
                    datePart = latte.strings.oneYearFromNow;
                }
                else {
                    datePart = latte.sprintf(latte.strings.SYearsFromNow, years);
                }
            }
            else {
                return this.toString();
            }
            if ((this.minute == 0 && this.hour == 0) || withTime === false) {
                timePart = '';
            }
            return timePart ? datePart + ' ' + timePart : datePart;
        }
        toFormattedString(format = null) {
            return latte.Culture.formatShortDate(this);
        }
        toString(includeTime = true) {
            if (isNaN(this.year))
                return '';
            let t = this.timeOfDay;
            let r = this.year + '-' + this._zeroPad(this.month) + '-' + this._zeroPad(this.day);
            if (includeTime) {
                r += ' ' + this._zeroPad(t.hours) + ":" + this._zeroPad(t.minutes) + ':'
                    + this._zeroPad(t.seconds);
            }
            return r;
        }
        valueOf() {
            if (!this.thisEpoch) {
                return 0;
            }
            else {
                return this._span.millis;
            }
        }
        get day() {
            return this.fromTimeSpan("day");
        }
        get dayOfWeek() {
            return (this._span.days + 1) % 7;
        }
        get dayOfWeekString() {
            let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            return latte.strings[days[this.dayOfWeek]];
        }
        get dayOfWeekStringShort() {
            let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            return latte.strings[days[this.dayOfWeek] + 'Short'];
        }
        get dayOfWeekStringInitial() {
            let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            return latte.strings[days[this.dayOfWeek] + 'Initial'];
        }
        get dayOfYear() {
            return this.fromTimeSpan("dayyear");
        }
        get comparer() {
            return this._span.totalMilliseconds;
        }
        get date() {
            return new DateTime(this.year, this.month, this.day);
        }
        get hour() {
            return this._span.hours;
        }
        get millisecond() {
            return this._span.milliseconds;
        }
        get minute() {
            return this._span.minutes;
        }
        get month() {
            return this.fromTimeSpan("month");
        }
        get monthString() {
            return latte.strings["january february march april may june july august september october november december".split(" ")[this.month - 1]];
        }
        get monthStringShort() {
            return latte.strings["january february march april may june july august september october november december".split(" ")[(this.month - 1)] + 'Short'];
        }
        get monthStringInitial() {
            return latte.strings["january february march april may june july august september october november december".split(" ")[(this.month - 1)] + 'Initial'];
        }
        get second() {
            return this._span.seconds;
        }
        get timeOfDay() {
            return latte.TimeSpan.fromMilliseconds(this._span.millis % 86400000);
        }
        get thisEpoch() {
            return this.compareTo(new DateTime(2, 1, 1)) > 0;
        }
        get weekOfYear() {
            let oneJan = new DateTime(this.year, 1, 1);
            return Math.ceil((this.dayOfYear + oneJan.dayOfWeek) / 7);
        }
        get year() {
            return this.fromTimeSpan("year");
        }
    }
    DateTime.monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    DateTime.monthDaysLeapYear = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    latte.DateTime = DateTime;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class EventHandler {
        constructor(handler, context) {
            this.handler = handler;
            this.context = context;
        }
    }
    latte.EventHandler = EventHandler;
    class LatteEvent {
        constructor(context) {
            this.context = context;
            this.handlers = [];
        }
        get handlerAdded() {
            if (!this._handlerAdded) {
                this._handlerAdded = new latte.LatteEvent(this);
            }
            return this._handlerAdded;
        }
        add(handler, context = null) {
            this.handlers.push(new EventHandler(handler, context));
            this.onHandlerAdded(handler);
        }
        onHandlerAdded(handler) {
            this.handlerAdded.raise(handler);
        }
        raise(...parameter) {
            var args = arguments;
            for (var i = 0; i < this.handlers.length; i++) {
                var evh = this.handlers[i];
                if (!evh.handler)
                    continue;
                var result = evh.handler.apply(evh.context || this.context, args);
                if (typeof result == 'boolean') {
                    return result;
                }
            }
        }
        remove(handler) {
            let index = -1;
            this.handlers.forEach((h, i) => {
                if (h.handler == handler) {
                    index = i;
                }
            });
            if (index >= 0) {
                this.handlers.splice(index, 1);
            }
        }
    }
    latte.LatteEvent = LatteEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Ex {
        constructor(description = "") {
            this.description = description;
        }
        toString() {
            return this.description ? this.description : "Uncaught exception";
        }
    }
    latte.Ex = Ex;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class InvalidArgumentEx extends latte.Ex {
        constructor(argument = "", value = "") {
            super();
            this.argument = argument;
            this.value = value;
        }
        toString() {
            return "Invalid argument: " +
                (this.argument ? this.argument : '<no argument specified>') +
                (!this.value ? " ( " + this.value + ")" : '');
        }
    }
    latte.InvalidArgumentEx = InvalidArgumentEx;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class InvalidCallEx extends latte.Ex {
        constructor(method = null) {
            super();
            this.method = method;
        }
        toString() {
            return "Invalid call: " +
                (this.method ? this.method : '<no method specified>');
        }
    }
    latte.InvalidCallEx = InvalidCallEx;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let Key;
    (function (Key) {
        Key[Key["BACKSPACE"] = 8] = "BACKSPACE";
        Key[Key["TAB"] = 9] = "TAB";
        Key[Key["ENTER"] = 13] = "ENTER";
        Key[Key["SHIFT"] = 16] = "SHIFT";
        Key[Key["CONTROL"] = 17] = "CONTROL";
        Key[Key["ALT"] = 18] = "ALT";
        Key[Key["PAUSE"] = 19] = "PAUSE";
        Key[Key["CAPS_LOCK"] = 20] = "CAPS_LOCK";
        Key[Key["ESCAPE"] = 27] = "ESCAPE";
        Key[Key["PAGE_UP"] = 33] = "PAGE_UP";
        Key[Key["PAGE_DOWN"] = 34] = "PAGE_DOWN";
        Key[Key["END"] = 35] = "END";
        Key[Key["HOME"] = 36] = "HOME";
        Key[Key["ARROW_LEFT"] = 37] = "ARROW_LEFT";
        Key[Key["ARROW_UP"] = 38] = "ARROW_UP";
        Key[Key["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
        Key[Key["ARROW_DOWN"] = 40] = "ARROW_DOWN";
        Key[Key["INSERT"] = 45] = "INSERT";
        Key[Key["DELETE"] = 46] = "DELETE";
        Key[Key["NUMBER_0"] = 48] = "NUMBER_0";
        Key[Key["NUMBER_1"] = 49] = "NUMBER_1";
        Key[Key["NUMBER_2"] = 50] = "NUMBER_2";
        Key[Key["NUMBER_3"] = 51] = "NUMBER_3";
        Key[Key["NUMBER_4"] = 52] = "NUMBER_4";
        Key[Key["NUMBER_5"] = 53] = "NUMBER_5";
        Key[Key["NUMBER_6"] = 54] = "NUMBER_6";
        Key[Key["NUMBER_7"] = 55] = "NUMBER_7";
        Key[Key["NUMBER_8"] = 56] = "NUMBER_8";
        Key[Key["NUMBER_9"] = 57] = "NUMBER_9";
        Key[Key["A"] = 65] = "A";
        Key[Key["B"] = 66] = "B";
        Key[Key["C"] = 67] = "C";
        Key[Key["D"] = 68] = "D";
        Key[Key["E"] = 69] = "E";
        Key[Key["F"] = 70] = "F";
        Key[Key["G"] = 71] = "G";
        Key[Key["H"] = 72] = "H";
        Key[Key["I"] = 73] = "I";
        Key[Key["J"] = 74] = "J";
        Key[Key["K"] = 75] = "K";
        Key[Key["L"] = 76] = "L";
        Key[Key["M"] = 77] = "M";
        Key[Key["N"] = 78] = "N";
        Key[Key["O"] = 79] = "O";
        Key[Key["P"] = 80] = "P";
        Key[Key["Q"] = 81] = "Q";
        Key[Key["R"] = 82] = "R";
        Key[Key["S"] = 83] = "S";
        Key[Key["T"] = 84] = "T";
        Key[Key["U"] = 85] = "U";
        Key[Key["V"] = 86] = "V";
        Key[Key["W"] = 87] = "W";
        Key[Key["X"] = 88] = "X";
        Key[Key["Y"] = 89] = "Y";
        Key[Key["Z"] = 90] = "Z";
        Key[Key["LEFT_WINDOW"] = 91] = "LEFT_WINDOW";
        Key[Key["RIGHT_WINDOW"] = 92] = "RIGHT_WINDOW";
        Key[Key["SELECT"] = 93] = "SELECT";
        Key[Key["NUMPAD_0"] = 96] = "NUMPAD_0";
        Key[Key["NUMPAD_1"] = 97] = "NUMPAD_1";
        Key[Key["NUMPAD_2"] = 98] = "NUMPAD_2";
        Key[Key["NUMPAD_3"] = 99] = "NUMPAD_3";
        Key[Key["NUMPAD_4"] = 100] = "NUMPAD_4";
        Key[Key["NUMPAD_5"] = 101] = "NUMPAD_5";
        Key[Key["NUMPAD_6"] = 102] = "NUMPAD_6";
        Key[Key["NUMPAD_7"] = 103] = "NUMPAD_7";
        Key[Key["NUMPAD_8"] = 104] = "NUMPAD_8";
        Key[Key["NUMPAD_9"] = 105] = "NUMPAD_9";
        Key[Key["NUMPAD_MULTIPLY"] = 106] = "NUMPAD_MULTIPLY";
        Key[Key["NUMPAD_ADD"] = 107] = "NUMPAD_ADD";
        Key[Key["NUMPAD_SUBTRACT"] = 109] = "NUMPAD_SUBTRACT";
        Key[Key["NUMPAD_DECIMAL_POINT"] = 110] = "NUMPAD_DECIMAL_POINT";
        Key[Key["NUMPAD_DIVIDE"] = 111] = "NUMPAD_DIVIDE";
        Key[Key["F1"] = 112] = "F1";
        Key[Key["F2"] = 113] = "F2";
        Key[Key["F3"] = 114] = "F3";
        Key[Key["F4"] = 115] = "F4";
        Key[Key["F5"] = 116] = "F5";
        Key[Key["F6"] = 117] = "F6";
        Key[Key["F7"] = 118] = "F7";
        Key[Key["F8"] = 119] = "F8";
        Key[Key["F9"] = 120] = "F9";
        Key[Key["F10"] = 121] = "F10";
        Key[Key["F11"] = 122] = "F11";
        Key[Key["F12"] = 123] = "F12";
        Key[Key["NUM_LOCK"] = 144] = "NUM_LOCK";
        Key[Key["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
        Key[Key["SEMI_COLON"] = 186] = "SEMI_COLON";
        Key[Key["EQUAL_SIGN"] = 187] = "EQUAL_SIGN";
        Key[Key["COMMA"] = 188] = "COMMA";
        Key[Key["DASH"] = 189] = "DASH";
        Key[Key["PERIOD"] = 190] = "PERIOD";
        Key[Key["FORWARD_SLASH"] = 191] = "FORWARD_SLASH";
        Key[Key["GRAVE_ACCENT"] = 192] = "GRAVE_ACCENT";
        Key[Key["OPEN_BRACKET"] = 219] = "OPEN_BRACKET";
        Key[Key["BACK_SLASH"] = 220] = "BACK_SLASH";
        Key[Key["CLOSE_BRACKET"] = 221] = "CLOSE_BRACKET";
        Key[Key["SINGLE_QUOTE"] = 222] = "SINGLE_QUOTE";
        Key[Key["SPACEBAR"] = 32] = "SPACEBAR";
    })(Key = latte.Key || (latte.Key = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    class LoadInfo {
        constructor() {
            this._loadingText = null;
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new LoadInfo();
            }
            return this._instance;
        }
        end() {
            this.onLoadingEnd();
        }
        onLoadingStart() {
            if (this._loadingStart) {
                this._loadingStart.raise();
            }
            else {
            }
        }
        onLoadingEnd() {
            if (this._loadingEnd) {
                this._loadingEnd.raise();
            }
            else {
            }
        }
        onLoadingTextChanged() {
            if (this._loadingTextChanged) {
                this._loadingTextChanged.raise();
            }
        }
        start(text) {
            this.loadingText = text;
            this.onLoadingStart();
        }
        get loadingStart() {
            if (!this._loadingStart) {
                this._loadingStart = new latte.LatteEvent(this);
            }
            return this._loadingStart;
        }
        get loadingEnd() {
            if (!this._loadingEnd) {
                this._loadingEnd = new latte.LatteEvent(this);
            }
            return this._loadingEnd;
        }
        get loadingTextChanged() {
            if (!this._loadingTextChanged) {
                this._loadingTextChanged = new latte.LatteEvent(this);
            }
            return this._loadingTextChanged;
        }
        get loadingText() {
            return this._loadingText;
        }
        set loadingText(value) {
            var changed = value !== this._loadingText;
            this._loadingText = value;
            if (changed) {
                this.onLoadingTextChanged();
            }
        }
    }
    latte.LoadInfo = LoadInfo;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Point {
        constructor(x = null, y = null) {
            this._x = null;
            this._y = null;
            if (x !== null) {
                this._x = x;
            }
            if (y !== null) {
                this._y = y;
            }
        }
        static distance(a, b) {
            return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
        }
        static empty() {
            return new Point(null, null);
        }
        static origin() {
            return new Point(0, 0);
        }
        distanceTo(p) {
            return Point.distance(this, p);
        }
        equals(p) {
            return this.x == p.x && p.y == this.y;
        }
        offset(x, y) {
            return new Point(this.x + x, this.y + y);
        }
        toString() {
            return latte.sprintf("Point(%s, %s)", this._x, this._y);
        }
        get isEmpty() {
            return this._x == null || this._y == null;
        }
        get x() {
            return this._x;
        }
        set x(value) {
            this._x = value;
        }
        get y() {
            return this._y;
        }
        set y(value) {
            this._y = value;
        }
    }
    latte.Point = Point;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Rectangle {
        constructor(left = 0, top = 0, width = 0, height = 0) {
            this.top = top;
            this.left = left;
            this.width = width;
            this.height = height;
        }
        static fromLRTB(left, right, top, bottom) {
            let r = new Rectangle(left, top);
            r.right = right;
            r.bottom = bottom;
            return r;
        }
        static fromObject(obj) {
            return new Rectangle(obj.left, obj.top, obj.width, obj.height);
        }
        static fromObjectLFTB(obj) {
            return Rectangle.fromLRTB(obj.left, obj.right, obj.top, obj.bottom);
        }
        static fromElement(e) {
            return Rectangle.fromObject(e.getBoundingClientRect());
        }
        absolute() {
            let width = Math.abs(this.width);
            let height = Math.abs(this.height);
            let left = this.width < 0 ? this.right : this.left;
            let top = this.height < 0 ? this.bottom : this.top;
            return new Rectangle(left, top, width, height);
        }
        centerOn(container) {
            let c = new Rectangle(container.left + (container.width - this.width) / 2, container.top + (container.height - this.height) / 2, this.width, this.height);
            return c;
        }
        contains(x, y) {
            return this.left <= x && x <= this.right && this.top <= y && y <= this.bottom;
        }
        containsRectangle(rectangle) {
            return this.contains(rectangle.left, rectangle.top) && this.contains(rectangle.right, rectangle.bottom);
        }
        equals(r) {
            if (!r)
                return false;
            return this.left == r.left && this.top == this.top && this.width == r.width && this.height == r.height;
        }
        inflate(horizontal, vertical) {
            if (!latte._isNumber(horizontal))
                throw new latte.InvalidArgumentEx('horizontal', horizontal);
            if (!latte._isNumber(vertical))
                throw new latte.InvalidArgumentEx('vertical', vertical);
            return Rectangle.fromLRTB(this.left - horizontal, this.right + horizontal, this.top - vertical, this.bottom + vertical);
        }
        intersection(rectangle) {
            let a = this;
            let b = rectangle;
            let x1 = Math.max(a.left, b.left);
            let x2 = Math.min(a.right, b.right);
            let y1 = Math.max(a.top, b.top);
            let y2 = Math.min(a.bottom, b.bottom);
            if (x2 => x1 && y2 >= y1) {
                return new Rectangle(x1, y1, x2 - x1, y2 - y1);
            }
            return new Rectangle();
        }
        intersects(rectangle) {
            let thisX = this.left;
            let thisY = this.top;
            let thisW = this.width;
            let thisH = this.height;
            let rectX = rectangle.left;
            let rectY = rectangle.top;
            let rectW = rectangle.width;
            let rectH = rectangle.height;
            return (rectX < thisX + thisW) && (thisX < (rectX + rectW)) && (rectY < thisY + thisH) && (thisY < rectY + rectH);
        }
        scaleToHeight(height) {
            return new Rectangle(this.left, this.top, height * this.width / this.height, height);
        }
        scaleToWidth(width) {
            return new Rectangle(this.left, this.top, width, width * this.height / this.width);
        }
        toString() {
            return "Rectangle: " + [this._left, this._top, this._width, this._height].join(', ');
        }
        union(rectangle) {
            return Rectangle.fromLRTB(Math.min(this.left, rectangle.left), Math.max(this.right, rectangle.right), Math.min(this.top, rectangle.top), Math.max(this.bottom, rectangle.bottom));
        }
        get area() {
            return this.width * this.height;
        }
        get bottom() {
            return this._top + this._height;
        }
        set bottom(value) {
            this._height = value - this._top;
        }
        get center() {
            return new latte.Point(this.left + this.width / 2, this.top + this.height / 2);
        }
        set center(value) {
            this.left = value.x - this.width / 2;
            this.top = value.y - this.height / 2;
        }
        get height() {
            return this._height;
        }
        set height(value) {
            this._height = value;
        }
        get isEmpty() {
            return this.area == 0 && this.left == 0 && this.top == 0;
        }
        get left() {
            return this._left;
        }
        set left(value) {
            this._left = value;
        }
        get location() {
            return new latte.Point(this.left, this.top);
        }
        get right() {
            return this._left + this._width;
        }
        set right(value) {
            this._width = value - this._left;
        }
        get size() {
            return new latte.Size(this.width, this.height);
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
        get top() {
            return this._top;
        }
        set top(value) {
            this._top = value;
        }
        get width() {
            return this._width;
        }
        set width(value) {
            this._width = value;
        }
    }
    latte.Rectangle = Rectangle;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Size {
        constructor(width = null, height = null) {
            this._height = null;
            this._width = null;
            if (width !== null) {
                this._width = width;
            }
            if (height !== null) {
                this._height = height;
            }
        }
        static empty() {
            return new Size(null, null);
        }
        static zero() {
            return new Size(0, 0);
        }
        contains(size) {
            return this.width >= size.width && this.height >= size.height;
        }
        inflate(width, height) {
            return new Size(this.width + width, this.height + height);
        }
        inflateUniform(wide) {
            return new Size(this.width + wide, this.height + wide);
        }
        scaleToFit(target) {
            let dh = target.width * this.height / this.width;
            if (dh > target.height) {
                return new Size(target.height * this.width / this.height, target.height);
            }
            return new Size(target.width, dh);
        }
        scaleToFill(target) {
            let dh = target.width * this.height / this.width;
            if (dh <= target.height) {
                return new Size(target.height * this.width / this.height, target.height);
            }
            return new Size(target.width, dh);
        }
        toString() {
            return latte.sprintf("Size(%s, %s)", this._width, this._height);
        }
        get area() {
            return this.width * this.height;
        }
        get isEmpty() {
            return this._height == null && this._width == null;
        }
        get isHorizontal() {
            return this.width > this.height;
        }
        get isSquare() {
            return this.width == this.height;
        }
        get isVertical() {
            return this.height > this.width;
        }
        get height() {
            return this._height;
        }
        get width() {
            return this._width;
        }
    }
    latte.Size = Size;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TimeSpan {
        constructor(days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0) {
            this.millis = 0;
            this.millis = (days * 86400 + hours * 3600 + minutes * 60 + seconds) * 1000 + milliseconds;
        }
        static fromDays(days) {
            return new TimeSpan(days);
        }
        static fromHours(hours) {
            return new TimeSpan(0, hours);
        }
        static fromMilliseconds(milliseconds) {
            var t = new TimeSpan();
            t.millis = milliseconds;
            return t;
        }
        static fromMinutes(minutes) {
            return new TimeSpan(0, 0, minutes);
        }
        static fromSeconds(seconds) {
            return new TimeSpan(0, 0, 0, seconds);
        }
        static fromString(timeString) {
            var parts = timeString.split(':');
            var hours = parts.length > 0 && latte._isNumeric(parts[0]) ? parseInt(parts[0], 10) : 0;
            var minutes = parts.length > 1 && latte._isNumeric(parts[1]) ? parseInt(parts[1], 10) : 0;
            var seconds = parts.length > 2 && latte._isNumeric(parts[2]) ? parseInt(parts[2], 10) : 0;
            return new TimeSpan(0, hours, minutes, seconds);
        }
        static timeSince(d) {
            return latte.DateTime.now.subtractDate(d);
        }
        _rounder(number) {
            if (this.millis < 0)
                return Math.ceil(number);
            return Math.floor(number);
        }
        _zeroPad(n) {
            return n <= 9 ? '0' + n.toString() : n.toString();
        }
        add(timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return TimeSpan.fromMilliseconds(this.millis + timespan.millis);
        }
        addHours(hours) {
            return this.add(new TimeSpan(0, hours));
        }
        addMinutes(minutes) {
            return this.add(new TimeSpan(0, 0, minutes));
        }
        addSeconds(seconds) {
            return this.add(new TimeSpan(0, 0, 0, seconds));
        }
        compareTo(timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            if (this.millis > timespan.millis)
                return 1;
            if (this.millis == timespan.millis)
                return 0;
            if (this.millis < timespan.millis)
                return -1;
            throw new latte.Ex();
        }
        duration() {
            return new TimeSpan(Math.abs(this.millis));
        }
        equals(timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return this.millis == timespan.millis;
        }
        negate() {
            this.millis *= -1;
        }
        subtract(timespan) {
            if (!(timespan instanceof TimeSpan))
                throw new latte.InvalidArgumentEx('timespan');
            return TimeSpan.fromMilliseconds(this.millis - timespan.millis);
        }
        toString(includeMilliseconds = false) {
            return (this.millis < 0 ? '-' : '') +
                (this.days ? this.days + ' ' : '') +
                this._zeroPad(this.hours) + ":" +
                this._zeroPad(this.minutes) +
                (this.seconds ? ':' + this._zeroPad(this.seconds) : '') +
                (includeMilliseconds ? '.' + Math.abs(this.milliseconds) : '');
        }
        toShortString(shortNames = false) {
            var suf = shortNames ? 'Short' : '';
            if (this.totalSeconds < 1) {
                return latte.sprintf(latte.strings['Smillis' + suf], this.totalMilliseconds);
            }
            else if (this.totalMinutes < 1) {
                var seconds = Math.round(this.totalSeconds);
                return latte.sprintf(latte.strings[(seconds == 1 ? 'oneSecond' : 'Sseconds') + suf], seconds);
            }
            else if (this.totalHours < 1) {
                var minutes = Math.round(this.totalMinutes);
                return latte.sprintf(latte.strings[(minutes == 1 ? 'oneMinute' : 'Sminutes') + suf], minutes);
            }
            else {
                var hours = Math.round(this.totalHours);
                return latte.sprintf(latte.strings[(hours == 1 ? 'oneHour' : 'Shours') + suf], latte.Culture.formatNumber(hours));
            }
        }
        valueOf() {
            return this.millis;
        }
        get days() {
            return this._rounder(this.millis / 86400000);
        }
        get hours() {
            return this._rounder((this.millis % (24 * 3600 * 1000)) / (3600 * 1000));
        }
        get isEmpty() {
            return this.millis == 0;
        }
        get milliseconds() {
            return this._rounder(this.millis % 1000);
        }
        get minutes() {
            return this._rounder((this.millis % (3600 * 1000)) / (60 * 1000));
        }
        get seconds() {
            return this._rounder((this.millis % 60000) / 1000);
        }
        get totalDays() {
            return this.millis / (86400000);
        }
        get totalHours() {
            return this.millis / (3600000);
        }
        get totalMilliseconds() {
            return this.millis;
        }
        get totalMinutes() {
            return this.millis / (60 * 1000);
        }
        get totalSeconds() {
            return this.millis / 1000;
        }
    }
    latte.TimeSpan = TimeSpan;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Timer {
        constructor(callback, milliseconds, context) {
            this.callback = callback;
            this.milliseconds = milliseconds;
            this.context = context;
        }
        get callback() {
            return this._callback;
        }
        set callback(value) {
            this._callback = value;
        }
        get context() {
            return this._context;
        }
        set context(value) {
            this._context = value;
        }
        get milliseconds() {
            return this._milliseconds;
        }
        set milliseconds(value) {
            this._milliseconds = value;
        }
        pause() {
            this._paused = true;
        }
        start() {
            if (this._paused === false)
                return;
            this._paused = false;
            setTimeout(() => { this.tick(); }, this.milliseconds);
        }
        tick() {
            if (this._paused === true)
                return;
            this.callback.apply(this.context);
            setTimeout(() => { this.tick(); }, this.milliseconds);
        }
    }
    latte.Timer = Timer;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let TriBool;
    (function (TriBool) {
        TriBool[TriBool["UNKNOWN"] = 0] = "UNKNOWN";
        TriBool[TriBool["TRUE"] = 1] = "TRUE";
        TriBool[TriBool["FALSE"] = 2] = "FALSE";
    })(TriBool = latte.TriBool || (latte.TriBool = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    class HEvent {
    }
    latte.HEvent = HEvent;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let WeekDay;
    (function (WeekDay) {
        WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
        WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
        WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
        WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
        WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
        WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
        WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
    })(WeekDay = latte.WeekDay || (latte.WeekDay = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    var deprecatedWarns = {};
    latte.includedPlugins = {};
    function _equalObjects(a, b) {
        if (!_isObject(a) || !_isObject(b))
            throw 'No objects';
        var p;
        for (p in a) {
            if (typeof (b[p]) == 'undefined') {
                return false;
            }
        }
        for (p in a) {
            if (a[p]) {
                switch (typeof (a[p])) {
                    case 'object':
                        if (!a[p].equals(b[p])) {
                            return false;
                        }
                        break;
                    case 'function':
                        if (typeof (b[p]) == 'undefined' ||
                            (p != 'equals' && a[p].toString() != b[p].toString()))
                            return false;
                        break;
                    default:
                        if (a[p] != b[p]) {
                            return false;
                        }
                }
            }
            else {
                if (b[p])
                    return false;
            }
        }
        for (p in b) {
            if (typeof (a[p]) == 'undefined') {
                return false;
            }
        }
        return true;
    }
    latte._equalObjects = _equalObjects;
    ;
    function _isNumber(param) { return typeof param == 'number'; }
    latte._isNumber = _isNumber;
    ;
    function _isBoolean(param) { return typeof param == 'boolean'; }
    latte._isBoolean = _isBoolean;
    ;
    function _isString(param) { return typeof param == 'string'; }
    latte._isString = _isString;
    ;
    function _isArray(param, minLength = 0) { return (param instanceof Array) && param.length >= minLength; }
    latte._isArray = _isArray;
    ;
    function _isFunction(param) { return typeof param == 'function'; }
    latte._isFunction = _isFunction;
    ;
    function _isObject(param) { return typeof param == 'object'; }
    latte._isObject = _isObject;
    ;
    function _isNumeric(param) {
        var allowed = "1234567890.";
        if (!_isString(param))
            param = String(param);
        if (param.length == 0) {
            return false;
        }
        else {
            for (var i = 0; i < param.length; i++)
                if (allowed.indexOf(param.charAt(i)) < 0)
                    return false;
            return true;
        }
    }
    latte._isNumeric = _isNumeric;
    ;
    function _latteUrl(value) {
        if (_undef(value)) {
            return window['-vendor-latte-url'] || '/latte';
        }
        else {
            window['-vendor-latte-url'] = value;
        }
    }
    latte._latteUrl = _latteUrl;
    function _empty(object) {
        if (!object)
            return true;
        for (let i in object) {
            return false;
        }
        return true;
    }
    latte._empty = _empty;
    function _undef(param) { return typeof param == 'undefined'; }
    latte._undef = _undef;
    ;
    function log(...any) {
        if (!_undef(console) && !_undef(console.log)) {
            if (arguments['length'] == 1) {
                console.log(arguments[0]);
            }
            else {
                console.log(sprintf.apply(this, arguments));
            }
        }
    }
    latte.log = log;
    ;
    function _merge(a, b) {
        for (var i in a) {
            b[i] = a[i];
        }
        return b;
    }
    latte._merge = _merge;
    function sprintf(...any) {
        var arg = 1, format = arguments[0], cur, next, result = [];
        for (var i = 0; i < format.length; i++) {
            cur = format.substr(i, 1);
            next = i == format.length - 1 ? '' : format.substr(i + 1, 1);
            if (cur == '%' && next == 's') {
                result.push(arguments[arg++]);
                i++;
            }
            else {
                result.push(cur);
            }
        }
        return result.join('');
    }
    latte.sprintf = sprintf;
    ;
    function warnDeprecated(code, alternateUse) {
        if (_undef(deprecatedWarns[code]) && console && console.warn) {
            deprecatedWarns[code] = true;
            console.warn(sprintf("latte: %s is deprecated. Please use %s instead", code, alternateUse));
        }
    }
    latte.warnDeprecated = warnDeprecated;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataBindActor {
        constructor(actor, propertyName, propertyType = latte.BindValueType.STRING, propertyChanged = null) {
            this._actor = actor;
            this._propertyName = propertyName;
            this._propertyType = propertyType;
            if (!this.propertyChanged) {
                let name = propertyName + "Changed";
                if (actor[name] instanceof latte.LatteEvent) {
                    this._propertyChanged = actor[name];
                }
            }
            else {
                this._propertyChanged = propertyChanged;
            }
        }
        get actor() {
            return this._actor;
        }
        get propertyChanged() {
            return this._propertyChanged;
        }
        get propertyName() {
            return this._propertyName;
        }
        get propertyType() {
            return this._propertyType;
        }
    }
    latte.DataBindActor = DataBindActor;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataBindCoercion {
        static coerce(value, sourceType, targetType) {
            value = DataBindCoercion.ensureType(value, sourceType);
            switch (targetType) {
                case latte.BindValueType.ANY: return value;
                case latte.BindValueType.STRING:
                    if (sourceType == latte.BindValueType.DATETIME && value instanceof latte.DateTime) {
                        return value.toString();
                    }
                    else {
                        return String(value);
                    }
                case latte.BindValueType.BOOLEAN:
                    if (sourceType == latte.BindValueType.NUMBER) {
                        return value > 0;
                    }
                    else {
                        return !!value;
                    }
                case latte.BindValueType.NUMBER:
                    if (sourceType == latte.BindValueType.BOOLEAN) {
                        return value ? 1 : 0;
                    }
                    else {
                        return value;
                    }
                case latte.BindValueType.DATETIME:
                    if (sourceType == latte.BindValueType.STRING) {
                        return latte.DateTime.fromString(value);
                    }
                    else {
                        return value;
                    }
            }
        }
        static ensureType(value, type) {
            switch (type) {
                case latte.BindValueType.ANY: return value;
                case latte.BindValueType.STRING: return String(value || '');
                case latte.BindValueType.BOOLEAN: return !!value;
                case latte.BindValueType.NUMBER: return parseFloat(value || 0);
            }
            return value;
        }
        static parseType(typeAsString = '') {
            let s = String(typeAsString).trim().toLowerCase();
            switch (s) {
                case 'html':
                case 'text':
                case 'password':
                case 'string': return latte.BindValueType.STRING;
                case 'record':
                case 'flags':
                case 'number':
                case 'float':
                case 'integer': return latte.BindValueType.NUMBER;
                case 'switch':
                case 'boolean': return latte.BindValueType.BOOLEAN;
                case 'date':
                case 'datetime': return latte.BindValueType.DATETIME;
                case 'time': return latte.BindValueType.TIMESPAN;
            }
            return latte.BindValueType.ANY;
        }
    }
    latte.DataBindCoercion = DataBindCoercion;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var _isString = latte._isString;
    class DataRecord {
        constructor() {
            this.tags = {};
            this._recordId = null;
            var metadata = this.getMetadata();
            if (metadata && latte._isObject(metadata.fields)) {
                for (var i in metadata.fields) {
                    this[i] = '';
                }
            }
        }
        static scanAndConvert(obj) {
            if (obj && latte._isObject(obj) || latte._isArray(obj)) {
                if (latte.DataRecord.isPackedRecord(obj)) {
                    obj = latte.DataRecord.fromServerObject(obj);
                }
                else {
                    for (let i in obj) {
                        obj[i] = latte.DataRecord.scanAndConvert(obj[i]);
                    }
                }
            }
            return obj;
        }
        static setDefaultRecordsNamespace(namespace) {
            latte.DataRecord._defaultRecordsNamespace = namespace;
            for (var symbol in namespace) {
                namespace[symbol].recordType = symbol;
                namespace[symbol].fromServerObject = latte.DataRecord.fromServerObject;
                namespace[symbol].fromServerObjects = latte.DataRecord.fromServerObjects;
            }
        }
        static fromName(name, id, callback) {
            var m = new latte.Message('latte.data', 'DataLatteUa', 'recordSelect', { name: name, id: id })
                .send((record) => {
                callback(record);
            });
            return m;
        }
        static fromServerObject(obj, classType = null) {
            var dns = latte.DataRecord._defaultRecordsNamespace ? latte.DataRecord._defaultRecordsNamespace : (latte._isObject(window[DataRecord.recordsNamespaceName]) ? window[DataRecord.recordsNamespaceName] : null);
            var rt = obj.recordType;
            var type = latte._isFunction(classType) ? classType : (latte._isFunction(dns[rt]) ? dns[rt] : DataRecord);
            var record = new type();
            var i, j;
            if (!latte.DataRecord.isPackedRecord(obj)) {
                throw new latte.Ex();
            }
            for (i in obj.fields) {
                let nativeType = type['nativeTypes'] ? type['nativeTypes'][i] || 'varchar' : 'varchar';
                record[i] = DataRecord.unserializeNativeValue(obj.fields[i], nativeType);
            }
            record.recordType = obj.recordType;
            record.recordId = parseInt(obj.recordId);
            if (obj.metadata) {
                record.metadata = obj.metadata || {};
            }
            if (!latte._undef(obj['properties'])) {
                for (i in obj.properties) {
                    if (latte._isArray(obj.properties[i])) {
                        for (j = 0; j < obj.properties[i].length; j++) {
                            obj.properties[i][j] = latte.DataRecord.fromServerObject(obj.properties[i][j]);
                        }
                    }
                    if (obj.properties[i] && obj.properties[i]['type'] == 'DataRecord') {
                        record[i] = latte.DataRecord.fromServerObject(obj.properties[i]);
                    }
                    else {
                        record[i] = obj.properties[i];
                    }
                }
            }
            return record;
        }
        static fromServerObjects(array, classType = null) {
            if (!latte._isArray(array))
                throw new latte.InvalidArgumentEx('array', array);
            var a = [];
            for (var i = 0; i < array.length; i++) {
                a.push(latte.DataRecord.fromServerObject(array[i], classType));
            }
            return a;
        }
        static isPackedRecord(object) {
            return latte._isObject(object)
                && object.type == 'DataRecord'
                && !latte._undef(object.recordType);
        }
        static serializeNativeValue(value, nativeType) {
            let parts = nativeType.split('(');
            let name = parts[0].toLowerCase();
            let size = parts.length > 1 ? parseInt(parts[1].replace(')', '')) : -1;
            let dictionary = {
                'bit': 'int',
                'tinyint': 'int',
                'bool': 'int',
                'boolean': 'int',
                'smallint': 'int',
                'mediumint': 'int',
                'int': 'int',
                'integer': 'int',
                'bigint': 'int',
                'decimal': 'float',
                'dec': 'float',
                'double': 'float',
                'double precision': 'float',
                'float': 'float',
                'year': 'int',
                'date': 'DateTime',
                'datetime': 'DateTime',
                'timestamp': 'TimeSpan',
                'time': 'TimeSpan',
                'char': 'string',
                'varchar': 'string',
                'text': 'string',
                'mediumtext': 'string',
                'enum': 'string'
            };
            let t = dictionary[name] || 'string';
            if (name == 'int' && size == 1) {
                return value ? "1" : "0";
            }
            let v = value === null ? '' : String(value);
            return v;
        }
        static unserializeNativeValue(value, nativeType) {
            if (value === null) {
                return null;
            }
            let parts = nativeType.split('(');
            let name = parts[0].toLowerCase();
            let size = parts.length > 1 ? parseInt(parts[1].replace(')', '')) : -1;
            let dictionary = {
                'bit': 'int',
                'tinyint': 'int',
                'bool': 'int',
                'boolean': 'int',
                'smallint': 'int',
                'mediumint': 'int',
                'int': 'int',
                'integer': 'int',
                'bigint': 'int',
                'decimal': 'float',
                'dec': 'float',
                'double': 'float',
                'double precision': 'float',
                'float': 'float',
                'year': 'int',
                'date': 'DateTime',
                'datetime': 'DateTime',
                'timestamp': 'TimeSpan',
                'time': 'TimeSpan',
                'char': 'string',
                'varchar': 'string',
                'text': 'string',
                'mediumtext': 'string',
                'enum': 'string'
            };
            let t = dictionary[name] || 'string';
            if (name == 'int' && size == 1) {
                t = 'boolean';
            }
            switch (t) {
                case 'boolean': return !!parseInt(value, 10);
                case 'int': return parseInt(value, 10);
                case 'float': return parseFloat(value);
                case 'DateTime': return latte.DateTime.fromString(value);
                case 'TimeSpan': return latte.TimeSpan.fromString(value);
                case 'string': return String(value);
            }
            return String(value);
        }
        addBind(property, target, targetProperty, type = latte.BindValueType.ANY) {
            if (!this._binds) {
                this._binds = [];
            }
            let a = new latte.DataBindActor(this, property, latte.DataBindCoercion.parseType(this.onGetFieldTypes()[property]));
            let b = new latte.DataBindActor(target, targetProperty, _isString(type) ? latte.DataBindCoercion.parseType(type) : type);
            let bind = new latte.ValueDataBind(a, b);
            this._binds.push(bind);
            return bind;
        }
        clearBinds() {
            if (this._binds) {
                this._binds.forEach(b => b.uninstall());
            }
            this._binds = null;
        }
        copyFieldsDataFrom(r) {
            var fields = r.onGetFields();
            for (var i in fields) {
                this[i] = fields[i];
            }
        }
        getFields() {
            var def = this.onGetFields();
            if (def) {
                return def;
            }
            else {
                var f = {};
                var metadata = this.getMetadata();
                if (metadata && metadata.fields) {
                    for (var i in metadata.fields) {
                        f[i] = this[i] || null;
                    }
                }
                return f;
            }
        }
        getMetadata() {
            return this.metadata;
        }
        getSerializedFields() {
            var def = this.onGetFields();
            var rt = latte[this._recordType];
            if (def) {
                for (var i in def) {
                    let nativeType = rt['nativeTypes'] ? rt['nativeTypes'][i] : 'varchar';
                    def[i] = DataRecord.serializeNativeValue(def[i], nativeType) || null;
                }
                return def;
            }
            else {
                var f = {};
                var metadata = this.getMetadata();
                if (metadata && metadata.fields) {
                    for (var i in metadata.fields) {
                        let nativeType = rt['nativeTypes'] ? rt['nativeTypes'][i] : 'varchar';
                        f[i] = DataRecord.serializeNativeValue(this[i], nativeType) || null;
                    }
                }
                return f;
            }
        }
        insert(callback) {
            return this.insertCall().send(() => {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        }
        insertCall() {
            let values = this.getSerializedFields();
            for (let i in values) {
                if (values[i] === null) {
                    values[i] = '';
                }
            }
            let call = new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordInsert', { name: this.recordType, fields: values });
            call.beforeSuccess.add((data) => {
                this.recordId = parseInt(data, 10);
                this[this.onGetRecordIdName()] = this.recordId;
            });
            return call;
        }
        inserted() {
            return this.recordId > 0;
        }
        onFieldValueChanged(field, value) {
            if (this._fieldValueChanged) {
                this._fieldValueChanged.raise(field, value);
            }
        }
        onFormCreating(dataRecordFormItem) {
            if (this._formCreating) {
                this._formCreating.raise(dataRecordFormItem);
            }
        }
        onFormCreated(dataRecordFormItem) {
            if (this._formCreated) {
                this._formCreated.raise(dataRecordFormItem);
            }
        }
        onGetFields() {
            return null;
        }
        onGetFieldTypes() {
            return null;
        }
        onGetRecordIdName() {
            return undefined;
        }
        onRecordIdChanged() {
            if (this._recordIdChanged) {
                this._recordIdChanged.raise();
            }
        }
        remove(callback = null) {
            return this.removeCall().send(() => {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        }
        removeBindsOf(target) {
            let list = [];
            this._binds.forEach(b => {
                if (b.actorB.actor == target) {
                    b.uninstall();
                }
                else {
                    list.push(b);
                }
            });
            this._binds = list;
        }
        removeCall() {
            return new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordDelete', { name: this.recordType, id: this.recordId });
        }
        save(callback = null) {
            return this.saveCall().send(() => {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        }
        saveCall() {
            if (this.recordId) {
                return this.updateCall();
            }
            else {
                return this.insertCall();
            }
        }
        toString() {
            if (_isString(this['name'])) {
                return this['name'];
            }
            else if (_isString(this['text'])) {
                return this['text'];
            }
            else {
                return latte.sprintf("[%s: %s]", this.recordType, this.recordId);
            }
        }
        update(callback) {
            return this.updateCall().send(() => {
                if (latte._isFunction(callback)) {
                    callback();
                }
            });
        }
        updateCall() {
            var values = this.getSerializedFields();
            for (var i in values) {
                if (values[i] === null) {
                    values[i] = '';
                }
            }
            var call = new latte.RemoteCall(this.moduleName, 'DataLatteUa', 'recordUpdate', { name: this.recordType, id: this.recordId, fields: values });
            return call;
        }
        get formCreating() {
            if (!this._formCreating) {
                this._formCreating = new latte.LatteEvent(this);
            }
            return this._formCreating;
        }
        get formCreated() {
            if (!this._formCreated) {
                this._formCreated = new latte.LatteEvent(this);
            }
            return this._formCreated;
        }
        get fieldValueChanged() {
            if (!this._fieldValueChanged) {
                this._fieldValueChanged = new latte.LatteEvent(this);
            }
            return this._fieldValueChanged;
        }
        get recordIdChanged() {
            if (!this._recordIdChanged) {
                this._recordIdChanged = new latte.LatteEvent(this);
            }
            return this._recordIdChanged;
        }
        get moduleName() {
            return this._moduleName;
        }
        set moduleName(value) {
            this._moduleName = value;
        }
        get recordId() {
            return this._recordId;
        }
        set recordId(value) {
            let changed = value !== this._recordId;
            this._recordId = value;
            if (changed) {
                this.onRecordIdChanged();
            }
        }
        get recordType() {
            return this._recordType;
        }
        set recordType(value) {
            this._recordType = value;
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
    }
    DataRecord.recordsNamespaceName = 'latte';
    latte.DataRecord = DataRecord;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class UiElement {
        constructor() {
            this.localId = 0;
            this._enabled = true;
            this._beingDragged = false;
            this._changesWhileSaving = false;
            this._hidden = false;
            this._isSavingChanges = false;
            this._unsavedChanges = false;
            this.localId = UiElement.reminderId++;
            if (!UiElement._staticInited) {
                UiElement.staticInit();
            }
            this.contextItemsShow = new latte.LatteEvent(this);
            this.layout = new latte.LatteEvent(this);
            this.enabledChanged = new latte.LatteEvent(this);
            this.visibleChanged = new latte.LatteEvent(this);
            this.contextItems = new latte.Collection();
            if (!UiElement._contextItemsCollect)
                UiElement._contextItemsCollect = new latte.Collection();
            this.element = $('<div>');
            this.element.addClass('latte-uielement');
            this.element.data('instance', this);
            this.element.bind('contextmenu', (e) => { return this._contextMenu(e); });
            this.addEventListener('click', (e) => {
                if (!this.enabled) {
                    e.preventDefault();
                    return false;
                }
            });
            this.addEventListener('mousedown', (e) => {
                if (!this.enabled) {
                    e.preventDefault();
                    return false;
                }
            });
        }
        static disableTextSelection(element) {
            if (!(element instanceof jQuery))
                throw new latte.InvalidArgumentEx('element');
            element.attr('unselectable', 'on')
                .css({
                '-moz-user-select': 'none',
                '-webkit-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none'
            });
            return element;
        }
        static enableTextSelection(element) {
            element.attr('unselectable', 'off')
                .css({
                '-moz-user-select': '',
                '-webkit-user-select': '',
                '-ms-user-select': '',
                'user-select': ''
            });
            return element;
        }
        static oppositeSide(side) {
            switch (side) {
                case latte.Side.TOP: return latte.Side.BOTTOM;
                case latte.Side.BOTTOM: return latte.Side.TOP;
                case latte.Side.LEFT: return latte.Side.RIGHT;
                case latte.Side.RIGHT: return latte.Side.LEFT;
                default: return latte.Side.BOTTOM;
            }
        }
        static staticInit() {
            $('body')
                .mousemove((e) => {
                if (UiElement.dragging) {
                    UiElement._dragElement.css({
                        top: e.pageY + 10,
                        left: e.pageX + 10
                    });
                }
            })
                .mouseup((e) => {
                UiElement._dragging = false;
                if (UiElement._dragElement) {
                    UiElement._dragElement.remove();
                    UiElement._dragElement = null;
                }
                if (UiElement._draggingElement) {
                    if (UiElement.dropTarget) {
                        UiElement.dropTarget.onDropElement();
                    }
                    UiElement._draggingElement.onDropped();
                    UiElement._draggingElement.beingDragged = false;
                    UiElement._draggingElement = null;
                }
            });
        }
        static get dragElement() {
            return this._dragElement;
        }
        static get dragging() {
            return this._dragging;
        }
        static get draggingElement() {
            return this._draggingElement;
        }
        static get dropTarget() {
            return this._dropTarget;
        }
        static set dropTarget(value) {
            this._dropTarget = value;
        }
        _contextMenu(e) {
            var menu = this.showContextMenu(e.pageX, e.pageY);
            return !(menu instanceof latte.MenuOverlay);
        }
        addEventListener(event, f, useCapture = false) {
            this.node.addEventListener(event, f, useCapture);
        }
        addClass(classString) {
            this.element.addClass(classString);
            return this;
        }
        appendTo(element) {
            if (element instanceof jQuery || latte._isString(element)) {
                this.element.appendTo(element);
            }
            else if (element instanceof UiElement) {
                this.element.appendTo(element.element);
            }
            else {
                throw new latte.InvalidArgumentEx('element', element);
            }
            return this;
        }
        css(css, value = '') {
            this.element.css(css, value);
            return this;
        }
        ensureClass(className, condition) {
            if (condition) {
                this.addClass(className);
            }
            else {
                this.removeClass(className);
            }
        }
        finalize() {
            if (this.onFinalizing() === false) {
                return;
            }
            this.element.remove();
        }
        getSaveCalls() {
            let calls = [];
            this.saveItems.each((item) => calls = calls.concat(item.getSaveCalls()));
            return calls;
        }
        getUnsavedChanges() {
            return this._unsavedChanges;
        }
        onBeingDraggedChanged() {
            if (this._beingDraggedChanged) {
                this._beingDraggedChanged.raise();
            }
            if (this.hideWhileDragging === true) {
                this.visible = !this.beingDragged;
            }
        }
        onBlur() {
            if (this._blur) {
                this._blur.raise();
            }
        }
        onChangesWhileSavingChanged() {
            if (this._changesWhileSavingChanged) {
                this._changesWhileSavingChanged.raise();
            }
            if (!this.changesWhileSaving) {
                this.saveItems.each(item => item.changesWhileSaving = false);
            }
        }
        onContextItemsShow() {
            this.contextItemsShow.raise();
        }
        onCreateDragElement() {
            let copy = this.element.clone();
            let bounds = latte.Rectangle.fromElement(this.raw);
            copy.addClass('active-drag-element');
            copy.css({
                position: 'fixed',
                opacity: 0.5,
                width: bounds.width,
                height: bounds.height,
                left: UiElement._dragStart.x,
                top: UiElement._dragStart.y
            });
            copy.appendTo('body');
            return copy;
        }
        onDragOver(e) {
            if (this._dragOver) {
                return this._dragOver.raise();
            }
        }
        onDropped() {
            if (this._dropped) {
                this.dropped.raise();
            }
        }
        onDropElement() {
            if (this._dropElement) {
                this._dropElement.raise();
            }
        }
        onEnabledChanged() {
            this.enabledChanged.raise();
        }
        onFocusableChanged() {
            if (this._focusableChanged) {
                this._focusableChanged.raise();
            }
            if (this.focusable) {
                this.addClass('focusable');
                this.node.setAttribute('tabindex', "0");
                this.addEventListener('focus', () => {
                    this.onFocused();
                });
                this.addEventListener('blur', () => {
                    this.onBlur();
                });
            }
            else {
                this.removeClass('focusable');
                this.node.removeAttribute('tabindex');
            }
        }
        onFinalizing() {
            if (this._finalizing) {
                return this._finalizing.raise();
            }
        }
        onFocused() {
            if (this._focused) {
                this._focused.raise();
            }
        }
        onHiddenChanged() {
            if (this.hidden) {
                this.css('visibility', 'hidden');
            }
            else {
                this.css('visibility', '');
            }
            if (this._hiddenChanged) {
                this._hiddenChanged.raise();
            }
        }
        onIsSavingChangesChanged() {
            if (this._isSavingChangesChanged) {
                this._isSavingChangesChanged.raise();
            }
            this.saveItems.each(item => item.isSavingChanges = this.isSavingChanges);
        }
        onLayout() {
            this.layout.raise();
        }
        onVisibleChanged() {
            this.visibleChanged.raise();
        }
        onSavedChanges() {
            if (this._savedChanges) {
                this._savedChanges.raise();
            }
        }
        onSavingChanges() {
            if (this._savingChanges) {
                return this._savingChanges.raise();
            }
        }
        onUnsavedChangesChanged() {
            if (this._unsavedChangesChanged) {
                this._unsavedChangesChanged.raise();
            }
            if (!this.unsavedChanges) {
                this.saveItems.each(item => item.unsavedChanges = false);
            }
        }
        removeClass(classString) {
            this.element.removeClass(classString);
            return this;
        }
        saveChanges(callback = null) {
            if (this.onSavingChanges() !== false) {
                if (!this.saveChangesQueue)
                    this.saveChangesQueue = [];
                this.isSavingChanges = true;
                let iMessage = latte['Message'].sendCalls(this.getSaveCalls(), () => {
                    this.onSavedChanges();
                    this.saveChangesQueue.pop();
                    if (this.saveChangesQueue.length == 0) {
                        if (this.changesWhileSaving) {
                            this.changesWhileSaving = false;
                            this.saveChanges(callback);
                        }
                        else {
                            this.unsavedChanges = false;
                            this.isSavingChanges = false;
                            if (callback) {
                                callback();
                            }
                        }
                    }
                });
                this.saveChangesQueue.push(iMessage);
                return iMessage;
            }
            else {
                latte.log(`CANCELLED`);
            }
        }
        setUnsavedChanges(value = false, silent = false) {
            let changed = value != this._unsavedChanges;
            this._unsavedChanges = value;
            if (value && this.isSavingChanges) {
                this.changesWhileSaving = true;
            }
            if (changed && silent !== true)
                this.onUnsavedChangesChanged();
        }
        showContextMenu(pageX, pageY) {
            var buffer = UiElement._contextItemsCollect;
            this.onContextItemsShow();
            if (buffer.count > 0 && this.contextItems.count > 0) {
                buffer.add(new latte.SeparatorItem());
            }
            buffer.addCollection(this.contextItems);
            if (this.element.parents('.latte-uielement').length == 0
                && buffer.count > 0) {
                latte.MenuOverlay.closeAll();
                var m = new latte.MenuOverlay();
                m.items.addCollection(buffer);
                m.showAt(pageX, pageY);
                buffer.clear();
                return m;
            }
            return null;
        }
        updateSavedChanges() {
            let changes = false;
            for (let i = 0; i < this.saveItems.length; i++) {
                if (this.saveItems[i].unsavedChanges) {
                    changes = true;
                    break;
                }
            }
            this.unsavedChanges = changes;
        }
        get beingDraggedChanged() {
            if (!this._beingDraggedChanged) {
                this._beingDraggedChanged = new latte.LatteEvent(this);
            }
            return this._beingDraggedChanged;
        }
        get blur() {
            if (!this._blur) {
                this._blur = new latte.LatteEvent(this);
            }
            return this._blur;
        }
        get changesWhileSavingChanged() {
            if (!this._changesWhileSavingChanged) {
                this._changesWhileSavingChanged = new latte.LatteEvent(this);
            }
            return this._changesWhileSavingChanged;
        }
        get dragOver() {
            if (!this._dragOver) {
                this._dragOver = new latte.LatteEvent(this);
                this._dragOver.handlerAdded.add(() => {
                    this.element.mouseover(e => {
                        if (UiElement.dragging) {
                            if (this.onDragOver(e)) {
                                UiElement.dropTarget = this;
                            }
                            else {
                                UiElement.dropTarget = null;
                            }
                        }
                    });
                });
            }
            return this._dragOver;
        }
        get dropElement() {
            if (!this._dropElement) {
                this._dropElement = new latte.LatteEvent(this);
            }
            return this._dropElement;
        }
        get finalizing() {
            if (!this._finalizing) {
                this._finalizing = new latte.LatteEvent(this);
            }
            return this._finalizing;
        }
        get focused() {
            if (!this._focused) {
                this._focused = new latte.LatteEvent(this);
            }
            return this._focused;
        }
        get hiddenChanged() {
            if (!this._hiddenChanged) {
                this._hiddenChanged = new latte.LatteEvent(this);
            }
            return this._hiddenChanged;
        }
        get isSavingChangesChanged() {
            if (!this._isSavingChangesChanged) {
                this._isSavingChangesChanged = new latte.LatteEvent(this);
            }
            return this._isSavingChangesChanged;
        }
        get savedChanges() {
            if (!this._savedChanges) {
                this._savedChanges = new latte.LatteEvent(this);
            }
            return this._savedChanges;
        }
        get savingChanges() {
            if (!this._savingChanges) {
                this._savingChanges = new latte.LatteEvent(this);
            }
            return this._savingChanges;
        }
        get unsavedChangesChanged() {
            if (!this._unsavedChangesChanged) {
                this._unsavedChangesChanged = new latte.LatteEvent(this);
            }
            return this._unsavedChangesChanged;
        }
        get beingDragged() {
            return this._beingDragged;
        }
        set beingDragged(value) {
            let changed = value !== this._beingDragged;
            this._beingDragged = value;
            if (changed) {
                this.onBeingDraggedChanged();
            }
        }
        get changesWhileSaving() {
            return this._changesWhileSaving;
        }
        set changesWhileSaving(value) {
            let changed = value !== this._changesWhileSaving;
            this._changesWhileSaving = value;
            if (changed) {
                this.onChangesWhileSavingChanged();
            }
        }
        get dragSource() {
            return this._dragSource;
        }
        set dragSource(value) {
            if (this._dragSource instanceof $) {
            }
            this._dragSource = value;
            let hTimeout;
            this._dragSource
                .mousedown((e) => {
                if (e.which == 1) {
                    hTimeout = setTimeout(() => {
                        UiElement._dragStart = { x: e.pageX, y: e.pageY };
                        UiElement._dragging = true;
                        UiElement._dragElement = this.onCreateDragElement();
                        UiElement._draggingElement = this;
                        this.beingDragged = true;
                    }, 200);
                    e.stopPropagation();
                    return false;
                }
            })
                .mouseup((e) => {
                if (hTimeout) {
                    clearTimeout(hTimeout);
                }
            });
        }
        get dropped() {
            if (!this._dropped) {
                this._dropped = new latte.LatteEvent(this);
            }
            return this._dropped;
        }
        get enabled() {
            return this._enabled;
        }
        set enabled(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = this._enabled != value;
            this._enabled = value;
            if (value) {
                this.element.removeClass('disabled');
                this.element.css('opacity', 1);
            }
            else {
                this.element.addClass('disabled');
                this.element.css('opacity', .4);
            }
            if (changed)
                this.onEnabledChanged();
        }
        get finalized() {
            return this._finalized;
        }
        get focusable() {
            return this._focusable;
        }
        set focusable(value) {
            if (value) {
                this.addClass('focusable');
                this.element.attr('tabindex', 0);
                this.node.addEventListener('focus', () => {
                    this.onFocused();
                });
                this.node.addEventListener('blur', () => {
                    this.onBlur();
                });
            }
            else {
                this.removeClass('focusable');
                this.element.removeAttr('tabindex');
            }
            this._focusable = value;
        }
        get focusableChanged() {
            if (!this._focusableChanged) {
                this._focusableChanged = new latte.LatteEvent(this);
            }
            return this._focusableChanged;
        }
        get height() {
            return this.element.height();
        }
        set height(value) {
            this.element.height(value);
        }
        get hidden() {
            return this._hidden;
        }
        set hidden(value) {
            var changed = value !== this._hidden;
            this._hidden = value;
            if (changed) {
                this.onHiddenChanged();
            }
        }
        get hideWhileDragging() {
            return this._hideWhileDragging;
        }
        set hideWhileDragging(value) {
            this._hideWhileDragging = value;
        }
        get isSavingChanges() {
            return this._isSavingChanges;
        }
        set isSavingChanges(value) {
            let changed = value !== this._isSavingChanges;
            this._isSavingChanges = value;
            if (changed) {
                this.onIsSavingChangesChanged();
            }
        }
        get node() {
            return this.element.get(0);
        }
        get raw() {
            return this.element.get(0);
        }
        get saveItems() {
            if (!this._saveItems) {
                this._saveItems = new latte.Collection(item => {
                    item.unsavedChangesChanged.add(() => {
                        if (this.saveItems.contains(item)) {
                            this.updateSavedChanges();
                        }
                    });
                    item.changesWhileSavingChanged.add(() => {
                        if (this.saveItems.contains(item)) {
                            if (item.changesWhileSaving) {
                                this.changesWhileSaving = true;
                            }
                        }
                    });
                });
            }
            return this._saveItems;
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
        get tooltip() {
            return this._tooltip;
        }
        set tooltip(value) {
            this.element.attr('title', value);
            this._tooltip = value;
        }
        get unsavedChanges() {
            return this.getUnsavedChanges();
        }
        set unsavedChanges(value) {
            this.setUnsavedChanges(value);
        }
        get visible() {
            return this._visible;
        }
        set visible(value) {
            this._visible = value;
            var changed = this._visible != value;
            if (value) {
                this.element.show();
            }
            else {
                this.element.hide();
            }
            if (changed) {
                this.onVisibleChanged();
            }
        }
        get width() {
            return this.element.width();
        }
        set width(value) {
            this.element.width(value);
        }
    }
    UiElement.reminderId = 0;
    UiElement._dragStart = null;
    UiElement._staticInited = false;
    UiElement._dragging = false;
    UiElement._draggingElement = null;
    UiElement._dropTarget = null;
    latte.UiElement = UiElement;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class View extends latte.UiElement {
        constructor() {
            super();
            this.element.addClass('latte-view');
            this.container = $('<div>').appendTo(this.element).addClass('container');
        }
        static getMainView() {
            return View._mainViewHolder ? View._mainViewHolder.view : null;
        }
        static initStatic() {
            View.smallScreenChanged = new latte.LatteEvent(this);
            $(document)
                .keydown(function (e) {
                if (e.keyCode == latte.Key.ENTER) {
                    if (View.defaultButton instanceof latte.ButtonItem)
                        View.defaultButton.onClick();
                }
            });
        }
        static getModalView() {
            return this._modalView;
        }
        static onSmallScreenChanged() {
            if (View.mainView instanceof View) {
                if (View.smallScreen) {
                    $('body').addClass('small-screen');
                }
                else {
                    $('body').removeClass('small-screen');
                }
            }
            if (View.smallScreenChanged instanceof latte.LatteEvent) {
                View.smallScreenChanged.raise();
            }
        }
        static setModalView(view = null, itemsArray = null) {
            let layer = $('<div>').addClass('latte-modal-view-layer').appendTo('body');
            let dialog = $('<div>').addClass('latte-modal-view').appendTo('body');
            let eInner = $('<div>').addClass('inner-view').appendTo(dialog);
            view.subLayer = layer.get(0);
            view.containmentLayer = dialog.get(0);
            view.parentIsModal = true;
            eInner.append(view.element);
            if (itemsArray && itemsArray.length > 0) {
                let eItems = $('<div>').addClass('items').appendTo(dialog);
                itemsArray.forEach((item) => eItems.append(item.element));
                eItems.clear();
                if (itemsArray.length == 0)
                    eItems.detach();
            }
            let centerRect = dialog.rectangle().centerOn(layer.rectangle());
            dialog.rectangle(centerRect);
            dialog.css('height', '');
            let start = {
                top: -dialog.height(),
                opacity: 0
            };
            let end = {
                top: centerRect.top,
                opacity: 1
            };
            view.onLayout();
            layer.css({ opacity: 0 }).animate({ opacity: 1 }, 'fast');
            dialog.css(start).animate(end, 'fast', 'swing', function () { view.focusInput(); });
            this._layer = layer;
            this._modalView = view;
        }
        static setMainView(view, transition = null, milliseconds = 0) {
            if (!(View._mainViewHolder instanceof View)) {
                View._mainViewHolder = new View();
                View._mainViewHolder.addClass('main-view-holder');
                View._mainViewHolder.appendTo('body');
            }
            if (!View._initialized) {
                $(window).bind('resize', function () {
                    if (View._mainViewHolder instanceof View) {
                        View.smallScreen = document.documentElement.clientWidth <= 480;
                        View._mainViewHolder.onLayout();
                    }
                });
                View._initialized = true;
            }
            View._mainViewHolder.setView(view, transition, milliseconds);
            View.smallScreen = document.documentElement.clientWidth <= 480;
        }
        static get defaultButton() {
            return View._defaultButton;
        }
        static set defaultButton(value) {
            View._defaultButton = value;
        }
        static get mainView() {
            return this.getMainView();
        }
        static set mainView(view) {
            this.setMainView(view);
        }
        static get modalView() {
            return this.getModalView();
        }
        static set modalView(value) {
            this.setModalView(value);
        }
        static get smallScreen() {
            return View._smallScreen;
        }
        static set smallScreen(value) {
            var changed = value !== View._smallScreen;
            View._smallScreen = value;
            if (changed) {
                View.onSmallScreenChanged();
            }
        }
        focusInput() {
            this.element.find('input, select, textarea').first().focus().select();
        }
        getView() {
            return this._view;
        }
        onLayout() {
            super.onLayout();
            if (this._infoItem instanceof latte.Item) {
                this._infoItem.element.css({ width: 'auto', height: 'auto' });
                var viewRect = this.element.rectangle();
                viewRect.top = 0;
                viewRect.left = 0;
                var itemRect = this._infoItem.element.rectangle();
                this._infoItem.element.css('position', 'absolute').rectangle(itemRect.centerOn(viewRect));
            }
            if (this._view instanceof View)
                this._view.onLayout();
        }
        onLoad() {
            if (this._load) {
                this._load.raise();
            }
        }
        onShown() {
            if (this._shown) {
                this._shown.raise();
            }
        }
        onUnload() {
            let response = this.unload.raise();
            if (response !== false) {
                if (this.unsavedChanges) {
                    let btnSave = new latte.ButtonItem();
                    btnSave.text = latte.strings.yesSaveChanges;
                    btnSave.click.add(() => { this.saveChanges(); });
                    let btnIgnore = new latte.ButtonItem();
                    btnIgnore.text = latte.strings.noIgnoreChanges;
                    btnIgnore.click.add(() => { this.unsavedChanges = false; });
                    latte.DialogView
                        .ask(latte.strings.askSaveChanges, latte.strings.unsavedChanges, [btnSave, btnIgnore]);
                }
            }
            return response;
        }
        setView(view = null, transition = null, milliseconds = 0) {
            if (view && view === this._view)
                return true;
            if (latte._undef(transition))
                transition = latte.Transition.FADE;
            if (this._view instanceof View) {
                if (this._view.onUnload() === false) {
                    return false;
                }
                this.saveItems.remove(this._view);
            }
            let oldView = this._view, newView = view, oldStart = {}, oldEnd = {}, newStart = {}, newEnd = {};
            if (newView) {
                view.onLoad();
                newView.parentIsModal = this.parentIsModal;
                this.container.append(view.element);
                this.saveItems.add(view);
                newView._parentView = this;
            }
            if (oldView)
                oldView._parentView = null;
            switch (transition) {
                case latte.Transition.FADE:
                    oldStart.opacity = newEnd.opacity = 1;
                    oldEnd.opacity = newStart.opacity = 0;
                    break;
                case latte.Transition.SWIPE_FORWARD:
                    oldEnd.left = oldView ? -oldView.element.width() : 0;
                    newStart.left = newView ? newView.element.width() : 0;
                    newEnd.left = 0;
                    break;
            }
            if (newView)
                newView.element.css(newStart);
            if (oldView)
                oldView.element.css(oldStart);
            if (newView)
                view.onLayout();
            if (newView)
                view.element.animate(newEnd, latte._undef(milliseconds) ? 100 : milliseconds, 'swing', () => {
                    if (newView)
                        view.onShown();
                });
            if (oldView)
                oldView.element.animate(oldEnd, latte._undef(milliseconds) ? 100 : milliseconds, 'swing', () => {
                    oldView.element.detach();
                });
            this._view = newView;
        }
        get load() {
            if (!this._load) {
                this._load = new latte.LatteEvent(this);
            }
            return this._load;
        }
        get shown() {
            if (!this._shown) {
                this._shown = new latte.LatteEvent(this);
            }
            return this._shown;
        }
        get unload() {
            if (!this._unload) {
                this._unload = new latte.LatteEvent(this);
            }
            return this._unload;
        }
        get infoItem() {
            return this._infoItem;
        }
        set infoItem(value) {
            if (this._infoItem instanceof latte.Item)
                this._infoItem.element.detach();
            if (value instanceof latte.Item)
                value.element.insertBefore(this.container);
            this._infoItem = value;
            this.onLayout();
        }
        get padding() {
            return this._padding;
        }
        set padding(value) {
            this._padding = value;
            this.container.css('padding', value);
        }
        get parentIsModal() {
            return this._parentIsModal;
        }
        set parentIsModal(value) {
            this._parentIsModal = value;
            if (value) {
                this.element.css('position', 'static');
                this.container.css('position', 'static');
            }
            else {
                this.element.css('position', 'absolute');
                this.container.css('position', 'absolute');
            }
            if (this.view instanceof View)
                this.view.parentIsModal = value;
        }
        get parentView() {
            return this._parentView;
        }
        get view() {
            return this.getView();
        }
        set view(value) {
            this.setView(value);
        }
    }
    View._smallScreen = false;
    latte.View = View;
    $(() => { View.initStatic(); });
})(latte || (latte = {}));
var latte;
(function (latte) {
    class AnchorView extends latte.View {
        constructor(anchorTop = null) {
            super();
            this._anchorTop = null;
            this._anchorTopVisible = true;
            this._anchorRight = null;
            this._anchorRightVisible = true;
            this._anchorBottom = null;
            this._anchorBottomVisible = true;
            this._anchorLeft = null;
            this._anchorLeftVisible = true;
            this.element.addClass('anchor');
            if (anchorTop) {
                this.anchorTop = anchorTop;
            }
        }
        onLayout() {
            super.onLayout();
            var containerCss = {
                top: '',
                left: '',
                right: '',
                bottom: ''
            };
            var itemCss = {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            };
            if (this.anchorTop && this.anchorTopVisible) {
                containerCss.top = this.anchorTop.element.outerHeight();
                this.anchorTop.css({
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: ''
                });
                this.anchorTop.onLayout();
            }
            if (this.anchorRight && this.anchorRightVisible) {
                containerCss.right = this.anchorRight.element.outerWidth();
                this.anchorRight.css({
                    top: 0,
                    left: '',
                    right: 0,
                    bottom: 0
                });
                this.anchorRight.onLayout();
            }
            if (this.anchorBottom && this.anchorBottomVisible) {
                containerCss.bottom = this.anchorBottom.element.outerHeight();
                this.anchorBottom.css({
                    top: '',
                    left: 0,
                    right: 0,
                    bottom: 0
                });
                this.anchorBottom.onLayout();
            }
            if (this.anchorLeft && this.anchorLeftVisible) {
                containerCss.left = this.anchorLeft.element.outerWidth();
                this.anchorLeft.css({
                    top: 0,
                    left: 0,
                    right: '',
                    bottom: 0
                });
                this.anchorLeft.onLayout();
            }
            this.container.css(containerCss);
        }
        get anchorTopChanged() {
            if (!this._anchorTopChanged) {
                this._anchorTopChanged = new latte.LatteEvent(this);
            }
            return this._anchorTopChanged;
        }
        onAnchorTopChanged() {
            if (this._anchorTopChanged) {
                this._anchorTopChanged.raise();
            }
            this.onLayout();
        }
        get anchorRightChanged() {
            if (!this._anchorRightChanged) {
                this._anchorRightChanged = new latte.LatteEvent(this);
            }
            return this._anchorRightChanged;
        }
        onAnchorRightChanged() {
            if (this._anchorRightChanged) {
                this._anchorRightChanged.raise();
            }
            this.onLayout();
        }
        get anchorBottomChanged() {
            if (!this._anchorBottomChanged) {
                this._anchorBottomChanged = new latte.LatteEvent(this);
            }
            return this._anchorBottomChanged;
        }
        onAnchorBottomChanged() {
            if (this._anchorBottomChanged) {
                this._anchorBottomChanged.raise();
            }
            this.onLayout();
        }
        get anchorLeftChanged() {
            if (!this._anchorLeftChanged) {
                this._anchorLeftChanged = new latte.LatteEvent(this);
            }
            return this._anchorLeftChanged;
        }
        onAnchorLeftChanged() {
            if (this._anchorLeftChanged) {
                this._anchorLeftChanged.raise();
            }
            this.onLayout();
        }
        get anchorTopVisibleChanged() {
            if (!this._anchorTopVisibleChanged) {
                this._anchorTopVisibleChanged = new latte.LatteEvent(this);
            }
            return this._anchorTopVisibleChanged;
        }
        onAnchorTopVisibleChanged() {
            if (this._anchorTopVisibleChanged) {
                this._anchorTopVisibleChanged.raise();
            }
            this.onLayout();
        }
        get anchorRightVisibleChanged() {
            if (!this._anchorRightVisibleChanged) {
                this._anchorRightVisibleChanged = new latte.LatteEvent(this);
            }
            return this._anchorRightVisibleChanged;
        }
        onAnchorRightVisibleChanged() {
            if (this._anchorRightVisibleChanged) {
                this._anchorRightVisibleChanged.raise();
            }
            this.onLayout();
        }
        get anchorBottomVisibleChanged() {
            if (!this._anchorBottomVisibleChanged) {
                this._anchorBottomVisibleChanged = new latte.LatteEvent(this);
            }
            return this._anchorBottomVisibleChanged;
        }
        onAnchorBottomVisibleChanged() {
            if (this._anchorBottomVisibleChanged) {
                this._anchorBottomVisibleChanged.raise();
            }
            this.onLayout();
        }
        get anchorLeftVisibleChanged() {
            if (!this._anchorLeftVisibleChanged) {
                this._anchorLeftVisibleChanged = new latte.LatteEvent(this);
            }
            return this._anchorLeftVisibleChanged;
        }
        onAnchorLeftVisibleChanged() {
            if (this._anchorLeftVisibleChanged) {
                this._anchorLeftVisibleChanged.raise();
            }
            this.onLayout();
        }
        get anchorTop() {
            return this._anchorTop;
        }
        set anchorTop(value) {
            var changed = this._anchorTop !== value;
            if (this._anchorTop instanceof latte.Item) {
                this._anchorTop.removeClass('anchor');
                this._anchorTop.element.detach();
            }
            this._anchorTop = value;
            if (changed) {
                if (value) {
                    value.addClass('anchor anchor-top');
                    value.appendTo(this.element);
                }
                this.onAnchorTopChanged();
            }
        }
        get anchorTopVisible() {
            return this._anchorTopVisible;
        }
        set anchorTopVisible(value) {
            var changed = this._anchorTopVisible !== value;
            this._anchorTopVisible = value;
            if (changed) {
                this.anchorTop.visible = value;
                this.onAnchorTopVisibleChanged();
            }
        }
        get anchorRight() {
            return this._anchorRight;
        }
        set anchorRight(value) {
            var changed = this._anchorRight !== value;
            if (this._anchorRight instanceof latte.Item) {
                this._anchorRight.removeClass('anchor');
                this._anchorRight.element.detach();
            }
            this._anchorRight = value;
            if (changed) {
                if (value) {
                    value.addClass('anchor anchor-right');
                    value.appendTo(this.element);
                }
                this.onAnchorRightChanged();
            }
        }
        get anchorRightVisible() {
            return this._anchorRightVisible;
        }
        set anchorRightVisible(value) {
            var changed = this._anchorRightVisible !== value;
            this._anchorRightVisible = value;
            if (changed) {
                this.anchorRight.visible = value;
                this.onAnchorRightVisibleChanged();
            }
        }
        get anchorBottom() {
            return this._anchorBottom;
        }
        set anchorBottom(value) {
            var changed = this._anchorBottom !== value;
            if (this._anchorBottom instanceof latte.Item) {
                this._anchorBottom.removeClass('anchor');
                this._anchorBottom.element.detach();
            }
            this._anchorBottom = value;
            if (changed) {
                if (value) {
                    value.addClass('anchor anchor-bottom');
                    value.appendTo(this.element);
                }
                this.onAnchorBottomChanged();
            }
        }
        get anchorBottomVisible() {
            return this._anchorBottomVisible;
        }
        set anchorBottomVisible(value) {
            var changed = this._anchorBottomVisible !== value;
            this._anchorBottomVisible = value;
            if (changed) {
                this.anchorBottom.visible = value;
                this.onAnchorBottomVisibleChanged();
            }
        }
        get anchorLeft() {
            return this._anchorLeft;
        }
        set anchorLeft(value) {
            var changed = this._anchorLeft !== value;
            if (this._anchorLeft instanceof latte.Item) {
                this._anchorLeft.removeClass('anchor');
                this._anchorLeft.element.detach();
            }
            this._anchorLeft = value;
            if (changed) {
                if (value) {
                    value.addClass('anchor anchor-left');
                    value.appendTo(this.element);
                }
                this.onAnchorLeftChanged();
            }
        }
        get anchorLeftVisible() {
            return this._anchorLeftVisible;
        }
        set anchorLeftVisible(value) {
            var changed = this._anchorLeftVisible !== value;
            this._anchorLeftVisible = value;
            if (changed) {
                this.anchorLeft.visible = value;
                this.onAnchorLeftVisibleChanged();
            }
        }
    }
    latte.AnchorView = AnchorView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ToolbarView extends latte.AnchorView {
        constructor() {
            super();
            this.toolbar = new latte.Toolbar();
            this.anchorTop = this.toolbar;
            this.element.addClass('toolbar');
            this.toolbar.itemsChanged.add(() => {
                this.onLayout();
            });
        }
        onAnchorTopChanged() {
            this.toolbar.direction = latte.Direction.HORIZONTAL;
            this.removeClass('top left bottom right');
            this.addClass('top');
            super.onAnchorTopChanged();
        }
        onAnchorRightChanged() {
            this.toolbar.direction = latte.Direction.VERTICAL;
            this.removeClass('top left bottom right');
            this.addClass('right');
            super.onAnchorRightChanged();
        }
        onAnchorBottomChanged() {
            this.toolbar.direction = latte.Direction.HORIZONTAL;
            this.removeClass('top left bottom right');
            this.addClass('bottom');
            super.onAnchorBottomChanged();
        }
        onAnchorLeftChanged() {
            this.toolbar.direction = latte.Direction.VERTICAL;
            this.removeClass('top left bottom right');
            this.addClass('left');
            super.onAnchorLeftChanged();
        }
    }
    latte.ToolbarView = ToolbarView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordChildrenView extends latte.ToolbarView {
        constructor(loadChildren = null, childAdd = null, childEdit = null, childRemove = null) {
            super();
            this._record = null;
            this.toolbar.sideItems.addArray([
                this.btnRemove,
                this.btnEdit,
                this.btnAdd,
                new latte.SeparatorItem(),
                this.btnRefresh,
            ]);
            this.view = this.listView;
            if (loadChildren) {
                this.loadChildren.add(loadChildren);
            }
            if (childAdd) {
                this.childAdd.add(childAdd);
            }
            if (childEdit) {
                this.childEdit.add(childEdit);
            }
            if (childRemove) {
                this.childRemove.add(childRemove);
            }
        }
        onChildrenAdd() {
            if (this._childAdd) {
                this._childAdd.raise();
            }
        }
        onChildEdit() {
            if (this._childEdit) {
                this._childEdit.raise();
            }
        }
        onChildRemove() {
            if (this._childRemove) {
                this._childRemove.raise();
            }
        }
        onLoadChildren() {
            this.btnRemove.enabled = this.btnEdit.enabled = false;
            this.children.clear();
            if (this._loadChildren) {
                this._loadChildren.raise();
            }
        }
        onRecordChanged() {
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
            this.onLoadChildren();
        }
        reloadChildren() {
            this.onLoadChildren();
        }
        get childAdd() {
            if (!this._childAdd) {
                this._childAdd = new latte.LatteEvent(this);
                this._childAdd.handlerAdded.add(() => { this.btnAdd.visible = true; });
            }
            return this._childAdd;
        }
        get childEdit() {
            if (!this._childEdit) {
                this._childEdit = new latte.LatteEvent(this);
                this._childEdit.handlerAdded.add(() => { this.btnEdit.visible = true; });
            }
            return this._childEdit;
        }
        get childRemove() {
            if (!this._childRemove) {
                this._childRemove = new latte.LatteEvent(this);
                this._childRemove.handlerAdded.add(() => { this.btnRemove.visible = true; });
            }
            return this._childRemove;
        }
        get loadChildren() {
            if (!this._loadChildren) {
                this._loadChildren = new latte.LatteEvent(this);
            }
            return this._loadChildren;
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get btnAdd() {
            if (!this._btnAdd) {
                this._btnAdd = new latte.ButtonItem(null, latte.IconItem.standard(3, 3), () => { this.onChildrenAdd(); });
                this._btnAdd.tooltip = latte.strings.add;
                this._btnAdd.visible = false;
            }
            return this._btnAdd;
        }
        get btnEdit() {
            if (!this._btnEdit) {
                this._btnEdit = new latte.ButtonItem(null, latte.IconItem.standard(14, 8), () => { this.onChildEdit(); });
                this._btnEdit.tooltip = latte.strings.edit;
                this._btnEdit.visible = false;
                this._btnEdit.enabled = false;
            }
            return this._btnEdit;
        }
        get btnRefresh() {
            if (!this._btnRefresh) {
                this._btnRefresh = new latte.ButtonItem(null, latte.IconItem.standard(1, 4), () => { this.onLoadChildren(); });
            }
            return this._btnRefresh;
        }
        get btnRemove() {
            if (!this._btnRemove) {
                this._btnRemove = new latte.ButtonItem(null, latte.IconItem.standard(9, 1), () => {
                    var name = this.selectedChild.tag ? this.selectedChild.tag.toString() : this.selectedChild.toString();
                    latte.DialogView.confirmDelete(name, () => {
                        this.onChildRemove();
                    });
                });
                this._btnRemove.visible = false;
                this._btnRemove.enabled = false;
            }
            return this._btnRemove;
        }
        get listView() {
            if (!this._listView) {
                this._listView = new latte.ListView();
                this._listView.selectedItemChanged.add(() => {
                    this.btnEdit.enabled = this.btnRemove.enabled = this.listView.selectedItem != null;
                });
            }
            return this._listView;
        }
        get pagination() {
            if (!this._pagination) {
                this._pagination = new latte.PaginationItem();
            }
            return this._pagination;
        }
        get children() {
            return this.listView.items;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            var changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
        get selectedChild() {
            return this.listView.selectedItem;
        }
    }
    latte.DataRecordChildrenView = DataRecordChildrenView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Item extends latte.UiElement {
        constructor() {
            super();
            this.element.addClass('latte-item');
        }
        static clickable() {
            return latte.UiElement.disableTextSelection($('<div>')
                .addClass('clickable')
                .mouseover(function () {
                var $this = $(this);
                if ($this.hasClass('disabled'))
                    return;
                if (!$this.hasClass('with-menu'))
                    $this.addClass('hover');
            })
                .mouseout(function () {
                var $this = $(this);
                if ($this.hasClass('disabled'))
                    return;
                $this.removeClass('hover');
                $this.removeClass('pressed');
            })
                .mousedown(function () {
                var $this = $(this);
                if ($this.hasClass('disabled'))
                    return;
                $this.addClass('pressed');
            })
                .mouseup(function () {
                var $this = $(this);
                $this.removeClass('pressed');
                if ($this.hasClass('checkable')) {
                    if ($this.hasClass('checked')) {
                        $this.removeClass('checked');
                    }
                    else {
                        $this.addClass('checked');
                    }
                }
            }));
        }
        static selectable() {
            return latte.UiElement.disableTextSelection($('<div>')
                .addClass('selectable')
                .click(function () {
                var $this = $(this);
                if ($this.hasClass('selected')) {
                    $this.removeClass('selected');
                }
                else {
                    $this.addClass('selected');
                    $this.removeClass('hover');
                }
            })
                .mouseover(function () {
                if (!$(this).hasClass('selected'))
                    $(this).addClass('hover');
            })
                .mouseout(function () {
                $(this).removeClass('hover pressed');
            }));
        }
        bringToFront() {
            latte.ZIndex.bringToFront(this.element);
        }
        get parentMenu() {
            var r = null;
            if (this.parentIsMenu) {
                r = this.element.parent().data('instance');
            }
            return r;
        }
        get parentIsMenu() {
            return this.element.parent().is('.latte-overlay.menu');
        }
        get tab() {
            return this._tab;
        }
        set tab(value) {
            this._tab = value;
        }
    }
    latte.Item = Item;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class WidgetItem extends latte.Item {
        constructor() {
            super();
            this._allowMinimize = true;
            this._minimized = null;
            this.element.addClass('widget');
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.topToolbar = new latte.Toolbar();
            this.topToolbar.appendTo(this.element);
            this.stack = new latte.ItemStack();
            this.stack.appendTo(this.element);
            this.toolbar = new latte.Toolbar();
            this.toolbar.visible = false;
            this.toolbar.appendTo(this.element);
            this.topToolbar.element.addClass('top');
            this.toolbar.element.addClass('bottom');
            this.titleLabel = new latte.LabelItem();
            this.topToolbar.items.add(this.titleLabel);
            this.topToolbar.sideItems.addArray([this.minimizeButton]);
            this.toolbar.itemsChanged.add(() => { this.onLayout(); });
            this.toolbar.sideItemsChanged.add(() => { this.onLayout(); });
        }
        _onAddItem(item) {
            this.stack.items.add(item);
        }
        _onRemoveItem(item) {
            this.stack.items.remove(item);
        }
        onAllowMinimizeChanged() {
            if (this._allowMinimizeChanged) {
                this._allowMinimizeChanged.raise();
            }
            this.minimizeButton.visible = this.allowMinimize;
        }
        onLayout() {
            super.onLayout();
            this.stack.onLayout();
            this.toolbar.visible = this.toolbar.items.count > 0 || this.toolbar.sideItems.count > 0;
            setTimeout(() => {
                let avail = latte.Rectangle.fromElement(this.topToolbar.raw).width;
                this.topToolbar.items.each(item => {
                    if (item.visible && item != this.titleLabel) {
                        avail -= latte.Rectangle.fromElement(item.raw).width;
                    }
                });
                this.topToolbar.sideItems.each(item => {
                    avail -= latte.Rectangle.fromElement(item.raw).width;
                });
                this.titleLabel.element.css('max-width', avail - 15);
            });
        }
        onMinimizedChanged() {
            if (this.minimized) {
                this.element.addClass('minimized');
                this.stack.visible = false;
                this.toolbar.visible = false;
                this.minimizeButton.icon = latte.LinearIcon.chevron_down;
            }
            else {
                this.element.removeClass('minimized');
                this.stack.visible = true;
                this.toolbar.visible = this.toolbar.items.count > 0 || this.toolbar.sideItems.count > 0;
                this.minimizeButton.icon = latte.LinearIcon.chevron_up;
            }
            if (this._minimizedChanged) {
                this._minimizedChanged.raise();
            }
        }
        get allowMinimizeChanged() {
            if (!this._allowMinimizeChanged) {
                this._allowMinimizeChanged = new latte.LatteEvent(this);
            }
            return this._allowMinimizeChanged;
        }
        get minimizedChanged() {
            if (!this._minimizedChanged) {
                this._minimizedChanged = new latte.LatteEvent(this);
            }
            return this._minimizedChanged;
        }
        get allowMinimize() {
            return this._allowMinimize;
        }
        set allowMinimize(value) {
            let changed = value !== this._allowMinimize;
            this._allowMinimize = value;
            if (changed) {
                this.onAllowMinimizeChanged();
            }
        }
        get minimized() {
            return this._minimized;
        }
        set minimized(value) {
            let changed = value !== this._minimized;
            this._minimized = value;
            if (changed) {
                this.onMinimizedChanged();
            }
        }
        get title() {
            return this.titleLabel.text;
        }
        set title(value) {
            this.titleLabel.text = value;
            this.titleLabel.tooltip = value;
            this.onLayout();
        }
        get minimizeButton() {
            if (!this._minimizeButton) {
                this._minimizeButton = new latte.ButtonItem();
                this._minimizeButton = new latte.ButtonItem();
                this._minimizeButton.icon = latte.LinearIcon.chevron_up;
                this._minimizeButton.click.add(() => { this.minimized = !this.minimized; });
            }
            return this._minimizeButton;
        }
    }
    latte.WidgetItem = WidgetItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordChildrenWidget extends latte.WidgetItem {
        constructor(loadChildren = null, childAdd = null, childEdit = null, childRemove = null) {
            super();
            this._record = null;
            this.topToolbar.sideItems.addArray([
                this.btnRemove,
                this.btnEdit,
                this.btnAdd,
                new latte.SeparatorItem(),
                this.btnRefresh,
            ]);
            this.items.add(this.stackChildren);
            this.topToolbar.raw.addEventListener('click', e => {
                this.stackChildren.clearSelection();
            });
            if (loadChildren) {
                this.loadChildren.add(loadChildren);
            }
            if (childAdd) {
                this.childAdd.add(childAdd);
            }
            if (childEdit) {
                this.childEdit.add(childEdit);
            }
            if (childRemove) {
                this.childRemove.add(childRemove);
            }
        }
        onChildrenAdd() {
            if (this._childAdd) {
                this._childAdd.raise();
            }
        }
        onChildEdit() {
            if (this._childEdit) {
                this._childEdit.raise();
            }
        }
        onChildRemove() {
            if (this._childRemove) {
                this._childRemove.raise();
            }
        }
        onLoadChildren() {
            this.btnRemove.enabled = this.btnEdit.enabled = false;
            this.children.clear();
            if (this._loadChildren) {
                this._loadChildren.raise();
            }
        }
        onRecordChanged() {
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
            this.onLoadChildren();
        }
        reloadChildren() {
            this.onLoadChildren();
        }
        get childAdd() {
            if (!this._childAdd) {
                this._childAdd = new latte.LatteEvent(this);
                this._childAdd.handlerAdded.add(() => { this.btnAdd.visible = true; });
            }
            return this._childAdd;
        }
        get childEdit() {
            if (!this._childEdit) {
                this._childEdit = new latte.LatteEvent(this);
                this._childEdit.handlerAdded.add(() => { this.btnEdit.visible = true; });
            }
            return this._childEdit;
        }
        get childRemove() {
            if (!this._childRemove) {
                this._childRemove = new latte.LatteEvent(this);
                this._childRemove.handlerAdded.add(() => { this.btnRemove.visible = true; });
            }
            return this._childRemove;
        }
        get loadChildren() {
            if (!this._loadChildren) {
                this._loadChildren = new latte.LatteEvent(this);
            }
            return this._loadChildren;
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get btnAdd() {
            if (!this._btnAdd) {
                this._btnAdd = new latte.ButtonItem(null, latte.LinearIcon.plus_circle, () => { this.onChildrenAdd(); });
                this._btnAdd.tooltip = latte.strings.add;
                this._btnAdd.visible = false;
            }
            return this._btnAdd;
        }
        get btnEdit() {
            if (!this._btnEdit) {
                this._btnEdit = new latte.ButtonItem(null, latte.LinearIcon.pencil, () => { this.onChildEdit(); });
                this._btnEdit.tooltip = latte.strings.edit;
                this._btnEdit.visible = false;
                this._btnEdit.enabled = false;
            }
            return this._btnEdit;
        }
        get btnRefresh() {
            if (!this._btnRefresh) {
                this._btnRefresh = new latte.ButtonItem(null, latte.LinearIcon.sync, () => { this.onLoadChildren(); });
            }
            return this._btnRefresh;
        }
        get btnRemove() {
            if (!this._btnRemove) {
                this._btnRemove = new latte.ButtonItem(null, latte.LinearIcon.trash, () => {
                    var name = this.selectedChild.tag ? this.selectedChild.tag.toString() : this.selectedChild.toString();
                    latte.DialogView.confirmDelete(name, () => {
                        this.onChildRemove();
                    });
                });
                this._btnRemove.visible = false;
                this._btnRemove.enabled = false;
            }
            return this._btnRemove;
        }
        get stackChildren() {
            if (!this._stackChildren) {
                this._stackChildren = new latte.SelectableStack();
                this._stackChildren.padding = 0;
                this._stackChildren.selectedItemChanged.add(() => {
                    this.btnEdit.enabled = this.btnRemove.enabled = this.stackChildren.selectedItem != null;
                });
            }
            return this._stackChildren;
        }
        get children() {
            return this.stackChildren.items;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            var changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
        get selectedChild() {
            return this.stackChildren.selectedItem;
        }
    }
    latte.DataRecordChildrenWidget = DataRecordChildrenWidget;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordCollection extends latte.Collection {
        constructor(addCallback = null, removeCallback = null, context = null) {
            super(addCallback, removeCallback, context);
        }
        byId(id) {
            return null;
        }
    }
    latte.DataRecordCollection = DataRecordCollection;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DialogView extends latte.View {
        constructor(view = null, items = null) {
            super();
            this._closeable = true;
            DialogView._initialize();
            this.element.addClass('dialog');
            this.closing = new latte.LatteEvent(this);
            this.closed = new latte.LatteEvent(this);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.barElement = $('<div>').addClass('bar').appendTo(this.element);
            this.itemsElement = $('<div>').addClass('items').appendTo(this.element);
            this.titleElement = $('<div>').addClass('title').appendTo(this.barElement);
            this.closeButton = new latte.ButtonItem();
            this.closeButton.faceVisible = false;
            this.closeButton.icon = latte.LinearIcon.cross;
            this.closeButton.appendTo(this.barElement);
            this.closeButton.click.add(() => {
                this.close();
            });
            this.closeButton.element.addClass('close');
            if (view instanceof latte.View) {
                this.view = view;
            }
            if (items instanceof Array) {
                this.items.addArray(items);
            }
            if (!latte.View.smallScreen) {
                this.container.css('maxHeight', 400);
            }
        }
        static _initialize() {
            let f = DialogView;
            if (!latte._undef(f.initialized) && f.initialized)
                return;
            f.initialized = true;
            $(window)
                .keydown(function (e) {
                let modal = (latte.View.modalView instanceof DialogView) ? latte.View.modalView : null;
                modal = modal instanceof DialogView ? modal : null;
                if (e.keyCode == latte.Key.ESCAPE) {
                    if (modal && modal.closeable)
                        (modal).close();
                }
                else if (e.keyCode == latte.Key.ENTER) {
                    if (modal
                        && modal.defaultButton
                        && modal.defaultButton.enabled
                        && document.activeElement['tagName'] != 'TEXTAREA'
                        && !modal.defaultButtonHandled
                        && !modal.isClosed) {
                        modal.defaultButtonHandled = true;
                        latte.log(`triggering click`);
                        modal.defaultButton.onClick();
                    }
                }
            });
        }
        static alert(message, description = '', items = null) {
            if (!latte._isString(message))
                throw new latte.InvalidArgumentEx('message', message);
            description = description || '';
            let m = new latte.MessageView();
            m.message = message;
            if (!latte._undef(description))
                m.description = description;
            m.iconAlert();
            if (!items) {
                items = [new latte.ButtonItem(latte.strings.ok)];
            }
            return DialogView.showMessage(m, items);
        }
        static ask(message, description = '', items = null) {
            if (!latte._isString(message))
                throw new latte.InvalidArgumentEx('message', message);
            if (!latte._undef(description) && !latte._isString(description))
                throw new latte.InvalidArgumentEx('description', description);
            var m = new latte.MessageView();
            m.message = message;
            if (!latte._undef(description))
                m.description = description;
            m.iconQuestion();
            return DialogView.showMessage(m, items);
        }
        static confirmDelete(objectName, callback) {
            DialogView.ask(latte.sprintf(latte.strings.confirmDeleteS, objectName), latte.strings.cantBeUndone, [
                new latte.ButtonItem(latte.sprintf(latte.strings.yesDeleteS, objectName), null, () => { callback(); }),
                new latte.ButtonItem(latte.strings.cancel)
            ]);
        }
        static error(message, description = '', items = null) {
            if (!latte._undef(description) && !latte._isString(description))
                throw new latte.InvalidArgumentEx('description', description);
            var m = new latte.MessageView();
            m.message = (message || "");
            if (!latte._undef(description))
                m.description = description;
            m.iconError();
            return DialogView.showMessage(m, items);
        }
        static inform(message, description = '', items = null) {
            if (!latte._isString(message))
                throw new latte.InvalidArgumentEx('message', message);
            description = description || '';
            let m = new latte.MessageView();
            m.message = message;
            if (!latte._undef(description))
                m.description = description;
            m.iconInfo();
            if (!items) {
                items = [new latte.ButtonItem(latte.strings.ok)];
            }
            return DialogView.showMessage(m, items);
        }
        static input(title, inputs, validate = null, save = null, cancel = null) {
            let d = new DialogView();
            let f = new latte.FormView();
            let items = {};
            let values = () => {
                let r = {};
                for (let i in items) {
                    r[i] = items[i].value;
                }
                return r;
            };
            let cancelled = false;
            d.closeButton.visible = false;
            for (let i in inputs) {
                items[i] = latte.InputItem.fromIInput(inputs[i], i, null);
                f.inputs.add(items[i]);
            }
            let type = latte['MetaFormItem'];
            d.items.addArray([
                new latte.ButtonItem(latte.strings.ok),
            ]);
            d.addCancelButton(() => {
                cancelled = true;
                if (cancel) {
                    cancel();
                }
            });
            d.closing.add(() => {
                if (cancelled) {
                    return true;
                }
                let valid = null;
                if (validate) {
                    valid = validate(values(), items);
                }
                if (latte._isFunction(valid)) {
                    d.enabled = false;
                    valid((validationResult) => {
                        d.enabled = true;
                        if ((latte._isBoolean(validationResult) && validationResult) || f.isValid) {
                            cancelled = true;
                            d.close();
                            save(values());
                        }
                    });
                    return false;
                }
                if (!latte._isBoolean(valid)) {
                    valid = f.isValid;
                }
                if (valid) {
                    save(values());
                }
                else {
                    return false;
                }
            });
            d.title = title;
            d.view = f;
            d.show();
            return d;
        }
        static metaInput(title, inputs, validate = null, save = null, cancel = null) {
            let d = new DialogView();
            let f = new latte.FormView();
            let cancelled = false;
            d.closeButton.visible = false;
            let type = latte['MetaFormItem'];
            let mf = new type({}, {
                fields: inputs
            });
            let getValues = () => {
                let r = {};
                for (let name in inputs) {
                    r[name] = mf.byName(name).value;
                }
                return r;
            };
            let getItems = () => {
                let r = {};
                for (let name in inputs) {
                    r[name] = mf.byName(name);
                }
                return r;
            };
            d.items.addArray([
                new latte.ButtonItem(latte.strings.ok),
            ]);
            d.addCancelButton(() => {
                cancelled = true;
                if (cancel) {
                    cancel();
                }
            });
            d.closing.add(() => {
                if (cancelled) {
                    return true;
                }
                let valid = null;
                if (validate) {
                    valid = validate(getValues(), getItems());
                }
                if (latte._isFunction(valid)) {
                    d.enabled = false;
                    valid((validationResult) => {
                        d.enabled = true;
                        if ((latte._isBoolean(validationResult) && validationResult) || f.isValid) {
                            cancelled = true;
                            d.close();
                            save(getValues());
                        }
                    });
                    return false;
                }
                if (!latte._isBoolean(valid)) {
                    valid = f.isValid;
                }
                if (valid) {
                    save(getValues());
                }
                else {
                    return false;
                }
            });
            d.title = title;
            let cv = new latte.ColumnView();
            d.view = cv;
            cv.items.add(mf);
            d.show();
            return d;
        }
        static showMessage(message, items = null) {
            if (!(message instanceof latte.MessageView))
                throw new latte.InvalidArgumentEx('message', message);
            if (latte._undef(items)) {
                var okButton = new latte.ButtonItem();
                okButton.text = latte.strings.ok;
                items = [okButton];
            }
            return new DialogView(message, items).show();
        }
        clickableItemsCount() {
            var count = 0;
            this.items.each((item) => {
                if (item instanceof latte.ClickableItem)
                    count++;
            });
            return count;
        }
        _onAddItem(item) {
            if (item instanceof latte.ButtonItem) {
                item.click.add(() => {
                    return this.close();
                });
            }
            this.itemsElement.append(item.element);
            this.onLayout();
            item.focusable = true;
            if (this.items.length == 1 && item instanceof latte.ButtonItem) {
                item.defaulted = true;
                this.defaultButton = item;
            }
        }
        _onRemoveItem(item) {
            item.element.detach();
            this.onLayout();
        }
        addButton(text, handler = null) {
            var b = new latte.ButtonItem();
            b.text = text;
            b.click.add(latte._isFunction(handler) ? handler : () => { });
            this.items.add(b);
            return this;
        }
        addCancelButton(handler = null) {
            return this.addButton(latte.strings.cancel, handler);
        }
        addNoButton(handler = null) {
            return this.addButton(latte.strings.no, handler);
        }
        addOkButton(handler = null) {
            return this.addButton(latte.strings.ok, handler);
        }
        addSaveButton(handler = null) {
            return this.addButton(latte.strings.save, handler);
        }
        addYesButton(handler = null) {
            return this.addButton(latte.strings.yes, handler);
        }
        close() {
            this._isClosed = true;
            if (this.onClosing() === false) {
                return false;
            }
            if (this.subLayer) {
                let sub = $(this.subLayer);
                sub.fadeOut(() => sub.remove());
                this.subLayer = null;
            }
            if (this.containmentLayer) {
                let cont = $(this.containmentLayer);
                cont.animate({
                    top: $(window).height()
                }, () => cont.remove());
            }
            this.onClosed();
            return true;
        }
        handler() {
            throw new latte.Ex();
        }
        onClosed() {
            this.closed.raise();
        }
        onClosing() {
            return this.closing.raise();
        }
        onEnabledChanged() {
            super.onEnabledChanged();
            if (this.enabled) {
                this.removeClass('disabled');
            }
            else {
                this.addClass('disabled');
            }
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].enabled = this.enabled;
            }
        }
        onLayout() {
            super.onLayout();
            this.container.css('margin-top', this.barElement.outerHeight());
            if (this.items.count > 0) {
                this.itemsElement.show();
                this.container.css('margin-bottom', this.itemsElement.outerHeight());
            }
            else {
                this.itemsElement.hide();
                this.container.css('margin-bottom', 0);
            }
        }
        show(items = null) {
            latte.View.modalView = this;
            if (items) {
                this.items.addArray(items);
            }
            return this;
        }
        get cancelButton() {
            if (this._cancelButton === null) {
                if (this.items.count > 0 && this.items.first instanceof latte.ButtonItem) {
                    return (this.items.first);
                }
                else {
                    return null;
                }
            }
            else {
                return this._cancelButton;
            }
        }
        set cancelButton(button) {
            this._cancelButton = button;
        }
        get closeable() {
            return this._closeable;
        }
        set closeable(value) {
            this._closeable = value;
            this.closeButton.visible = value;
        }
        get defaultButton() {
            if (this._defaultButton === null) {
                if (this.items.count > 0 && this.items.first instanceof latte.ButtonItem) {
                    return this.items.first;
                }
                else {
                    return null;
                }
            }
            else {
                return this._defaultButton;
            }
        }
        set defaultButton(button) {
            this._defaultButton = button;
        }
        get isClosed() {
            return this._isClosed;
        }
        get title() {
            return this.titleElement.html();
        }
        set title(value) {
            this.titleElement.html(value);
        }
    }
    latte.DialogView = DialogView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordDialogView extends latte.DialogView {
        constructor(record = null) {
            super();
            let dialog = this;
            this.saving = new latte.LatteEvent(this);
            this.saved = new latte.LatteEvent(this);
            this.formView = new latte.DataRecordFormView(record);
            this.saveButton = new latte.ButtonItem();
            this.saveButton.text = latte.strings.save;
            this.saveButton.click.add(() => { dialog.formView.saveChanges(() => this.onSaved()); });
            this.cancelButton = new latte.ButtonItem();
            this.cancelButton.text = latte.strings.cancel;
            this.view = this.formView;
            this.items.add(this.saveButton);
            this.items.add(this.cancelButton);
        }
        static editRecord(r, onSaved = null, title = '') {
            var d = new DataRecordDialogView(r);
            d.title = title;
            d.saved.add(onSaved);
            d.show();
            return d;
        }
        onSaved() {
            this.saved.raise();
        }
        onSaving() {
            let ptr = this;
            this.formView.applyValues();
            this.record.save(function () {
                ptr.onSaved();
            });
            this.saving.raise();
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            this._readOnly = value;
            for (var i = 0; i < this.formView.inputs.count; i++)
                this.formView.inputs.item(i).readOnly = value;
            if (value) {
                this.saveButton.visible = false;
                this.cancelButton.text = latte.strings.close;
            }
            else {
                this.saveButton.visible = true;
                this.cancelButton.text = latte.strings.cancel;
            }
        }
        get record() {
            return this.formView.record;
        }
    }
    latte.DataRecordDialogView = DataRecordDialogView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ItemStack extends latte.Item {
        constructor(items = null) {
            super();
            this.element.addClass('stack');
            this.itemsChanged = new latte.LatteEvent(this);
            this.items = new latte.Collection(this.onAddItem, this.onRemoveItem, this);
            this.container = $('<div>').addClass('container').appendTo(this.element);
            if (items) {
                this.items.addArray(items);
            }
        }
        correctCollection() {
            let children = this.container.get(0).childNodes;
            let correct = [];
            for (let i = 0; i < children.length; i++) {
                let instance = $(children[i]).data('instance');
                if (instance) {
                    correct.push(instance);
                }
            }
            this.items.correctItems(correct);
        }
        onAddItem(item) {
            item.element.appendTo(this.container);
            if (latte._isNumber(this.padding)) {
                item.element.css('margin-bottom', this.padding);
            }
            this.onItemsChanged();
        }
        onRemoveItem(item) {
            item.element.detach();
            this.onItemsChanged();
        }
        add(item) {
            this.items.add(item);
        }
        clear() {
            this.items.clear();
        }
        onItemsChanged() {
            this.itemsChanged.raise();
        }
        onLayout() {
            super.onLayout();
            for (var i = 0; i < this.items.count; i++) {
                this.items.item(i).onLayout();
            }
        }
        remove(item) {
            this.items.remove(item);
        }
        get count() {
            return this.items.count;
        }
        get padding() {
            return this._padding;
        }
        set padding(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value');
            this._padding = value;
            if (latte._isNumber(value)) {
                this.container.css('padding', value);
                this.container.children().css('margin-bottom', value);
            }
            else {
                this.container.css('padding', '');
                this.container.children().css('margin-bottom', '');
            }
        }
    }
    latte.ItemStack = ItemStack;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class FormItem extends latte.ItemStack {
        constructor() {
            super();
            this._direction = null;
            this._readOnly = null;
            this.element.addClass('form');
            this.faceVisible = true;
            this.items.add(this.titleLabel);
        }
        byName(name) {
            if (!latte._isString(name))
                throw new latte.InvalidArgumentEx('name', name);
            for (var i = 0; i < this.inputs.count; i++) {
                if (this.inputs.item(i).name == name) {
                    return this.inputs.item(i);
                }
            }
            return null;
        }
        getSaveCalls() {
            return [];
        }
        getValues() {
            var r = {};
            var input = null;
            while ((input = this.inputs.next()))
                r[input.name] = input.value;
            return r;
        }
        onDirectionChanged() {
            if (this._directionChanged) {
                this._directionChanged.raise();
            }
            for (var i = 0; i < this.inputs.length; i++) {
                this.inputs.item(i).direction = this.direction;
            }
        }
        onInputAdded(input) {
            this.items.add(input);
            input.valueChanged.add(() => {
                this.onValueChanged();
            });
            if (this.direction) {
                input.direction = this.direction;
            }
            if (this.readOnly === true) {
                input.readOnly = true;
            }
            input.textVisible = true;
        }
        onInputRemoved(input) {
            this.items.remove(input);
        }
        onReadOnlyChanged() {
            if (this._readOnlyChanged) {
                this._readOnlyChanged.raise();
            }
            this.inputs.each(input => {
                if (this.readOnly) {
                    input.readOnly = true;
                }
                else {
                    if (input.meta && latte._isBoolean(input.meta.readOnly)) {
                        input.readOnly = input.meta.readOnly;
                    }
                }
            });
        }
        onValueChanged() {
            if (this._valueChanged) {
                this._valueChanged.raise();
            }
            this.unsavedChanges = true;
        }
        setDirection(d) {
            latte.warnDeprecated('FormItem.setDirection', 'FormItem.direction');
            this.direction = d;
        }
        valueItemByName(name, baseClass = null) {
            let input = this.byName(name);
            if (input) {
                if (baseClass) {
                    if (input.valueItem instanceof baseClass) {
                        return input.valueItem;
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return input.valueItem;
                }
            }
            return null;
        }
        setTextWidth(value) {
            for (var i = 0; i < this.inputs.length; i++) {
                this.inputs[i].textWidth = value;
            }
        }
        get directionChanged() {
            if (!this._directionChanged) {
                this._directionChanged = new latte.LatteEvent(this);
            }
            return this._directionChanged;
        }
        get readOnlyChanged() {
            if (!this._readOnlyChanged) {
                this._readOnlyChanged = new latte.LatteEvent(this);
            }
            return this._readOnlyChanged;
        }
        get valueChanged() {
            if (!this._valueChanged) {
                this._valueChanged = new latte.LatteEvent(this);
            }
            return this._valueChanged;
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            let changed = value !== this._direction;
            this._direction = value;
            if (changed) {
                this.onDirectionChanged();
            }
        }
        get faceVisible() {
            return this._faceVisible;
        }
        set faceVisible(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._faceVisible = value;
            if (value) {
                this.addClass('with-face');
            }
            else {
                this.removeClass('with-face');
            }
        }
        get inputs() {
            if (!this._inputs) {
                this._inputs = new latte.Collection(input => this.onInputAdded(input), input => this.onInputRemoved(input));
            }
            return this._inputs;
        }
        get isValid() {
            for (let i = 0; i < this.inputs.length; i++) {
                if (!this.inputs[i].valid) {
                    return false;
                }
            }
            return true;
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            let changed = value !== this._readOnly;
            this._readOnly = value;
            if (changed) {
                this.onReadOnlyChanged();
            }
        }
        get title() {
            return this.titleLabel.text;
        }
        set title(value) {
            if (value) {
                this.titleLabel.visible = true;
            }
            this.titleLabel.text = value;
        }
        get valid() {
            var input = null;
            while ((input = this.inputs.next()))
                if (!input.valid)
                    return false;
            return true;
        }
        get titleLabel() {
            if (!this._titleLabel) {
                this._titleLabel = new latte.LabelItem();
                this._titleLabel.visible = false;
                this._titleLabel.title = 1;
            }
            return this._titleLabel;
        }
    }
    latte.FormItem = FormItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordFormItemOld extends latte.FormItem {
        constructor(record = null) {
            super();
            this._category = null;
            this._record = null;
            if (record)
                this.record = record;
        }
        loadRecord() {
            let calls = [];
            this.record.onFormCreating(this);
            let metadata = this.record.getMetadata();
            if (metadata && metadata.fields) {
                for (let i in metadata.fields) {
                    let field = metadata.fields[i];
                    if (!(latte._isString(this.category) && (field['category'] != this.category))) {
                        calls.push(this.addInput(i, metadata.fields[i]));
                    }
                }
            }
            this.record.onFormCreated(this);
            latte.Message.sendCalls(calls, () => this.onRecordLoaded());
        }
        addInput(name, field) {
            let result = null;
            let input = latte.InputItem.fromIInput(field, name);
            let value = latte._undef(this.record[name]) ? null : this.record[name];
            this.record.addBind(name, input, 'value');
            input.tag = name;
            input.name = name;
            this.updateFieldVisibility(field, input, value);
            input.separator = field['separator'] === true;
            this.inputs.add(input);
            if (field.type == 'record') {
                result = this.handleRecordInput(field, input, value);
            }
            return result;
        }
        handleRecordInput(field, input, value) {
            let d = input.valueItem;
            if (!(d instanceof latte.DataRecordValueItem))
                throw "Input Item doesn't have a DataRecordValueItem";
            d.valueChanged.add(() => this.onLoadedRecordProperty(input.name));
            d.loaderFunction = field.loaderFunction;
            if (value && field.recordType && !(value instanceof latte.DataRecord)) {
                let params = {
                    name: field.recordType,
                    id: value
                };
                let dummy = new latte[params.name]();
                if (latte._isString(dummy['_moduleName'])) {
                    params['module'] = dummy['_moduleName'];
                }
                let call = new latte.RemoteCall('latte.data', 'DataLatteUa', 'recordSelect', params);
                return call.withHandlers(r => {
                    if (r && r.recordId > 0) {
                        d.setRecordSilent(r);
                        input.value = input.value;
                        this.updateFieldVisibility(field, input, r);
                        this.onLoadedRecordProperty(input.name);
                    }
                });
            }
        }
        updateFieldVisibility(field, input, value) {
            input.visible = field['visible'] !== false;
            if (latte._isString(field['visible'])) {
                if (field['visible'] === 'if-inserted') {
                    input.visible = this.record.inserted();
                }
                else if (field['visible'] === 'if-not-inserted') {
                    input.visible = !this.record.inserted();
                }
                else if (field['visible'] == 'if-value') {
                    input.visible = !!value;
                }
            }
        }
        applyValues(record = null) {
            latte.warnDeprecated('DataRecordFormItem.applyValues', 'values are DataBinded now');
            let input;
            let r = record || this.record;
            while ((input = this.inputs.next())) {
                if (input.readOnly === true)
                    continue;
                if (latte._isBoolean(input.value)) {
                    r[input.tag] = input.value + 0;
                }
                else {
                    r[input.tag] = input.value;
                }
            }
        }
        get category() {
            return this._category;
        }
        set category(value) {
            let changed = value !== this._category;
            this._category = value;
            if (changed) {
                this.onCategoryChanged();
            }
        }
        getSaveCalls() {
            if (this.record) {
                return [this.record.saveCall().withHandlers(() => this.unsavedChanges = false)];
            }
            return [];
        }
        onCategoryChanged() {
            if (this._categoryChanged) {
                this._categoryChanged.raise();
            }
            if (this.record) {
                this.onRecordChanged();
            }
        }
        onLoadedRecordProperty(propertyName) {
            if (this._loadedRecordProperty) {
                this._loadedRecordProperty.raise(propertyName);
            }
        }
        onRecordChanged() {
            this.inputs.clear();
            if (this.record) {
                this.loadRecord();
            }
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
        }
        onRecordChangedOLD() {
            let record = this.record;
            let calls = [];
            this.inputs.clear();
            if (record) {
                if (record['onFormCreating']) {
                    record['onFormCreating'](this);
                }
                let metadata = record.getMetadata();
                if (metadata && metadata.fields) {
                    for (let i in metadata.fields) {
                        let field = metadata.fields[i];
                        if (latte._isString(this.category) && this.category.length == 0 && !field['category']) {
                        }
                        else if (latte._isString(this.category) && (field['category'] != this.category)) {
                            continue;
                        }
                        let input = latte.InputItem.fromIInput(field, i);
                        let value = latte._undef(record[i]) ? null : record[i];
                        input.tag = i;
                        input.visible = field['visible'] !== false;
                        input.separator = field['separator'] === true;
                        if (latte._isString(field['visible'])) {
                            if (field['visible'] === 'if-inserted') {
                                input.visible = record.inserted();
                            }
                            else if (field['visible'] === 'if-not-inserted') {
                                input.visible = !record.inserted();
                            }
                        }
                        if (input.readOnly && record[i + 'String']) {
                            input.value = record[i + 'String'];
                        }
                        else {
                            input.value = value;
                        }
                        if (field.type == 'record') {
                            let d = input.valueItem;
                            d.valueChanged.add(() => this.onLoadedRecordProperty(i));
                            d.loaderFunction = field.loaderFunction;
                            if (value && field['recordType'] && !(value instanceof latte.DataRecord)) {
                                ((d, input) => {
                                    let params = {
                                        name: field['recordType'],
                                        id: value
                                    };
                                    let dummy = new latte[params.name]();
                                    if (latte._isString(dummy['_moduleName'])) {
                                        params['module'] = dummy['_moduleName'];
                                    }
                                    calls.push(new latte.RemoteCall('latte.data', 'DataLatteUa', 'recordSelect', params)
                                        .withHandlers((r) => {
                                        if (r && r.recordId) {
                                            d.setRecordSilent(r);
                                            input.value = input.value;
                                            this.onLoadedRecordProperty(i);
                                        }
                                    }));
                                })(d, input);
                            }
                        }
                        this.inputs.add(input);
                    }
                }
                if (record['onFormCreated']) {
                    record['onFormCreated'](this);
                }
                if (calls.length > 0) {
                    latte.Message.sendCalls(calls);
                }
            }
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
        }
        onRecordLoaded() {
            if (this._recordLoaded) {
                this._recordLoaded.raise();
            }
        }
        get categoryChanged() {
            if (!this._categoryChanged) {
                this._categoryChanged = new latte.LatteEvent(this);
            }
            return this._categoryChanged;
        }
        get loadedRecordProperty() {
            if (!this._loadedRecordProperty) {
                this._loadedRecordProperty = new latte.LatteEvent(this);
            }
            return this._loadedRecordProperty;
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get recordLoaded() {
            if (!this._recordLoaded) {
                this._recordLoaded = new latte.LatteEvent(this);
            }
            return this._recordLoaded;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            let changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
    }
    latte.DataRecordFormItemOld = DataRecordFormItemOld;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class MetaFormItem extends latte.FormItem {
        constructor(source = null, metadata = null, updater = null) {
            super();
            this._category = null;
            this._metadata = null;
            this._source = null;
            this._updater = null;
            if (source)
                this.source = source;
            if (metadata)
                this.metadata = metadata;
            if (updater)
                this.updater = updater;
        }
        loadMetadata() {
            const categorySpecifiedOnForm = latte._isString(this.category) && this.category.length > 0;
            this.inputs.clear();
            let calls = [];
            let metadata = this.metadata;
            console.log(`Loading metadata`);
            console.log(metadata);
            console.log(`this.category:`);
            console.log(this.category);
            if (metadata && metadata.fields) {
                for (let i in metadata.fields) {
                    let field = metadata.fields[i];
                    const fieldCategory = field['category'] || null;
                    const categorySpecifiedOnField = latte._isString(fieldCategory);
                    const passesCategoryFilter = categorySpecifiedOnForm && fieldCategory === this.category;
                    const shouldAdd = !categorySpecifiedOnField || passesCategoryFilter;
                    if (shouldAdd) {
                        console.log(`Adding ${i}`);
                        calls.push(this.addInput(i, metadata.fields[i]));
                    }
                    else {
                        console.log(`Skipping ${i}`);
                    }
                }
            }
            latte.Message.sendCalls(calls, () => this.onLoadedMetadata());
        }
        addInput(name, field) {
            let result = null;
            let value = latte._undef(this.source[name]) ? null : this.source[name];
            if (value === null && 'defaultValue' in field) {
                value = field['defaultValue'];
            }
            let input = latte.InputItem.fromIInput(field, name, value);
            input.tag = name;
            input.name = name;
            if (this.readOnly) {
                input.readOnly = true;
            }
            else if ('readOnly' in field) {
                input.readOnly = this.resolveBoolean(field.readOnly, field, input, value);
            }
            this.updateFieldVisibility(field, input, value);
            this.updateFieldReadOnlyFindings(input, name);
            if ('separator' in field)
                input.separator = this.resolveBoolean(field.separator, field, input, value);
            this.inputs.add(input);
            if (field.type == 'record') {
                result = this.handleRecordInput(field, input, value);
            }
            if (('updatesForm' in field) && this.resolveBoolean(field.updatesForm, field, input, value)) {
                input.valueChanged.add(() => {
                    this.updateForm();
                });
            }
            return result;
        }
        handleRecordInput(field, input, value) {
            let d = input.valueItem;
            if (!(d instanceof latte.DataRecordValueItem))
                throw "Input Item doesn't have a DataRecordValueItem";
            d.valueChanged.add(() => this.onLoadedRecordProperty(input.name));
            d.loaderFunction = field.loaderFunction;
            if (value && field.recordType && !(value instanceof latte.DataRecord)) {
                let params = {
                    name: field.recordType,
                    id: value
                };
                let dummy = new latte[params.name]();
                if (latte._isString(dummy['_moduleName'])) {
                    params['module'] = dummy['_moduleName'];
                }
                let call = new latte.RemoteCall('latte.data', 'DataLatteUa', 'recordSelect', params);
                return call.withHandlers(r => {
                    if (r && r.recordId > 0) {
                        d.setRecordSilent(r);
                        input.value = input.value;
                        this.updateFieldVisibility(field, input, r);
                        this.onLoadedRecordProperty(input.name);
                    }
                });
            }
        }
        updateFieldReadOnlyFindings(input, name) {
            if (input.readOnly && this.source[name + 'String'] || this.readOnly) {
                input.readOnlyValue = this.source[name + 'String'];
            }
        }
        updateFieldVisibility(field, input, value) {
            if ('visible' in field) {
                input.visible = this.resolveBoolean(field.visible, field, input, value);
            }
        }
        resolveBoolean(resolver, field, input, value) {
            if (typeof resolver == 'boolean') {
                return !!resolver;
            }
            if (typeof resolver == 'string') {
                if (resolver == 'if-value') {
                    return !latte.InputItem.isEmptyValue(value);
                }
                else if (resolver == 'if-readonly-and-value') {
                    return input.readOnly ? !latte.InputItem.isEmptyValue(value) : true;
                }
            }
            return null;
        }
        applyValues(record = null) {
            let input;
            let r = record || this.source;
            while ((input = this.inputs.next())) {
                if (input.readOnly === true)
                    continue;
                if (latte._isBoolean(input.value)) {
                    r[input.tag] = input.value + 0;
                }
                else {
                    r[input.tag] = input.value;
                }
            }
        }
        onCategoryChanged() {
            if (this._categoryChanged) {
                this._categoryChanged.raise();
            }
        }
        onFormUpdated() {
            if (this._formUpdated) {
                this._formUpdated.raise();
            }
        }
        onLoadedMetadata() {
            if (this._loadedMetadata) {
                this._loadedMetadata.raise();
            }
            if (latte._isFunction(this.metadata.onFormCreated)) {
                this.metadata.onFormCreated(this);
            }
        }
        onLoadedRecordProperty(propertyName) {
            if (this._loadedRecordProperty) {
                this._loadedRecordProperty.raise(propertyName);
            }
        }
        onMetadataChanged() {
            if (this._metadataChanged) {
                this._metadataChanged.raise();
            }
            if (this.source && this.metadata) {
                this.loadMetadata();
            }
            if (this.metadata && latte._isFunction(this.metadata.onFormCreating)) {
                this.metadata.onFormCreating(this);
            }
        }
        onReadOnlyChanged() {
            super.onReadOnlyChanged();
            this.inputs.each(input => {
                this.updateFieldReadOnlyFindings(input, input.name);
                this.updateFieldVisibility(input.meta, input, input.value);
            });
        }
        onSourceChanged() {
            if (this._sourceChanged) {
                this._sourceChanged.raise();
            }
        }
        updateForm() {
            if (this.updater) {
                this._metadata = this.updater();
            }
            else {
                console.warn("Can't update form, no updater specified");
            }
            if (this.metadata.fields) {
                for (let name in this.metadata.fields) {
                    let input = this.byName(name);
                    let meta = this.metadata.fields[name];
                    if (input) {
                        input.visible = 'visible' in meta ? this.resolveBoolean(meta.visible, meta, input, input.value) : true;
                        input.readOnly = 'readOnly' in meta ? this.resolveBoolean(meta.readOnly, meta, input, input.value) : false;
                        input.separator = 'separator' in meta ? this.resolveBoolean(meta.separator, meta, input, input.value) : false;
                        input.meta = meta;
                    }
                    else {
                        latte.log(`Input not found ${name}`);
                    }
                }
            }
            this.onFormUpdated();
        }
        get categoryChanged() {
            if (!this._categoryChanged) {
                this._categoryChanged = new latte.LatteEvent(this);
            }
            return this._categoryChanged;
        }
        get formUpdated() {
            if (!this._formUpdated) {
                this._formUpdated = new latte.LatteEvent(this);
            }
            return this._formUpdated;
        }
        get loadedMetadata() {
            if (!this._loadedMetadata) {
                this._loadedMetadata = new latte.LatteEvent(this);
            }
            return this._loadedMetadata;
        }
        get loadedRecordProperty() {
            if (!this._loadedRecordProperty) {
                this._loadedRecordProperty = new latte.LatteEvent(this);
            }
            return this._loadedRecordProperty;
        }
        get metadataChanged() {
            if (!this._metadataChanged) {
                this._metadataChanged = new latte.LatteEvent(this);
            }
            return this._metadataChanged;
        }
        get sourceChanged() {
            if (!this._sourceChanged) {
                this._sourceChanged = new latte.LatteEvent(this);
            }
            return this._sourceChanged;
        }
        get category() {
            return this._category;
        }
        set category(value) {
            let changed = value !== this._category;
            this._category = value;
            if (changed) {
                this.onCategoryChanged();
            }
        }
        get metadata() {
            return this._metadata;
        }
        set metadata(value) {
            let changed = value !== this._metadata;
            this._metadata = value;
            if (changed) {
                this.onMetadataChanged();
            }
        }
        get source() {
            return this._source;
        }
        set source(value) {
            let changed = value !== this._source;
            this._source = value;
            if (changed) {
                this.onSourceChanged();
            }
        }
        get updater() {
            return this._updater;
        }
        set updater(value) {
            this._updater = value;
        }
    }
    latte.MetaFormItem = MetaFormItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordFormItem extends latte.MetaFormItem {
        constructor(record = null) {
            super(null, null);
            this._record = null;
            if (record) {
                this.record = record;
            }
        }
        loadRecord() {
            this.record.onFormCreating(this);
            this.metadata = this.record.getMetadata();
            this.record.onFormCreated(this);
        }
        resolveBoolean(resolver, field, input, value) {
            if (typeof resolver == 'boolean') {
                return resolver;
            }
            if (typeof resolver == 'string') {
                if (resolver === 'if-inserted') {
                    return this.record.inserted();
                }
                else if (resolver === 'if-not-inserted') {
                    return !this.record.inserted();
                }
                else if (resolver == 'if-value') {
                    return !latte.InputItem.isEmptyValue(value);
                }
                else if (resolver == 'if-readonly-and-value') {
                    return input.readOnly ? !latte.InputItem.isEmptyValue(value) : true;
                }
            }
            return null;
        }
        getSaveCalls() {
            if (this.record) {
                return [this.record.saveCall()];
            }
            return [];
        }
        onCategoryChanged() {
            super.onCategoryChanged();
            if (this.record) {
                this.onRecordChanged();
            }
        }
        onInputAdded(input) {
            this.source.addBind(input.name, input, 'value', latte.DataBindCoercion.parseType(input.type));
            super.onInputAdded(input);
        }
        onLoadedMetadata() {
            super.onLoadedMetadata();
            this.onRecordLoaded();
        }
        onRecordChanged() {
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
            this.source = this.record;
            if (this.record) {
                this.loadRecord();
                this.updater = () => this.record.getMetadata();
            }
        }
        onRecordLoaded() {
            if (this._recordLoaded) {
                this._recordLoaded.raise();
            }
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get recordLoaded() {
            if (!this._recordLoaded) {
                this._recordLoaded = new latte.LatteEvent(this);
            }
            return this._recordLoaded;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            let changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
    }
    latte.DataRecordFormItem = DataRecordFormItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ColumnView extends latte.View {
        constructor(columns = 1) {
            super();
            this._columnWeights = [];
            this._paddingColumns = 10;
            this.element.addClass('column');
            this.items = new latte.Collection(this.onAddItem, this.onRemoveItem, this);
            if (columns > 0) {
                this.columns = columns;
            }
        }
        onAddItem(item) {
            var column = this.getColumnAt((this.items.count - 1) % this.columns);
            item.appendTo(column);
            item.element.css('margin-bottom', this.columnPadding);
            item.onLayout();
        }
        onRemoveItem(item) {
            item.element.detach();
        }
        getColumnAt(index) {
            if (!latte._isNumber(index) || index < 0 || index >= this.columns)
                throw new latte.InvalidArgumentEx('index', index);
            return this.container.find('.column').eq(index).find('.column-content');
        }
        onLayout() {
            super.onLayout();
            if (this.columnWeights.length > 0) {
            }
            else {
                if (latte.View.smallScreen) {
                    this.container.children().css('width', '');
                }
                else {
                    let w = Math.floor(100 / this.columns);
                    this.container.children().css('width', w + '%');
                }
            }
            this.items.each(item => item.onLayout());
        }
        get columnWeights() {
            return this._columnWeights;
        }
        set columnWeights(value) {
            if (value.length != this._columns)
                throw new latte.Ex();
            this._columnWeights = value;
            if (latte.View.smallScreen) {
                for (var i = 0; i < this.columns; i++) {
                    this.getColumnAt(i).parent().css('width', '');
                }
            }
            else {
                for (var i = 0; i < this.columns; i++) {
                    this.getColumnAt(i).parent().css('width', value[i] + '%');
                }
            }
            this.onLayout();
        }
        get columns() {
            return this._columns;
        }
        set columns(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._columns = value;
            var i = 0;
            for (i = 0; i < this.items.count; i++)
                this.items.item(i).element.detach();
            this.container.empty();
            if (value > 0) {
                var w = Math.floor(100 / value);
                for (i = 0; i < value; i++) {
                    var c = $('<div>')
                        .addClass('column')
                        .css('width', w + '%')
                        .appendTo(this.container);
                    $('<div>')
                        .addClass('column-content')
                        .appendTo(c);
                }
                var buffer = [];
                for (i = 0; i < this.items.count; i++)
                    buffer.push(this.items.item(i));
                this.items.clear();
                for (i = 0; i < buffer.length; i++)
                    this.items.add(buffer[i]);
            }
            this.columnPadding = this.columnPadding;
        }
        get columnPadding() {
            return this._paddingColumns;
        }
        set columnPadding(value) {
            this.container.find('.column-content').css('margin', value);
            this.container.find('.column-content > .latte-item').css('margin-bottom', value);
            this._paddingColumns = value;
        }
    }
    latte.ColumnView = ColumnView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class FormView extends latte.ColumnView {
        constructor(inputs = null) {
            super(1);
            this.addClass('form');
            this.items.add(this.form);
            if (inputs)
                this.inputs.addArray(inputs);
        }
        valid() {
            return this.form.valid;
        }
        getValues() {
            return this.form.getValues();
        }
        setTextWidth(value) {
            this.form.setTextWidth(value);
        }
        get valueChanged() {
            if (!this._valueChanged) {
                this._valueChanged = new latte.LatteEvent(this);
            }
            return this._valueChanged;
        }
        onValueChanged() {
            if (this._valueChanged) {
                this._valueChanged.raise();
            }
            this.unsavedChanges = true;
        }
        get form() {
            if (!this._form) {
                this._form = new latte.FormItem();
                this._form.valueChanged.add(this.onValueChanged, this);
            }
            return this._form;
        }
        get faceVisible() {
            return this.form.faceVisible;
        }
        set faceVisible(value) {
            this.form.faceVisible = value;
        }
        get inputs() {
            return this.form.inputs;
        }
        get isValid() {
            return this.form.isValid;
        }
        get readOnly() {
            return this.form.readOnly;
        }
        set readOnly(value) {
            this.form.readOnly = value;
        }
        get title() {
            return this.form.title;
        }
        set title(value) {
            this.form.title = value;
        }
        get titleLabel() {
            return this.form.titleLabel;
        }
    }
    latte.FormView = FormView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordFormView extends latte.FormView {
        constructor(record = null) {
            super();
            if (record)
                this.record = record;
        }
        applyValues(record = null) {
            this.form.applyValues(record);
        }
        getSaveCalls() {
            this.applyValues(this.record);
            return [this.record.saveCall().withHandlers(() => {
                    this.unsavedChanges = false;
                })];
        }
        printSaveStack(view) {
            latte.log(latte.sprintf("Unsaved changes = %s of view:", view.unsavedChanges));
            latte.log(view);
            if (view.parentView)
                this.printSaveStack(view.parentView);
        }
        get form() {
            if (!this._dataform) {
                this._dataform = new latte.DataRecordFormItem();
                this._dataform.valueChanged.add(this.onValueChanged, this);
            }
            return this._dataform;
        }
        get record() {
            return this.form.record;
        }
        set record(record) {
            this.form.record = record;
        }
    }
    latte.DataRecordFormView = DataRecordFormView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class GridView extends latte.View {
        constructor() {
            super();
            this._allowChangeRows = true;
            this._allowDeleteRows = true;
            this._allowNewRows = true;
            var gv = this;
            window['g'] = gv;
            this.element.addClass('grid');
            this.committed = new latte.LatteEvent(this);
            this.valueChanged = new latte.LatteEvent(this);
            this.rowsAdded = new latte.LatteEvent(this);
            this.rowsChanged = new latte.LatteEvent(this);
            this.rowsRemoved = new latte.LatteEvent(this);
            this.columns = new latte.Collection(this._onAddColumn, this._onRemoveColumn, this);
            this.rows = new latte.Collection(this._onAddRow, this._onRemoveRow, this);
            this.table = $('<table>', { border: 1 }).appendTo(this.container).hide();
            this._trColumns = $('<tr>').addClass('headers').appendTo(this.table);
            this._tdAll = $('<th>').appendTo(this._trColumns);
            this.table.mouseleave(() => {
                this._selectColumnHeader();
            });
            this.table.click(() => {
                this.endCellEdit();
            });
            this.allowNewRows = this.allowNewRows;
            this._actionCommit = new latte.Action();
            this._actionCommit.text = latte.strings.apply;
            this._actionCommit.icon = latte.IconItem.standard(1, 6);
            this._actionCommit.enabled = false;
            this._actionCommit.execute.add(() => { this.commit(); });
            this._actionRollback = new latte.Action();
            this._actionRollback.text = latte.strings.revert;
            this._actionRollback.icon = latte.IconItem.standard(2, 6);
            this._actionRollback.enabled = false;
            this._actionRollback.execute.add(() => { this.rollback(); });
            this._actionRemoveRow = new latte.Action();
            this._actionRemoveRow.text = latte.strings.deleteRow;
            this._actionRemoveRow.icon = latte.IconItem.standard(11, 5);
            this._actionRemoveRow.execute.add(() => {
                this.deleteRowAt(this.selectedCell.data('rowIndex'));
            });
            this._actionCopyCellValue = new latte.Action();
            this._actionCopyCellValue.text = latte.strings.copy;
            this._actionCopyCellValue.icon = latte.IconItem.standard(14, 5);
            this._actionCopyCellValue.execute.add(() => {
                this.copySelectedCellValue();
            });
            this._actionPasteCellValue = new latte.Action();
            this._actionPasteCellValue.text = latte.strings.paste;
            this._actionPasteCellValue.icon = latte.IconItem.standard(15, 4);
            this._actionPasteCellValue.execute.add(() => {
            });
            this._actionSetCellNull = new latte.Action();
            this._actionSetCellNull.text = latte.strings.setAsNull;
            this._actionSetCellNull.icon = latte.IconItem.empty(32);
            this._actionSetCellNull.execute.add(() => {
                this.setValueAt(this.selectedCell.data('columnIndex'), this.selectedCell.data('rowIndex'), null, true);
            });
        }
        _addInsertRow() {
            var row = this._createRow();
            var rowIndex = this.rows.count;
            row
                .removeClass('row')
                .addClass('insert-row')
                .appendTo(this.table)
                .find('th').text("*");
            row.find('td').data('rowIndex', rowIndex);
        }
        _createCell(columnIndex, rowIndex) {
            var gv = this;
            var cell = $('<td>')
                .addClass('cell')
                .data('rowIndex', rowIndex)
                .data('columnIndex', columnIndex)
                .click(function () {
                gv.selectCellAt($(this).data('columnIndex'), $(this).data('rowIndex'));
            })
                .dblclick(function () {
                if (!$(this).hasClass('editing'))
                    gv.editCellAt($(this).data('columnIndex'), $(this).data('rowIndex'));
            })
                .mouseenter(function () {
                gv._selectColumnHeader($(this).data('columnIndex'));
                gv._selectRowHeader($(this).data('rowIndex'));
                $(this).addClass('hover');
            })
                .mouseleave(function () {
                $(this).removeClass('hover');
            });
            latte.UiElement.disableTextSelection(cell);
            return cell;
        }
        _createRow() {
            var rowIndex = this.rows.count - 1;
            var tr = $('<tr>').addClass('row').appendTo(this.table);
            tr.data('rowIndex', rowIndex);
            $('<th>')
                .text(rowIndex + 1 + '')
                .appendTo(tr);
            for (var i = 0; i < this.columns.count; i++) {
                this._createCell(i, rowIndex).appendTo(tr);
            }
            return tr;
        }
        _makeInsertRowCandidate() {
            var row = new latte.GridViewRow();
            this.rows.add(row, false);
            var count = this.rows.count;
            this.table.find('tr.insert-row').data('rowIndex', count - 1);
            this.table.find('tr.insert-row th').text(count + '*');
            row.element = this.table.find('tr.insert-row')
                .removeClass('insert-row')
                .addClass('insertable-row');
            this._transactionStart();
        }
        _onAddColumn(column) {
            var th = $('<th>').appendTo(this._trColumns);
            var index = this.columns.count - 1;
            column.header = th;
            column.optionsChanged.add(() => {
                for (var i = 0; i < this.rows.count; i++) {
                    this.setValueAt(index, i, this.getValueAt(index, i), false);
                }
            });
            th.text(column.name);
            this.table.show();
        }
        _onAddRow(row) {
            var rowIndex = this.rows.count - 1;
            if (this._allowNewRows)
                this._removeInsertRow();
            this._createRow().appendTo(this.table);
            for (var i = 0; i < this.columns.count; i++) {
                if (this.hasValueAt(i, rowIndex)) {
                    var v = this.getValueAt(i, rowIndex);
                    this.setValueAt(i, rowIndex, v);
                }
            }
            row.element = this.getRowElementAt(rowIndex);
            if (this._allowNewRows)
                this._addInsertRow();
        }
        _onRemoveColumn(column) {
            column.header.remove();
            this.allowNewRows = this.allowNewRows;
        }
        _onRemoveRow(row, index) {
            row.element.remove();
            this._updateRowIndexes();
        }
        _removeInsertRow() {
            this.table.find('tr.insert-row').remove();
        }
        _selectColumnHeader(index = -1) {
            this.table.find('th').removeClass('selected');
            if (index < 0)
                this.columns.item(index).header.addClass('selected');
        }
        _selectRowHeader(index) {
            this.table.find('tr:eq(' + (index + 1) + ') > th').addClass('selected');
        }
        _transactionEnd() {
            this.container.find('.insert-button').remove();
            this._actionCommit.enabled = false;
            this._actionRollback.enabled = false;
        }
        _transactionStart() {
            if (this.container.find('.insert-button').length)
                return;
            var bg = new latte.ButtonGroupItem();
            bg.buttons.add(this._actionCommit.getButton());
            bg.buttons.add(this._actionRollback.getButton());
            bg.element
                .addClass('insert-button')
                .css({
                position: 'absolute',
                right: 5,
                top: 5,
                borderRadius: 4,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
            }).appendTo(this.container);
            this._actionCommit.enabled = true;
            this._actionRollback.enabled = true;
        }
        _updateRowIndexes() {
            var i = 0;
            this.table.find('tr:not(.headers)').each(function () {
                var tr = $(this);
                tr.data('rowIndex', i);
                tr.children().data('rowIndex', i);
                i++;
            });
        }
        canEditCellAt(columnIndex, rowIndex) {
            var row = this.getRowElementAt(rowIndex);
            var cell = this.hasCellAt(columnIndex, rowIndex) ?
                this.getCellElementAt(columnIndex, rowIndex) : null;
            var canEdit = cell instanceof jQuery
                && !this.readOnly
                && !this.columns.item(columnIndex).readOnly
                && !row.hasClass('pendent')
                && !row.hasClass('deletable-row')
                && this.allowChangeRows;
            if (this.rows.item(rowIndex))
                canEdit = canEdit && !this.rows.item(rowIndex).readOnly;
            return canEdit;
        }
        clearSelection() {
            this.table.find('td.selected').removeClass('selected');
        }
        commit() {
            this.commitAddedRows();
            this.commitChangedRows();
            this.commitDeletedRows();
            this._transactionEnd();
            this.onCommitted();
        }
        commitAddedRows() {
            var d = new latte.DataSet();
            var indexes = [];
            this.endCellEdit();
            for (var i = 0; i < this.columns.count; i++) {
                d.columns.add(this.columns.item(i));
            }
            this.table.find('tr.insertable-row').each(function () {
                var tr = $(this);
                tr.find('th').text(tr.data('rowIndex') + 1);
                indexes.push(tr.data('rowIndex'));
                tr.removeClass('insertable-row').addClass('pendent pendent-insert');
            });
            for (var i = 0; i < indexes.length; i++) {
                d.rows.add(this.rows.item(indexes[i]));
            }
            this.onRowsAdded(d);
        }
        commitChangedRows() {
            var d = new latte.DataSet();
            var old = new latte.DataSet();
            var indexes = [];
            this.endCellEdit();
            d.columns.addCollection(this.columns);
            old.columns.addCollection(this.columns);
            this.table.find('tr.changeable-row').each(function () {
                var tr = $(this);
                indexes.push(tr.data('rowIndex'));
                tr.removeClass('changeable-row').addClass('pendent pendent-update');
            });
            for (var i = 0; i < indexes.length; i++) {
                var rowIndex = indexes[i];
                d.rows.add(this.rows.item(rowIndex));
                var row = new latte.DataSetRow();
                old.rows.add(row);
                for (var j = 0; j < old.columns.count; j++) {
                    var columnIndex = j;
                    var value = this.originalValue(columnIndex, rowIndex);
                    if (latte._undef(value))
                        if (this.hasValueAt(columnIndex, rowIndex))
                            value = this.getValueAt(columnIndex, rowIndex);
                        else
                            null;
                    row.setValueAt(columnIndex, value);
                }
            }
            this.onRowsChanged(d, old);
        }
        commitDeletedRows() {
            var d = new latte.DataSet();
            var indexes = [];
            this.endCellEdit();
            d.columns.addCollection(this.columns);
            this.table.find('tr.deletable-row').each(function () {
                var tr = $(this);
                tr.find('th').text(tr.data('rowIndex') + 1);
                indexes.push(tr.data('rowIndex'));
                tr.removeClass('deletable-row').addClass('pendent pendent-delete');
            });
            for (var i = 0; i < indexes.length; i++) {
                d.rows.add(this.rows.item(indexes[i]));
            }
            this.onRowsRemoved(d);
        }
        confirmRowsAdded() {
            this.table.find('tr.pendent-insert').removeClass('pendent pendent-insert');
        }
        confirmRowsChanged() {
            this.table.find('tr.pendent-update').removeClass('pendent pendent-update');
        }
        confirmRowsRemoved() {
            var indexes = [];
            this.table.find('tr.pendent-delete').each(function () {
                indexes.push($(this).data('rowIndex'));
            });
            for (var i = indexes.length - 1; i >= 0; i--)
                this.rows.removeAt(indexes[i]);
        }
        copySelectedCellValue() {
            var txtView = new latte.TextView();
            txtView.text = this.selectedCell.text();
            var btnOk = new latte.ButtonItem();
            btnOk.text = latte.strings.ok;
            var d = new latte.DialogView(txtView, [btnOk]);
            d.show();
            txtView.textElement.focus();
            txtView.textElement.select();
        }
        deleteRowAt(rowIndex) {
            this.getRowElementAt(rowIndex).addClass('deletable-row');
            this._transactionStart();
        }
        editCellAt(columnIndex, rowIndex) {
            if (!this.canEditCellAt(columnIndex, rowIndex))
                return;
            var gv = this;
            var td = this.getCellElementAt(columnIndex, rowIndex);
            var val = this.hasValueAt(columnIndex, rowIndex) ? this.getValueAt(columnIndex, rowIndex) : '';
            var col = this.columns.item(columnIndex);
            this.clearSelection();
            td.addClass('editing');
            var input = new latte.InputItem();
            input.type = col.type;
            input.options = col.options;
            input.value = val;
            input.textVisible = false;
            input.element.find('input[type=text], input[type=password], textarea')
                .width(td.width());
            td.empty()
                .append(input.element)
                .data('input', input);
            var elem = input.element.find('input, select, textarea');
            elem
                .keydown(function (evt) {
                if (evt.keyCode == latte.Key.ESCAPE)
                    gv.endCellEdit(true);
                else if (evt.keyCode == latte.Key.TAB)
                    if (evt.shiftKey)
                        gv.editPreviousCell();
                    else
                        gv.editNextCell();
                else if (evt.keyCode == latte.Key.ENTER)
                    gv.endCellEdit(false);
            })
                .click(function (ev) {
                ev.stopPropagation();
            });
            setTimeout(function () { elem.first().focus().select(); }, 100);
            this.endCellEdit();
            this._editingTd = td;
        }
        editNextCell() {
            if (!this.editing)
                return;
            var rowCount = this.table.find('tr.row').length - 1;
            var colCount = this.columns.count;
            var row = this._editingTd.data('rowIndex');
            var col = this._editingTd.data('columnIndex');
            if (col == colCount - 1 && row == rowCount - 1)
                return;
            if (col == colCount - 1) {
                col = 0;
                row++;
            }
            else {
                col++;
            }
            this.editCellAt(col, row);
        }
        editPreviousCell() {
            if (!this.editing)
                return;
            var colCount = this.columns.count;
            var row = this._editingTd.data('rowIndex');
            var col = this._editingTd.data('columnIndex');
            if (row == 0 && col == 0)
                return;
            if (col == 0) {
                col = colCount - 1;
                row--;
            }
            else {
                col--;
            }
            this.editCellAt(col, row);
        }
        endCellEdit(cancelled = false) {
            if (!this._editingTd || this._editingTd.length == 0)
                return;
            var input = this._editingTd.data('input');
            var value = input.value;
            var row = this._editingTd.data('rowIndex');
            var col = this._editingTd.data('columnIndex');
            if (this._editingTd.parent().hasClass('insert-row')) {
                if (cancelled !== true) {
                    this._makeInsertRowCandidate();
                    this._addInsertRow();
                }
                this.setValueAt(col, row, value);
            }
            else if (this._editingTd.parent().hasClass('insertable-row')) {
                this.setValueAt(col, row, value);
            }
            else {
                if (cancelled !== true) {
                    this.setValueAt(col, row, value, true);
                }
                else {
                    if (this.hasValueAt(col, row))
                        this.setValueAt(col, row, this.getValueAt(col, row));
                }
            }
            if (!cancelled)
                this._editingTd.addClass('changeable-row');
            this._editingTd.data('input', null);
            this._editingTd.removeClass('editing');
            this._editingTd = null;
        }
        getCellElementAt(columnIndex, rowIndex) {
            return this.table.find(latte.sprintf("tr:eq(%s) td:eq(%s)", rowIndex + 1, columnIndex));
        }
        getData() {
            var d = new latte.DataSet();
            d.columns.addCollection(this.columns);
            d.rows.addCollection(this.rows);
            return d;
        }
        getRowElementAt(rowIndex) {
            return this.table.find(latte.sprintf("tr:eq(%s)", rowIndex + 1));
        }
        getValueAt(columnIndex, rowIndex) {
            if (this.hasValueAt(columnIndex, rowIndex))
                return this.rows.item(rowIndex).getValueAt(columnIndex);
            else if (this.rows.count <= rowIndex)
                throw new latte.InvalidArgumentEx('rowIndex', rowIndex);
            else
                throw new latte.InvalidArgumentEx('columnIndex', columnIndex);
        }
        hasCellAt(columnIndex, rowIndex) {
            return this.getCellElementAt(columnIndex, rowIndex).length > 0;
        }
        hasValueAt(columnIndex, rowIndex) {
            return this.rows.count > rowIndex && this.rows.item(rowIndex).hasValueAt(columnIndex);
        }
        onCommitted() {
            this.committed.raise();
        }
        onContextItemsShow() {
            super.onContextItemsShow();
            var hover = this.table.find('td.cell.hover');
            var columnIndex = hover.data('columnIndex');
            var rowIndex = hover.data('rowIndex');
            this.contextItems.clear();
            if (hover.length == 0)
                return;
            this.selectCellAt(columnIndex, rowIndex);
            this._actionRemoveRow.enabled = !hover.parent().hasClass('insert-row') && this.allowDeleteRows;
            this._actionSetCellNull.enabled = this.canEditCellAt(columnIndex, rowIndex);
            this.contextItems.add(this._actionCopyCellValue.getButton());
            this.contextItems.add(this._actionPasteCellValue.getButton());
            this.contextItems.add(new latte.SeparatorItem());
            this.contextItems.add(this._actionSetCellNull.getButton());
            this.contextItems.add(this._actionRemoveRow.getButton());
        }
        onRowsAdded(dataset) {
            this.rowsAdded.raise(dataset);
        }
        onRowsChanged(dataset, oldDataset = null) {
            this.rowsChanged.raise(dataset, oldDataset);
        }
        onRowsRemoved(dataset) {
            this.rowsRemoved.raise(dataset);
        }
        onValueChanged(columnIndex, rowIndex, value, oldValue) {
            this._transactionStart();
            this.getRowElementAt(rowIndex).addClass('changeable-row');
            if (latte._undef(this.originalValue(columnIndex, rowIndex)))
                this.originalValue(columnIndex, rowIndex, oldValue);
            this.valueChanged.raise({ row: rowIndex, column: columnIndex, value: value, oldValue: oldValue });
        }
        originalValue(columnIndex, rowIndex, value = null) {
            var cell = this.getCellElementAt(columnIndex, rowIndex);
            if (latte._undef(value))
                return cell.data('original-value');
            cell.data('original-value', value);
            return this;
        }
        restoreValueAt(columnIndex, rowIndex) {
            if (!this.hasCellAt(columnIndex, rowIndex))
                return;
            var cell = this.getCellElementAt(columnIndex, rowIndex);
            if (!latte._undef(cell.data('original-value'))) {
                this.setValueAt(columnIndex, rowIndex, cell.data('original-value'));
                cell.removeData('original-value');
            }
        }
        rollback() {
            var gv = this;
            this.endCellEdit();
            var indexes = [];
            this.table.find('tr.insertable-row').each(function () {
                indexes.push($(this).data('rowIndex'));
            });
            for (var i = indexes.length - 1; i >= 0; i--)
                this.rows.removeAt(indexes[i]);
            this._removeInsertRow();
            if (this.allowNewRows)
                this.allowNewRows = this.allowNewRows;
            this.table.find('tr.deletable-row').removeClass('deletable-row');
            this.table.find('tr.changeable-row')
                .each(function () {
                var rowIndex = $(this).data('rowIndex');
                for (var columnIndex = 0; columnIndex < gv.columns.count; columnIndex++)
                    gv.restoreValueAt(columnIndex, rowIndex);
            })
                .removeClass('changeable-row');
            this._transactionEnd();
        }
        selectCellAt(columnIndex, rowIndex) {
            this.clearSelection();
            this.getCellElementAt(columnIndex, rowIndex).addClass('selected');
        }
        setData(value) {
            this.columns.clear();
            this.rows.clear();
            var row, col, buff = this.allowNewRows;
            while ((col = value.columns.next()))
                this.columns.add(new latte.GridViewColumn(col.name, col.type, col.length));
            this.allowNewRows = false;
            while ((row = value.rows.next()))
                this.rows.add(new latte.GridViewRow(row.data));
            this.allowNewRows = buff;
        }
        setValueAt(columnIndex, rowIndex, value, raiseEvent = false) {
            var td = this.getCellElementAt(columnIndex, rowIndex);
            var oldValue = this.hasValueAt(columnIndex, rowIndex) ? this.getValueAt(columnIndex, rowIndex) : null;
            if (this.rows.count > rowIndex)
                this.rows.item(rowIndex).setValueAt(columnIndex, value);
            if (value === null) {
                td.empty().append($('<div>').addClass('null').text("NULL"));
            }
            else if (this.columns.item(columnIndex).type == 'password' || this.columns.item(columnIndex).type == 'md5-password') {
                td.empty().html(latte.sprintf("(%s)", latte.strings.secret));
            }
            else {
                td.empty().html(latte.InputItem.format(value, this.columns.item(columnIndex).type, this.columns.item(columnIndex).options));
            }
            if (raiseEvent === true) {
                this.onValueChanged(columnIndex, rowIndex, value, oldValue);
            }
        }
        get allowChangeRows() {
            return this._allowChangeRows;
        }
        set allowChangeRows(value) {
            this._allowChangeRows = value;
        }
        get allowDeleteRows() {
            return this._allowDeleteRows;
        }
        set allowDeleteRows(value) {
            this.allowDeleteRows = value;
        }
        get allowNewRows() {
            return this._allowNewRows;
        }
        set allowNewRows(value) {
            this._allowNewRows = value;
            if (value) {
                this._removeInsertRow();
                if (!this.readOnly)
                    this._addInsertRow();
            }
            else {
                this._removeInsertRow();
            }
        }
        get data() {
            return this.getData();
        }
        set data(value) {
            this.setData(value);
        }
        get editing() {
            return this._editingTd ? true : false;
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            this._readOnly = value;
            if (value) {
                this._removeInsertRow();
            }
            else {
                this.allowNewRows = this.allowNewRows;
            }
        }
        get selectedCell() {
            return this.table.find('td.cell.selected');
        }
        set selectedCell(value) {
            if (!(value instanceof jQuery))
                throw new latte.InvalidArgumentEx('value');
            this.selectCellAt(value.data('columnIndex'), value.data('rowIndex'));
        }
    }
    latte.GridView = GridView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordGridView extends latte.GridView {
        constructor() {
            super();
            this.records = new latte.Collection(this._onAddRecord, this._onRemoveRecord, this);
        }
        _onAddRecord(record) {
            var row = new latte.GridViewRow();
            var colIndex = 0;
            var col = null;
            if (this.records.count === 1) {
                this.columns.clear();
                var metadata = record.getMetadata();
                if (metadata && metadata.fields) {
                    for (var i in metadata.fields) {
                        var f = metadata.fields[i];
                        var c = new latte.GridViewColumn();
                        c.name = f.text || i;
                        c.type = f.type || 'string';
                        this.columns.add(c);
                    }
                    this.recordType = record.recordType;
                    this._metadata = metadata;
                    this.allowNewRows = metadata['can-insert'] === true;
                }
            }
            while ((col = this.columns.next())) {
                row.setValueAt(colIndex, record[col.tag]);
                colIndex++;
            }
            row.tag = record;
            row.readOnly = this._metadata['can-update'] !== true;
            record.tags._recordDataGridViewRow = row;
            this.rows.add(row);
        }
        _onRemoveRecord(record) {
            if (!(record.tags._recordDataGridViewRow instanceof latte.DataSetRow))
                throw new latte.Ex();
            this.rows.remove(record.tags._recordDataGridViewRow);
        }
        applyValues(row, record) {
            for (var i = 0; i < this.columns.count; i++) {
                var column = this.columns.item(i);
                var name = column.tag;
                record[name] = row.hasValueAt(i) ? row.getValueAt(i) : null;
            }
        }
        onContextItemsShow() {
            super.onContextItemsShow();
            var cell = this.selectedCell;
            var row = this.rows.item(cell.data('rowIndex'));
            var record = row ? row.tag : null;
            var meta = record ? record.getMetadata() : null;
            this._actionRemoveRow.enabled = meta && meta['can-delete'] === true;
        }
        onRowsAdded(dataset) {
            super.onRowsAdded(dataset);
            for (var i = 0; i < dataset.rows.count; i++) {
                var row = dataset.rows.item(i);
                var record = new latte.DataRecord();
                record.recordType = this.recordType;
                record.metadata = this._metadata;
                this.applyValues(row, record);
                row.tag = record;
                record.insert(function () { latte.sprintf("Inserted: " + record.recordId); });
            }
            this.confirmRowsAdded();
        }
        onRowsChanged(dataset) {
            super.onRowsChanged(dataset);
            for (var i = 0; i < dataset.rows.count; i++) {
                var row = dataset.rows.item(i);
                var record = row.tag;
                this.applyValues(row, record);
                record.update(function () { latte.sprintf("Updated: " + record.recordId); });
            }
            this.confirmRowsChanged();
        }
        onRowsRemoved(dataset) {
            super.onRowsRemoved(dataset);
            for (var i = 0; i < dataset.rows.count; i++) {
                var row = dataset.rows.item(i);
                var record = row.tag;
                record.remove(function () { latte.sprintf("Removed: " + record.recordId); });
            }
            this.confirmRowsRemoved();
        }
        get recordType() {
            return this._recordType;
        }
        set recordType(value) {
            this._recordType = value;
        }
    }
    latte.DataRecordGridView = DataRecordGridView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ValueItem extends latte.Item {
        constructor() {
            super();
            this._value = null;
            this.element.addClass('value');
        }
        onGetValueString() {
            return String(this.value);
        }
        onValueChanged() {
            if (this._valueChanged) {
                this._valueChanged.raise();
            }
        }
        setValue(value, silently = false) {
            if (silently) {
                this._value = value;
            }
            else {
                this.value = value;
            }
        }
        get valueChanged() {
            if (!this._valueChanged) {
                this._valueChanged = new latte.LatteEvent(this);
            }
            return this._valueChanged;
        }
        get value() {
            return this._value;
        }
        set value(value) {
            let changed = value !== this._value;
            this._value = value;
            if (changed) {
                this.onValueChanged();
            }
        }
        get valueString() {
            return this.onGetValueString();
        }
    }
    latte.ValueItem = ValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordValueItem extends latte.ValueItem {
        constructor(loader = null, textboxCreated = null, placeholder = null) {
            super();
            this._loaderFunction = null;
            this._placeholder = null;
            this._record = null;
            this.addClass('data-record');
            if (textboxCreated) {
                this.textboxCreated.add(textboxCreated);
            }
            this.updateItem();
            if (loader) {
                this.loaderFunction = loader;
            }
            if (placeholder) {
                this.placeholder = placeholder;
                if (this.textbox) {
                    this.textbox.placeholder = placeholder;
                }
            }
        }
        get valueString() {
            if (this.record) {
                return this.record.toString();
            }
            else {
                return '';
            }
        }
        onLayout() {
            super.onLayout();
            if (this.buttonGroup) {
                setTimeout(() => {
                    let w = latte.Rectangle.fromElement(this.raw).width;
                    let bw = latte.Rectangle.fromElement(this.buttonGroup.buttons[1].raw).width;
                    this.buttonGroup.buttons[0].element.css('max-width', w - bw - 35);
                });
            }
        }
        onRecordChanged() {
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
            this.updateItem();
            if (this.record) {
                this.value = this.record.recordId;
                this.record.recordIdChanged.add(() => this.value = this.record.recordId);
            }
            else {
                this.value = null;
            }
        }
        onTextboxCreated() {
            if (this._textboxCreated) {
                this._textboxCreated.raise(this.textbox);
            }
            if (latte._isString(this.placeholder) && this.placeholder.length > 0) {
                this.textbox.placeholder = this.placeholder;
            }
            this.textbox.minLengthToActivateSuggestions = 0;
        }
        setValue(value) {
            if (value instanceof latte.DataRecord) {
                this.record = value;
            }
        }
        setRecordSilent(r) {
            this._record = r;
            this.updateItem();
        }
        updateItem() {
            this.element.empty();
            if (this.record) {
                if (this._textbox)
                    this._textbox.hideSuggestions();
                this._textbox = null;
                let icon = latte._isFunction(this.record['icon16']) ? this.record['icon16']() : null;
                let bg = new latte.ButtonGroupItem([
                    new latte.ButtonItem(this.record.toString(), icon),
                    new latte.ButtonItem(null, latte.LinearIcon.cross, () => {
                        this.record = null;
                        this.textbox.input.select();
                        this.textbox.input.focus();
                    })
                ]);
                bg.appendTo(this);
                this.buttonGroup = bg;
                bg.buttons[0].addClass('no-front-padding');
                bg.buttons[0].faceVisible = bg.buttons[1].faceVisible = false;
                this.onLayout();
            }
            else {
                this.buttonGroup = null;
                this._textbox = new latte.TextboxItem();
                this.textbox.appendTo(this);
                this.textbox.filterSuggestions.add(() => {
                    if (this.loaderFunction) {
                        this.loaderFunction(this, (items) => {
                            if (this.textbox) {
                                this.textbox.suggestions.clear();
                                this.textbox.suggestions.addArray(items);
                            }
                        });
                    }
                });
                this.onTextboxCreated();
            }
            this.element.clear();
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get textboxCreated() {
            if (!this._textboxCreated) {
                this._textboxCreated = new latte.LatteEvent(this);
            }
            return this._textboxCreated;
        }
        get loaderFunction() {
            return this._loaderFunction;
        }
        set loaderFunction(value) {
            this._loaderFunction = value;
        }
        get placeholder() {
            return this._placeholder;
        }
        set placeholder(value) {
            this._placeholder = value;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            let changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
        get textbox() {
            return this._textbox;
        }
        get text() {
            if (this._textbox) {
                return this._textbox.value;
            }
            else if (this.record) {
                return this.record.toString();
            }
            return null;
        }
    }
    latte.DataRecordValueItem = DataRecordValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataRecordWidget extends latte.WidgetItem {
        constructor(record = null) {
            super();
            this._record = null;
            this.topToolbar.sideItems.add(this.btnSave);
            this.items.add(this.form);
            if (record) {
                this.record = record;
            }
        }
        onRecordChanged() {
            this.form.record = this.record;
            this.btnSave.enabled = false;
            if (this._recordChanged) {
                this._recordChanged.raise();
            }
        }
        onSaving() {
            if (this._saving) {
                this._saving.raise();
            }
        }
        onSaved() {
            if (this._saved) {
                this._saved.raise();
            }
        }
        get recordChanged() {
            if (!this._recordChanged) {
                this._recordChanged = new latte.LatteEvent(this);
            }
            return this._recordChanged;
        }
        get saving() {
            if (!this._saving) {
                this._saving = new latte.LatteEvent(this);
            }
            return this._saving;
        }
        get saved() {
            if (!this._saved) {
                this._saved = new latte.LatteEvent(this);
            }
            return this._saved;
        }
        get form() {
            if (!this._form) {
                this._form = new latte.DataRecordFormItem();
                this._form.faceVisible = false;
                this._form.valueChanged.add(() => {
                    this.btnSave.enabled = true;
                });
            }
            return this._form;
        }
        get btnSave() {
            if (!this._btnSave) {
                this._btnSave = new latte.ButtonItem(null, latte.IconItem.standard(4, 2), () => {
                    this.form.applyValues(this.record);
                    this.onSaving();
                    this.record.save(() => {
                        this.btnSave.enabled = false;
                        this.onSaved();
                    });
                });
                this._btnSave.tooltip = latte.strings.save;
                this._btnSave.enabled = false;
            }
            return this._btnSave;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            var changed = value !== this._record;
            this._record = value;
            if (changed) {
                this.onRecordChanged();
            }
        }
    }
    latte.DataRecordWidget = DataRecordWidget;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataSet {
        constructor() {
            this.columns = new latte.Collection();
            this.rows = new latte.Collection();
        }
        static fromServerObject(dataset) {
            var d = new DataSet();
            var i;
            for (i in dataset.fields) {
                d.columns.add(new latte.DataSetColumn(dataset.fields[i].name, DataSet.fromServerType(dataset.fields[i].type), dataset.fields[i].length));
            }
            if (latte._isArray(dataset.rows)) {
                for (i = 0; i < dataset.rows.length; i++) {
                    var arr = dataset.rows[i];
                    var ds = new latte.DataSetRow(arr);
                    d.rows.add(ds);
                }
            }
            return d;
        }
        static fromServerType(type) {
            switch (type) {
                case 'int':
                    type = 'integer';
                    break;
                case 'blob':
                    type = 'string';
                    break;
            }
            return type;
        }
        getColumnIndex(columnName) {
            var col = null;
            var i = 0;
            while ((col = this.columns.next())) {
                if (col.name.toLowerCase() == columnName.toLowerCase()) {
                    this.columns.resetPointer();
                    return i;
                }
                i++;
            }
            return null;
        }
        getDataArray() {
            var a = [];
            for (var i = 0; i < this.rows.count; i++)
                a.push(this.rows.item(i).getDataArray(this.columns.count));
            return a;
        }
        getValue(columnName, rowIndex) {
            var columnIndex;
            if ((columnIndex = this.getColumnIndex(columnName))) {
                return this.getValueAt(columnIndex, rowIndex);
            }
            else {
                throw new latte.InvalidArgumentEx(columnName);
            }
        }
        getValueAt(columnIndex, rowIndex) {
            if (this.rows.count > rowIndex && this.rows.item(rowIndex).hasValueAt(columnIndex))
                return this.rows.item(rowIndex).getValueAt(columnIndex);
            else
                return null;
        }
        setValue(columnName, rowIndex, value) {
            var columnIndex;
            if ((columnIndex = this.getColumnIndex(columnName))) {
                return this.setValueAt(columnIndex, rowIndex, value);
            }
            return this;
        }
        setValueAt(columnIndex, rowIndex, value) {
            if (this.rows.count > rowIndex && this.rows.item(rowIndex).hasValueAt(columnIndex))
                this.rows.item(rowIndex).setValueAt(columnIndex, value);
            else if (this.rows.count <= rowIndex)
                throw new latte.InvalidArgumentEx('rowIndex', rowIndex);
            else
                throw new latte.InvalidArgumentEx('columnIndex', columnIndex);
            return this;
        }
    }
    latte.DataSet = DataSet;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataSetColumn {
        constructor(name = '', type = '', length = 0) {
            this.optionsChanged = new latte.LatteEvent(this);
            this.name = name;
            this.type = type;
            this.length = length;
        }
        get length() {
            return this._length;
        }
        set length(value) {
            this._length = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        onOptionsChanged() {
            this.optionsChanged.raise();
        }
        get options() {
            return this._options;
        }
        set options(value) {
            this._options = value;
            this.onOptionsChanged();
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
        get type() {
            return this._type;
        }
        set type(value) {
            this._type = value;
        }
    }
    latte.DataSetColumn = DataSetColumn;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DataSetRow {
        constructor(data = []) {
            this.data = data;
            if (data)
                this.data = data;
            else
                this.data = [];
        }
        getDataArray(columns) {
            var a = [];
            for (var i = 0; i < columns; i++)
                if (latte._undef(this.data[i]))
                    a[i] = null;
                else
                    a[i] = this.data[i];
            return a;
        }
        hasValueAt(index) {
            return !latte._undef(this.data[index]);
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            this._readOnly = value;
        }
        get tag() {
            return this._tag;
        }
        set tag(value) {
            this._tag = value;
        }
        getValueAt(index) {
            return this.data[index];
        }
        setValueAt(index, value) {
            this.data[index] = value;
        }
    }
    latte.DataSetRow = DataSetRow;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class GridViewColumn extends latte.DataSetColumn {
        constructor(name = '', type = '', length = 0) {
            super();
            if (name)
                this.name = name;
            if (type)
                this.type = type;
            if (length)
                this.length = length;
        }
        get header() {
            return this._header;
        }
        set header(value) {
            this._header = value;
        }
        get readOnly() {
            return this._readonly;
        }
        set readOnly(value) {
            this._readonly = value;
        }
    }
    latte.GridViewColumn = GridViewColumn;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class GridViewRow extends latte.DataSetRow {
        constructor(data = []) {
            super(data);
        }
    }
    latte.GridViewRow = GridViewRow;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Message {
        constructor(moduleName = null, className = null, method = null, methodArgs = null, id = 0) {
            this._calls = [];
            if (className !== null) {
                this.calls.push(new latte.RemoteCall(moduleName, className, method, methodArgs, id));
            }
        }
        static get pathToRequest() {
            return latte._latteUrl() + "/request.php";
        }
        static sendCalls(calls, callback = null) {
            let m = new Message();
            m.addCalls(calls);
            if (callback)
                m.responseArrived.add(callback);
            m.send();
            if (callback && calls.filter(c => !!c).length == 0) {
                callback();
            }
            return m;
        }
        static get networkAvailable() {
            return Message._networkAvailable;
        }
        static set networkAvailable(value) {
            var changed = value !== Message._networkAvailable;
            Message._networkAvailable = value;
            if (changed) {
                Message.onNetworkAvailableChanged();
            }
        }
        static get networkAvailableChanged() {
            if (!Message._networkAvailableChanged) {
                Message._networkAvailableChanged = new latte.LatteEvent(Message);
            }
            return Message._networkAvailableChanged;
        }
        static onNetworkAvailableChanged() {
            if (Message._networkAvailableChanged) {
                Message._networkAvailableChanged.raise();
            }
        }
        addCalls(calls) {
            let filtered = [];
            for (let i = 0; i < calls.length; i++) {
                if (calls[i]) {
                    filtered.push(calls[i]);
                }
            }
            this._calls = this._calls.concat(filtered);
        }
        dataArrived(data) {
            let parsed = false;
            let result = null;
            this._working = false;
            this.response = data;
            Message.networkAvailable = true;
            this.onResponseArrived();
            if (data.length == 0) {
                this.onFailed("Empty response from server");
            }
            try {
                result = JSON.parse(data);
                parsed = true;
            }
            catch (ex) { }
            if (parsed && latte._isArray(result)) {
                if (result.length !== this.calls.length) {
                    this.onFailed("Different amount of response than calls");
                }
                for (let i = 0; i < this.calls.length; i++) {
                    this.calls[i].respond(result[i]);
                }
            }
            else {
                this.onFailed("Can't parse or response is not an array.");
            }
        }
        onFailed(errorDescription) {
            latte.log(errorDescription);
            latte.log("On call(s):");
            for (let i = 0; i < this.calls.length; i++) {
                let call = this.calls[i];
                if (call) {
                    latte.log(call.toString());
                }
            }
            latte.log(this.response);
            if (this._failed instanceof latte.LatteEvent) {
                this.failed.raise();
            }
            if (latte._isFunction(Message.globalFailed)) {
                Message.globalFailed.call(this, errorDescription);
            }
        }
        onNetworkFailed() {
            Message.networkAvailable = false;
            if (this._networkFailed) {
                this._networkFailed.raise();
            }
            if (Message._retryLeader === null) {
                Message._retryLeader = this;
            }
            else if (Message._retryLeader !== this) {
                return;
            }
            latte.LoadInfo.instance.start(latte.strings.reconnecting);
            if (this.critical) {
            }
            if (Message._retryTime == 0) {
                Message._retryTime = 5;
            }
            else {
                Message._retryTime = Math.min(latte.TimeSpan.fromMinutes(5).totalSeconds, Message._retryTime * 2);
            }
            Message._retryCountdown = Message._retryTime;
            latte.LoadInfo.instance.loadingText = (latte.sprintf(latte.strings.reconnectingInS, latte.TimeSpan.fromSeconds(Message._retryCountdown).toString()));
            if (Message._retryTimer)
                Message._retryTimer.pause();
            Message._retryTimer = new latte.Timer(function () {
                Message._retryCountdown--;
                if (Message._retryCountdown == 0) {
                    latte.LoadInfo.instance.loadingText = latte.strings.reconnecting;
                    Message.networkAvailable = true;
                    this.send();
                }
                else if (Message._retryCountdown < 0) {
                    Message._retryTimer.pause();
                    latte.LoadInfo.instance.end();
                }
                else {
                    latte.LoadInfo.instance.loadingText = (latte.sprintf(latte.strings.reconnectingInS, latte.TimeSpan.fromSeconds(Message._retryCountdown).toString()));
                }
            }, 1000, this);
            Message._retryTimer.start();
        }
        onResponseArrived() {
            if (this._responseArrived) {
                this.responseArrived.raise();
            }
        }
        onSent() {
            if (this._sent) {
                this.sent.raise();
            }
            Message.log.push(this);
            if (Message.log.length > 50) {
                Message.log.shift();
            }
        }
        send(success = null, failure = null) {
            if (success || failure) {
                if (this.calls.length !== 1) {
                    throw new latte.Ex("Can't assign handlers when more than one call in message");
                }
                else {
                    if (success) {
                        this.calls[0].success.add(success);
                    }
                    if (failure) {
                        this.calls[0].failure.add(failure);
                    }
                }
            }
            this._working = true;
            let calls = [];
            for (let i = 0; i < this.calls.length; i++) {
                let call = this.calls[i];
                if (call) {
                    calls.push(call.marshall());
                }
            }
            latte.Ajax.post(Message.pathToRequest, {
                action: 'ajax-rpc',
                calls: JSON.stringify(calls)
            }, (data) => {
                this.dataArrived(data);
            }, (error) => {
                this._working = false;
                this.onNetworkFailed();
            });
            this.onSent();
            return this;
        }
        working() {
            return this._working;
        }
        get calls() {
            return this._calls;
        }
        get failed() {
            if (!this._failed) {
                this._failed = new latte.LatteEvent(this);
            }
            return this._failed;
        }
        get networkFailed() {
            if (!this._networkFailed) {
                this._networkFailed = new latte.LatteEvent(this);
            }
            return this._networkFailed;
        }
        get responseArrived() {
            if (!this._responseArrived) {
                this._responseArrived = new latte.LatteEvent(this);
            }
            return this._responseArrived;
        }
        get sent() {
            if (!this._sent) {
                this._sent = new latte.LatteEvent(this);
            }
            return this._sent;
        }
    }
    Message.log = [];
    Message._networkAvailable = true;
    latte.Message = Message;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class RemoteCall {
        constructor(moduleName = null, className = null, method = null, params = null, id = 0, returns = null) {
            this._className = null;
            this._method = null;
            this._id = 0;
            this._params = null;
            this._returns = null;
            this._beforeSuccess = null;
            this._success = null;
            this._failure = null;
            this._something = null;
            this._moduleName = null;
            if (moduleName)
                this.moduleName = moduleName;
            if (className)
                this.className = className;
            if (method)
                this.method = method;
            if (params)
                this.params = params;
            if (id)
                this.id = id;
            if (returns)
                this.returns = returns;
        }
        marshall() {
            return {
                moduleName: this.moduleName,
                className: this.className,
                method: this.method,
                id: this.id,
                params: this.params
            };
        }
        onFailure(errorDescription, errorCode) {
            if (this._failure instanceof latte.LatteEvent) {
                this._failure.raise(errorDescription, errorCode);
            }
        }
        onBeforeSuccess(data) {
            if (this._beforeSuccess instanceof latte.LatteEvent) {
                this._beforeSuccess.raise(data);
            }
        }
        onSuccess(data) {
            if (this._success instanceof latte.LatteEvent) {
                this._success.raise(data);
            }
        }
        respond(responseData) {
            var response = new latte.RemoteResponse(this, responseData);
            this.response = response;
        }
        send(success = null, failure = null) {
            this.withHandlers(success, failure);
            var m = new latte.Message();
            m.calls.push(this);
            m.send();
            return m;
        }
        sendWithLoader(loaderText, success = null, failure = null) {
            var m = this.send(success, failure);
            latte.LoadInfo.instance.start(loaderText);
            m.responseArrived.add(() => {
                latte.LoadInfo.instance.end();
            });
            return m;
        }
        toString() {
            var idpart = this.id > 0 ? latte.sprintf("<%s>", this.id) : '';
            var paramspart = [];
            for (var i in this.params) {
                var a = this.params[i];
                paramspart.push(i + ' = ' + (latte._isArray(a) || latte._isObject(a) ? JSON.stringify(a) : String(a)));
            }
            return latte.sprintf("%s%s.%s(%s)", this.className, idpart, this.method, paramspart.join(', '));
        }
        withHandlers(success = null, failure = null) {
            if (success) {
                this.success.add(success);
            }
            if (failure) {
                this.failure.add(failure);
            }
            return this;
        }
        get className() {
            return this._className;
        }
        set className(value) {
            this._className = value;
        }
        get method() {
            return this._method;
        }
        get failure() {
            if (!(this._failure instanceof latte.LatteEvent)) {
                this._failure = new latte.LatteEvent(this);
            }
            return this._failure;
        }
        set method(value) {
            this._method = value;
        }
        get something() {
            return this._something;
        }
        set something(value) {
            this._something = value;
        }
        get moduleName() {
            return this._moduleName;
        }
        set moduleName(value) {
            this._moduleName = value;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get params() {
            return this._params;
        }
        set params(value) {
            this._params = value;
        }
        get response() {
            return this._response;
        }
        set response(value) {
            this._response = value;
            if (value.logs.length > 0) {
                latte.log(latte.sprintf("Log: " + this.toString()));
                for (var i = 0; i < value.logs.length; i++) {
                    latte.log('    ' + value.logs[i]);
                }
            }
            if (value.warnings.length > 0) {
                latte.log("Warnings: " + latte.sprintf(this.toString()));
                for (var i = 0; i < value.warnings.length; i++) {
                    if (console && console.warn) {
                        console.warn('    ' + value.warnings[i]);
                    }
                    else {
                        latte.log('    ' + value.warnings[i]);
                    }
                }
            }
            if (value.success) {
                this.onBeforeSuccess(value.data);
                this.onSuccess(value.data);
            }
        }
        get returns() {
            return this._returns;
        }
        set returns(value) {
            this._returns = value;
        }
        get success() {
            if (!(this._success instanceof latte.LatteEvent)) {
                this._success = new latte.LatteEvent(this);
            }
            return this._success;
        }
        get beforeSuccess() {
            if (!(this._beforeSuccess instanceof latte.LatteEvent)) {
                this._beforeSuccess = new latte.LatteEvent(this);
            }
            return this._beforeSuccess;
        }
    }
    latte.RemoteCall = RemoteCall;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class RemoteResponse {
        constructor(call, response) {
            this._call = null;
            this._errorCode = -1;
            this._errorDescription = null;
            this._success = false;
            this._logs = [];
            this._warnings = [];
            this._call = call;
            this._response = response;
            this.unmarshall();
        }
        unmarshall() {
            for (var i in this.response) {
                this['_' + i] = this.response[i];
            }
            if (this.success === true) {
                this._data = latte.DataRecord.scanAndConvert(this.data);
            }
            else {
                latte.log("Error on call: " + this.call.toString());
                latte.log(latte.sprintf("(%s) - %s", this.errorCode, this.errorDescription));
                this.call.onFailure(this.errorDescription, String(this.errorCode));
            }
        }
        get call() {
            return this._call;
        }
        get errorCode() {
            return this._errorCode;
        }
        get errorDescription() {
            return this._errorDescription;
        }
        get logs() {
            return this._logs;
        }
        set logs(value) {
            this._logs = value;
        }
        get response() {
            return this._response;
        }
        get data() {
            return this._data;
        }
        get success() {
            return this._success;
        }
        get warnings() {
            return this._warnings;
        }
        set warnings(value) {
            this._warnings = value;
        }
    }
    latte.RemoteResponse = RemoteResponse;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ValueDataBind {
        constructor(a, b) {
            this._actorA = a;
            this._actorB = b;
            this._bindA = new latte.ValueSingleDataBind(a, b);
            this._bindB = new latte.ValueSingleDataBind(b, a);
            this.bindA.willApply.add(() => {
                this.bindB.skipNextApply = true;
            });
            this.bindB.willApply.add(() => {
                this.bindA.skipNextApply = true;
            });
        }
        uninstall() {
            this.bindA.uninstall();
            this.bindB.uninstall();
        }
        get actorA() {
            return this._actorA;
        }
        get actorB() {
            return this._actorB;
        }
        get bindA() {
            return this._bindA;
        }
        get bindB() {
            return this._bindB;
        }
    }
    latte.ValueDataBind = ValueDataBind;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ValueSingleDataBind {
        constructor(sourceActor, targetActor) {
            this._skipNextApply = false;
            this._sourceActor = sourceActor;
            this._targetActor = targetActor;
            this.install();
        }
        apply() {
            if (this.skipNextApply) {
                this.skipNextApply = false;
                return;
            }
            this.onWillApply();
            let sourceValue = this.sourceActor.actor[this.sourceActor.propertyName];
            let targetValue = latte.DataBindCoercion.coerce(sourceValue, this.sourceActor.propertyType, this.targetActor.propertyType);
            this.targetActor.actor[this.targetActor.propertyName] = targetValue;
            this.onApplied();
        }
        install() {
            this.uninstall();
            let s = this.sourceActor;
            if (s.propertyChanged instanceof latte.LatteEvent) {
                this.lastHandleApplied = () => {
                    this.apply();
                };
                s.propertyChanged.add(this.lastHandleApplied);
            }
            this.apply();
        }
        onApplied() {
            if (this._applied) {
                this._applied.raise();
            }
        }
        onWillApply() {
            if (this._willApply) {
                this._willApply.raise();
            }
        }
        uninstall() {
            if (this.lastHandleApplied) {
                this.sourceActor.propertyChanged.remove(this.lastHandleApplied);
            }
        }
        get applied() {
            if (!this._applied) {
                this._applied = new latte.LatteEvent(this);
            }
            return this._applied;
        }
        get willApply() {
            if (!this._willApply) {
                this._willApply = new latte.LatteEvent(this);
            }
            return this._willApply;
        }
        get sourceActor() {
            return this._sourceActor;
        }
        get skipNextApply() {
            return this._skipNextApply;
        }
        set skipNextApply(value) {
            this._skipNextApply = value;
        }
        get targetActor() {
            return this._targetActor;
        }
    }
    latte.ValueSingleDataBind = ValueSingleDataBind;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ExplorerChildrenView extends latte.View {
        constructor() {
            super();
            this._explorerItem = null;
        }
        onExplorerItemChanged() {
            if (this._explorerItemChanged) {
                this._explorerItemChanged.raise();
            }
        }
        onShowChildren() {
            if (this._showChildren) {
                this._showChildren.raise();
            }
        }
        get explorerItemChanged() {
            if (!this._explorerItemChanged) {
                this._explorerItemChanged = new latte.LatteEvent(this);
            }
            return this._explorerItemChanged;
        }
        get showChildren() {
            if (!this._showChildren) {
                this._showChildren = new latte.LatteEvent(this);
            }
            return this._showChildren;
        }
        get explorerItem() {
            return this._explorerItem;
        }
        set explorerItem(value) {
            let changed = value !== this._explorerItem;
            this._explorerItem = value;
            if (changed) {
                this.onExplorerItemChanged();
            }
        }
    }
    latte.ExplorerChildrenView = ExplorerChildrenView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ExplorerItem {
        constructor() {
            this._childrenLoaded = false;
            this._childrenPage = 1;
            this._childrenPages = 0;
            this._explorer = null;
            this._loadsChildren = true;
            this._loadsChildrenFolders = true;
            this._parent = null;
        }
        createTreeItem() {
            var item = new latte.TreeItem();
            item.tag = this;
            this._treeItem = item;
            this.syncUI();
            return item;
        }
        createListViewItem() {
            var item = new latte.ListViewItem(this.explorer.listView);
            var columns = this.getColumns();
            item.tag = this;
            this._listViewItem = item;
            item.addColumn(150);
            this.syncUI();
            return item;
        }
        getCanBeDeleted() {
            return true;
        }
        getColumnHeaders() {
            return [];
        }
        getColumns() {
            return [];
        }
        getChildrenLoader() {
            return null;
        }
        getChildrenView() {
            return null;
        }
        getDetailView() {
            return null;
        }
        getDetailViewOptions() {
            return [];
        }
        getItems() {
            return [];
        }
        getChildrenItems() {
            return [];
        }
        getIcon() {
            return latte.IconItem.fileIcon();
        }
        getIcon32() {
            return latte.IconItem.standard(2, 1, 32);
        }
        getName() {
            return this.toString();
        }
        loadChildren(callback = null) {
            if (!callback) {
                callback = () => { };
            }
            if (!this.loadsChildren || this.childrenLoaded) {
                callback();
                return;
            }
            else {
                this.onChildrenLoadStarted();
                let call = this.getChildrenLoader();
                if (call) {
                    this.children.clear();
                    this._childrenLoading = true;
                    call.send(() => {
                        this.childrenLoaded = true;
                        this._childrenLoading = false;
                        this.onChildrenLoadEnd();
                        callback();
                    });
                }
                else {
                    this.childrenLoaded = true;
                    this.onChildrenLoadEnd();
                    callback();
                }
            }
        }
        onChildAdded(item) {
            if (this._childAdded) {
                this._childAdded.raise(item);
            }
            item.explorer = this.explorer;
            item._parent = this;
        }
        onChildrenPagesChanged() {
            if (this._childrenPagesChanged) {
                this._childrenPagesChanged.raise();
            }
            this.explorer.paginator.visible = this.explorer && this.childrenPages > 1;
        }
        onChildRemoved(item) {
            if (this._childRemoved) {
                this._childRemoved.raise(item);
            }
            item._parent = null;
        }
        onChildrenChanged() {
            this.childrenLoaded = false;
            if (this._childrenChanged) {
                this._childrenChanged.raise();
            }
        }
        onChildrenLoadStarted() {
            if (this._childrenLoadStarted) {
                this._childrenLoadStarted.raise();
            }
        }
        onChildrenLoadEnd() {
            if (this._childrenLoadEnd) {
                this._childrenLoadEnd.raise();
            }
        }
        syncUI() {
            if (this.treeItem) {
                this.treeItem.text = this.getName();
                this.treeItem.icon = this.getIcon();
            }
            if (this.listViewItem) {
                this.listViewItem.icon = this.getIcon();
                this.listViewItem.setItem(0, new latte.LabelItem(this.getName()));
            }
        }
        get childAdded() {
            if (!this._childAdded) {
                this._childAdded = new latte.LatteEvent(this);
            }
            return this._childAdded;
        }
        get childRemoved() {
            if (!this._childRemoved) {
                this._childRemoved = new latte.LatteEvent(this);
            }
            return this._childRemoved;
        }
        get childrenChanged() {
            if (!this._childrenChanged) {
                this._childrenChanged = new latte.LatteEvent(this);
            }
            return this._childrenChanged;
        }
        get childrenLoadStarted() {
            if (!this._childrenLoadStarted) {
                this._childrenLoadStarted = new latte.LatteEvent(this);
            }
            return this._childrenLoadStarted;
        }
        get childrenLoadEnd() {
            if (!this._childrenLoadEnd) {
                this._childrenLoadEnd = new latte.LatteEvent(this);
            }
            return this._childrenLoadEnd;
        }
        get children() {
            if (!this._children) {
                this._children = new latte.Collection((item) => { this.onChildAdded(item); }, (item) => { this.onChildRemoved(item); });
            }
            return this._children;
        }
        get childrenLoaded() {
            return this._childrenLoaded;
        }
        set childrenLoaded(value) {
            this._childrenLoaded = value;
        }
        get childrenLoadNeeded() {
            return this.loadsChildren && !this.childrenLoaded && !this.childrenLoaded;
        }
        get childrenPage() {
            return this._childrenPage;
        }
        set childrenPage(value) {
            this._childrenPage = value;
        }
        get childrenPages() {
            return this._childrenPages;
        }
        set childrenPages(value) {
            var changed = value !== this._childrenPages;
            this._childrenPages = value;
            if (changed) {
                this.onChildrenPagesChanged();
            }
        }
        get childrenPagesChanged() {
            if (!this._childrenPagesChanged) {
                this._childrenPagesChanged = new latte.LatteEvent(this);
            }
            return this._childrenPagesChanged;
        }
        get explorer() {
            return this._explorer;
        }
        set explorer(value) {
            this._explorer = value;
            for (var i = 0; i < this.children.length; i++) {
                this.children[i].explorer = value;
            }
        }
        get childrenLoading() {
            return this._childrenLoading;
        }
        get listViewItem() {
            return this._listViewItem;
        }
        get loadsChildren() {
            return this._loadsChildren;
        }
        set loadsChildren(value) {
            this._loadsChildren = value;
        }
        get loadsChildrenFolders() {
            return this._loadsChildrenFolders;
        }
        set loadsChildrenFolders(value) {
            this._loadsChildrenFolders = value;
        }
        get parent() {
            return this._parent;
        }
        get treeItem() {
            return this._treeItem;
        }
    }
    latte.ExplorerItem = ExplorerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ExplorerItemDataRecord extends latte.ExplorerItem {
        constructor(r = null) {
            super();
            this._record = null;
            if (r) {
                this.record = r;
            }
        }
        createListViewItem() {
            var item = super.createListViewItem();
            return item;
        }
        getName() {
            return this.record ? this.record.toString() : this.toString();
        }
        getColumns() {
            if (!this.record) {
                return [];
            }
            var result = [];
            var metadata = this.record.getMetadata();
            if (metadata.fields) {
                for (var i in metadata.fields) {
                    result.push(i);
                }
            }
            return result;
        }
        getColumnWithFor(name) {
            return 200;
        }
        getItemForColumn(name) {
            var value = this.record[name];
            if (this.record[name + 'String']) {
                value = this.record[name + 'String'];
            }
            return new latte.LabelItem(value);
        }
        getDetailView() {
            var d = new latte.DataRecordFormView(this.record);
            return d;
        }
        syncUI() {
            super.syncUI();
            if (this.listViewItem) {
                var item = this.listViewItem;
                var columns = this.getColumns();
                for (var i = 0; i < columns.length; i++) {
                    var s = columns[i];
                    if (!item.columns[i]) {
                        item.addColumn(this.getColumnWithFor(s));
                    }
                    item.setItem(i, this.getItemForColumn(s));
                }
            }
        }
        get record() {
            return this._record;
        }
        set record(value) {
            this._record = value;
        }
    }
    latte.ExplorerItemDataRecord = ExplorerItemDataRecord;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TreeItem extends latte.Item {
        constructor() {
            super();
            this._expandOnSelect = true;
            this._level = 0;
            var item = this;
            latte.UiElement.disableTextSelection(this.element);
            this.click = new latte.LatteEvent(this);
            this.loadItems = new latte.LatteEvent(this);
            this.selectedChanged = new latte.LatteEvent(this);
            this.loadItems.handlerAdded.add(() => {
                this._updateGlyph();
            });
            this.element.addClass('tree-item');
            this.faceElement = latte.Item.selectable().appendTo(this.element);
            this.levelElement = $('<div>').addClass('level').appendTo(this.faceElement);
            this.glyphElement = $('<div>').addClass('glyph').appendTo(this.faceElement);
            this.iconElement = $('<div>').addClass('icon').appendTo(this.faceElement);
            this.textElement = $('<div>').addClass('text').appendTo(this.faceElement);
            this.faceElement.clear();
            this.itemsElement = $('<div>').addClass('items-container').hide().appendTo(this.element);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.glyphElement
                .click((evt) => {
                item.expanded = !item.expanded;
                evt.stopPropagation();
            });
            this.faceElement
                .click(() => {
                this.selected = true;
                this.onClick();
            });
        }
        _onAddItem(item) {
            item.level = this.level + 1;
            item._parent = this;
            this.itemsElement.append(item.element);
            item._updateGlyph();
        }
        _onRemoveItem(item) {
            item._parent = null;
            item.element.remove();
        }
        _updateGlyph() {
            if (this.hasItems) {
                if (this.expanded) {
                    if (TreeItem.globalCollapseGlyph) {
                        this.glyph = TreeItem.globalCollapseGlyph(this);
                    }
                    else {
                        if (this.treeView && this.treeView.defaultGlyphCollapse) {
                            if (this.selected && this.treeView.defaultGlyphCollapseSelected)
                                this.glyph = this.treeView.defaultGlyphCollapseSelected.clone();
                            else
                                this.glyph = this.treeView.defaultGlyphCollapse.clone();
                        }
                        else {
                            this.glyph = latte.Glyph.collapse;
                        }
                    }
                }
                else {
                    if (TreeItem.globalExpandGlyph) {
                        this.glyph = TreeItem.globalExpandGlyph(this);
                    }
                    else {
                        if (this.treeView && this.treeView.defaultGlyphExpand) {
                            if (this.selected && this.treeView.defaultGlyphExpandSelected)
                                this.glyph = this.treeView.defaultGlyphExpandSelected.clone();
                            else
                                debugger;
                            this.glyph = this.treeView.defaultGlyphExpand.clone();
                        }
                        else {
                            this.glyph = latte.Glyph.expand;
                        }
                    }
                }
            }
        }
        deleteFromParent() {
            if (this.parent) {
                this.parent.items.remove(this);
            }
            else {
                if (this.treeView) {
                    this.treeView.items.remove(this);
                }
                else {
                    throw new latte.InvalidCallEx();
                }
            }
        }
        onClick() {
            this.click.raise();
        }
        onLoadItems() {
            this.loadItems.raise();
        }
        onSelectedChanged() {
            this.selectedChanged.raise();
            if (this.selectedIcon) {
                if (this.selected) {
                    this.selectedIcon.appendTo(this.iconElement.empty());
                }
                else {
                    this.icon.appendTo(this.iconElement.empty());
                }
            }
            this._updateGlyph();
        }
        reportItemsLoaded() {
            var tree = this.treeView;
            if (tree instanceof latte.TreeView) {
                tree.onItemItemsLoaded(this);
            }
        }
        topParent() {
            if (latte._undef(this.parent)) {
                return this;
            }
            else {
                return this.parent.topParent();
            }
        }
        get expandOnSelect() {
            return this._expandOnSelect;
        }
        set expandOnSelect(value) {
            if (typeof value != 'boolean')
                throw new latte.InvalidArgumentEx('value');
            this._expandOnSelect = value;
        }
        get expanded() {
            return this._expanded;
        }
        set expanded(value) {
            if (this.hasItems) {
                if (!latte._isBoolean(value))
                    throw new latte.InvalidArgumentEx('value');
                this._expanded = value;
                if (value) {
                    this.itemsElement.show();
                    this.onLoadItems();
                }
                else {
                    this.itemsElement.hide();
                }
                this._updateGlyph();
            }
        }
        get glyph() {
            return this._glyph;
        }
        set glyph(value) {
            this.glyphElement.empty().append(value.element);
            this._glyph = value;
        }
        get hasItems() {
            return this.items.length > 0 || (latte._isArray(this.loadItems.handlers) && this.loadItems.handlers.length > 0);
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            if (!(value instanceof latte.IconItem))
                throw new latte.InvalidArgumentEx('value');
            this._icon = value;
            value.appendTo(this.iconElement.empty());
        }
        get level() {
            return this._level;
        }
        set level(value) {
            this._level = value;
            this.levelElement.width(value * 16);
        }
        get parent() {
            return this._parent;
        }
        get path() {
            var r = [];
            var item = this;
            while (item != null) {
                r.push(item.text);
                item = item.parent;
            }
            r.reverse();
            return "/" + r.join("/");
        }
        get selected() {
            return this._selected;
        }
        set selected(value) {
            var changed = value !== this._selected;
            this._selected = value;
            if (value) {
                var tv = this.treeView;
                if (tv) {
                    var tabOf = (len) => {
                        var s = '';
                        for (var i = 0; i < len; i++)
                            s += '-';
                        return s;
                    };
                    var unselect = (item, tab = 0) => {
                        if (item !== this && item.selected) {
                            item.selected = false;
                        }
                        for (var i = 0; i < item.items.length; i++) {
                            unselect(item.items[i], tab + 1);
                        }
                    };
                    for (var i = 0; i < tv.items.length; i++) {
                        unselect(tv.items[i]);
                    }
                }
                this.faceElement.addClass('selected');
                if (this.expandOnSelect && !this.expanded) {
                    this.expanded = true;
                }
                if (tv) {
                    tv.informSelectedItem(this);
                }
            }
            else {
                this.faceElement.removeClass('selected');
            }
            if (changed) {
                this.onSelectedChanged();
            }
        }
        get selectedIcon() {
            return this._selectedIcon;
        }
        set selectedIcon(value) {
            if (!(value instanceof latte.IconItem))
                throw new latte.InvalidArgumentEx('value');
            this._selectedIcon = value;
            if (this.selected) {
                value.appendTo(this.iconElement.empty());
            }
        }
        get text() {
            return this.textElement.html();
        }
        set text(value) {
            this.textElement.html(value);
        }
        get treeView() {
            var t = this.element.parents('.latte-view.tree');
            if (t.length) {
                return t.data('instance');
            }
            else {
                return null;
            }
        }
    }
    TreeItem.globalExpandGlyph = null;
    TreeItem.globalCollapseGlyph = null;
    latte.TreeItem = TreeItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ExplorerTreeItem extends latte.TreeItem {
        constructor() {
            super();
            this._record = null;
        }
        get record() {
            return this._record;
        }
        set record(value) {
            this._record = value;
        }
    }
    latte.ExplorerTreeItem = ExplorerTreeItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SplitView extends latte.View {
        constructor() {
            super();
            this._draggingSplit = latte.Direction.NONE;
            this._sensitivity = 5;
            this._sideSize = 200;
            this._sideVisible = true;
            this._splitterSize = 1;
            this.element.addClass('split');
            this.element.mousemove((e) => { this._onMouseMove(e); });
            this.element.mouseup((e) => { this._onMouseUp(e); });
            this.element.mousedown((e) => { this._onMouseDown(e); });
            this.sideWrap = new latte.View();
            this.sideWrap.addClass('side');
            this.sideWrap.appendTo(this.element);
            this.splitterElement = $('<div>').addClass('splitter').appendTo(this.element);
            this._side = latte.Side.AUTO;
        }
        _onMouseDown(e) {
            var sensor = this.splitterElement.rectangle().inflate(this.sensitivity, this.sensitivity);
            if (sensor.contains(e.pageX, e.pageY)) {
                if (this.side === latte.Side.TOP || this.side === latte.Side.BOTTOM) {
                    this._draggingSplit = latte.Direction.VERTICAL;
                }
                else {
                    this._draggingSplit = latte.Direction.HORIZONTAL;
                }
                latte.UiElement.disableTextSelection(this.element);
                e.stopPropagation();
                return false;
            }
            else {
                this._draggingSplit = latte.Direction.NONE;
            }
            return true;
        }
        _onMouseMove(e) {
            var sensor = this.splitterElement.rectangle().inflate(this.sensitivity, this.sensitivity);
            if (this._draggingSplit === latte.Direction.NONE) {
                if (sensor.contains(e.pageX, e.pageY)) {
                    if (this.side === latte.Side.TOP || this.side === latte.Side.BOTTOM) {
                        this.element.css('cursor', 'ns-resize');
                    }
                    else {
                        this.element.css('cursor', 'ew-resize');
                    }
                }
                else {
                    this.element.css('cursor', 'default');
                }
            }
            else {
                var rect = this.element.rectangle();
                switch (this.side) {
                    case latte.Side.AUTO:
                    case latte.Side.LEFT:
                        this.sideSize = e.pageX - rect.left;
                        break;
                    case latte.Side.RIGHT:
                        this.sideSize = rect.right - e.pageX;
                        break;
                    case latte.Side.TOP:
                        this.sideSize = e.pageY - rect.top;
                        break;
                    case latte.Side.BOTTOM:
                        this.sideSize = rect.bottom - e.pageY;
                        break;
                    default:
                        throw new latte.InvalidCallEx();
                }
            }
        }
        _onMouseUp(e) {
            if (this._draggingSplit !== latte.Direction.NONE) {
                latte.UiElement.enableTextSelection(this.element);
            }
            this._draggingSplit = latte.Direction.NONE;
        }
        onLayout() {
            super.onLayout();
            var side = this.side;
            var sp = this.sideVisible ? this.splitterSize : 0;
            var size = this.sideSize > 1 ?
                this.sideSize :
                (side === latte.Side.TOP || side === latte.Side.BOTTOM ?
                    this.sideSize * this.element.height() :
                    this.sideSize * this.element.width());
            var start = {
                left: '',
                top: '',
                bottom: '',
                right: '',
                width: '',
                height: ''
            };
            if (!this.sideVisible) {
                size = 0;
            }
            var sideCss = $.extend({}, start);
            var splitterCss = $.extend({}, start);
            var containerCss = $.extend({}, start);
            if (side === latte.Side.TOP || side === latte.Side.BOTTOM) {
                sideCss.left = 0;
                sideCss.right = 0;
                sideCss.height = size;
                splitterCss.left = 0;
                splitterCss.right = 0;
                splitterCss.height = sp;
                containerCss.left = 0;
                containerCss.right = 0;
            }
            else {
                sideCss.top = 0;
                sideCss.bottom = 0;
                sideCss.width = size;
                splitterCss.top = 0;
                splitterCss.bottom = 0;
                splitterCss.width = sp;
                containerCss.top = 0;
                containerCss.bottom = 0;
            }
            switch (this.side) {
                case latte.Side.AUTO:
                case latte.Side.LEFT:
                    sideCss.left = 0;
                    sideCss.right = 'auto';
                    splitterCss.left = size;
                    containerCss.left = size - sp + 1;
                    containerCss.right = 0;
                    break;
                case latte.Side.RIGHT:
                    sideCss.right = 0;
                    sideCss.left = 'auto';
                    splitterCss.right = size;
                    containerCss.right = size + sp;
                    containerCss.top = 0;
                    break;
                case latte.Side.TOP:
                    sideCss.top = 0;
                    sideCss.bottom = 'auto';
                    splitterCss.top = size;
                    containerCss.top = size - sp;
                    containerCss.bottom = 0;
                    break;
                case latte.Side.BOTTOM:
                    sideCss.bottom = 0;
                    sideCss.top = 'auto';
                    splitterCss.bottom = size;
                    containerCss.bottom = size + sp;
                    containerCss.top = 0;
                    break;
                default:
                    throw new latte.InvalidCallEx();
            }
            this.sideWrap.element.css(sideCss);
            this.splitterElement.css(splitterCss);
            this.container.css(containerCss);
            this.sideWrap.onLayout();
        }
        onSideVisibleChanged() {
            if (this._sideVisibleChanged) {
                this._sideVisibleChanged.raise();
            }
            if (this.sideVisible) {
                this.sideWrap.element.show();
                this.splitterElement.show();
            }
            else {
                this.sideWrap.element.hide();
                this.splitterElement.hide();
            }
            this.onLayout();
        }
        get sideVisibleChanged() {
            if (!this._sideVisibleChanged) {
                this._sideVisibleChanged = new latte.LatteEvent(this);
            }
            return this._sideVisibleChanged;
        }
        get sensitivity() {
            return this._sensitivity;
        }
        set sensitivity(value) {
            this._sensitivity = value;
        }
        get side() {
            return this._side;
        }
        set side(value) {
            this._side = value;
            this.onLayout();
        }
        get sideSize() {
            return this._sideSize;
        }
        set sideSize(value) {
            this._sideSize = value;
            this.onLayout();
        }
        get sideView() {
            return this.sideWrap.view;
        }
        set sideView(value) {
            this.sideWrap.view = value;
        }
        get sideVisible() {
            return this._sideVisible;
        }
        set sideVisible(value) {
            let changed = value !== this._sideVisible;
            this._sideVisible = value;
            if (changed) {
                this.onSideVisibleChanged();
            }
        }
        get splitterSize() {
            return this._splitterSize;
        }
        set splitterSize(value) {
            this._splitterSize = value;
            this.onLayout();
        }
    }
    latte.SplitView = SplitView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ExplorerView extends latte.SplitView {
        constructor(rootItem = null) {
            super();
            this.ignorePageChange = false;
            this.detailViewItem = null;
            this.loadTimes = [];
            this.nextLoadTimePrediction = 800;
            this._listSelectedItem = null;
            this.addClass('explorer');
            this.sideSize = 300;
            let treeSide = new latte.ToolbarView();
            this._treeViewToolbar = treeSide.toolbar;
            treeSide.view = this.treeView;
            this.detailViewToolbarView.view = this.detailView;
            this.detailViewToolbar.items.add(this.btnSaveDetail);
            this.detailViewToolbar.sideItems.add(this.btnRemoveDetail);
            this.detailViewToolbar.sideItems.add(this.btnDetailOptions);
            let listSide = this.childrenSide;
            this._listViewToolbar = listSide.toolbar;
            listSide.view = this.listView;
            this.listView.element.append(this.loadBar);
            this.listViewToolbar.sideItems.add(this.btnHideDetailBar);
            this.listViewToolbar.sideItems.add(this.paginator);
            this.listViewToolbar.sideItems.add(this.btnRefresh);
            this.paginator.visible = false;
            this.detailSplitView.sideView = this.detailViewToolbarView;
            this.detailSplitView.view = listSide;
            this.sideView = treeSide;
            this.view = this.detailSplitView;
            this.treeViewToolbar.visible = false;
            if (rootItem) {
                this.addRootItem(rootItem);
            }
        }
        addLoadingTime(time) {
            this.loadTimes.push(time.totalMilliseconds);
            if (this.loadTimes.length > 100) {
                this.loadTimes.pop();
            }
            let sum = 0;
            this.loadTimes.forEach((t) => sum += t);
            this.nextLoadTimePrediction = Math.round(sum / this.loadTimes.length);
        }
        addTreeItemHandlers(treeItem) {
            var item = treeItem.tag;
            if (item.loadsChildrenFolders) {
                treeItem.loadItems.add(() => {
                    this.loadChildrenOf(item, () => {
                        this.treeViewChildrenOf(item, treeItem);
                        if (treeItem.selected) {
                            this.childrenViewOf(item);
                        }
                        treeItem.reportItemsLoaded();
                    });
                });
            }
            treeItem.selectedChanged.add(() => {
                if (treeItem.selected) {
                    this._treeSelectedItem = item;
                    this.detailViewOf(item);
                    if (item.childrenLoaded) {
                        this.paginator.visible = item.childrenPages > 1;
                        this.childrenViewOf(item);
                    }
                    else if (!item.loadsChildrenFolders) {
                        this.loadChildrenOf(item, () => {
                            if (treeItem.selected) {
                                this.paginator.visible = item.childrenPages > 1;
                                this.childrenViewOf(item);
                            }
                        });
                    }
                }
            });
            item.childrenChanged.add(() => {
                this.loadChildrenOf(item, () => {
                    this.treeViewChildrenOf(item, treeItem);
                    if (treeItem.selected) {
                        this.childrenViewOf(item);
                    }
                    treeItem.reportItemsLoaded();
                });
            });
            item.childrenPagesChanged.add(() => {
                this.paginator.pages = item.childrenPages;
            });
        }
        childrenViewOf(item) {
            let view = item.getChildrenView();
            this.listViewToolbar.items.clear();
            this.listViewToolbar.items.addArray(item.getItems());
            if (view) {
                view.explorerItem = item;
                this.childrenSide.view = view;
                view.onShowChildren();
            }
            else {
                this.childrenSide.view = this.listView;
                this.listViewChildrenOf(item);
            }
        }
        listViewChildrenOf(item) {
            this.listView.columnHeaders.clear();
            this.listView.columnHeaders.addArray(item.getColumnHeaders());
            this.ignorePageChange = true;
            this.paginator.page = item.childrenPage;
            this.paginator.pages = item.childrenPages;
            this.ignorePageChange = false;
            this.listView.items.clear();
            for (let i = 0; i < item.children.length; i++) {
                let gitem = item.children[i];
                let litem = gitem.createListViewItem();
                litem.listView = this.listView;
                litem.tag = gitem;
                this.addListViewItemHandlers(litem);
                this.listView.items.add(litem);
            }
        }
        loadChildrenOf(item, callback) {
            let loaded = false;
            let preventiveAnimationFinished = false;
            let barFinihsed = false;
            let finishBar = () => {
                bar.animate({
                    width: '100%'
                }, 50, null, () => {
                    barFinihsed = true;
                    bar.fadeOut(() => {
                        bar.css('display', 'none');
                        bar.removeClass('visible');
                    });
                });
            };
            this.listView.items.clear();
            let bar = $(this.loadBar);
            let started = latte.DateTime.now;
            bar.addClass('visible');
            bar.show();
            bar.css('width', '1px');
            bar.animate({
                width: '90%'
            }, this.nextLoadTimePrediction, null, () => {
                preventiveAnimationFinished = true;
                if (loaded) {
                    finishBar();
                }
            });
            item.loadChildren(() => {
                loaded = true;
                this.addLoadingTime(latte.DateTime.now.subtractDate(started));
                if (preventiveAnimationFinished) {
                    finishBar();
                }
                callback();
            });
        }
        treeViewChildrenOf(item, treeItem) {
            treeItem.items.clear();
            for (var i = 0; i < item.children.length; i++) {
                var gitem = item.children[i];
                if (gitem.loadsChildren) {
                    var gitemTree = gitem.createTreeItem();
                    this.addTreeItemHandlers(gitemTree);
                    treeItem.items.add(gitemTree);
                }
            }
        }
        addListViewItemHandlers(listItem) {
            var item = listItem.tag;
            listItem.selectedChanged.add(() => {
                if (listItem.selected) {
                    this._listSelectedItem = item;
                    this.detailViewOf(item);
                }
            });
        }
        detailViewOf(item) {
            let view = item ? item.getDetailView() : null;
            if (view) {
                view.unsavedChangesChanged.add(() => {
                    if (!view.unsavedChanges) {
                        item.syncUI();
                    }
                });
            }
            let options = item.getDetailViewOptions();
            this.btnDetailOptions.items.clear();
            if (options instanceof Array && options.length > 0) {
                this.btnDetailOptions.items.addArray(options);
                this.btnDetailOptions.dropdownVisible = false;
                this.btnDetailOptions.visible = true;
            }
            else {
                this.btnDetailOptions.visible = false;
            }
            this.setDetailView(view);
            if (item) {
                this.btnRemoveDetail.visible = false;
            }
            this.detailViewItem = item;
        }
        addRootItem(item) {
            item.explorer = this;
            var node = item.createTreeItem();
            this.addTreeItemHandlers(node);
            this.treeView.items.add(node);
            if (this.treeView.items.length == 1) {
                node.selected = true;
            }
        }
        refreshList() {
            var treeItem = this.treeView.selectedItem;
            var item = treeItem.tag;
            item.childrenPage = this.paginator.page;
            item.onChildrenChanged();
        }
        setDetailView(view) {
            if (this.detailView.view) {
                let old = this.detailView.view;
                this.detailView.view = null;
                old.element.remove();
            }
            if (view) {
                this.detailView.view = view;
                this.btnSaveDetail.enabled = false;
                view.unsavedChangesChanged.add(() => {
                    this.btnSaveDetail.enabled = view.unsavedChanges;
                });
                view.isSavingChangesChanged.add(() => {
                    this.btnSaveDetail.text = view.isSavingChanges ? latte.strings.saving : latte.strings.save;
                    this.btnSaveDetail.enabled = !view.isSavingChanges && view.unsavedChanges;
                });
            }
        }
        get btnDetailOptions() {
            if (!this._btnDetailOptions) {
                let lazy = this._btnDetailOptions = new latte.ButtonItem(null, latte.LinearIcon.menu);
            }
            return this._btnDetailOptions;
        }
        get btnHideDetailBar() {
            if (!this._btnHideDetailBar) {
                let lazy = this._btnHideDetailBar = new latte.ButtonItem(null, latte.IconItem.sidebarRight(), () => this.detailVisible = !this.detailVisible);
                lazy.visible = false;
            }
            return this._btnHideDetailBar;
        }
        get btnSaveDetail() {
            if (!this._btnSaveDetail) {
                this._btnSaveDetail = new latte.ButtonItem(latte.strings.save, latte.IconItem.saveIcon(), () => {
                    if (this.detailView.view) {
                        this.detailView.view.saveChanges();
                    }
                });
                this._btnSaveDetail.enabled = false;
            }
            return this._btnSaveDetail;
        }
        get btnRefresh() {
            if (!this._btnRefresh) {
                this._btnRefresh = new latte.ButtonItem(null, latte.IconItem.refreshIcon(), () => {
                    this.refreshList();
                });
            }
            return this._btnRefresh;
        }
        get btnRemoveDetail() {
            if (!this._btnRemoveDetail) {
                this._btnRemoveDetail = new latte.ButtonItem(null, latte.IconItem.standard(9, 1), () => {
                    latte.DialogView.alert(latte.sprintf(latte.strings.confirmDeleteS, this.listSelectedItem.getName()), latte.strings.cantBeUndone, [
                        new latte.ButtonItem(latte.strings.cancel),
                        new latte.ButtonItem(latte.sprintf(latte.strings.yesDeleteS, this.listSelectedItem.getName()), null, () => {
                            if (this.listSelectedItem instanceof latte.ExplorerItemDataRecord) {
                                var r = this.listSelectedItem.record;
                                r.remove(() => {
                                    this.detailViewOf(null);
                                    if (this.treeSelectedItem) {
                                        this.treeSelectedItem.onChildrenChanged();
                                    }
                                });
                            }
                        })
                    ]);
                });
            }
            return this._btnRemoveDetail;
        }
        get childrenSide() {
            if (!this._childrenSide) {
                this._childrenSide = new latte.ToolbarView();
            }
            return this._childrenSide;
        }
        get detailSplitView() {
            if (!this._detailSplitView) {
                this._detailSplitView = new latte.SplitView();
                this._detailSplitView.side = latte.Side.RIGHT;
                this._detailSplitView.sideSize = 400;
            }
            return this._detailSplitView;
        }
        get detailViewToolbarView() {
            if (!this._detailViewToolbarView) {
                this._detailViewToolbarView = new latte.ToolbarView();
            }
            return this._detailViewToolbarView;
        }
        get detailViewToolbar() {
            return this.detailViewToolbarView.toolbar;
        }
        get treeViewToolbar() {
            return this._treeViewToolbar;
        }
        get listSelectedItem() {
            return this._listSelectedItem;
        }
        get listViewToolbar() {
            return this._listViewToolbar;
        }
        get loadBar() {
            if (!this._loadBar) {
                this._loadBar = document.createElement('div');
                this._loadBar.className = 'load-bar';
            }
            return this._loadBar;
        }
        get detailView() {
            if (!this._detailView) {
                this._detailView = new latte.View();
                this._detailView.addClass('explorer-detail-view');
            }
            return this._detailView;
        }
        get listView() {
            if (!this._listView) {
                this._listView = new latte.ListView();
                this._listView.columnHeaders.add(new latte.ColumnHeader(''));
                this._listView.focusable = true;
                this._listView.focused.add(() => {
                    if (this._listSelectedItem && this._listSelectedItem != this.detailViewItem) {
                        this.detailViewOf(this._listSelectedItem);
                    }
                });
            }
            return this._listView;
        }
        get paginator() {
            if (!this._paginator) {
                this._paginator = new latte.PaginationItem();
                this._paginator.pageChanged.add(() => {
                    if (!this.ignorePageChange) {
                        this.refreshList();
                    }
                });
            }
            return this._paginator;
        }
        get treeSelectedItem() {
            return this._treeSelectedItem;
        }
        get treeView() {
            if (!this._treeView) {
                this._treeView = new latte.TreeView();
                this._treeView.focusable = true;
                this._treeView.focused.add(() => {
                    if (this._treeSelectedItem && this._treeSelectedItem != this.detailViewItem) {
                        this.detailViewOf(this._treeSelectedItem);
                    }
                });
            }
            return this._treeView;
        }
        get detailVisible() {
            return this.detailSplitView.sideVisible;
        }
        set detailVisible(value) {
            this.detailSplitView.sideVisible = value;
        }
    }
    latte.ExplorerView = ExplorerView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Action {
        constructor(text = null, icon = null, execute = null, description = null) {
            this._buttons = [];
            this._enabled = true;
            this.execute = new latte.LatteEvent(this);
            this.actions = new latte.Collection();
            this._buttons = [];
            if (text) {
                this.text = text;
            }
            if (icon) {
                this.icon = icon;
            }
            if (execute) {
                this.execute.add(execute);
            }
            if (description) {
                this.description = description;
            }
        }
        get checked() {
            return this._checked;
        }
        set checked(value) {
            this._checked = value;
            for (var i = 0; i < this._buttons.length; i++)
                this._buttons[i].checked = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
            for (var i = 0; i < this._buttons.length; i++)
                this._buttons[i].description = value;
        }
        get enabled() {
            return this._enabled;
        }
        set enabled(value) {
            this._enabled = value;
            for (var i = 0; i < this._buttons.length; i++)
                this._buttons[i].enabled = value;
        }
        getButton() {
            var b = new latte.ButtonItem();
            var a = this;
            this._buttons.push(b);
            b.text = this.text;
            b.description = this.description;
            b.enabled = this.enabled;
            b.click.add(() => { a.execute.raise(); });
            if (this.icon)
                b.icon = this.icon.clone();
            return b;
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            this._icon = value;
            for (var i = 0; i < this._buttons.length; i++)
                this._buttons[i].icon = value.clone();
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this._text = value;
            for (var i = 0; i < this._buttons.length; i++)
                this._buttons[i].text = value;
        }
    }
    latte.Action = Action;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let DateSelectionMode;
    (function (DateSelectionMode) {
        DateSelectionMode[DateSelectionMode["DAY"] = 0] = "DAY";
        DateSelectionMode[DateSelectionMode["MANUAL"] = 1] = "MANUAL";
        DateSelectionMode[DateSelectionMode["MONTH"] = 2] = "MONTH";
        DateSelectionMode[DateSelectionMode["WEEK"] = 3] = "WEEK";
        DateSelectionMode[DateSelectionMode["WORKWEEK"] = 4] = "WORKWEEK";
    })(DateSelectionMode = latte.DateSelectionMode || (latte.DateSelectionMode = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    let Direction;
    (function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
        Direction[Direction["NONE"] = 2] = "NONE";
    })(Direction = latte.Direction || (latte.Direction = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DragDropReorder {
        constructor(container, items, sorted = null) {
            this._container = null;
            this._flowDirection = latte.Direction.VERTICAL;
            if (!container)
                throw "Container can't be null";
            if (!items)
                throw "Items can't be null";
            this._container = container;
            this._items = items;
            this.items.addItem.add(item => this.onAddItem(item));
            this.container.addEventListener('mousemove', e => this.mouseMove(e));
            if (sorted) {
                this.sorted.add(sorted);
            }
        }
        handleBeingDragged(item) {
            if (!item.beingDragged) {
                return;
            }
            if (!this._spacer) {
                let itemBounds = latte.Rectangle.fromElement(item.raw);
                this._spacer = document.createElement('div');
                this._spacer.classList.add('drag-drop-spacer');
                this._spacer.style.width = itemBounds.width + 'px';
                this._spacer.style.height = itemBounds.height + 'px';
                item.element.after(this._spacer);
                this.onSpacerCreated();
            }
        }
        handleDrop(item) {
            item.element.insertAfter(this._spacer);
            this._spacer.remove();
            this._spacer = null;
            this.correctCollection();
            this.onSorted();
        }
        itemAt(x, y) {
            for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                let b = latte.Rectangle.fromElement(item.raw);
                if (b.contains(x, y)) {
                    return item;
                }
            }
            return null;
        }
        correctCollection() {
            let children = this.container.childNodes;
            let correct = [];
            for (let i = 0; i < children.length; i++) {
                let instance = $(children[i]).data('instance');
                if (instance) {
                    correct.push(instance);
                }
            }
            this.items.correctItems(correct);
        }
        mouseMove(e) {
            if (!(latte.UiElement.dragging && latte.UiElement.draggingElement instanceof latte.Item)) {
                return;
            }
            let hit = this.itemAt(e.clientX, e.clientY);
            if (hit) {
                let b = latte.Rectangle.fromElement(hit.raw);
                let comparer = this.flowDirection == latte.Direction.VERTICAL ?
                    e.clientY > b.center.y : e.clientX > b.center.x;
                if (comparer) {
                    hit.element.after(this._spacer);
                }
                else {
                    this._spacer.remove();
                    this.container.insertBefore(this._spacer, hit.raw);
                }
            }
        }
        onAddItem(item) {
            item.dragSource = item.element;
            item.hideWhileDragging = true;
            item.beingDraggedChanged.add(() => this.handleBeingDragged(item));
            item.dropped.add(() => this.handleDrop(item));
        }
        onSorted() {
            if (this._sorted) {
                this._sorted.raise();
            }
        }
        onSpacerCreated() {
            if (this._spacerCreated) {
                this._spacerCreated.raise();
            }
        }
        get sorted() {
            if (!this._sorted) {
                this._sorted = new latte.LatteEvent(this);
            }
            return this._sorted;
        }
        get spacerCreated() {
            if (!this._spacerCreated) {
                this._spacerCreated = new latte.LatteEvent(this);
            }
            return this._spacerCreated;
        }
        get container() {
            return this._container;
        }
        get flowDirection() {
            return this._flowDirection;
        }
        set flowDirection(value) {
            this._flowDirection = value;
        }
        get items() {
            return this._items;
        }
        get spacer() {
            return this._spacer;
        }
    }
    latte.DragDropReorder = DragDropReorder;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Navigation {
        static staticConstructor() {
            if (!latte._undef(window.location.hash))
                Navigation.hash = window.location.hash;
            Navigation.hashChanged = new latte.LatteEvent(Navigation);
            Navigation.hashChanged.handlerAdded.add(() => {
                Navigation.onHashChanged(Navigation._hash);
            });
            if (!latte._undef(window.onhashchange)) {
                $(window).bind('hashchange', () => {
                    Navigation.hash = window.location.hash;
                });
            }
        }
        static get hash() {
            return Navigation._hash;
        }
        static set hash(value) {
            Navigation.setHash(value, false);
        }
        static setHash(value, silent = false) {
            if (latte._isString(value) && value.length > 0 && value.charAt(0) == '#')
                value = value.substr(1);
            var change = value != Navigation._hash;
            Navigation._hash = value;
            if (!latte._undef(window.location.hash)) {
                Navigation._lock = true;
                window.location.hash = value;
                Navigation._lock = false;
            }
            var path = value.split('/');
            if (path.length > 0 && !path[0])
                path.shift();
            Navigation.path = path;
            if (change && !(silent === true))
                Navigation.onHashChanged(value);
            return Navigation;
        }
        static onHashChanged(hash) {
            if (Navigation.hashChanged)
                Navigation.hashChanged.raise(hash);
        }
    }
    Navigation.path = [];
    latte.Navigation = Navigation;
    $(() => { Navigation.staticConstructor(); });
})(latte || (latte = {}));
var latte;
(function (latte) {
    let Side;
    (function (Side) {
        Side[Side["AUTO"] = 1] = "AUTO";
        Side[Side["BOTTOM"] = 4] = "BOTTOM";
        Side[Side["LEFT"] = 8] = "LEFT";
        Side[Side["RIGHT"] = 16] = "RIGHT";
        Side[Side["TOP"] = 32] = "TOP";
    })(Side = latte.Side || (latte.Side = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    let Transition;
    (function (Transition) {
        Transition[Transition["FADE"] = 0] = "FADE";
        Transition[Transition["SWIPE_FORWARD"] = 1] = "SWIPE_FORWARD";
    })(Transition = latte.Transition || (latte.Transition = {}));
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ZIndex {
        static bringToFront(element) {
            if (element instanceof jQuery)
                element = element.get(0);
            this.elements.push(element);
            this.updateZIndexes();
        }
        static removeElement(element) {
            var arr = [];
            if (element instanceof jQuery)
                element = element.get(0);
            $(element).css('zIndex', '');
            for (var i = 0; i < this.elements.length; i++)
                if (this.elements[i] !== element)
                    arr.push(this.elements[i]);
            this.elements = arr;
            this.updateZIndexes();
        }
        static updateZIndexes() {
            var max = $(':not(.latte-overlay.menu)').length - this.elements.length;
            for (var i = 0; i < this.elements.length; i++) {
                $(this.elements[i]).css('zIndex', max++);
            }
        }
    }
    ZIndex.elements = [];
    latte.ZIndex = ZIndex;
})(latte || (latte = {}));
(function ($) {
    $['fn'].rectangle = function (rect, relative) {
        var offset = relative !== true ? this.offset() : this.position();
        if (!offset)
            offset = { top: 0, left: 0 };
        if (rect instanceof latte.Rectangle) {
            return this.css({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });
        }
        else {
            return new latte.Rectangle(offset.left, offset.top, this.outerWidth(), this.outerHeight());
        }
    };
    $['fn'].innerRectangle = function (rect, relative) {
        var offset = relative !== true ? this.offset() : this.position();
        if (!offset)
            offset = { top: 0, left: 0 };
        if (rect instanceof latte.Rectangle) {
            return this.css({
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height
            });
        }
        else {
            return new latte.Rectangle(offset.left, offset.top, this.width(), this.height());
        }
    };
})(jQuery);
$.fn.clear = function () { return this.append($('<div>').css({ 'clear': 'both' })); };
$.fn.instance = function () { return this.data('instance'); };
var latte;
(function (latte) {
    class IconItem extends latte.Item {
        constructor() {
            super();
            this._name = '';
            this._size = 16;
            this.element.addClass('icon');
            if (IconItem.defaultUrl !== null)
                this.url = IconItem.defaultUrl;
            this.size = this._size;
        }
        static get defaultUrl() {
            return latte._latteUrl() + '/releases/latte.ui/support/imgs/std-icons.png';
        }
        static empty(size = 16) {
            var icon = new IconItem();
            icon.size = size;
            icon.url = null;
            return icon;
        }
        static standard(u, v, size = 16) {
            var icon = new IconItem();
            icon.u = u;
            icon.v = v;
            icon.size = size;
            return icon;
        }
        static fileIcon() {
            return latte.LinearIcon.file_empty;
        }
        static folderIcon() {
            return latte.LinearIcon.book;
        }
        static homeIcon() {
            return latte.LinearIcon.home;
        }
        static newIcon() {
            return latte.LinearIcon.file_add;
        }
        static saveIcon() {
            return latte.LinearIcon.cloud_upload;
        }
        static refreshIcon() {
            return latte.LinearIcon.sync;
        }
        static sidebarLeft() {
            return IconItem.sidebar_left_getter();
        }
        static sidebarRight() {
            return IconItem.sidebar_right_getter();
        }
        static editIcon() {
            return latte.LinearIcon.pencil;
        }
        static deleteIcon() {
            return latte.LinearIcon.cross;
        }
        clone() {
            var icon = new IconItem();
            icon.name = this.name;
            icon.size = this.size;
            icon.url = this.url;
            icon.x = this.x;
            icon.y = this.y;
            return icon;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get size() {
            return this._size;
        }
        set size(value) {
            this.element.width(value).height(value);
            this._size = value;
            if (latte._isNumber(this.u))
                this.u = this.u;
            if (latte._isNumber(this.v))
                this.v = this.v;
            this.addClass('size-' + value);
        }
        get u() {
            return this._u;
        }
        set u(value) {
            this._u = value;
            this.x = (value - 1) * this.size;
        }
        get url() {
            return this._url;
        }
        set url(value) {
            if (latte._isString(value) && value.length > 0) {
                this.element.css({
                    backgroundImage: 'url(' + value + ')',
                    backgroundRepeat: 'no-repeat'
                });
            }
            else {
                this.element.css({
                    backgroundImage: '',
                    backgroundRepeat: ''
                });
            }
            this._url = value;
        }
        get v() {
            return this._v;
        }
        set v(value) {
            this._v = value;
            this.y = (value - 1) * this.size;
        }
        get x() {
            return this._x;
        }
        set x(value) {
            this._x = value;
            this.element.css('background-position', (this._x !== null ? '-' + this._x : '0') + "px " + (this._y !== null ? '-' + this._y : '0') + "px");
        }
        get y() {
            return this._y;
        }
        set y(value) {
            this._y = value;
            this.element.css('background-position', (this._x !== null ? '-' + this._x : '0') + "px " + (this._y !== null ? '-' + this._y : '0') + "px");
        }
    }
    IconItem.sidebar_left_getter = () => latte.LinearIcon.map;
    IconItem.sidebar_right_getter = () => latte.LinearIcon.map;
    latte.IconItem = IconItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ColorIconItem extends latte.IconItem {
        constructor(color, size = 16) {
            super();
            this._color = null;
            this.u = 1;
            this.v = 1;
            this.size = size;
            this.color = color;
        }
        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
            this.css('background', value.toString());
        }
    }
    latte.ColorIconItem = ColorIconItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Glyph extends latte.IconItem {
        constructor() {
            super();
            this.element.addClass('glyph');
        }
        static get defaultUrl() {
            return latte._latteUrl() + '/res/imgs/glyphs.png';
        }
        static _byLocation(u, v, name) {
            var g = new Glyph();
            g.size = 16;
            g.url = Glyph.defaultUrl;
            g.u = u;
            g.v = v;
            g.name = name || '';
            return g;
        }
        static get add() {
            return Glyph._byLocation(2, 10, 'add');
        }
        static get check() {
            return Glyph._byLocation(2, 5, 'check');
        }
        static get checked() {
            return Glyph._byLocation(3, 4, 'checked');
        }
        static get checkedRadio() {
            return Glyph._byLocation(4, 4, 'checked');
        }
        static get chevron() {
            return Glyph._byLocation(2, 7, 'chevron');
        }
        static get collapse() {
            return Glyph._byLocation(1, 3, 'collapse');
        }
        static get collapseRibbon() {
            return Glyph._byLocation(2, 8, 'collapse');
        }
        static get collapseWidget() {
            return Glyph._byLocation(2, 8, 'collapse');
        }
        static get expandWidget() {
            return Glyph._byLocation(3, 5, 'expand');
        }
        static get dismiss() {
            return Glyph._byLocation(2, 9, 'dismiss');
        }
        static get down() {
            return Glyph._byLocation(2, 2, 'down');
        }
        static get expand() {
            return Glyph._byLocation(1, 2, 'expand');
        }
        static get grip() {
            return Glyph._byLocation(2, 6, 'grip');
        }
        static get left() {
            return Glyph._byLocation(2, 4, 'left');
        }
        static get maximize() {
            return Glyph._byLocation(3, 2, 'maximize');
        }
        static get minimize() {
            return Glyph._byLocation(3, 1, 'minimize');
        }
        static get note() {
            return Glyph._byLocation(1, 4, 'note');
        }
        static get right() {
            return Glyph._byLocation(2, 3, 'right');
        }
        static get unchecked() {
            return Glyph._byLocation(3, 3, 'checked');
        }
        static get uncheckedRadio() {
            return Glyph._byLocation(4, 3, 'checked');
        }
        static get up() {
            return Glyph._byLocation(2, 1, 'up');
        }
    }
    latte.Glyph = Glyph;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ImageItem extends latte.Item {
        constructor() {
            super();
            this._autoSize = false;
            this.addClass('image');
            this.imageElement = $('<img>').appendTo(this.element);
        }
        get autoSize() {
            return this._autoSize;
        }
        set autoSize(value) {
            this._autoSize = value;
        }
        get src() {
            return this.imageElement.attr('src');
        }
        set src(value) {
            this.imageElement.attr('src', value);
        }
    }
    latte.ImageItem = ImageItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Linear {
        static get home2() { return latte.LinearIcon.byCatalog("home2"); }
        static get home() { return latte.LinearIcon.byCatalog("home"); }
        static get home3() { return latte.LinearIcon.byCatalog("home3"); }
        static get home5() { return latte.LinearIcon.byCatalog("home5"); }
        static get home4() { return latte.LinearIcon.byCatalog("home4"); }
        static get home6() { return latte.LinearIcon.byCatalog("home6"); }
        static get toothbrush() { return latte.LinearIcon.byCatalog("toothbrush"); }
        static get bathtub() { return latte.LinearIcon.byCatalog("bathtub"); }
        static get bed() { return latte.LinearIcon.byCatalog("bed"); }
        static get chair() { return latte.LinearIcon.byCatalog("chair"); }
        static get couch() { return latte.LinearIcon.byCatalog("couch"); }
        static get city() { return latte.LinearIcon.byCatalog("city"); }
        static get pencil() { return latte.LinearIcon.byCatalog("pencil"); }
        static get apartment() { return latte.LinearIcon.byCatalog("apartment"); }
        static get pencil2() { return latte.LinearIcon.byCatalog("pencil2"); }
        static get pencil3() { return latte.LinearIcon.byCatalog("pencil3"); }
        static get pen() { return latte.LinearIcon.byCatalog("pen"); }
        static get eraser() { return latte.LinearIcon.byCatalog("eraser"); }
        static get pencil5() { return latte.LinearIcon.byCatalog("pencil5"); }
        static get pencil4() { return latte.LinearIcon.byCatalog("pencil4"); }
        static get feather() { return latte.LinearIcon.byCatalog("feather"); }
        static get feather3() { return latte.LinearIcon.byCatalog("feather3"); }
        static get feather2() { return latte.LinearIcon.byCatalog("feather2"); }
        static get pen2() { return latte.LinearIcon.byCatalog("pen2"); }
        static get pen_remove() { return latte.LinearIcon.byCatalog("pen-remove"); }
        static get pen_add() { return latte.LinearIcon.byCatalog("pen-add"); }
        static get vector() { return latte.LinearIcon.byCatalog("vector"); }
        static get blog() { return latte.LinearIcon.byCatalog("blog"); }
        static get pen3() { return latte.LinearIcon.byCatalog("pen3"); }
        static get brush() { return latte.LinearIcon.byCatalog("brush"); }
        static get spray() { return latte.LinearIcon.byCatalog("spray"); }
        static get brush2() { return latte.LinearIcon.byCatalog("brush2"); }
        static get paint_roller() { return latte.LinearIcon.byCatalog("paint-roller"); }
        static get tape() { return latte.LinearIcon.byCatalog("tape"); }
        static get stamp() { return latte.LinearIcon.byCatalog("stamp"); }
        static get desk_tape() { return latte.LinearIcon.byCatalog("desk-tape"); }
        static get eye_dropper() { return latte.LinearIcon.byCatalog("eye-dropper"); }
        static get texture() { return latte.LinearIcon.byCatalog("texture"); }
        static get palette() { return latte.LinearIcon.byCatalog("palette"); }
        static get bucket() { return latte.LinearIcon.byCatalog("bucket"); }
        static get color_sampler() { return latte.LinearIcon.byCatalog("color-sampler"); }
        static get gradient() { return latte.LinearIcon.byCatalog("gradient"); }
        static get magic_wand() { return latte.LinearIcon.byCatalog("magic-wand"); }
        static get gradient2() { return latte.LinearIcon.byCatalog("gradient2"); }
        static get magnet() { return latte.LinearIcon.byCatalog("magnet"); }
        static get pencil_ruler2() { return latte.LinearIcon.byCatalog("pencil-ruler2"); }
        static get pencil_ruler() { return latte.LinearIcon.byCatalog("pencil-ruler"); }
        static get compass() { return latte.LinearIcon.byCatalog("compass"); }
        static get gun() { return latte.LinearIcon.byCatalog("gun"); }
        static get aim() { return latte.LinearIcon.byCatalog("aim"); }
        static get bottle() { return latte.LinearIcon.byCatalog("bottle"); }
        static get drop_crossed() { return latte.LinearIcon.byCatalog("drop-crossed"); }
        static get drop() { return latte.LinearIcon.byCatalog("drop"); }
        static get drop2() { return latte.LinearIcon.byCatalog("drop2"); }
        static get snow2() { return latte.LinearIcon.byCatalog("snow2"); }
        static get snow() { return latte.LinearIcon.byCatalog("snow"); }
        static get fire() { return latte.LinearIcon.byCatalog("fire"); }
        static get knife() { return latte.LinearIcon.byCatalog("knife"); }
        static get lighter() { return latte.LinearIcon.byCatalog("lighter"); }
        static get dagger() { return latte.LinearIcon.byCatalog("dagger"); }
        static get toilet_paper() { return latte.LinearIcon.byCatalog("toilet-paper"); }
        static get tissue() { return latte.LinearIcon.byCatalog("tissue"); }
        static get poop() { return latte.LinearIcon.byCatalog("poop"); }
        static get umbrella() { return latte.LinearIcon.byCatalog("umbrella"); }
        static get umbrella2() { return latte.LinearIcon.byCatalog("umbrella2"); }
        static get rain() { return latte.LinearIcon.byCatalog("rain"); }
        static get tornado() { return latte.LinearIcon.byCatalog("tornado"); }
        static get wind() { return latte.LinearIcon.byCatalog("wind"); }
        static get fan() { return latte.LinearIcon.byCatalog("fan"); }
        static get contrast() { return latte.LinearIcon.byCatalog("contrast"); }
        static get sun_small() { return latte.LinearIcon.byCatalog("sun-small"); }
        static get sun() { return latte.LinearIcon.byCatalog("sun"); }
        static get sun2() { return latte.LinearIcon.byCatalog("sun2"); }
        static get moon() { return latte.LinearIcon.byCatalog("moon"); }
        static get cloud() { return latte.LinearIcon.byCatalog("cloud"); }
        static get cloud_upload() { return latte.LinearIcon.byCatalog("cloud-upload"); }
        static get cloud_download() { return latte.LinearIcon.byCatalog("cloud-download"); }
        static get cloud_rain() { return latte.LinearIcon.byCatalog("cloud-rain"); }
        static get cloud_hailstones() { return latte.LinearIcon.byCatalog("cloud-hailstones"); }
        static get cloud_snow() { return latte.LinearIcon.byCatalog("cloud-snow"); }
        static get cloud_windy() { return latte.LinearIcon.byCatalog("cloud-windy"); }
        static get sun_wind() { return latte.LinearIcon.byCatalog("sun-wind"); }
        static get cloud_fog() { return latte.LinearIcon.byCatalog("cloud-fog"); }
        static get cloud_sun() { return latte.LinearIcon.byCatalog("cloud-sun"); }
        static get cloud_lightning() { return latte.LinearIcon.byCatalog("cloud-lightning"); }
        static get cloud_sync() { return latte.LinearIcon.byCatalog("cloud-sync"); }
        static get cloud_lock() { return latte.LinearIcon.byCatalog("cloud-lock"); }
        static get cloud_gear() { return latte.LinearIcon.byCatalog("cloud-gear"); }
        static get cloud_alert() { return latte.LinearIcon.byCatalog("cloud-alert"); }
        static get cloud_check() { return latte.LinearIcon.byCatalog("cloud-check"); }
        static get cloud_cross() { return latte.LinearIcon.byCatalog("cloud-cross"); }
        static get cloud_crossed() { return latte.LinearIcon.byCatalog("cloud-crossed"); }
        static get cloud_database() { return latte.LinearIcon.byCatalog("cloud-database"); }
        static get database() { return latte.LinearIcon.byCatalog("database"); }
        static get database_add() { return latte.LinearIcon.byCatalog("database-add"); }
        static get database_remove() { return latte.LinearIcon.byCatalog("database-remove"); }
        static get database_lock() { return latte.LinearIcon.byCatalog("database-lock"); }
        static get database_refresh() { return latte.LinearIcon.byCatalog("database-refresh"); }
        static get database_check() { return latte.LinearIcon.byCatalog("database-check"); }
        static get database_history() { return latte.LinearIcon.byCatalog("database-history"); }
        static get database_upload() { return latte.LinearIcon.byCatalog("database-upload"); }
        static get database_download() { return latte.LinearIcon.byCatalog("database-download"); }
        static get server() { return latte.LinearIcon.byCatalog("server"); }
        static get shield() { return latte.LinearIcon.byCatalog("shield"); }
        static get shield_check() { return latte.LinearIcon.byCatalog("shield-check"); }
        static get shield_alert() { return latte.LinearIcon.byCatalog("shield-alert"); }
        static get shield_cross() { return latte.LinearIcon.byCatalog("shield-cross"); }
        static get lock() { return latte.LinearIcon.byCatalog("lock"); }
        static get rotation_lock() { return latte.LinearIcon.byCatalog("rotation-lock"); }
        static get unlock() { return latte.LinearIcon.byCatalog("unlock"); }
        static get key() { return latte.LinearIcon.byCatalog("key"); }
        static get key_hole() { return latte.LinearIcon.byCatalog("key-hole"); }
        static get toggle_off() { return latte.LinearIcon.byCatalog("toggle-off"); }
        static get toggle_on() { return latte.LinearIcon.byCatalog("toggle-on"); }
        static get cog() { return latte.LinearIcon.byCatalog("cog"); }
        static get cog2() { return latte.LinearIcon.byCatalog("cog2"); }
        static get wrench() { return latte.LinearIcon.byCatalog("wrench"); }
        static get screwdriver() { return latte.LinearIcon.byCatalog("screwdriver"); }
        static get hammer_wrench() { return latte.LinearIcon.byCatalog("hammer-wrench"); }
        static get hammer() { return latte.LinearIcon.byCatalog("hammer"); }
        static get saw() { return latte.LinearIcon.byCatalog("saw"); }
        static get axe() { return latte.LinearIcon.byCatalog("axe"); }
        static get axe2() { return latte.LinearIcon.byCatalog("axe2"); }
        static get shovel() { return latte.LinearIcon.byCatalog("shovel"); }
        static get pickaxe() { return latte.LinearIcon.byCatalog("pickaxe"); }
        static get factory() { return latte.LinearIcon.byCatalog("factory"); }
        static get factory2() { return latte.LinearIcon.byCatalog("factory2"); }
        static get recycle() { return latte.LinearIcon.byCatalog("recycle"); }
        static get trash() { return latte.LinearIcon.byCatalog("trash"); }
        static get trash2() { return latte.LinearIcon.byCatalog("trash2"); }
        static get trash3() { return latte.LinearIcon.byCatalog("trash3"); }
        static get broom() { return latte.LinearIcon.byCatalog("broom"); }
        static get game() { return latte.LinearIcon.byCatalog("game"); }
        static get gamepad() { return latte.LinearIcon.byCatalog("gamepad"); }
        static get joystick() { return latte.LinearIcon.byCatalog("joystick"); }
        static get dice() { return latte.LinearIcon.byCatalog("dice"); }
        static get spades() { return latte.LinearIcon.byCatalog("spades"); }
        static get diamonds() { return latte.LinearIcon.byCatalog("diamonds"); }
        static get clubs() { return latte.LinearIcon.byCatalog("clubs"); }
        static get hearts() { return latte.LinearIcon.byCatalog("hearts"); }
        static get heart() { return latte.LinearIcon.byCatalog("heart"); }
        static get star() { return latte.LinearIcon.byCatalog("star"); }
        static get star_half() { return latte.LinearIcon.byCatalog("star-half"); }
        static get star_empty() { return latte.LinearIcon.byCatalog("star-empty"); }
        static get flag() { return latte.LinearIcon.byCatalog("flag"); }
        static get flag2() { return latte.LinearIcon.byCatalog("flag2"); }
        static get flag3() { return latte.LinearIcon.byCatalog("flag3"); }
        static get mailbox_full() { return latte.LinearIcon.byCatalog("mailbox-full"); }
        static get mailbox_empty() { return latte.LinearIcon.byCatalog("mailbox-empty"); }
        static get at_sign() { return latte.LinearIcon.byCatalog("at-sign"); }
        static get envelope() { return latte.LinearIcon.byCatalog("envelope"); }
        static get envelope_open() { return latte.LinearIcon.byCatalog("envelope-open"); }
        static get paperclip() { return latte.LinearIcon.byCatalog("paperclip"); }
        static get paper_plane() { return latte.LinearIcon.byCatalog("paper-plane"); }
        static get reply() { return latte.LinearIcon.byCatalog("reply"); }
        static get reply_all() { return latte.LinearIcon.byCatalog("reply-all"); }
        static get inbox() { return latte.LinearIcon.byCatalog("inbox"); }
        static get inbox2() { return latte.LinearIcon.byCatalog("inbox2"); }
        static get outbox() { return latte.LinearIcon.byCatalog("outbox"); }
        static get box() { return latte.LinearIcon.byCatalog("box"); }
        static get archive() { return latte.LinearIcon.byCatalog("archive"); }
        static get archive2() { return latte.LinearIcon.byCatalog("archive2"); }
        static get drawers() { return latte.LinearIcon.byCatalog("drawers"); }
        static get drawers2() { return latte.LinearIcon.byCatalog("drawers2"); }
        static get drawers3() { return latte.LinearIcon.byCatalog("drawers3"); }
        static get eye() { return latte.LinearIcon.byCatalog("eye"); }
        static get eye_crossed() { return latte.LinearIcon.byCatalog("eye-crossed"); }
        static get eye_plus() { return latte.LinearIcon.byCatalog("eye-plus"); }
        static get eye_minus() { return latte.LinearIcon.byCatalog("eye-minus"); }
        static get binoculars() { return latte.LinearIcon.byCatalog("binoculars"); }
        static get binoculars2() { return latte.LinearIcon.byCatalog("binoculars2"); }
        static get hdd() { return latte.LinearIcon.byCatalog("hdd"); }
        static get hdd_down() { return latte.LinearIcon.byCatalog("hdd-down"); }
        static get hdd_up() { return latte.LinearIcon.byCatalog("hdd-up"); }
        static get floppy_disk() { return latte.LinearIcon.byCatalog("floppy-disk"); }
        static get disc() { return latte.LinearIcon.byCatalog("disc"); }
        static get tape2() { return latte.LinearIcon.byCatalog("tape2"); }
        static get printer() { return latte.LinearIcon.byCatalog("printer"); }
        static get shredder() { return latte.LinearIcon.byCatalog("shredder"); }
        static get file_empty() { return latte.LinearIcon.byCatalog("file-empty"); }
        static get file_add() { return latte.LinearIcon.byCatalog("file-add"); }
        static get file_check() { return latte.LinearIcon.byCatalog("file-check"); }
        static get file_lock() { return latte.LinearIcon.byCatalog("file-lock"); }
        static get files() { return latte.LinearIcon.byCatalog("files"); }
        static get copy() { return latte.LinearIcon.byCatalog("copy"); }
        static get compare() { return latte.LinearIcon.byCatalog("compare"); }
        static get folder() { return latte.LinearIcon.byCatalog("folder"); }
        static get folder_search() { return latte.LinearIcon.byCatalog("folder-search"); }
        static get folder_plus() { return latte.LinearIcon.byCatalog("folder-plus"); }
        static get folder_minus() { return latte.LinearIcon.byCatalog("folder-minus"); }
        static get folder_download() { return latte.LinearIcon.byCatalog("folder-download"); }
        static get folder_upload() { return latte.LinearIcon.byCatalog("folder-upload"); }
        static get folder_star() { return latte.LinearIcon.byCatalog("folder-star"); }
        static get folder_heart() { return latte.LinearIcon.byCatalog("folder-heart"); }
        static get folder_user() { return latte.LinearIcon.byCatalog("folder-user"); }
        static get folder_shared() { return latte.LinearIcon.byCatalog("folder-shared"); }
        static get folder_music() { return latte.LinearIcon.byCatalog("folder-music"); }
        static get folder_picture() { return latte.LinearIcon.byCatalog("folder-picture"); }
        static get folder_film() { return latte.LinearIcon.byCatalog("folder-film"); }
        static get scissors() { return latte.LinearIcon.byCatalog("scissors"); }
        static get paste() { return latte.LinearIcon.byCatalog("paste"); }
        static get clipboard_empty() { return latte.LinearIcon.byCatalog("clipboard-empty"); }
        static get clipboard_pencil() { return latte.LinearIcon.byCatalog("clipboard-pencil"); }
        static get clipboard_text() { return latte.LinearIcon.byCatalog("clipboard-text"); }
        static get clipboard_check() { return latte.LinearIcon.byCatalog("clipboard-check"); }
        static get clipboard_down() { return latte.LinearIcon.byCatalog("clipboard-down"); }
        static get clipboard_left() { return latte.LinearIcon.byCatalog("clipboard-left"); }
        static get clipboard_alert() { return latte.LinearIcon.byCatalog("clipboard-alert"); }
        static get clipboard_user() { return latte.LinearIcon.byCatalog("clipboard-user"); }
        static get register() { return latte.LinearIcon.byCatalog("register"); }
        static get enter() { return latte.LinearIcon.byCatalog("enter"); }
        static get exit() { return latte.LinearIcon.byCatalog("exit"); }
        static get papers() { return latte.LinearIcon.byCatalog("papers"); }
        static get news() { return latte.LinearIcon.byCatalog("news"); }
        static get reading() { return latte.LinearIcon.byCatalog("reading"); }
        static get typewriter() { return latte.LinearIcon.byCatalog("typewriter"); }
        static get document() { return latte.LinearIcon.byCatalog("document"); }
        static get document2() { return latte.LinearIcon.byCatalog("document2"); }
        static get graduation_hat() { return latte.LinearIcon.byCatalog("graduation-hat"); }
        static get license() { return latte.LinearIcon.byCatalog("license"); }
        static get license2() { return latte.LinearIcon.byCatalog("license2"); }
        static get medal_empty() { return latte.LinearIcon.byCatalog("medal-empty"); }
        static get medal_first() { return latte.LinearIcon.byCatalog("medal-first"); }
        static get medal_second() { return latte.LinearIcon.byCatalog("medal-second"); }
        static get medal_third() { return latte.LinearIcon.byCatalog("medal-third"); }
        static get podium() { return latte.LinearIcon.byCatalog("podium"); }
        static get trophy() { return latte.LinearIcon.byCatalog("trophy"); }
        static get trophy2() { return latte.LinearIcon.byCatalog("trophy2"); }
        static get music_note() { return latte.LinearIcon.byCatalog("music-note"); }
        static get music_note2() { return latte.LinearIcon.byCatalog("music-note2"); }
        static get music_note3() { return latte.LinearIcon.byCatalog("music-note3"); }
        static get playlist() { return latte.LinearIcon.byCatalog("playlist"); }
        static get playlist_add() { return latte.LinearIcon.byCatalog("playlist-add"); }
        static get guitar() { return latte.LinearIcon.byCatalog("guitar"); }
        static get trumpet() { return latte.LinearIcon.byCatalog("trumpet"); }
        static get album() { return latte.LinearIcon.byCatalog("album"); }
        static get shuffle() { return latte.LinearIcon.byCatalog("shuffle"); }
        static get repeat_one() { return latte.LinearIcon.byCatalog("repeat-one"); }
        static get repeat() { return latte.LinearIcon.byCatalog("repeat"); }
        static get headphones() { return latte.LinearIcon.byCatalog("headphones"); }
        static get headset() { return latte.LinearIcon.byCatalog("headset"); }
        static get loudspeaker() { return latte.LinearIcon.byCatalog("loudspeaker"); }
        static get equalizer() { return latte.LinearIcon.byCatalog("equalizer"); }
        static get theater() { return latte.LinearIcon.byCatalog("theater"); }
        static get _3d_glasses() { return latte.LinearIcon.byCatalog("3d-glasses"); }
        static get ticket() { return latte.LinearIcon.byCatalog("ticket"); }
        static get presentation() { return latte.LinearIcon.byCatalog("presentation"); }
        static get play() { return latte.LinearIcon.byCatalog("play"); }
        static get film_play() { return latte.LinearIcon.byCatalog("film-play"); }
        static get clapboard_play() { return latte.LinearIcon.byCatalog("clapboard-play"); }
        static get media() { return latte.LinearIcon.byCatalog("media"); }
        static get film() { return latte.LinearIcon.byCatalog("film"); }
        static get film2() { return latte.LinearIcon.byCatalog("film2"); }
        static get surveillance() { return latte.LinearIcon.byCatalog("surveillance"); }
        static get surveillance2() { return latte.LinearIcon.byCatalog("surveillance2"); }
        static get camera() { return latte.LinearIcon.byCatalog("camera"); }
        static get camera_crossed() { return latte.LinearIcon.byCatalog("camera-crossed"); }
        static get camera_play() { return latte.LinearIcon.byCatalog("camera-play"); }
        static get time_lapse() { return latte.LinearIcon.byCatalog("time-lapse"); }
        static get record() { return latte.LinearIcon.byCatalog("record"); }
        static get camera2() { return latte.LinearIcon.byCatalog("camera2"); }
        static get camera_flip() { return latte.LinearIcon.byCatalog("camera-flip"); }
        static get panorama() { return latte.LinearIcon.byCatalog("panorama"); }
        static get time_lapse2() { return latte.LinearIcon.byCatalog("time-lapse2"); }
        static get shutter() { return latte.LinearIcon.byCatalog("shutter"); }
        static get shutter2() { return latte.LinearIcon.byCatalog("shutter2"); }
        static get face_detection() { return latte.LinearIcon.byCatalog("face-detection"); }
        static get flare() { return latte.LinearIcon.byCatalog("flare"); }
        static get convex() { return latte.LinearIcon.byCatalog("convex"); }
        static get concave() { return latte.LinearIcon.byCatalog("concave"); }
        static get picture() { return latte.LinearIcon.byCatalog("picture"); }
        static get picture2() { return latte.LinearIcon.byCatalog("picture2"); }
        static get picture3() { return latte.LinearIcon.byCatalog("picture3"); }
        static get pictures() { return latte.LinearIcon.byCatalog("pictures"); }
        static get book() { return latte.LinearIcon.byCatalog("book"); }
        static get audio_book() { return latte.LinearIcon.byCatalog("audio-book"); }
        static get book2() { return latte.LinearIcon.byCatalog("book2"); }
        static get bookmark() { return latte.LinearIcon.byCatalog("bookmark"); }
        static get bookmark2() { return latte.LinearIcon.byCatalog("bookmark2"); }
        static get label() { return latte.LinearIcon.byCatalog("label"); }
        static get library() { return latte.LinearIcon.byCatalog("library"); }
        static get library2() { return latte.LinearIcon.byCatalog("library2"); }
        static get contacts() { return latte.LinearIcon.byCatalog("contacts"); }
        static get profile() { return latte.LinearIcon.byCatalog("profile"); }
        static get portrait() { return latte.LinearIcon.byCatalog("portrait"); }
        static get portrait2() { return latte.LinearIcon.byCatalog("portrait2"); }
        static get user() { return latte.LinearIcon.byCatalog("user"); }
        static get user_plus() { return latte.LinearIcon.byCatalog("user-plus"); }
        static get user_minus() { return latte.LinearIcon.byCatalog("user-minus"); }
        static get user_lock() { return latte.LinearIcon.byCatalog("user-lock"); }
        static get users() { return latte.LinearIcon.byCatalog("users"); }
        static get users2() { return latte.LinearIcon.byCatalog("users2"); }
        static get users_plus() { return latte.LinearIcon.byCatalog("users-plus"); }
        static get users_minus() { return latte.LinearIcon.byCatalog("users-minus"); }
        static get group_work() { return latte.LinearIcon.byCatalog("group-work"); }
        static get woman() { return latte.LinearIcon.byCatalog("woman"); }
        static get man() { return latte.LinearIcon.byCatalog("man"); }
        static get baby() { return latte.LinearIcon.byCatalog("baby"); }
        static get baby2() { return latte.LinearIcon.byCatalog("baby2"); }
        static get baby3() { return latte.LinearIcon.byCatalog("baby3"); }
        static get baby_bottle() { return latte.LinearIcon.byCatalog("baby-bottle"); }
        static get walk() { return latte.LinearIcon.byCatalog("walk"); }
        static get hand_waving() { return latte.LinearIcon.byCatalog("hand-waving"); }
        static get jump() { return latte.LinearIcon.byCatalog("jump"); }
        static get run() { return latte.LinearIcon.byCatalog("run"); }
        static get woman2() { return latte.LinearIcon.byCatalog("woman2"); }
        static get man2() { return latte.LinearIcon.byCatalog("man2"); }
        static get man_woman() { return latte.LinearIcon.byCatalog("man-woman"); }
        static get height() { return latte.LinearIcon.byCatalog("height"); }
        static get weight() { return latte.LinearIcon.byCatalog("weight"); }
        static get scale() { return latte.LinearIcon.byCatalog("scale"); }
        static get button() { return latte.LinearIcon.byCatalog("button"); }
        static get bow_tie() { return latte.LinearIcon.byCatalog("bow-tie"); }
        static get tie() { return latte.LinearIcon.byCatalog("tie"); }
        static get socks() { return latte.LinearIcon.byCatalog("socks"); }
        static get shoe() { return latte.LinearIcon.byCatalog("shoe"); }
        static get shoes() { return latte.LinearIcon.byCatalog("shoes"); }
        static get hat() { return latte.LinearIcon.byCatalog("hat"); }
        static get pants() { return latte.LinearIcon.byCatalog("pants"); }
        static get shorts() { return latte.LinearIcon.byCatalog("shorts"); }
        static get flip_flops() { return latte.LinearIcon.byCatalog("flip-flops"); }
        static get shirt() { return latte.LinearIcon.byCatalog("shirt"); }
        static get hanger() { return latte.LinearIcon.byCatalog("hanger"); }
        static get laundry() { return latte.LinearIcon.byCatalog("laundry"); }
        static get store() { return latte.LinearIcon.byCatalog("store"); }
        static get haircut() { return latte.LinearIcon.byCatalog("haircut"); }
        static get store_24() { return latte.LinearIcon.byCatalog("store-24"); }
        static get barcode() { return latte.LinearIcon.byCatalog("barcode"); }
        static get barcode2() { return latte.LinearIcon.byCatalog("barcode2"); }
        static get barcode3() { return latte.LinearIcon.byCatalog("barcode3"); }
        static get cashier() { return latte.LinearIcon.byCatalog("cashier"); }
        static get bag() { return latte.LinearIcon.byCatalog("bag"); }
        static get bag2() { return latte.LinearIcon.byCatalog("bag2"); }
        static get cart() { return latte.LinearIcon.byCatalog("cart"); }
        static get cart_empty() { return latte.LinearIcon.byCatalog("cart-empty"); }
        static get cart_full() { return latte.LinearIcon.byCatalog("cart-full"); }
        static get cart_plus() { return latte.LinearIcon.byCatalog("cart-plus"); }
        static get cart_plus2() { return latte.LinearIcon.byCatalog("cart-plus2"); }
        static get cart_add() { return latte.LinearIcon.byCatalog("cart-add"); }
        static get cart_remove() { return latte.LinearIcon.byCatalog("cart-remove"); }
        static get cart_exchange() { return latte.LinearIcon.byCatalog("cart-exchange"); }
        static get tag() { return latte.LinearIcon.byCatalog("tag"); }
        static get tags() { return latte.LinearIcon.byCatalog("tags"); }
        static get receipt() { return latte.LinearIcon.byCatalog("receipt"); }
        static get wallet() { return latte.LinearIcon.byCatalog("wallet"); }
        static get credit_card() { return latte.LinearIcon.byCatalog("credit-card"); }
        static get cash_dollar() { return latte.LinearIcon.byCatalog("cash-dollar"); }
        static get cash_euro() { return latte.LinearIcon.byCatalog("cash-euro"); }
        static get cash_pound() { return latte.LinearIcon.byCatalog("cash-pound"); }
        static get cash_yen() { return latte.LinearIcon.byCatalog("cash-yen"); }
        static get bag_dollar() { return latte.LinearIcon.byCatalog("bag-dollar"); }
        static get bag_euro() { return latte.LinearIcon.byCatalog("bag-euro"); }
        static get bag_pound() { return latte.LinearIcon.byCatalog("bag-pound"); }
        static get bag_yen() { return latte.LinearIcon.byCatalog("bag-yen"); }
        static get coin_dollar() { return latte.LinearIcon.byCatalog("coin-dollar"); }
        static get coin_euro() { return latte.LinearIcon.byCatalog("coin-euro"); }
        static get coin_pound() { return latte.LinearIcon.byCatalog("coin-pound"); }
        static get coin_yen() { return latte.LinearIcon.byCatalog("coin-yen"); }
        static get calculator() { return latte.LinearIcon.byCatalog("calculator"); }
        static get calculator2() { return latte.LinearIcon.byCatalog("calculator2"); }
        static get abacus() { return latte.LinearIcon.byCatalog("abacus"); }
        static get vault() { return latte.LinearIcon.byCatalog("vault"); }
        static get telephone() { return latte.LinearIcon.byCatalog("telephone"); }
        static get phone_lock() { return latte.LinearIcon.byCatalog("phone-lock"); }
        static get phone_wave() { return latte.LinearIcon.byCatalog("phone-wave"); }
        static get phone_pause() { return latte.LinearIcon.byCatalog("phone-pause"); }
        static get phone_outgoing() { return latte.LinearIcon.byCatalog("phone-outgoing"); }
        static get phone_incoming() { return latte.LinearIcon.byCatalog("phone-incoming"); }
        static get phone_in_out() { return latte.LinearIcon.byCatalog("phone-in-out"); }
        static get phone_error() { return latte.LinearIcon.byCatalog("phone-error"); }
        static get phone_sip() { return latte.LinearIcon.byCatalog("phone-sip"); }
        static get phone_plus() { return latte.LinearIcon.byCatalog("phone-plus"); }
        static get phone_minus() { return latte.LinearIcon.byCatalog("phone-minus"); }
        static get voicemail() { return latte.LinearIcon.byCatalog("voicemail"); }
        static get dial() { return latte.LinearIcon.byCatalog("dial"); }
        static get telephone2() { return latte.LinearIcon.byCatalog("telephone2"); }
        static get pushpin() { return latte.LinearIcon.byCatalog("pushpin"); }
        static get pushpin2() { return latte.LinearIcon.byCatalog("pushpin2"); }
        static get map_marker() { return latte.LinearIcon.byCatalog("map-marker"); }
        static get map_marker_user() { return latte.LinearIcon.byCatalog("map-marker-user"); }
        static get map_marker_down() { return latte.LinearIcon.byCatalog("map-marker-down"); }
        static get map_marker_check() { return latte.LinearIcon.byCatalog("map-marker-check"); }
        static get map_marker_crossed() { return latte.LinearIcon.byCatalog("map-marker-crossed"); }
        static get radar() { return latte.LinearIcon.byCatalog("radar"); }
        static get compass2() { return latte.LinearIcon.byCatalog("compass2"); }
        static get map() { return latte.LinearIcon.byCatalog("map"); }
        static get map2() { return latte.LinearIcon.byCatalog("map2"); }
        static get location() { return latte.LinearIcon.byCatalog("location"); }
        static get road_sign() { return latte.LinearIcon.byCatalog("road-sign"); }
        static get calendar_empty() { return latte.LinearIcon.byCatalog("calendar-empty"); }
        static get calendar_check() { return latte.LinearIcon.byCatalog("calendar-check"); }
        static get calendar_cross() { return latte.LinearIcon.byCatalog("calendar-cross"); }
        static get calendar_31() { return latte.LinearIcon.byCatalog("calendar-31"); }
        static get calendar_full() { return latte.LinearIcon.byCatalog("calendar-full"); }
        static get calendar_insert() { return latte.LinearIcon.byCatalog("calendar-insert"); }
        static get calendar_text() { return latte.LinearIcon.byCatalog("calendar-text"); }
        static get calendar_user() { return latte.LinearIcon.byCatalog("calendar-user"); }
        static get mouse() { return latte.LinearIcon.byCatalog("mouse"); }
        static get mouse_left() { return latte.LinearIcon.byCatalog("mouse-left"); }
        static get mouse_right() { return latte.LinearIcon.byCatalog("mouse-right"); }
        static get mouse_both() { return latte.LinearIcon.byCatalog("mouse-both"); }
        static get keyboard() { return latte.LinearIcon.byCatalog("keyboard"); }
        static get keyboard_up() { return latte.LinearIcon.byCatalog("keyboard-up"); }
        static get keyboard_down() { return latte.LinearIcon.byCatalog("keyboard-down"); }
        static get delete() { return latte.LinearIcon.byCatalog("delete"); }
        static get spell_check() { return latte.LinearIcon.byCatalog("spell-check"); }
        static get escape() { return latte.LinearIcon.byCatalog("escape"); }
        static get enter2() { return latte.LinearIcon.byCatalog("enter2"); }
        static get screen() { return latte.LinearIcon.byCatalog("screen"); }
        static get aspect_ratio() { return latte.LinearIcon.byCatalog("aspect-ratio"); }
        static get signal() { return latte.LinearIcon.byCatalog("signal"); }
        static get signal_lock() { return latte.LinearIcon.byCatalog("signal-lock"); }
        static get signal_80() { return latte.LinearIcon.byCatalog("signal-80"); }
        static get signal_60() { return latte.LinearIcon.byCatalog("signal-60"); }
        static get signal_40() { return latte.LinearIcon.byCatalog("signal-40"); }
        static get signal_20() { return latte.LinearIcon.byCatalog("signal-20"); }
        static get signal_0() { return latte.LinearIcon.byCatalog("signal-0"); }
        static get signal_blocked() { return latte.LinearIcon.byCatalog("signal-blocked"); }
        static get sim() { return latte.LinearIcon.byCatalog("sim"); }
        static get flash_memory() { return latte.LinearIcon.byCatalog("flash-memory"); }
        static get usb_drive() { return latte.LinearIcon.byCatalog("usb-drive"); }
        static get phone() { return latte.LinearIcon.byCatalog("phone"); }
        static get smartphone() { return latte.LinearIcon.byCatalog("smartphone"); }
        static get smartphone_notification() { return latte.LinearIcon.byCatalog("smartphone-notification"); }
        static get smartphone_vibration() { return latte.LinearIcon.byCatalog("smartphone-vibration"); }
        static get smartphone_embed() { return latte.LinearIcon.byCatalog("smartphone-embed"); }
        static get smartphone_waves() { return latte.LinearIcon.byCatalog("smartphone-waves"); }
        static get tablet() { return latte.LinearIcon.byCatalog("tablet"); }
        static get tablet2() { return latte.LinearIcon.byCatalog("tablet2"); }
        static get laptop() { return latte.LinearIcon.byCatalog("laptop"); }
        static get laptop_phone() { return latte.LinearIcon.byCatalog("laptop-phone"); }
        static get desktop() { return latte.LinearIcon.byCatalog("desktop"); }
        static get launch() { return latte.LinearIcon.byCatalog("launch"); }
        static get new_tab() { return latte.LinearIcon.byCatalog("new-tab"); }
        static get window() { return latte.LinearIcon.byCatalog("window"); }
        static get cable() { return latte.LinearIcon.byCatalog("cable"); }
        static get cable2() { return latte.LinearIcon.byCatalog("cable2"); }
        static get tv() { return latte.LinearIcon.byCatalog("tv"); }
        static get radio() { return latte.LinearIcon.byCatalog("radio"); }
        static get remote_control() { return latte.LinearIcon.byCatalog("remote-control"); }
        static get power_switch() { return latte.LinearIcon.byCatalog("power-switch"); }
        static get power() { return latte.LinearIcon.byCatalog("power"); }
        static get power_crossed() { return latte.LinearIcon.byCatalog("power-crossed"); }
        static get flash_auto() { return latte.LinearIcon.byCatalog("flash-auto"); }
        static get lamp() { return latte.LinearIcon.byCatalog("lamp"); }
        static get flashlight() { return latte.LinearIcon.byCatalog("flashlight"); }
        static get lampshade() { return latte.LinearIcon.byCatalog("lampshade"); }
        static get cord() { return latte.LinearIcon.byCatalog("cord"); }
        static get outlet() { return latte.LinearIcon.byCatalog("outlet"); }
        static get battery_power() { return latte.LinearIcon.byCatalog("battery-power"); }
        static get battery_empty() { return latte.LinearIcon.byCatalog("battery-empty"); }
        static get battery_alert() { return latte.LinearIcon.byCatalog("battery-alert"); }
        static get battery_error() { return latte.LinearIcon.byCatalog("battery-error"); }
        static get battery_low1() { return latte.LinearIcon.byCatalog("battery-low1"); }
        static get battery_low2() { return latte.LinearIcon.byCatalog("battery-low2"); }
        static get battery_low3() { return latte.LinearIcon.byCatalog("battery-low3"); }
        static get battery_mid1() { return latte.LinearIcon.byCatalog("battery-mid1"); }
        static get battery_mid2() { return latte.LinearIcon.byCatalog("battery-mid2"); }
        static get battery_mid3() { return latte.LinearIcon.byCatalog("battery-mid3"); }
        static get battery_full() { return latte.LinearIcon.byCatalog("battery-full"); }
        static get battery_charging() { return latte.LinearIcon.byCatalog("battery-charging"); }
        static get battery_charging2() { return latte.LinearIcon.byCatalog("battery-charging2"); }
        static get battery_charging3() { return latte.LinearIcon.byCatalog("battery-charging3"); }
        static get battery_charging4() { return latte.LinearIcon.byCatalog("battery-charging4"); }
        static get battery_charging5() { return latte.LinearIcon.byCatalog("battery-charging5"); }
        static get battery_charging6() { return latte.LinearIcon.byCatalog("battery-charging6"); }
        static get battery_charging7() { return latte.LinearIcon.byCatalog("battery-charging7"); }
        static get chip() { return latte.LinearIcon.byCatalog("chip"); }
        static get chip_x64() { return latte.LinearIcon.byCatalog("chip-x64"); }
        static get chip_x86() { return latte.LinearIcon.byCatalog("chip-x86"); }
        static get bubble() { return latte.LinearIcon.byCatalog("bubble"); }
        static get bubbles() { return latte.LinearIcon.byCatalog("bubbles"); }
        static get bubble_dots() { return latte.LinearIcon.byCatalog("bubble-dots"); }
        static get bubble_alert() { return latte.LinearIcon.byCatalog("bubble-alert"); }
        static get bubble_question() { return latte.LinearIcon.byCatalog("bubble-question"); }
        static get bubble_text() { return latte.LinearIcon.byCatalog("bubble-text"); }
        static get bubble_pencil() { return latte.LinearIcon.byCatalog("bubble-pencil"); }
        static get bubble_picture() { return latte.LinearIcon.byCatalog("bubble-picture"); }
        static get bubble_video() { return latte.LinearIcon.byCatalog("bubble-video"); }
        static get bubble_user() { return latte.LinearIcon.byCatalog("bubble-user"); }
        static get bubble_quote() { return latte.LinearIcon.byCatalog("bubble-quote"); }
        static get bubble_heart() { return latte.LinearIcon.byCatalog("bubble-heart"); }
        static get bubble_emoticon() { return latte.LinearIcon.byCatalog("bubble-emoticon"); }
        static get bubble_attachment() { return latte.LinearIcon.byCatalog("bubble-attachment"); }
        static get phone_bubble() { return latte.LinearIcon.byCatalog("phone-bubble"); }
        static get quote_open() { return latte.LinearIcon.byCatalog("quote-open"); }
        static get quote_close() { return latte.LinearIcon.byCatalog("quote-close"); }
        static get dna() { return latte.LinearIcon.byCatalog("dna"); }
        static get heart_pulse() { return latte.LinearIcon.byCatalog("heart-pulse"); }
        static get pulse() { return latte.LinearIcon.byCatalog("pulse"); }
        static get syringe() { return latte.LinearIcon.byCatalog("syringe"); }
        static get pills() { return latte.LinearIcon.byCatalog("pills"); }
        static get first_aid() { return latte.LinearIcon.byCatalog("first-aid"); }
        static get lifebuoy() { return latte.LinearIcon.byCatalog("lifebuoy"); }
        static get bandage() { return latte.LinearIcon.byCatalog("bandage"); }
        static get bandages() { return latte.LinearIcon.byCatalog("bandages"); }
        static get thermometer() { return latte.LinearIcon.byCatalog("thermometer"); }
        static get microscope() { return latte.LinearIcon.byCatalog("microscope"); }
        static get brain() { return latte.LinearIcon.byCatalog("brain"); }
        static get beaker() { return latte.LinearIcon.byCatalog("beaker"); }
        static get skull() { return latte.LinearIcon.byCatalog("skull"); }
        static get bone() { return latte.LinearIcon.byCatalog("bone"); }
        static get construction() { return latte.LinearIcon.byCatalog("construction"); }
        static get construction_cone() { return latte.LinearIcon.byCatalog("construction-cone"); }
        static get pie_chart() { return latte.LinearIcon.byCatalog("pie-chart"); }
        static get pie_chart2() { return latte.LinearIcon.byCatalog("pie-chart2"); }
        static get graph() { return latte.LinearIcon.byCatalog("graph"); }
        static get chart_growth() { return latte.LinearIcon.byCatalog("chart-growth"); }
        static get chart_bars() { return latte.LinearIcon.byCatalog("chart-bars"); }
        static get chart_settings() { return latte.LinearIcon.byCatalog("chart-settings"); }
        static get cake() { return latte.LinearIcon.byCatalog("cake"); }
        static get gift() { return latte.LinearIcon.byCatalog("gift"); }
        static get balloon() { return latte.LinearIcon.byCatalog("balloon"); }
        static get rank() { return latte.LinearIcon.byCatalog("rank"); }
        static get rank2() { return latte.LinearIcon.byCatalog("rank2"); }
        static get rank3() { return latte.LinearIcon.byCatalog("rank3"); }
        static get crown() { return latte.LinearIcon.byCatalog("crown"); }
        static get lotus() { return latte.LinearIcon.byCatalog("lotus"); }
        static get diamond() { return latte.LinearIcon.byCatalog("diamond"); }
        static get diamond2() { return latte.LinearIcon.byCatalog("diamond2"); }
        static get diamond3() { return latte.LinearIcon.byCatalog("diamond3"); }
        static get diamond4() { return latte.LinearIcon.byCatalog("diamond4"); }
        static get linearicons() { return latte.LinearIcon.byCatalog("linearicons"); }
        static get teacup() { return latte.LinearIcon.byCatalog("teacup"); }
        static get teapot() { return latte.LinearIcon.byCatalog("teapot"); }
        static get glass() { return latte.LinearIcon.byCatalog("glass"); }
        static get bottle2() { return latte.LinearIcon.byCatalog("bottle2"); }
        static get glass_cocktail() { return latte.LinearIcon.byCatalog("glass-cocktail"); }
        static get glass2() { return latte.LinearIcon.byCatalog("glass2"); }
        static get dinner() { return latte.LinearIcon.byCatalog("dinner"); }
        static get dinner2() { return latte.LinearIcon.byCatalog("dinner2"); }
        static get chef() { return latte.LinearIcon.byCatalog("chef"); }
        static get scale2() { return latte.LinearIcon.byCatalog("scale2"); }
        static get egg() { return latte.LinearIcon.byCatalog("egg"); }
        static get egg2() { return latte.LinearIcon.byCatalog("egg2"); }
        static get eggs() { return latte.LinearIcon.byCatalog("eggs"); }
        static get platter() { return latte.LinearIcon.byCatalog("platter"); }
        static get steak() { return latte.LinearIcon.byCatalog("steak"); }
        static get hamburger() { return latte.LinearIcon.byCatalog("hamburger"); }
        static get hotdog() { return latte.LinearIcon.byCatalog("hotdog"); }
        static get pizza() { return latte.LinearIcon.byCatalog("pizza"); }
        static get sausage() { return latte.LinearIcon.byCatalog("sausage"); }
        static get chicken() { return latte.LinearIcon.byCatalog("chicken"); }
        static get fish() { return latte.LinearIcon.byCatalog("fish"); }
        static get carrot() { return latte.LinearIcon.byCatalog("carrot"); }
        static get cheese() { return latte.LinearIcon.byCatalog("cheese"); }
        static get bread() { return latte.LinearIcon.byCatalog("bread"); }
        static get ice_cream() { return latte.LinearIcon.byCatalog("ice-cream"); }
        static get ice_cream2() { return latte.LinearIcon.byCatalog("ice-cream2"); }
        static get candy() { return latte.LinearIcon.byCatalog("candy"); }
        static get lollipop() { return latte.LinearIcon.byCatalog("lollipop"); }
        static get coffee_bean() { return latte.LinearIcon.byCatalog("coffee-bean"); }
        static get coffee_cup() { return latte.LinearIcon.byCatalog("coffee-cup"); }
        static get cherry() { return latte.LinearIcon.byCatalog("cherry"); }
        static get grapes() { return latte.LinearIcon.byCatalog("grapes"); }
        static get citrus() { return latte.LinearIcon.byCatalog("citrus"); }
        static get apple() { return latte.LinearIcon.byCatalog("apple"); }
        static get leaf() { return latte.LinearIcon.byCatalog("leaf"); }
        static get landscape() { return latte.LinearIcon.byCatalog("landscape"); }
        static get pine_tree() { return latte.LinearIcon.byCatalog("pine-tree"); }
        static get tree() { return latte.LinearIcon.byCatalog("tree"); }
        static get cactus() { return latte.LinearIcon.byCatalog("cactus"); }
        static get paw() { return latte.LinearIcon.byCatalog("paw"); }
        static get footprint() { return latte.LinearIcon.byCatalog("footprint"); }
        static get speed_slow() { return latte.LinearIcon.byCatalog("speed-slow"); }
        static get speed_medium() { return latte.LinearIcon.byCatalog("speed-medium"); }
        static get speed_fast() { return latte.LinearIcon.byCatalog("speed-fast"); }
        static get rocket() { return latte.LinearIcon.byCatalog("rocket"); }
        static get hammer2() { return latte.LinearIcon.byCatalog("hammer2"); }
        static get balance() { return latte.LinearIcon.byCatalog("balance"); }
        static get briefcase() { return latte.LinearIcon.byCatalog("briefcase"); }
        static get luggage_weight() { return latte.LinearIcon.byCatalog("luggage-weight"); }
        static get dolly() { return latte.LinearIcon.byCatalog("dolly"); }
        static get plane() { return latte.LinearIcon.byCatalog("plane"); }
        static get plane_crossed() { return latte.LinearIcon.byCatalog("plane-crossed"); }
        static get helicopter() { return latte.LinearIcon.byCatalog("helicopter"); }
        static get traffic_lights() { return latte.LinearIcon.byCatalog("traffic-lights"); }
        static get siren() { return latte.LinearIcon.byCatalog("siren"); }
        static get road() { return latte.LinearIcon.byCatalog("road"); }
        static get engine() { return latte.LinearIcon.byCatalog("engine"); }
        static get oil_pressure() { return latte.LinearIcon.byCatalog("oil-pressure"); }
        static get coolant_temperature() { return latte.LinearIcon.byCatalog("coolant-temperature"); }
        static get car_battery() { return latte.LinearIcon.byCatalog("car-battery"); }
        static get gas() { return latte.LinearIcon.byCatalog("gas"); }
        static get gallon() { return latte.LinearIcon.byCatalog("gallon"); }
        static get transmission() { return latte.LinearIcon.byCatalog("transmission"); }
        static get car() { return latte.LinearIcon.byCatalog("car"); }
        static get car_wash() { return latte.LinearIcon.byCatalog("car-wash"); }
        static get car_wash2() { return latte.LinearIcon.byCatalog("car-wash2"); }
        static get bus() { return latte.LinearIcon.byCatalog("bus"); }
        static get bus2() { return latte.LinearIcon.byCatalog("bus2"); }
        static get car2() { return latte.LinearIcon.byCatalog("car2"); }
        static get parking() { return latte.LinearIcon.byCatalog("parking"); }
        static get car_lock() { return latte.LinearIcon.byCatalog("car-lock"); }
        static get taxi() { return latte.LinearIcon.byCatalog("taxi"); }
        static get car_siren() { return latte.LinearIcon.byCatalog("car-siren"); }
        static get car_wash3() { return latte.LinearIcon.byCatalog("car-wash3"); }
        static get car_wash4() { return latte.LinearIcon.byCatalog("car-wash4"); }
        static get ambulance() { return latte.LinearIcon.byCatalog("ambulance"); }
        static get truck() { return latte.LinearIcon.byCatalog("truck"); }
        static get trailer() { return latte.LinearIcon.byCatalog("trailer"); }
        static get scale_truck() { return latte.LinearIcon.byCatalog("scale-truck"); }
        static get train() { return latte.LinearIcon.byCatalog("train"); }
        static get ship() { return latte.LinearIcon.byCatalog("ship"); }
        static get ship2() { return latte.LinearIcon.byCatalog("ship2"); }
        static get anchor() { return latte.LinearIcon.byCatalog("anchor"); }
        static get boat() { return latte.LinearIcon.byCatalog("boat"); }
        static get bicycle() { return latte.LinearIcon.byCatalog("bicycle"); }
        static get bicycle2() { return latte.LinearIcon.byCatalog("bicycle2"); }
        static get dumbbell() { return latte.LinearIcon.byCatalog("dumbbell"); }
        static get bench_press() { return latte.LinearIcon.byCatalog("bench-press"); }
        static get swim() { return latte.LinearIcon.byCatalog("swim"); }
        static get football() { return latte.LinearIcon.byCatalog("football"); }
        static get baseball_bat() { return latte.LinearIcon.byCatalog("baseball-bat"); }
        static get baseball() { return latte.LinearIcon.byCatalog("baseball"); }
        static get tennis() { return latte.LinearIcon.byCatalog("tennis"); }
        static get tennis2() { return latte.LinearIcon.byCatalog("tennis2"); }
        static get ping_pong() { return latte.LinearIcon.byCatalog("ping-pong"); }
        static get hockey() { return latte.LinearIcon.byCatalog("hockey"); }
        static get _8ball() { return latte.LinearIcon.byCatalog("8ball"); }
        static get bowling() { return latte.LinearIcon.byCatalog("bowling"); }
        static get bowling_pins() { return latte.LinearIcon.byCatalog("bowling-pins"); }
        static get golf() { return latte.LinearIcon.byCatalog("golf"); }
        static get golf2() { return latte.LinearIcon.byCatalog("golf2"); }
        static get archery() { return latte.LinearIcon.byCatalog("archery"); }
        static get slingshot() { return latte.LinearIcon.byCatalog("slingshot"); }
        static get soccer() { return latte.LinearIcon.byCatalog("soccer"); }
        static get basketball() { return latte.LinearIcon.byCatalog("basketball"); }
        static get cube() { return latte.LinearIcon.byCatalog("cube"); }
        static get _3d_rotate() { return latte.LinearIcon.byCatalog("3d-rotate"); }
        static get puzzle() { return latte.LinearIcon.byCatalog("puzzle"); }
        static get glasses() { return latte.LinearIcon.byCatalog("glasses"); }
        static get glasses2() { return latte.LinearIcon.byCatalog("glasses2"); }
        static get accessibility() { return latte.LinearIcon.byCatalog("accessibility"); }
        static get wheelchair() { return latte.LinearIcon.byCatalog("wheelchair"); }
        static get wall() { return latte.LinearIcon.byCatalog("wall"); }
        static get fence() { return latte.LinearIcon.byCatalog("fence"); }
        static get wall2() { return latte.LinearIcon.byCatalog("wall2"); }
        static get icons() { return latte.LinearIcon.byCatalog("icons"); }
        static get resize_handle() { return latte.LinearIcon.byCatalog("resize-handle"); }
        static get icons2() { return latte.LinearIcon.byCatalog("icons2"); }
        static get select() { return latte.LinearIcon.byCatalog("select"); }
        static get select2() { return latte.LinearIcon.byCatalog("select2"); }
        static get site_map() { return latte.LinearIcon.byCatalog("site-map"); }
        static get earth() { return latte.LinearIcon.byCatalog("earth"); }
        static get earth_lock() { return latte.LinearIcon.byCatalog("earth-lock"); }
        static get network() { return latte.LinearIcon.byCatalog("network"); }
        static get network_lock() { return latte.LinearIcon.byCatalog("network-lock"); }
        static get planet() { return latte.LinearIcon.byCatalog("planet"); }
        static get happy() { return latte.LinearIcon.byCatalog("happy"); }
        static get smile() { return latte.LinearIcon.byCatalog("smile"); }
        static get grin() { return latte.LinearIcon.byCatalog("grin"); }
        static get tongue() { return latte.LinearIcon.byCatalog("tongue"); }
        static get sad() { return latte.LinearIcon.byCatalog("sad"); }
        static get wink() { return latte.LinearIcon.byCatalog("wink"); }
        static get dream() { return latte.LinearIcon.byCatalog("dream"); }
        static get shocked() { return latte.LinearIcon.byCatalog("shocked"); }
        static get shocked2() { return latte.LinearIcon.byCatalog("shocked2"); }
        static get tongue2() { return latte.LinearIcon.byCatalog("tongue2"); }
        static get neutral() { return latte.LinearIcon.byCatalog("neutral"); }
        static get happy_grin() { return latte.LinearIcon.byCatalog("happy-grin"); }
        static get cool() { return latte.LinearIcon.byCatalog("cool"); }
        static get mad() { return latte.LinearIcon.byCatalog("mad"); }
        static get grin_evil() { return latte.LinearIcon.byCatalog("grin-evil"); }
        static get evil() { return latte.LinearIcon.byCatalog("evil"); }
        static get wow() { return latte.LinearIcon.byCatalog("wow"); }
        static get annoyed() { return latte.LinearIcon.byCatalog("annoyed"); }
        static get wondering() { return latte.LinearIcon.byCatalog("wondering"); }
        static get confused() { return latte.LinearIcon.byCatalog("confused"); }
        static get zipped() { return latte.LinearIcon.byCatalog("zipped"); }
        static get grumpy() { return latte.LinearIcon.byCatalog("grumpy"); }
        static get mustache() { return latte.LinearIcon.byCatalog("mustache"); }
        static get tombstone_hipster() { return latte.LinearIcon.byCatalog("tombstone-hipster"); }
        static get tombstone() { return latte.LinearIcon.byCatalog("tombstone"); }
        static get ghost() { return latte.LinearIcon.byCatalog("ghost"); }
        static get ghost_hipster() { return latte.LinearIcon.byCatalog("ghost-hipster"); }
        static get halloween() { return latte.LinearIcon.byCatalog("halloween"); }
        static get christmas() { return latte.LinearIcon.byCatalog("christmas"); }
        static get easter_egg() { return latte.LinearIcon.byCatalog("easter-egg"); }
        static get mustache2() { return latte.LinearIcon.byCatalog("mustache2"); }
        static get mustache_glasses() { return latte.LinearIcon.byCatalog("mustache-glasses"); }
        static get pipe() { return latte.LinearIcon.byCatalog("pipe"); }
        static get alarm() { return latte.LinearIcon.byCatalog("alarm"); }
        static get alarm_add() { return latte.LinearIcon.byCatalog("alarm-add"); }
        static get alarm_snooze() { return latte.LinearIcon.byCatalog("alarm-snooze"); }
        static get alarm_ringing() { return latte.LinearIcon.byCatalog("alarm-ringing"); }
        static get bullhorn() { return latte.LinearIcon.byCatalog("bullhorn"); }
        static get hearing() { return latte.LinearIcon.byCatalog("hearing"); }
        static get volume_high() { return latte.LinearIcon.byCatalog("volume-high"); }
        static get volume_medium() { return latte.LinearIcon.byCatalog("volume-medium"); }
        static get volume_low() { return latte.LinearIcon.byCatalog("volume-low"); }
        static get volume() { return latte.LinearIcon.byCatalog("volume"); }
        static get mute() { return latte.LinearIcon.byCatalog("mute"); }
        static get lan() { return latte.LinearIcon.byCatalog("lan"); }
        static get lan2() { return latte.LinearIcon.byCatalog("lan2"); }
        static get wifi() { return latte.LinearIcon.byCatalog("wifi"); }
        static get wifi_lock() { return latte.LinearIcon.byCatalog("wifi-lock"); }
        static get wifi_blocked() { return latte.LinearIcon.byCatalog("wifi-blocked"); }
        static get wifi_mid() { return latte.LinearIcon.byCatalog("wifi-mid"); }
        static get wifi_low() { return latte.LinearIcon.byCatalog("wifi-low"); }
        static get wifi_low2() { return latte.LinearIcon.byCatalog("wifi-low2"); }
        static get wifi_alert() { return latte.LinearIcon.byCatalog("wifi-alert"); }
        static get wifi_alert_mid() { return latte.LinearIcon.byCatalog("wifi-alert-mid"); }
        static get wifi_alert_low() { return latte.LinearIcon.byCatalog("wifi-alert-low"); }
        static get wifi_alert_low2() { return latte.LinearIcon.byCatalog("wifi-alert-low2"); }
        static get stream() { return latte.LinearIcon.byCatalog("stream"); }
        static get stream_check() { return latte.LinearIcon.byCatalog("stream-check"); }
        static get stream_error() { return latte.LinearIcon.byCatalog("stream-error"); }
        static get stream_alert() { return latte.LinearIcon.byCatalog("stream-alert"); }
        static get communication() { return latte.LinearIcon.byCatalog("communication"); }
        static get communication_crossed() { return latte.LinearIcon.byCatalog("communication-crossed"); }
        static get broadcast() { return latte.LinearIcon.byCatalog("broadcast"); }
        static get antenna() { return latte.LinearIcon.byCatalog("antenna"); }
        static get satellite() { return latte.LinearIcon.byCatalog("satellite"); }
        static get satellite2() { return latte.LinearIcon.byCatalog("satellite2"); }
        static get mic() { return latte.LinearIcon.byCatalog("mic"); }
        static get mic_mute() { return latte.LinearIcon.byCatalog("mic-mute"); }
        static get mic2() { return latte.LinearIcon.byCatalog("mic2"); }
        static get spotlights() { return latte.LinearIcon.byCatalog("spotlights"); }
        static get hourglass() { return latte.LinearIcon.byCatalog("hourglass"); }
        static get loading() { return latte.LinearIcon.byCatalog("loading"); }
        static get loading2() { return latte.LinearIcon.byCatalog("loading2"); }
        static get loading3() { return latte.LinearIcon.byCatalog("loading3"); }
        static get refresh() { return latte.LinearIcon.byCatalog("refresh"); }
        static get refresh2() { return latte.LinearIcon.byCatalog("refresh2"); }
        static get undo() { return latte.LinearIcon.byCatalog("undo"); }
        static get redo() { return latte.LinearIcon.byCatalog("redo"); }
        static get jump2() { return latte.LinearIcon.byCatalog("jump2"); }
        static get undo2() { return latte.LinearIcon.byCatalog("undo2"); }
        static get redo2() { return latte.LinearIcon.byCatalog("redo2"); }
        static get sync() { return latte.LinearIcon.byCatalog("sync"); }
        static get repeat_one2() { return latte.LinearIcon.byCatalog("repeat-one2"); }
        static get sync_crossed() { return latte.LinearIcon.byCatalog("sync-crossed"); }
        static get sync2() { return latte.LinearIcon.byCatalog("sync2"); }
        static get repeat_one3() { return latte.LinearIcon.byCatalog("repeat-one3"); }
        static get sync_crossed2() { return latte.LinearIcon.byCatalog("sync-crossed2"); }
        static get return() { return latte.LinearIcon.byCatalog("return"); }
        static get return2() { return latte.LinearIcon.byCatalog("return2"); }
        static get refund() { return latte.LinearIcon.byCatalog("refund"); }
        static get history() { return latte.LinearIcon.byCatalog("history"); }
        static get history2() { return latte.LinearIcon.byCatalog("history2"); }
        static get self_timer() { return latte.LinearIcon.byCatalog("self-timer"); }
        static get clock() { return latte.LinearIcon.byCatalog("clock"); }
        static get clock2() { return latte.LinearIcon.byCatalog("clock2"); }
        static get clock3() { return latte.LinearIcon.byCatalog("clock3"); }
        static get watch() { return latte.LinearIcon.byCatalog("watch"); }
        static get alarm2() { return latte.LinearIcon.byCatalog("alarm2"); }
        static get alarm_add2() { return latte.LinearIcon.byCatalog("alarm-add2"); }
        static get alarm_remove() { return latte.LinearIcon.byCatalog("alarm-remove"); }
        static get alarm_check() { return latte.LinearIcon.byCatalog("alarm-check"); }
        static get alarm_error() { return latte.LinearIcon.byCatalog("alarm-error"); }
        static get timer() { return latte.LinearIcon.byCatalog("timer"); }
        static get timer_crossed() { return latte.LinearIcon.byCatalog("timer-crossed"); }
        static get timer2() { return latte.LinearIcon.byCatalog("timer2"); }
        static get timer_crossed2() { return latte.LinearIcon.byCatalog("timer-crossed2"); }
        static get download() { return latte.LinearIcon.byCatalog("download"); }
        static get upload() { return latte.LinearIcon.byCatalog("upload"); }
        static get download2() { return latte.LinearIcon.byCatalog("download2"); }
        static get upload2() { return latte.LinearIcon.byCatalog("upload2"); }
        static get enter_up() { return latte.LinearIcon.byCatalog("enter-up"); }
        static get enter_down() { return latte.LinearIcon.byCatalog("enter-down"); }
        static get enter_left() { return latte.LinearIcon.byCatalog("enter-left"); }
        static get enter_right() { return latte.LinearIcon.byCatalog("enter-right"); }
        static get exit_up() { return latte.LinearIcon.byCatalog("exit-up"); }
        static get exit_down() { return latte.LinearIcon.byCatalog("exit-down"); }
        static get exit_left() { return latte.LinearIcon.byCatalog("exit-left"); }
        static get exit_right() { return latte.LinearIcon.byCatalog("exit-right"); }
        static get enter_up2() { return latte.LinearIcon.byCatalog("enter-up2"); }
        static get enter_down2() { return latte.LinearIcon.byCatalog("enter-down2"); }
        static get enter_vertical() { return latte.LinearIcon.byCatalog("enter-vertical"); }
        static get enter_left2() { return latte.LinearIcon.byCatalog("enter-left2"); }
        static get enter_right2() { return latte.LinearIcon.byCatalog("enter-right2"); }
        static get enter_horizontal() { return latte.LinearIcon.byCatalog("enter-horizontal"); }
        static get exit_up2() { return latte.LinearIcon.byCatalog("exit-up2"); }
        static get exit_down2() { return latte.LinearIcon.byCatalog("exit-down2"); }
        static get exit_left2() { return latte.LinearIcon.byCatalog("exit-left2"); }
        static get exit_right2() { return latte.LinearIcon.byCatalog("exit-right2"); }
        static get cli() { return latte.LinearIcon.byCatalog("cli"); }
        static get bug() { return latte.LinearIcon.byCatalog("bug"); }
        static get code() { return latte.LinearIcon.byCatalog("code"); }
        static get file_code() { return latte.LinearIcon.byCatalog("file-code"); }
        static get file_image() { return latte.LinearIcon.byCatalog("file-image"); }
        static get file_zip() { return latte.LinearIcon.byCatalog("file-zip"); }
        static get file_audio() { return latte.LinearIcon.byCatalog("file-audio"); }
        static get file_video() { return latte.LinearIcon.byCatalog("file-video"); }
        static get file_preview() { return latte.LinearIcon.byCatalog("file-preview"); }
        static get file_charts() { return latte.LinearIcon.byCatalog("file-charts"); }
        static get file_stats() { return latte.LinearIcon.byCatalog("file-stats"); }
        static get file_spreadsheet() { return latte.LinearIcon.byCatalog("file-spreadsheet"); }
        static get link() { return latte.LinearIcon.byCatalog("link"); }
        static get unlink() { return latte.LinearIcon.byCatalog("unlink"); }
        static get link2() { return latte.LinearIcon.byCatalog("link2"); }
        static get unlink2() { return latte.LinearIcon.byCatalog("unlink2"); }
        static get thumbs_up() { return latte.LinearIcon.byCatalog("thumbs-up"); }
        static get thumbs_down() { return latte.LinearIcon.byCatalog("thumbs-down"); }
        static get thumbs_up2() { return latte.LinearIcon.byCatalog("thumbs-up2"); }
        static get thumbs_down2() { return latte.LinearIcon.byCatalog("thumbs-down2"); }
        static get thumbs_up3() { return latte.LinearIcon.byCatalog("thumbs-up3"); }
        static get thumbs_down3() { return latte.LinearIcon.byCatalog("thumbs-down3"); }
        static get share() { return latte.LinearIcon.byCatalog("share"); }
        static get share2() { return latte.LinearIcon.byCatalog("share2"); }
        static get share3() { return latte.LinearIcon.byCatalog("share3"); }
        static get magnifier() { return latte.LinearIcon.byCatalog("magnifier"); }
        static get file_search() { return latte.LinearIcon.byCatalog("file-search"); }
        static get find_replace() { return latte.LinearIcon.byCatalog("find-replace"); }
        static get zoom_in() { return latte.LinearIcon.byCatalog("zoom-in"); }
        static get zoom_out() { return latte.LinearIcon.byCatalog("zoom-out"); }
        static get loupe() { return latte.LinearIcon.byCatalog("loupe"); }
        static get loupe_zoom_in() { return latte.LinearIcon.byCatalog("loupe-zoom-in"); }
        static get loupe_zoom_out() { return latte.LinearIcon.byCatalog("loupe-zoom-out"); }
        static get cross() { return latte.LinearIcon.byCatalog("cross"); }
        static get menu() { return latte.LinearIcon.byCatalog("menu"); }
        static get list() { return latte.LinearIcon.byCatalog("list"); }
        static get list2() { return latte.LinearIcon.byCatalog("list2"); }
        static get list3() { return latte.LinearIcon.byCatalog("list3"); }
        static get menu2() { return latte.LinearIcon.byCatalog("menu2"); }
        static get list4() { return latte.LinearIcon.byCatalog("list4"); }
        static get menu3() { return latte.LinearIcon.byCatalog("menu3"); }
        static get exclamation() { return latte.LinearIcon.byCatalog("exclamation"); }
        static get question() { return latte.LinearIcon.byCatalog("question"); }
        static get check() { return latte.LinearIcon.byCatalog("check"); }
        static get cross2() { return latte.LinearIcon.byCatalog("cross2"); }
        static get plus() { return latte.LinearIcon.byCatalog("plus"); }
        static get minus() { return latte.LinearIcon.byCatalog("minus"); }
        static get percent() { return latte.LinearIcon.byCatalog("percent"); }
        static get chevron_up() { return latte.LinearIcon.byCatalog("chevron-up"); }
        static get chevron_down() { return latte.LinearIcon.byCatalog("chevron-down"); }
        static get chevron_left() { return latte.LinearIcon.byCatalog("chevron-left"); }
        static get chevron_right() { return latte.LinearIcon.byCatalog("chevron-right"); }
        static get chevrons_expand_vertical() { return latte.LinearIcon.byCatalog("chevrons-expand-vertical"); }
        static get chevrons_expand_horizontal() { return latte.LinearIcon.byCatalog("chevrons-expand-horizontal"); }
        static get chevrons_contract_vertical() { return latte.LinearIcon.byCatalog("chevrons-contract-vertical"); }
        static get chevrons_contract_horizontal() { return latte.LinearIcon.byCatalog("chevrons-contract-horizontal"); }
        static get arrow_up() { return latte.LinearIcon.byCatalog("arrow-up"); }
        static get arrow_down() { return latte.LinearIcon.byCatalog("arrow-down"); }
        static get arrow_left() { return latte.LinearIcon.byCatalog("arrow-left"); }
        static get arrow_right() { return latte.LinearIcon.byCatalog("arrow-right"); }
        static get arrow_up_right() { return latte.LinearIcon.byCatalog("arrow-up-right"); }
        static get arrows_merge() { return latte.LinearIcon.byCatalog("arrows-merge"); }
        static get arrows_split() { return latte.LinearIcon.byCatalog("arrows-split"); }
        static get arrow_divert() { return latte.LinearIcon.byCatalog("arrow-divert"); }
        static get arrow_return() { return latte.LinearIcon.byCatalog("arrow-return"); }
        static get expand() { return latte.LinearIcon.byCatalog("expand"); }
        static get contract() { return latte.LinearIcon.byCatalog("contract"); }
        static get expand2() { return latte.LinearIcon.byCatalog("expand2"); }
        static get contract2() { return latte.LinearIcon.byCatalog("contract2"); }
        static get move() { return latte.LinearIcon.byCatalog("move"); }
        static get tab() { return latte.LinearIcon.byCatalog("tab"); }
        static get arrow_wave() { return latte.LinearIcon.byCatalog("arrow-wave"); }
        static get expand3() { return latte.LinearIcon.byCatalog("expand3"); }
        static get expand4() { return latte.LinearIcon.byCatalog("expand4"); }
        static get contract3() { return latte.LinearIcon.byCatalog("contract3"); }
        static get notification() { return latte.LinearIcon.byCatalog("notification"); }
        static get warning() { return latte.LinearIcon.byCatalog("warning"); }
        static get notification_circle() { return latte.LinearIcon.byCatalog("notification-circle"); }
        static get question_circle() { return latte.LinearIcon.byCatalog("question-circle"); }
        static get menu_circle() { return latte.LinearIcon.byCatalog("menu-circle"); }
        static get checkmark_circle() { return latte.LinearIcon.byCatalog("checkmark-circle"); }
        static get cross_circle() { return latte.LinearIcon.byCatalog("cross-circle"); }
        static get plus_circle() { return latte.LinearIcon.byCatalog("plus-circle"); }
        static get circle_minus() { return latte.LinearIcon.byCatalog("circle-minus"); }
        static get percent_circle() { return latte.LinearIcon.byCatalog("percent-circle"); }
        static get arrow_up_circle() { return latte.LinearIcon.byCatalog("arrow-up-circle"); }
        static get arrow_down_circle() { return latte.LinearIcon.byCatalog("arrow-down-circle"); }
        static get arrow_left_circle() { return latte.LinearIcon.byCatalog("arrow-left-circle"); }
        static get arrow_right_circle() { return latte.LinearIcon.byCatalog("arrow-right-circle"); }
        static get chevron_up_circle() { return latte.LinearIcon.byCatalog("chevron-up-circle"); }
        static get chevron_down_circle() { return latte.LinearIcon.byCatalog("chevron-down-circle"); }
        static get chevron_left_circle() { return latte.LinearIcon.byCatalog("chevron-left-circle"); }
        static get chevron_right_circle() { return latte.LinearIcon.byCatalog("chevron-right-circle"); }
        static get backward_circle() { return latte.LinearIcon.byCatalog("backward-circle"); }
        static get first_circle() { return latte.LinearIcon.byCatalog("first-circle"); }
        static get previous_circle() { return latte.LinearIcon.byCatalog("previous-circle"); }
        static get stop_circle() { return latte.LinearIcon.byCatalog("stop-circle"); }
        static get play_circle() { return latte.LinearIcon.byCatalog("play-circle"); }
        static get pause_circle() { return latte.LinearIcon.byCatalog("pause-circle"); }
        static get next_circle() { return latte.LinearIcon.byCatalog("next-circle"); }
        static get last_circle() { return latte.LinearIcon.byCatalog("last-circle"); }
        static get forward_circle() { return latte.LinearIcon.byCatalog("forward-circle"); }
        static get eject_circle() { return latte.LinearIcon.byCatalog("eject-circle"); }
        static get crop() { return latte.LinearIcon.byCatalog("crop"); }
        static get frame_expand() { return latte.LinearIcon.byCatalog("frame-expand"); }
        static get frame_contract() { return latte.LinearIcon.byCatalog("frame-contract"); }
        static get focus() { return latte.LinearIcon.byCatalog("focus"); }
        static get transform() { return latte.LinearIcon.byCatalog("transform"); }
        static get grid() { return latte.LinearIcon.byCatalog("grid"); }
        static get grid_crossed() { return latte.LinearIcon.byCatalog("grid-crossed"); }
        static get layers() { return latte.LinearIcon.byCatalog("layers"); }
        static get layers_crossed() { return latte.LinearIcon.byCatalog("layers-crossed"); }
        static get toggle() { return latte.LinearIcon.byCatalog("toggle"); }
        static get rulers() { return latte.LinearIcon.byCatalog("rulers"); }
        static get ruler() { return latte.LinearIcon.byCatalog("ruler"); }
        static get funnel() { return latte.LinearIcon.byCatalog("funnel"); }
        static get flip_horizontal() { return latte.LinearIcon.byCatalog("flip-horizontal"); }
        static get flip_vertical() { return latte.LinearIcon.byCatalog("flip-vertical"); }
        static get flip_horizontal2() { return latte.LinearIcon.byCatalog("flip-horizontal2"); }
        static get flip_vertical2() { return latte.LinearIcon.byCatalog("flip-vertical2"); }
        static get angle() { return latte.LinearIcon.byCatalog("angle"); }
        static get angle2() { return latte.LinearIcon.byCatalog("angle2"); }
        static get subtract() { return latte.LinearIcon.byCatalog("subtract"); }
        static get combine() { return latte.LinearIcon.byCatalog("combine"); }
        static get intersect() { return latte.LinearIcon.byCatalog("intersect"); }
        static get exclude() { return latte.LinearIcon.byCatalog("exclude"); }
        static get align_center_vertical() { return latte.LinearIcon.byCatalog("align-center-vertical"); }
        static get align_right() { return latte.LinearIcon.byCatalog("align-right"); }
        static get align_bottom() { return latte.LinearIcon.byCatalog("align-bottom"); }
        static get align_left() { return latte.LinearIcon.byCatalog("align-left"); }
        static get align_center_horizontal() { return latte.LinearIcon.byCatalog("align-center-horizontal"); }
        static get align_top() { return latte.LinearIcon.byCatalog("align-top"); }
        static get square() { return latte.LinearIcon.byCatalog("square"); }
        static get plus_square() { return latte.LinearIcon.byCatalog("plus-square"); }
        static get minus_square() { return latte.LinearIcon.byCatalog("minus-square"); }
        static get percent_square() { return latte.LinearIcon.byCatalog("percent-square"); }
        static get arrow_up_square() { return latte.LinearIcon.byCatalog("arrow-up-square"); }
        static get arrow_down_square() { return latte.LinearIcon.byCatalog("arrow-down-square"); }
        static get arrow_left_square() { return latte.LinearIcon.byCatalog("arrow-left-square"); }
        static get arrow_right_square() { return latte.LinearIcon.byCatalog("arrow-right-square"); }
        static get chevron_up_square() { return latte.LinearIcon.byCatalog("chevron-up-square"); }
        static get chevron_down_square() { return latte.LinearIcon.byCatalog("chevron-down-square"); }
        static get chevron_left_square() { return latte.LinearIcon.byCatalog("chevron-left-square"); }
        static get chevron_right_square() { return latte.LinearIcon.byCatalog("chevron-right-square"); }
        static get check_square() { return latte.LinearIcon.byCatalog("check-square"); }
        static get cross_square() { return latte.LinearIcon.byCatalog("cross-square"); }
        static get menu_square() { return latte.LinearIcon.byCatalog("menu-square"); }
        static get prohibited() { return latte.LinearIcon.byCatalog("prohibited"); }
        static get circle() { return latte.LinearIcon.byCatalog("circle"); }
        static get radio_button() { return latte.LinearIcon.byCatalog("radio-button"); }
        static get ligature() { return latte.LinearIcon.byCatalog("ligature"); }
        static get text_format() { return latte.LinearIcon.byCatalog("text-format"); }
        static get text_format_remove() { return latte.LinearIcon.byCatalog("text-format-remove"); }
        static get text_size() { return latte.LinearIcon.byCatalog("text-size"); }
        static get bold() { return latte.LinearIcon.byCatalog("bold"); }
        static get italic() { return latte.LinearIcon.byCatalog("italic"); }
        static get underline() { return latte.LinearIcon.byCatalog("underline"); }
        static get strikethrough() { return latte.LinearIcon.byCatalog("strikethrough"); }
        static get highlight() { return latte.LinearIcon.byCatalog("highlight"); }
        static get text_align_left() { return latte.LinearIcon.byCatalog("text-align-left"); }
        static get text_align_center() { return latte.LinearIcon.byCatalog("text-align-center"); }
        static get text_align_right() { return latte.LinearIcon.byCatalog("text-align-right"); }
        static get text_align_justify() { return latte.LinearIcon.byCatalog("text-align-justify"); }
        static get line_spacing() { return latte.LinearIcon.byCatalog("line-spacing"); }
        static get indent_increase() { return latte.LinearIcon.byCatalog("indent-increase"); }
        static get indent_decrease() { return latte.LinearIcon.byCatalog("indent-decrease"); }
        static get text_wrap() { return latte.LinearIcon.byCatalog("text-wrap"); }
        static get pilcrow() { return latte.LinearIcon.byCatalog("pilcrow"); }
        static get direction_ltr() { return latte.LinearIcon.byCatalog("direction-ltr"); }
        static get direction_rtl() { return latte.LinearIcon.byCatalog("direction-rtl"); }
        static get page_break() { return latte.LinearIcon.byCatalog("page-break"); }
        static get page_break2() { return latte.LinearIcon.byCatalog("page-break2"); }
        static get sort_alpha_asc() { return latte.LinearIcon.byCatalog("sort-alpha-asc"); }
        static get sort_alpha_desc() { return latte.LinearIcon.byCatalog("sort-alpha-desc"); }
        static get sort_numeric_asc() { return latte.LinearIcon.byCatalog("sort-numeric-asc"); }
        static get sort_numeric_desc() { return latte.LinearIcon.byCatalog("sort-numeric-desc"); }
        static get sort_amount_asc() { return latte.LinearIcon.byCatalog("sort-amount-asc"); }
        static get sort_amount_desc() { return latte.LinearIcon.byCatalog("sort-amount-desc"); }
        static get sort_time_asc() { return latte.LinearIcon.byCatalog("sort-time-asc"); }
        static get sort_time_desc() { return latte.LinearIcon.byCatalog("sort-time-desc"); }
        static get sigma() { return latte.LinearIcon.byCatalog("sigma"); }
        static get pencil_line() { return latte.LinearIcon.byCatalog("pencil-line"); }
        static get hand() { return latte.LinearIcon.byCatalog("hand"); }
        static get pointer_up() { return latte.LinearIcon.byCatalog("pointer-up"); }
        static get pointer_right() { return latte.LinearIcon.byCatalog("pointer-right"); }
        static get pointer_down() { return latte.LinearIcon.byCatalog("pointer-down"); }
        static get pointer_left() { return latte.LinearIcon.byCatalog("pointer-left"); }
        static get finger_tap() { return latte.LinearIcon.byCatalog("finger-tap"); }
        static get fingers_tap() { return latte.LinearIcon.byCatalog("fingers-tap"); }
        static get reminder() { return latte.LinearIcon.byCatalog("reminder"); }
        static get fingers_crossed() { return latte.LinearIcon.byCatalog("fingers-crossed"); }
        static get fingers_victory() { return latte.LinearIcon.byCatalog("fingers-victory"); }
        static get gesture_zoom() { return latte.LinearIcon.byCatalog("gesture-zoom"); }
        static get gesture_pinch() { return latte.LinearIcon.byCatalog("gesture-pinch"); }
        static get fingers_scroll_horizontal() { return latte.LinearIcon.byCatalog("fingers-scroll-horizontal"); }
        static get fingers_scroll_vertical() { return latte.LinearIcon.byCatalog("fingers-scroll-vertical"); }
        static get fingers_scroll_left() { return latte.LinearIcon.byCatalog("fingers-scroll-left"); }
        static get fingers_scroll_right() { return latte.LinearIcon.byCatalog("fingers-scroll-right"); }
        static get hand2() { return latte.LinearIcon.byCatalog("hand2"); }
        static get pointer_up2() { return latte.LinearIcon.byCatalog("pointer-up2"); }
        static get pointer_right2() { return latte.LinearIcon.byCatalog("pointer-right2"); }
        static get pointer_down2() { return latte.LinearIcon.byCatalog("pointer-down2"); }
        static get pointer_left2() { return latte.LinearIcon.byCatalog("pointer-left2"); }
        static get finger_tap2() { return latte.LinearIcon.byCatalog("finger-tap2"); }
        static get fingers_tap2() { return latte.LinearIcon.byCatalog("fingers-tap2"); }
        static get reminder2() { return latte.LinearIcon.byCatalog("reminder2"); }
        static get gesture_zoom2() { return latte.LinearIcon.byCatalog("gesture-zoom2"); }
        static get gesture_pinch2() { return latte.LinearIcon.byCatalog("gesture-pinch2"); }
        static get fingers_scroll_horizontal2() { return latte.LinearIcon.byCatalog("fingers-scroll-horizontal2"); }
        static get fingers_scroll_vertical2() { return latte.LinearIcon.byCatalog("fingers-scroll-vertical2"); }
        static get fingers_scroll_left2() { return latte.LinearIcon.byCatalog("fingers-scroll-left2"); }
        static get fingers_scroll_right2() { return latte.LinearIcon.byCatalog("fingers-scroll-right2"); }
        static get fingers_scroll_vertical3() { return latte.LinearIcon.byCatalog("fingers-scroll-vertical3"); }
        static get border_style() { return latte.LinearIcon.byCatalog("border-style"); }
        static get border_all() { return latte.LinearIcon.byCatalog("border-all"); }
        static get border_outer() { return latte.LinearIcon.byCatalog("border-outer"); }
        static get border_inner() { return latte.LinearIcon.byCatalog("border-inner"); }
        static get border_top() { return latte.LinearIcon.byCatalog("border-top"); }
        static get border_horizontal() { return latte.LinearIcon.byCatalog("border-horizontal"); }
        static get border_bottom() { return latte.LinearIcon.byCatalog("border-bottom"); }
        static get border_left() { return latte.LinearIcon.byCatalog("border-left"); }
        static get border_vertical() { return latte.LinearIcon.byCatalog("border-vertical"); }
        static get border_right() { return latte.LinearIcon.byCatalog("border-right"); }
        static get border_none() { return latte.LinearIcon.byCatalog("border-none"); }
        static get ellipsis() { return latte.LinearIcon.byCatalog("ellipsis"); }
        static get uni21() { return latte.LinearIcon.byCatalog("uni21"); }
        static get uni22() { return latte.LinearIcon.byCatalog("uni22"); }
        static get uni23() { return latte.LinearIcon.byCatalog("uni23"); }
        static get uni24() { return latte.LinearIcon.byCatalog("uni24"); }
        static get uni25() { return latte.LinearIcon.byCatalog("uni25"); }
        static get uni26() { return latte.LinearIcon.byCatalog("uni26"); }
        static get uni27() { return latte.LinearIcon.byCatalog("uni27"); }
        static get uni28() { return latte.LinearIcon.byCatalog("uni28"); }
        static get uni29() { return latte.LinearIcon.byCatalog("uni29"); }
        static get uni2a() { return latte.LinearIcon.byCatalog("uni2a"); }
        static get uni2b() { return latte.LinearIcon.byCatalog("uni2b"); }
        static get uni2c() { return latte.LinearIcon.byCatalog("uni2c"); }
        static get uni2d() { return latte.LinearIcon.byCatalog("uni2d"); }
        static get uni2e() { return latte.LinearIcon.byCatalog("uni2e"); }
        static get uni2f() { return latte.LinearIcon.byCatalog("uni2f"); }
        static get uni30() { return latte.LinearIcon.byCatalog("uni30"); }
        static get uni31() { return latte.LinearIcon.byCatalog("uni31"); }
        static get uni32() { return latte.LinearIcon.byCatalog("uni32"); }
        static get uni33() { return latte.LinearIcon.byCatalog("uni33"); }
        static get uni34() { return latte.LinearIcon.byCatalog("uni34"); }
        static get uni35() { return latte.LinearIcon.byCatalog("uni35"); }
        static get uni37() { return latte.LinearIcon.byCatalog("uni37"); }
        static get uni38() { return latte.LinearIcon.byCatalog("uni38"); }
        static get uni39() { return latte.LinearIcon.byCatalog("uni39"); }
        static get uni3a() { return latte.LinearIcon.byCatalog("uni3a"); }
        static get uni3b() { return latte.LinearIcon.byCatalog("uni3b"); }
        static get uni3c() { return latte.LinearIcon.byCatalog("uni3c"); }
        static get uni3d() { return latte.LinearIcon.byCatalog("uni3d"); }
        static get uni3e() { return latte.LinearIcon.byCatalog("uni3e"); }
        static get uni3f() { return latte.LinearIcon.byCatalog("uni3f"); }
        static get uni40() { return latte.LinearIcon.byCatalog("uni40"); }
        static get uni41() { return latte.LinearIcon.byCatalog("uni41"); }
        static get uni42() { return latte.LinearIcon.byCatalog("uni42"); }
        static get uni43() { return latte.LinearIcon.byCatalog("uni43"); }
        static get uni44() { return latte.LinearIcon.byCatalog("uni44"); }
        static get uni45() { return latte.LinearIcon.byCatalog("uni45"); }
        static get uni46() { return latte.LinearIcon.byCatalog("uni46"); }
        static get uni47() { return latte.LinearIcon.byCatalog("uni47"); }
        static get uni48() { return latte.LinearIcon.byCatalog("uni48"); }
        static get uni49() { return latte.LinearIcon.byCatalog("uni49"); }
        static get uni4a() { return latte.LinearIcon.byCatalog("uni4a"); }
        static get uni4b() { return latte.LinearIcon.byCatalog("uni4b"); }
        static get uni4c() { return latte.LinearIcon.byCatalog("uni4c"); }
        static get uni4d() { return latte.LinearIcon.byCatalog("uni4d"); }
        static get uni4e() { return latte.LinearIcon.byCatalog("uni4e"); }
        static get uni4f() { return latte.LinearIcon.byCatalog("uni4f"); }
        static get uni50() { return latte.LinearIcon.byCatalog("uni50"); }
        static get uni51() { return latte.LinearIcon.byCatalog("uni51"); }
        static get uni52() { return latte.LinearIcon.byCatalog("uni52"); }
        static get uni53() { return latte.LinearIcon.byCatalog("uni53"); }
        static get uni54() { return latte.LinearIcon.byCatalog("uni54"); }
        static get uni55() { return latte.LinearIcon.byCatalog("uni55"); }
        static get uni56() { return latte.LinearIcon.byCatalog("uni56"); }
        static get uni57() { return latte.LinearIcon.byCatalog("uni57"); }
        static get uni58() { return latte.LinearIcon.byCatalog("uni58"); }
        static get uni59() { return latte.LinearIcon.byCatalog("uni59"); }
        static get uni5a() { return latte.LinearIcon.byCatalog("uni5a"); }
        static get uni5b() { return latte.LinearIcon.byCatalog("uni5b"); }
        static get uni5c() { return latte.LinearIcon.byCatalog("uni5c"); }
        static get uni5d() { return latte.LinearIcon.byCatalog("uni5d"); }
        static get uni5e() { return latte.LinearIcon.byCatalog("uni5e"); }
        static get uni5f() { return latte.LinearIcon.byCatalog("uni5f"); }
        static get uni60() { return latte.LinearIcon.byCatalog("uni60"); }
        static get uni61() { return latte.LinearIcon.byCatalog("uni61"); }
        static get uni62() { return latte.LinearIcon.byCatalog("uni62"); }
        static get uni63() { return latte.LinearIcon.byCatalog("uni63"); }
        static get uni64() { return latte.LinearIcon.byCatalog("uni64"); }
        static get uni65() { return latte.LinearIcon.byCatalog("uni65"); }
        static get uni66() { return latte.LinearIcon.byCatalog("uni66"); }
        static get uni67() { return latte.LinearIcon.byCatalog("uni67"); }
        static get uni68() { return latte.LinearIcon.byCatalog("uni68"); }
        static get uni69() { return latte.LinearIcon.byCatalog("uni69"); }
        static get uni6a() { return latte.LinearIcon.byCatalog("uni6a"); }
        static get uni6b() { return latte.LinearIcon.byCatalog("uni6b"); }
        static get uni6c() { return latte.LinearIcon.byCatalog("uni6c"); }
        static get uni6d() { return latte.LinearIcon.byCatalog("uni6d"); }
        static get uni6e() { return latte.LinearIcon.byCatalog("uni6e"); }
        static get uni6f() { return latte.LinearIcon.byCatalog("uni6f"); }
        static get uni70() { return latte.LinearIcon.byCatalog("uni70"); }
        static get uni71() { return latte.LinearIcon.byCatalog("uni71"); }
        static get uni72() { return latte.LinearIcon.byCatalog("uni72"); }
        static get uni73() { return latte.LinearIcon.byCatalog("uni73"); }
        static get uni74() { return latte.LinearIcon.byCatalog("uni74"); }
        static get uni75() { return latte.LinearIcon.byCatalog("uni75"); }
        static get uni76() { return latte.LinearIcon.byCatalog("uni76"); }
        static get uni77() { return latte.LinearIcon.byCatalog("uni77"); }
        static get uni78() { return latte.LinearIcon.byCatalog("uni78"); }
        static get uni79() { return latte.LinearIcon.byCatalog("uni79"); }
        static get uni7a() { return latte.LinearIcon.byCatalog("uni7a"); }
        static get uni7b() { return latte.LinearIcon.byCatalog("uni7b"); }
        static get uni7c() { return latte.LinearIcon.byCatalog("uni7c"); }
        static get uni7d() { return latte.LinearIcon.byCatalog("uni7d"); }
        static get uni7e() { return latte.LinearIcon.byCatalog("uni7e"); }
        static get copyright() { return latte.LinearIcon.byCatalog("copyright"); }
    }
    latte.Linear = Linear;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class LinearIcon extends latte.IconItem {
        constructor() {
            super();
            this._linearIconName = null;
            this.addClass('lnr');
            this.url = null;
        }
        static get home() { return LinearIcon.byCatalog("home"); }
        static get apartment() { return LinearIcon.byCatalog("apartment"); }
        static get pencil() { return LinearIcon.byCatalog("pencil"); }
        static get magic_wand() { return LinearIcon.byCatalog("magic-wand"); }
        static get drop() { return LinearIcon.byCatalog("drop"); }
        static get lighter() { return LinearIcon.byCatalog("lighter"); }
        static get poop() { return LinearIcon.byCatalog("poop"); }
        static get sun() { return LinearIcon.byCatalog("sun"); }
        static get moon() { return LinearIcon.byCatalog("moon"); }
        static get cloud() { return LinearIcon.byCatalog("cloud"); }
        static get cloud_upload() { return LinearIcon.byCatalog("cloud-upload"); }
        static get cloud_download() { return LinearIcon.byCatalog("cloud-download"); }
        static get cloud_sync() { return LinearIcon.byCatalog("cloud-sync"); }
        static get cloud_check() { return LinearIcon.byCatalog("cloud-check"); }
        static get database() { return LinearIcon.byCatalog("database"); }
        static get lock() { return LinearIcon.byCatalog("lock"); }
        static get cog() { return LinearIcon.byCatalog("cog"); }
        static get trash() { return LinearIcon.byCatalog("trash"); }
        static get dice() { return LinearIcon.byCatalog("dice"); }
        static get heart() { return LinearIcon.byCatalog("heart"); }
        static get star() { return LinearIcon.byCatalog("star"); }
        static get star_half() { return LinearIcon.byCatalog("star-half"); }
        static get star_empty() { return LinearIcon.byCatalog("star-empty"); }
        static get flag() { return LinearIcon.byCatalog("flag"); }
        static get envelope() { return LinearIcon.byCatalog("envelope"); }
        static get paperclip() { return LinearIcon.byCatalog("paperclip"); }
        static get inbox() { return LinearIcon.byCatalog("inbox"); }
        static get eye() { return LinearIcon.byCatalog("eye"); }
        static get printer() { return LinearIcon.byCatalog("printer"); }
        static get file_empty() { return LinearIcon.byCatalog("file-empty"); }
        static get file_add() { return LinearIcon.byCatalog("file-add"); }
        static get enter() { return LinearIcon.byCatalog("enter"); }
        static get exit() { return LinearIcon.byCatalog("exit"); }
        static get graduation_hat() { return LinearIcon.byCatalog("graduation-hat"); }
        static get license() { return LinearIcon.byCatalog("license"); }
        static get music_note() { return LinearIcon.byCatalog("music-note"); }
        static get film_play() { return LinearIcon.byCatalog("film-play"); }
        static get camera_video() { return LinearIcon.byCatalog("camera-video"); }
        static get camera() { return LinearIcon.byCatalog("camera"); }
        static get picture() { return LinearIcon.byCatalog("picture"); }
        static get book() { return LinearIcon.byCatalog("book"); }
        static get bookmark() { return LinearIcon.byCatalog("bookmark"); }
        static get user() { return LinearIcon.byCatalog("user"); }
        static get users() { return LinearIcon.byCatalog("users"); }
        static get shirt() { return LinearIcon.byCatalog("shirt"); }
        static get store() { return LinearIcon.byCatalog("store"); }
        static get cart() { return LinearIcon.byCatalog("cart"); }
        static get tag() { return LinearIcon.byCatalog("tag"); }
        static get phone_handset() { return LinearIcon.byCatalog("phone-handset"); }
        static get phone() { return LinearIcon.byCatalog("phone"); }
        static get pushpin() { return LinearIcon.byCatalog("pushpin"); }
        static get map_marker() { return LinearIcon.byCatalog("map-marker"); }
        static get map() { return LinearIcon.byCatalog("map"); }
        static get location() { return LinearIcon.byCatalog("location"); }
        static get calendar_full() { return LinearIcon.byCatalog("calendar-full"); }
        static get keyboard() { return LinearIcon.byCatalog("keyboard"); }
        static get spell_check() { return LinearIcon.byCatalog("spell-check"); }
        static get screen() { return LinearIcon.byCatalog("screen"); }
        static get smartphone() { return LinearIcon.byCatalog("smartphone"); }
        static get tablet() { return LinearIcon.byCatalog("tablet"); }
        static get laptop() { return LinearIcon.byCatalog("laptop"); }
        static get laptop_phone() { return LinearIcon.byCatalog("laptop-phone"); }
        static get power_switch() { return LinearIcon.byCatalog("power-switch"); }
        static get bubble() { return LinearIcon.byCatalog("bubble"); }
        static get heart_pulse() { return LinearIcon.byCatalog("heart-pulse"); }
        static get construction() { return LinearIcon.byCatalog("construction"); }
        static get pie_chart() { return LinearIcon.byCatalog("pie-chart"); }
        static get chart_bars() { return LinearIcon.byCatalog("chart-bars"); }
        static get gift() { return LinearIcon.byCatalog("gift"); }
        static get diamond() { return LinearIcon.byCatalog("diamond"); }
        static get linearicons() { return LinearIcon.byCatalog("linearicons"); }
        static get dinner() { return LinearIcon.byCatalog("dinner"); }
        static get coffee_cup() { return LinearIcon.byCatalog("coffee-cup"); }
        static get leaf() { return LinearIcon.byCatalog("leaf"); }
        static get paw() { return LinearIcon.byCatalog("paw"); }
        static get rocket() { return LinearIcon.byCatalog("rocket"); }
        static get briefcase() { return LinearIcon.byCatalog("briefcase"); }
        static get bus() { return LinearIcon.byCatalog("bus"); }
        static get car() { return LinearIcon.byCatalog("car"); }
        static get train() { return LinearIcon.byCatalog("train"); }
        static get bicycle() { return LinearIcon.byCatalog("bicycle"); }
        static get wheelchair() { return LinearIcon.byCatalog("wheelchair"); }
        static get select() { return LinearIcon.byCatalog("select"); }
        static get earth() { return LinearIcon.byCatalog("earth"); }
        static get smile() { return LinearIcon.byCatalog("smile"); }
        static get sad() { return LinearIcon.byCatalog("sad"); }
        static get neutral() { return LinearIcon.byCatalog("neutral"); }
        static get mustache() { return LinearIcon.byCatalog("mustache"); }
        static get alarm() { return LinearIcon.byCatalog("alarm"); }
        static get bullhorn() { return LinearIcon.byCatalog("bullhorn"); }
        static get volume_high() { return LinearIcon.byCatalog("volume-high"); }
        static get volume_medium() { return LinearIcon.byCatalog("volume-medium"); }
        static get volume_low() { return LinearIcon.byCatalog("volume-low"); }
        static get volume() { return LinearIcon.byCatalog("volume"); }
        static get mic() { return LinearIcon.byCatalog("mic"); }
        static get hourglass() { return LinearIcon.byCatalog("hourglass"); }
        static get undo() { return LinearIcon.byCatalog("undo"); }
        static get redo() { return LinearIcon.byCatalog("redo"); }
        static get sync() { return LinearIcon.byCatalog("sync"); }
        static get history() { return LinearIcon.byCatalog("history"); }
        static get clock() { return LinearIcon.byCatalog("clock"); }
        static get download() { return LinearIcon.byCatalog("download"); }
        static get upload() { return LinearIcon.byCatalog("upload"); }
        static get enter_down() { return LinearIcon.byCatalog("enter-down"); }
        static get exit_up() { return LinearIcon.byCatalog("exit-up"); }
        static get bug() { return LinearIcon.byCatalog("bug"); }
        static get code() { return LinearIcon.byCatalog("code"); }
        static get link() { return LinearIcon.byCatalog("link"); }
        static get unlink() { return LinearIcon.byCatalog("unlink"); }
        static get thumbs_up() { return LinearIcon.byCatalog("thumbs-up"); }
        static get thumbs_down() { return LinearIcon.byCatalog("thumbs-down"); }
        static get magnifier() { return LinearIcon.byCatalog("magnifier"); }
        static get cross() { return LinearIcon.byCatalog("cross"); }
        static get menu() { return LinearIcon.byCatalog("menu"); }
        static get list() { return LinearIcon.byCatalog("list"); }
        static get chevron_up() { return LinearIcon.byCatalog("chevron-up"); }
        static get chevron_down() { return LinearIcon.byCatalog("chevron-down"); }
        static get chevron_left() { return LinearIcon.byCatalog("chevron-left"); }
        static get chevron_right() { return LinearIcon.byCatalog("chevron-right"); }
        static get arrow_up() { return LinearIcon.byCatalog("arrow-up"); }
        static get arrow_down() { return LinearIcon.byCatalog("arrow-down"); }
        static get arrow_left() { return LinearIcon.byCatalog("arrow-left"); }
        static get arrow_right() { return LinearIcon.byCatalog("arrow-right"); }
        static get move() { return LinearIcon.byCatalog("move"); }
        static get warning() { return LinearIcon.byCatalog("warning"); }
        static get question_circle() { return LinearIcon.byCatalog("question-circle"); }
        static get menu_circle() { return LinearIcon.byCatalog("menu-circle"); }
        static get checkmark_circle() { return LinearIcon.byCatalog("checkmark-circle"); }
        static get cross_circle() { return LinearIcon.byCatalog("cross-circle"); }
        static get plus_circle() { return LinearIcon.byCatalog("plus-circle"); }
        static get circle_minus() { return LinearIcon.byCatalog("circle-minus"); }
        static get arrow_up_circle() { return LinearIcon.byCatalog("arrow-up-circle"); }
        static get arrow_down_circle() { return LinearIcon.byCatalog("arrow-down-circle"); }
        static get arrow_left_circle() { return LinearIcon.byCatalog("arrow-left-circle"); }
        static get arrow_right_circle() { return LinearIcon.byCatalog("arrow-right-circle"); }
        static get chevron_up_circle() { return LinearIcon.byCatalog("chevron-up-circle"); }
        static get chevron_down_circle() { return LinearIcon.byCatalog("chevron-down-circle "); }
        static get chevron_left_circle() { return LinearIcon.byCatalog("chevron-left-circle "); }
        static get chevron_right_circle() { return LinearIcon.byCatalog("chevron-right-circle"); }
        static get crop() { return LinearIcon.byCatalog("crop"); }
        static get frame_expand() { return LinearIcon.byCatalog("frame-expand"); }
        static get frame_contract() { return LinearIcon.byCatalog("frame-contract"); }
        static get layers() { return LinearIcon.byCatalog("layers"); }
        static get funnel() { return LinearIcon.byCatalog("funnel"); }
        static get text_format() { return LinearIcon.byCatalog("text-format"); }
        static get text_format_remove() { return LinearIcon.byCatalog("text-format-remove"); }
        static get text_size() { return LinearIcon.byCatalog("text-size"); }
        static get bold() { return LinearIcon.byCatalog("bold"); }
        static get italic() { return LinearIcon.byCatalog("italic"); }
        static get underline() { return LinearIcon.byCatalog("underline"); }
        static get strikethrough() { return LinearIcon.byCatalog("strikethrough"); }
        static get highlight() { return LinearIcon.byCatalog("highlight"); }
        static get text_align_left() { return LinearIcon.byCatalog("text-align-left"); }
        static get text_align_center() { return LinearIcon.byCatalog("text-align-center"); }
        static get text_align_right() { return LinearIcon.byCatalog("text-align-right"); }
        static get text_align_justify() { return LinearIcon.byCatalog("text-align-justify"); }
        static get line_spacing() { return LinearIcon.byCatalog("line-spacing"); }
        static get indent_increase() { return LinearIcon.byCatalog("indent-increase"); }
        static get indent_decrease() { return LinearIcon.byCatalog("indent-decrease"); }
        static get pilcrow() { return LinearIcon.byCatalog("pilcrow"); }
        static get direction_ltr() { return LinearIcon.byCatalog("direction-ltr"); }
        static get direction_rtl() { return LinearIcon.byCatalog("direction-rtl"); }
        static get page_break() { return LinearIcon.byCatalog("page-break"); }
        static get sort_alpha_asc() { return LinearIcon.byCatalog("sort-alpha-asc"); }
        static get sort_amount_asc() { return LinearIcon.byCatalog("sort-amount-asc"); }
        static get hand() { return LinearIcon.byCatalog("hand"); }
        static get pointer_up() { return LinearIcon.byCatalog("pointer-up"); }
        static get pointer_right() { return LinearIcon.byCatalog("pointer-right"); }
        static get pointer_down() { return LinearIcon.byCatalog("pointer-down"); }
        static get pointer_left() { return LinearIcon.byCatalog("pointer-left"); }
        static byCatalog_standby(name) {
            let item = new LinearIcon();
            let code = parseInt(name in LinearIcon.catalog ? LinearIcon.catalog[name] : LinearIcon.catalog['question'], 16);
            latte.log(name);
            latte.log(LinearIcon.catalog[name]);
            latte.log(code);
            item.raw.innerHTML = String.fromCharCode(code);
            item.linearIconName = name;
            return item;
        }
        static byCatalog(name) {
            let item = new LinearIcon();
            item.addClass('icon-' + name);
            item.linearIconName = name;
            return item;
        }
        static byStyleName(name) {
            let item = new LinearIcon();
            item.addClass('lnr-' + name);
            item.linearIconName = name;
            return item;
        }
        clone() {
            let icon = super.clone();
            icon.addClass('lnr');
            icon.addClass('lnr' + this.linearIconName);
            return icon;
        }
        colorize(color) {
            this.element.css('color', color.toString());
            return this;
        }
        go32() {
            this.size = 32;
            return this;
        }
        goSmall() {
            this.raw.style.fontSize = '10px';
            this.raw.style.marginTop = '-3px';
            return this;
        }
        get linearIconName() {
            return this._linearIconName;
        }
        set linearIconName(value) {
            this._linearIconName = value;
        }
    }
    LinearIcon.catalog = {
        home: "600",
        home2: "601",
        home3: "602",
        home4: "603",
        home5: "604",
        home6: "605",
        bathtub: "606",
        toothbrush: "607",
        bed: "608",
        couch: "609",
        chair: "60a",
        city: "60b",
        apartment: "60c",
        pencil: "60d",
        pencil2: "60e",
        pen: "60f",
        pencil3: "610",
        eraser: "611",
        pencil4: "612",
        pencil5: "613",
        feather: "614",
        feather2: "615",
        feather3: "616",
        pen2: "617",
        pen_add: "618",
        pen_remove: "619",
        vector: "61a",
        pen3: "61b",
        blog: "61c",
        brush: "61d",
        brush2: "61e",
        spray: "61f",
        paint_roller: "620",
        stamp: "621",
        tape: "622",
        desk_tape: "623",
        texture: "624",
        eye_dropper: "625",
        palette: "626",
        color_sampler: "627",
        bucket: "628",
        gradient: "629",
        gradient2: "62a",
        magic_wand: "62b",
        magnet: "62c",
        pencil_ruler: "62d",
        pencil_ruler2: "62e",
        compass: "62f",
        aim: "630",
        gun: "631",
        bottle: "632",
        drop: "633",
        drop_crossed: "634",
        drop2: "635",
        snow: "636",
        snow2: "637",
        fire: "638",
        lighter: "639",
        knife: "63a",
        dagger: "63b",
        tissue: "63c",
        toilet_paper: "63d",
        poop: "63e",
        umbrella: "63f",
        umbrella2: "640",
        rain: "641",
        tornado: "642",
        wind: "643",
        fan: "644",
        contrast: "645",
        sun_small: "646",
        sun: "647",
        sun2: "648",
        moon: "649",
        cloud: "64a",
        cloud_upload: "64b",
        cloud_download: "64c",
        cloud_rain: "64d",
        cloud_hailstones: "64e",
        cloud_snow: "64f",
        cloud_windy: "650",
        sun_wind: "651",
        cloud_fog: "652",
        cloud_sun: "653",
        cloud_lightning: "654",
        cloud_sync: "655",
        cloud_lock: "656",
        cloud_gear: "657",
        cloud_alert: "658",
        cloud_check: "659",
        cloud_cross: "65a",
        cloud_crossed: "65b",
        cloud_database: "65c",
        database: "65d",
        database_add: "65e",
        database_remove: "65f",
        database_lock: "660",
        database_refresh: "661",
        database_check: "662",
        database_history: "663",
        database_upload: "664",
        database_download: "665",
        server: "666",
        shield: "667",
        shield_check: "668",
        shield_alert: "669",
        shield_cross: "66a",
        lock: "66b",
        rotation_lock: "66c",
        unlock: "66d",
        key: "66e",
        key_hole: "66f",
        toggle_off: "670",
        toggle_on: "671",
        cog: "672",
        cog2: "673",
        wrench: "674",
        screwdriver: "675",
        hammer_wrench: "676",
        hammer: "677",
        saw: "678",
        axe: "679",
        axe2: "67a",
        shovel: "67b",
        pickaxe: "67c",
        factory: "67d",
        factory2: "67e",
        recycle: "67f",
        trash: "680",
        trash2: "681",
        trash3: "682",
        broom: "683",
        game: "684",
        gamepad: "685",
        joystick: "686",
        dice: "687",
        spades: "688",
        diamonds: "689",
        clubs: "68a",
        hearts: "68b",
        heart: "68c",
        star: "68d",
        star_half: "68e",
        star_empty: "68f",
        flag: "690",
        flag2: "691",
        flag3: "692",
        mailbox_full: "693",
        mailbox_empty: "694",
        at_sign: "695",
        envelope: "696",
        envelope_open: "697",
        paperclip: "698",
        paper_plane: "699",
        reply: "69a",
        reply_all: "69b",
        inbox: "69c",
        inbox2: "69d",
        outbox: "69e",
        box: "69f",
        archive: "6a0",
        archive2: "6a1",
        drawers: "6a2",
        drawers2: "6a3",
        drawers3: "6a4",
        eye: "6a5",
        eye_crossed: "6a6",
        eye_plus: "6a7",
        eye_minus: "6a8",
        binoculars: "6a9",
        binoculars2: "6aa",
        hdd: "6ab",
        hdd_down: "6ac",
        hdd_up: "6ad",
        floppy_disk: "6ae",
        disc: "6af",
        tape2: "6b0",
        printer: "6b1",
        shredder: "6b2",
        file_empty: "6b3",
        file_add: "6b4",
        file_check: "6b5",
        file_lock: "6b6",
        files: "6b7",
        copy: "6b8",
        compare: "6b9",
        folder: "6ba",
        folder_search: "6bb",
        folder_plus: "6bc",
        folder_minus: "6bd",
        folder_download: "6be",
        folder_upload: "6bf",
        folder_star: "6c0",
        folder_heart: "6c1",
        folder_user: "6c2",
        folder_shared: "6c3",
        folder_music: "6c4",
        folder_picture: "6c5",
        folder_film: "6c6",
        scissors: "6c7",
        paste: "6c8",
        clipboard_empty: "6c9",
        clipboard_pencil: "6ca",
        clipboard_text: "6cb",
        clipboard_check: "6cc",
        clipboard_down: "6cd",
        clipboard_left: "6ce",
        clipboard_alert: "6cf",
        clipboard_user: "6d0",
        register: "6d1",
        enter: "6d2",
        exit: "6d3",
        papers: "6d4",
        news: "6d5",
        reading: "6d6",
        typewriter: "6d7",
        document: "6d8",
        document2: "6d9",
        graduation_hat: "6da",
        license: "6db",
        license2: "6dc",
        medal_empty: "6dd",
        medal_first: "6de",
        medal_second: "6df",
        medal_third: "6e0",
        podium: "6e1",
        trophy: "6e2",
        trophy2: "6e3",
        music_note: "6e4",
        music_note2: "6e5",
        music_note3: "6e6",
        playlist: "6e7",
        playlist_add: "6e8",
        guitar: "6e9",
        trumpet: "6ea",
        album: "6eb",
        shuffle: "6ec",
        repeat_one: "6ed",
        repeat: "6ee",
        headphones: "6ef",
        headset: "6f0",
        loudspeaker: "6f1",
        equalizer: "6f2",
        theater: "6f3",
        _3d_glasses: "6f4",
        ticket: "6f5",
        presentation: "6f6",
        play: "6f7",
        film_play: "6f8",
        clapboard_play: "6f9",
        media: "6fa",
        film: "6fb",
        film2: "6fc",
        surveillance: "6fd",
        surveillance2: "6fe",
        camera: "6ff",
        camera_crossed: "700",
        camera_play: "701",
        time_lapse: "702",
        record: "703",
        camera2: "704",
        camera_flip: "705",
        panorama: "706",
        time_lapse2: "707",
        shutter: "708",
        shutter2: "709",
        face_detection: "70a",
        flare: "70b",
        convex: "70c",
        concave: "70d",
        picture: "70e",
        picture2: "70f",
        picture3: "710",
        pictures: "711",
        book: "712",
        audio_book: "713",
        book2: "714",
        bookmark: "715",
        bookmark2: "716",
        label: "717",
        library: "718",
        library2: "719",
        contacts: "71a",
        profile: "71b",
        portrait: "71c",
        portrait2: "71d",
        user: "71e",
        user_plus: "71f",
        user_minus: "720",
        user_lock: "721",
        users: "722",
        users2: "723",
        users_plus: "724",
        users_minus: "725",
        group_work: "726",
        woman: "727",
        man: "728",
        baby: "729",
        baby2: "72a",
        baby3: "72b",
        baby_bottle: "72c",
        walk: "72d",
        hand_waving: "72e",
        jump: "72f",
        run: "730",
        woman2: "731",
        man2: "732",
        man_woman: "733",
        height: "734",
        weight: "735",
        scale: "736",
        button: "737",
        bow_tie: "738",
        tie: "739",
        socks: "73a",
        shoe: "73b",
        shoes: "73c",
        hat: "73d",
        pants: "73e",
        shorts: "73f",
        flip_flops: "740",
        shirt: "741",
        hanger: "742",
        laundry: "743",
        store: "744",
        haircut: "745",
        store_24: "746",
        barcode: "747",
        barcode2: "748",
        barcode3: "749",
        cashier: "74a",
        bag: "74b",
        bag2: "74c",
        cart: "74d",
        cart_empty: "74e",
        cart_full: "74f",
        cart_plus: "750",
        cart_plus2: "751",
        cart_add: "752",
        cart_remove: "753",
        cart_exchange: "754",
        tag: "755",
        tags: "756",
        receipt: "757",
        wallet: "758",
        credit_card: "759",
        cash_dollar: "75a",
        cash_euro: "75b",
        cash_pound: "75c",
        cash_yen: "75d",
        bag_dollar: "75e",
        bag_euro: "75f",
        bag_pound: "760",
        bag_yen: "761",
        coin_dollar: "762",
        coin_euro: "763",
        coin_pound: "764",
        coin_yen: "765",
        calculator: "766",
        calculator2: "767",
        abacus: "768",
        vault: "769",
        telephone: "76a",
        phone_lock: "76b",
        phone_wave: "76c",
        phone_pause: "76d",
        phone_outgoing: "76e",
        phone_incoming: "76f",
        phone_in_out: "770",
        phone_error: "771",
        phone_sip: "772",
        phone_plus: "773",
        phone_minus: "774",
        voicemail: "775",
        dial: "776",
        telephone2: "777",
        pushpin: "778",
        pushpin2: "779",
        map_marker: "77a",
        map_marker_user: "77b",
        map_marker_down: "77c",
        map_marker_check: "77d",
        map_marker_crossed: "77e",
        radar: "77f",
        compass2: "780",
        map: "781",
        map2: "782",
        location: "783",
        road_sign: "784",
        calendar_empty: "785",
        calendar_check: "786",
        calendar_cross: "787",
        calendar_31: "788",
        calendar_full: "789",
        calendar_insert: "78a",
        calendar_text: "78b",
        calendar_user: "78c",
        mouse: "78d",
        mouse_left: "78e",
        mouse_right: "78f",
        mouse_both: "790",
        keyboard: "791",
        keyboard_up: "792",
        keyboard_down: "793",
        _delete: "794",
        spell_check: "795",
        escape: "796",
        enter2: "797",
        screen: "798",
        aspect_ratio: "799",
        signal: "79a",
        signal_lock: "79b",
        signal_80: "79c",
        signal_60: "79d",
        signal_40: "79e",
        signal_20: "79f",
        signal_0: "7a0",
        signal_blocked: "7a1",
        sim: "7a2",
        flash_memory: "7a3",
        usb_drive: "7a4",
        phone: "7a5",
        smartphone: "7a6",
        smartphone_notification: "7a7",
        smartphone_vibration: "7a8",
        smartphone_embed: "7a9",
        smartphone_waves: "7aa",
        tablet: "7ab",
        tablet2: "7ac",
        laptop: "7ad",
        laptop_phone: "7ae",
        desktop: "7af",
        launch: "7b0",
        new_tab: "7b1",
        window: "7b2",
        cable: "7b3",
        cable2: "7b4",
        tv: "7b5",
        radio: "7b6",
        remote_control: "7b7",
        power_switch: "7b8",
        power: "7b9",
        power_crossed: "7ba",
        flash_auto: "7bb",
        lamp: "7bc",
        flashlight: "7bd",
        lampshade: "7be",
        cord: "7bf",
        outlet: "7c0",
        battery_power: "7c1",
        battery_empty: "7c2",
        battery_alert: "7c3",
        battery_error: "7c4",
        battery_low1: "7c5",
        battery_low2: "7c6",
        battery_low3: "7c7",
        battery_mid1: "7c8",
        battery_mid2: "7c9",
        battery_mid3: "7ca",
        battery_full: "7cb",
        battery_charging: "7cc",
        battery_charging2: "7cd",
        battery_charging3: "7ce",
        battery_charging4: "7cf",
        battery_charging5: "7d0",
        battery_charging6: "7d1",
        battery_charging7: "7d2",
        chip: "7d3",
        chip_x64: "7d4",
        chip_x86: "7d5",
        bubble: "7d6",
        bubbles: "7d7",
        bubble_dots: "7d8",
        bubble_alert: "7d9",
        bubble_question: "7da",
        bubble_text: "7db",
        bubble_pencil: "7dc",
        bubble_picture: "7dd",
        bubble_video: "7de",
        bubble_user: "7df",
        bubble_quote: "7e0",
        bubble_heart: "7e1",
        bubble_emoticon: "7e2",
        bubble_attachment: "7e3",
        phone_bubble: "7e4",
        quote_open: "7e5",
        quote_close: "7e6",
        dna: "7e7",
        heart_pulse: "7e8",
        pulse: "7e9",
        syringe: "7ea",
        pills: "7eb",
        first_aid: "7ec",
        lifebuoy: "7ed",
        bandage: "7ee",
        bandages: "7ef",
        thermometer: "7f0",
        microscope: "7f1",
        brain: "7f2",
        beaker: "7f3",
        skull: "7f4",
        bone: "7f5",
        construction: "7f6",
        construction_cone: "7f7",
        pie_chart: "7f8",
        pie_chart2: "7f9",
        graph: "7fa",
        chart_growth: "7fb",
        chart_bars: "7fc",
        chart_settings: "7fd",
        cake: "7fe",
        gift: "7ff",
        balloon: "800",
        rank: "801",
        rank2: "802",
        rank3: "803",
        crown: "804",
        lotus: "805",
        diamond: "806",
        diamond2: "807",
        diamond3: "808",
        diamond4: "809",
        linearicons: "80a",
        teacup: "80b",
        teapot: "80c",
        glass: "80d",
        bottle2: "80e",
        glass_cocktail: "80f",
        glass2: "810",
        dinner: "811",
        dinner2: "812",
        chef: "813",
        scale2: "814",
        egg: "815",
        egg2: "816",
        eggs: "817",
        platter: "818",
        steak: "819",
        hamburger: "81a",
        hotdog: "81b",
        pizza: "81c",
        sausage: "81d",
        chicken: "81e",
        fish: "81f",
        carrot: "820",
        cheese: "821",
        bread: "822",
        ice_cream: "823",
        ice_cream2: "824",
        candy: "825",
        lollipop: "826",
        coffee_bean: "827",
        coffee_cup: "828",
        cherry: "829",
        grapes: "82a",
        citrus: "82b",
        apple: "82c",
        leaf: "82d",
        landscape: "82e",
        pine_tree: "82f",
        tree: "830",
        cactus: "831",
        paw: "832",
        footprint: "833",
        speed_slow: "834",
        speed_medium: "835",
        speed_fast: "836",
        rocket: "837",
        hammer2: "838",
        balance: "839",
        briefcase: "83a",
        luggage_weight: "83b",
        dolly: "83c",
        plane: "83d",
        plane_crossed: "83e",
        helicopter: "83f",
        traffic_lights: "840",
        siren: "841",
        road: "842",
        engine: "843",
        oil_pressure: "844",
        coolant_temperature: "845",
        car_battery: "846",
        gas: "847",
        gallon: "848",
        transmission: "849",
        car: "84a",
        car_wash: "84b",
        car_wash2: "84c",
        bus: "84d",
        bus2: "84e",
        car2: "84f",
        parking: "850",
        car_lock: "851",
        taxi: "852",
        car_siren: "853",
        car_wash3: "854",
        car_wash4: "855",
        ambulance: "856",
        truck: "857",
        trailer: "858",
        scale_truck: "859",
        train: "85a",
        ship: "85b",
        ship2: "85c",
        anchor: "85d",
        boat: "85e",
        bicycle: "85f",
        bicycle2: "860",
        dumbbell: "861",
        bench_press: "862",
        swim: "863",
        football: "864",
        baseball_bat: "865",
        baseball: "866",
        tennis: "867",
        tennis2: "868",
        ping_pong: "869",
        hockey: "86a",
        _8ball: "86b",
        bowling: "86c",
        bowling_pins: "86d",
        golf: "86e",
        golf2: "86f",
        archery: "870",
        slingshot: "871",
        soccer: "872",
        basketball: "873",
        cube: "874",
        _3d_rotate: "875",
        puzzle: "876",
        glasses: "877",
        glasses2: "878",
        accessibility: "879",
        wheelchair: "87a",
        wall: "87b",
        fence: "87c",
        wall2: "87d",
        icons: "87e",
        resize_handle: "87f",
        icons2: "880",
        select: "881",
        select2: "882",
        site_map: "883",
        earth: "884",
        earth_lock: "885",
        network: "886",
        network_lock: "887",
        planet: "888",
        happy: "889",
        smile: "88a",
        grin: "88b",
        tongue: "88c",
        sad: "88d",
        wink: "88e",
        dream: "88f",
        shocked: "890",
        shocked2: "891",
        tongue2: "892",
        neutral: "893",
        happy_grin: "894",
        cool: "895",
        mad: "896",
        grin_evil: "897",
        evil: "898",
        wow: "899",
        annoyed: "89a",
        wondering: "89b",
        confused: "89c",
        zipped: "89d",
        grumpy: "89e",
        mustache: "89f",
        tombstone_hipster: "8a0",
        tombstone: "8a1",
        ghost: "8a2",
        ghost_hipster: "8a3",
        halloween: "8a4",
        christmas: "8a5",
        easter_egg: "8a6",
        mustache2: "8a7",
        mustache_glasses: "8a8",
        pipe: "8a9",
        alarm: "8aa",
        alarm_add: "8ab",
        alarm_snooze: "8ac",
        alarm_ringing: "8ad",
        bullhorn: "8ae",
        hearing: "8af",
        volume_high: "8b0",
        volume_medium: "8b1",
        volume_low: "8b2",
        volume: "8b3",
        mute: "8b4",
        lan: "8b5",
        lan2: "8b6",
        wifi: "8b7",
        wifi_lock: "8b8",
        wifi_blocked: "8b9",
        wifi_mid: "8ba",
        wifi_low: "8bb",
        wifi_low2: "8bc",
        wifi_alert: "8bd",
        wifi_alert_mid: "8be",
        wifi_alert_low: "8bf",
        wifi_alert_low2: "8c0",
        stream: "8c1",
        stream_check: "8c2",
        stream_error: "8c3",
        stream_alert: "8c4",
        communication: "8c5",
        communication_crossed: "8c6",
        broadcast: "8c7",
        antenna: "8c8",
        satellite: "8c9",
        satellite2: "8ca",
        mic: "8cb",
        mic_mute: "8cc",
        mic2: "8cd",
        spotlights: "8ce",
        hourglass: "8cf",
        loading: "8d0",
        loading2: "8d1",
        loading3: "8d2",
        refresh: "8d3",
        refresh2: "8d4",
        undo: "8d5",
        redo: "8d6",
        jump2: "8d7",
        undo2: "8d8",
        redo2: "8d9",
        sync: "8da",
        repeat_one2: "8db",
        sync_crossed: "8dc",
        sync2: "8dd",
        repeat_one3: "8de",
        sync_crossed2: "8df",
        return: "8e0",
        return2: "8e1",
        refund: "8e2",
        history: "8e3",
        history2: "8e4",
        self_timer: "8e5",
        clock: "8e6",
        clock2: "8e7",
        clock3: "8e8",
        watch: "8e9",
        alarm2: "8ea",
        alarm_add2: "8eb",
        alarm_remove: "8ec",
        alarm_check: "8ed",
        alarm_error: "8ee",
        timer: "8ef",
        timer_crossed: "8f0",
        timer2: "8f1",
        timer_crossed2: "8f2",
        download: "8f3",
        upload: "8f4",
        download2: "8f5",
        upload2: "8f6",
        enter_up: "8f7",
        enter_down: "8f8",
        enter_left: "8f9",
        enter_right: "8fa",
        exit_up: "8fb",
        exit_down: "8fc",
        exit_left: "8fd",
        exit_right: "8fe",
        enter_up2: "8ff",
        enter_down2: "900",
        enter_vertical: "901",
        enter_left2: "902",
        enter_right2: "903",
        enter_horizontal: "904",
        exit_up2: "905",
        exit_down2: "906",
        exit_left2: "907",
        exit_right2: "908",
        cli: "909",
        bug: "90a",
        code: "90b",
        file_code: "90c",
        file_image: "90d",
        file_zip: "90e",
        file_audio: "90f",
        file_video: "910",
        file_preview: "911",
        file_charts: "912",
        file_stats: "913",
        file_spreadsheet: "914",
        link: "915",
        unlink: "916",
        link2: "917",
        unlink2: "918",
        thumbs_up: "919",
        thumbs_down: "91a",
        thumbs_up2: "91b",
        thumbs_down2: "91c",
        thumbs_up3: "91d",
        thumbs_down3: "91e",
        share: "91f",
        share2: "920",
        share3: "921",
        magnifier: "922",
        file_search: "923",
        find_replace: "924",
        zoom_in: "925",
        zoom_out: "926",
        loupe: "927",
        loupe_zoom_in: "928",
        loupe_zoom_out: "929",
        cross: "92a",
        menu: "92b",
        list: "92c",
        list2: "92d",
        list3: "92e",
        menu2: "92f",
        list4: "930",
        menu3: "931",
        exclamation: "932",
        question: "933",
        check: "934",
        cross2: "935",
        plus: "936",
        minus: "937",
        percent: "938",
        chevron_up: "939",
        chevron_down: "93a",
        chevron_left: "93b",
        chevron_right: "93c",
        chevrons_expand_vertical: "93d",
        chevrons_expand_horizontal: "93e",
        chevrons_contract_vertical: "93f",
        chevrons_contract_horizontal: "940",
        arrow_up: "941",
        arrow_down: "942",
        arrow_left: "943",
        arrow_right: "944",
        arrow_up_right: "945",
        arrows_merge: "946",
        arrows_split: "947",
        arrow_divert: "948",
        arrow_return: "949",
        expand: "94a",
        contract: "94b",
        expand2: "94c",
        contract2: "94d",
        move: "94e",
        tab: "94f",
        arrow_wave: "950",
        expand3: "951",
        expand4: "952",
        contract3: "953",
        notification: "954",
        warning: "955",
        notification_circle: "956",
        question_circle: "957",
        menu_circle: "958",
        checkmark_circle: "959",
        cross_circle: "95a",
        plus_circle: "95b",
        circle_minus: "95c",
        percent_circle: "95d",
        arrow_up_circle: "95e",
        arrow_down_circle: "95f",
        arrow_left_circle: "960",
        arrow_right_circle: "961",
        chevron_up_circle: "962",
        chevron_down_circle: "963",
        chevron_left_circle: "964",
        chevron_right_circle: "965",
        backward_circle: "966",
        first_circle: "967",
        previous_circle: "968",
        stop_circle: "969",
        play_circle: "96a",
        pause_circle: "96b",
        next_circle: "96c",
        last_circle: "96d",
        forward_circle: "96e",
        eject_circle: "96f",
        crop: "970",
        frame_expand: "971",
        frame_contract: "972",
        focus: "973",
        transform: "974",
        grid: "975",
        grid_crossed: "976",
        layers: "977",
        layers_crossed: "978",
        toggle: "979",
        rulers: "97a",
        ruler: "97b",
        funnel: "97c",
        flip_horizontal: "97d",
        flip_vertical: "97e",
        flip_horizontal2: "97f",
        flip_vertical2: "980",
        angle: "981",
        angle2: "982",
        subtract: "983",
        combine: "984",
        intersect: "985",
        exclude: "986",
        align_center_vertical: "987",
        align_right: "988",
        align_bottom: "989",
        align_left: "98a",
        align_center_horizontal: "98b",
        align_top: "98c",
        square: "98d",
        plus_square: "98e",
        minus_square: "98f",
        percent_square: "990",
        arrow_up_square: "991",
        arrow_down_square: "992",
        arrow_left_square: "993",
        arrow_right_square: "994",
        chevron_up_square: "995",
        chevron_down_square: "996",
        chevron_left_square: "997",
        chevron_right_square: "998",
        check_square: "999",
        cross_square: "99a",
        menu_square: "99b",
        prohibited: "99c",
        circle: "99d",
        radio_button: "99e",
        ligature: "99f",
        text_format: "9a0",
        text_format_remove: "9a1",
        text_size: "9a2",
        bold: "9a3",
        italic: "9a4",
        underline: "9a5",
        strikethrough: "9a6",
        highlight: "9a7",
        text_align_left: "9a8",
        text_align_center: "9a9",
        text_align_right: "9aa",
        text_align_justify: "9ab",
        line_spacing: "9ac",
        indent_increase: "9ad",
        indent_decrease: "9ae",
        text_wrap: "9af",
        pilcrow: "9b0",
        direction_ltr: "9b1",
        direction_rtl: "9b2",
        page_break: "9b3",
        page_break2: "9b4",
        sort_alpha_asc: "9b5",
        sort_alpha_desc: "9b6",
        sort_numeric_asc: "9b7",
        sort_numeric_desc: "9b8",
        sort_amount_asc: "9b9",
        sort_amount_desc: "9ba",
        sort_time_asc: "9bb",
        sort_time_desc: "9bc",
        sigma: "9bd",
        pencil_line: "9be",
        hand: "9bf",
        pointer_up: "9c0",
        pointer_right: "9c1",
        pointer_down: "9c2",
        pointer_left: "9c3",
        finger_tap: "9c4",
        fingers_tap: "9c5",
        reminder: "9c6",
        fingers_crossed: "9c7",
        fingers_victory: "9c8",
        gesture_zoom: "9c9",
        gesture_pinch: "9ca",
        fingers_scroll_horizontal: "9cb",
        fingers_scroll_vertical: "9cc",
        fingers_scroll_left: "9cd",
        fingers_scroll_right: "9ce",
        hand2: "9cf",
        pointer_up2: "9d0",
        pointer_right2: "9d1",
        pointer_down2: "9d2",
        pointer_left2: "9d3",
        finger_tap2: "9d4",
        fingers_tap2: "9d5",
        reminder2: "9d6",
        gesture_zoom2: "9d7",
        gesture_pinch2: "9d8",
        fingers_scroll_horizontal2: "9d9",
        fingers_scroll_vertical2: "9da",
        fingers_scroll_left2: "9db",
        fingers_scroll_right2: "9dc",
        fingers_scroll_vertical3: "9dd",
        border_style: "9de",
        border_all: "9df",
        border_outer: "9e0",
        border_inner: "9e1",
        border_top: "9e2",
        border_horizontal: "9e3",
        border_bottom: "9e4",
        border_left: "9e5",
        border_vertical: "9e6",
        border_right: "9e7",
        border_none: "9e8",
        ellipsis: "9e9"
    };
    latte.LinearIcon = LinearIcon;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SeparatorItem extends latte.Item {
        constructor() {
            super();
            this.element.addClass('separator');
        }
        static withTab(tab) {
            let s = new SeparatorItem();
            s.tab = tab;
            return s;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this.element.empty();
            if (latte._isString(value)) {
                var label = new latte.LabelItem();
                label.text = value;
                label.appendTo(this.element);
                this.element.addClass('with-text');
                this.element.clear();
            }
            else {
                this.element.removeClass('with-text');
            }
            this._text = value;
        }
    }
    latte.SeparatorItem = SeparatorItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ButtonGroupItem extends latte.Item {
        constructor(buttons = null) {
            super();
            this._faceVisible = true;
            this.element.addClass('button-group');
            this.checkedChanged = new latte.LatteEvent(this);
            this.buttons = new latte.Collection(this._onAddButton, this._onRemoveButton, this);
            this._direction = latte.Direction.HORIZONTAL;
            if (buttons) {
                this.buttons.addArray(buttons);
            }
        }
        _checkCheck(checkedButton) {
            if (this.multiCheck) {
                return;
            }
            this.buttons.each(function (b) {
                if (b != checkedButton) {
                    b.setChecked(false, true);
                }
                else {
                    this._checkedButton = b;
                }
            });
            this.onCheckedChanged();
        }
        _onAddButton(button) {
            var __this = this;
            this.element.append(button.element);
            button.faceVisible = this.faceVisible;
            button.checkedChanged.add(function () { __this._checkCheck(this); });
            this._update();
        }
        _onRemoveButton(button) {
            button.element.detach();
            this._update();
        }
        _update() {
            var faces = this.element.find('.latte-item.clickable');
            var maxh = 0;
            var maxw = 0;
            var i = 0;
            faces.css({
                'border-top-right-radius': 0,
                'border-bottom-right-radius': 0,
                'border-top-left-radius': 0,
                'border-bottom-left-radius': 0
            });
            if (this.buttons.count > 0) {
                if (this.direction == latte.Direction.HORIZONTAL) {
                    this.buttons.last.element.css({
                        'border-top-right-radius': 4,
                        'border-bottom-right-radius': 4
                    });
                    this.buttons.first.element.css({
                        'border-top-left-radius': 4,
                        'border-bottom-left-radius': 4
                    });
                    for (i = 0; i < this.buttons.count; i++) {
                        if (i > 0)
                            this.buttons.item(i).element.css('marginLeft', -1);
                        maxh = Math.max(maxh, this.buttons.item(i).element.height());
                    }
                    if (maxh > 0)
                        this.element.find('.latte-item > .face').height(maxh);
                    this.element.find('.latte-item.button').css('float', 'left');
                }
                else {
                    this.buttons.last.element.css({
                        'border-bottom-right-radius': 4,
                        'border-bottom-left-radius': 4
                    });
                    this.buttons.first.element.css({
                        'border-top-right-radius': 4,
                        'border-top-left-radius': 4
                    });
                    for (i = 0; i < this.buttons.count; i++) {
                        this.buttons.item(i).element.css('marginBottom', -1);
                        maxw = Math.max(maxw, this.buttons.item(i).element.width());
                    }
                    if (maxh > 0)
                        this.element.find('.latte-item > .face').width(maxw);
                    this.element.find('.latte-item.button').css('float', 'none');
                }
            }
        }
        onCheckedChanged() {
            this.checkedChanged.raise();
        }
        onEnabledChanged() {
            super.onEnabledChanged();
            var __this = this;
            this.buttons.each(function (b) {
                b.enabled = __this.enabled;
            });
        }
        onLayout() {
            super.onLayout();
            this._update();
        }
        get checkedButton() {
            return this._checkedButton;
        }
        set checkedButton(value) {
            if (!(value instanceof latte.ButtonItem))
                throw new latte.InvalidArgumentEx('value', value);
            value.checked = true;
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            this._direction = value;
            this._update();
        }
        get faceVisible() {
            return this._faceVisible;
        }
        set faceVisible(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value');
            this._faceVisible = value;
            this.buttons.each(function (b) { b.faceVisible = value; });
        }
        get multiCheck() {
            return this._multiCheck;
        }
        set multiCheck(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._multiCheck = value;
        }
    }
    latte.ButtonGroupItem = ButtonGroupItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ClickableItem extends latte.Item {
        constructor() {
            super();
            this._contextAt = null;
            this._selectable = true;
            this._defaulted = false;
            this.element.addClass('clickable');
            this.checkedChanged = new latte.LatteEvent(this);
            this.click = new latte.LatteEvent(this);
            this.faceVisibleChanged = new latte.LatteEvent(this);
            this.pressedChanged = new latte.LatteEvent(this);
            this.selectedChanged = new latte.LatteEvent(this);
            this.withContextChanged = new latte.LatteEvent(this);
            this.faceVisible = true;
            this.element
                .hover(() => {
                if (this.selectable && this.enabled) {
                    this.selected = true;
                }
            }, () => {
                if (this.selectable && this.enabled) {
                    this.selected = false;
                }
                this.pressed = false;
            })
                .mousedown(() => {
                if (this.enabled) {
                    this.pressed = true;
                }
            })
                .mouseup(() => {
                if (this.enabled) {
                    this.pressed = false;
                    this.selected = false;
                }
            })
                .click((e) => {
                if (this.enabled) {
                    this.onClick(e);
                    if (!this.clickPropagation) {
                        e.stopPropagation();
                        return false;
                    }
                }
                return undefined;
            });
        }
        getChecked() {
            return this._checked;
        }
        getContextAt() {
            return this._contextAt;
        }
        getSelected() {
            return this._selected;
        }
        onBlur() {
            super.onBlur();
            this.selected = false;
        }
        onCheckedChanged() {
            this.checkedChanged.raise();
        }
        onClick(e = null) {
            if (this.checkable) {
                this.checked = !this.checked;
            }
            this.click.raise(e);
        }
        onDefaultedChanged() {
            if (this._defaultedChanged) {
                this._defaultedChanged.raise();
            }
            if (this.defaulted) {
                this.addClass('defaulted');
            }
            else {
                this.removeClass('defaulted');
            }
        }
        onEnabledChanged() {
            super.onEnabledChanged();
            this.selected = false;
            this.pressed = false;
        }
        onFaceVisibleChanged() {
            this.faceVisibleChanged.raise();
        }
        onFocused() {
            super.onFocused();
            this.selected = true;
        }
        onPressedChanged() {
            this.pressedChanged.raise();
        }
        onSelectedChanged() {
            this.selectedChanged.raise();
        }
        onWithContextChanged() {
            this.withContextChanged.raise();
        }
        setChecked(value, silent = false) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value != this._checked;
            this._checked = value;
            if (value) {
                this.element.addClass('checked');
            }
            else {
                this.element.removeClass('checked');
            }
            if (changed && silent !== true) {
                this.onCheckedChanged();
            }
        }
        setContextAt(value) {
            this.openSide = value;
            this.flatSide = value;
            this.withContext = value !== null;
            this._contextAt = value;
        }
        setSelected(value, silent = false) {
            var changed = value != this._selected;
            this._selected = value;
            if (value) {
                this.element.addClass('selected');
            }
            else {
                this.element.removeClass('selected');
            }
            if (changed && silent !== true) {
                this.onSelectedChanged();
            }
        }
        get defaultedChanged() {
            if (!this._defaultedChanged) {
                this._defaultedChanged = new latte.LatteEvent(this);
            }
            return this._defaultedChanged;
        }
        get defaulted() {
            return this._defaulted;
        }
        set defaulted(value) {
            var changed = value !== this._defaulted;
            this._defaulted = value;
            if (changed) {
                this.onDefaultedChanged();
            }
        }
        get checkable() {
            return this._checkable;
        }
        set checkable(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._checkable = value;
        }
        get checked() {
            return this.getChecked();
        }
        set checked(value) {
            this.setChecked(value);
        }
        get clickPropagation() {
            return this._clickPropagation;
        }
        set clickPropagation(value) {
            this._clickPropagation = value;
        }
        get contextAt() {
            return this.getContextAt();
        }
        set contextAt(value) {
            this.setContextAt(value);
        }
        get faceVisible() {
            return this.getFaceVisible();
        }
        getFaceVisible() {
            return this._faceVisible;
        }
        setFaceVisible(value = false, silent = false) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value !== this._faceVisible;
            this._faceVisible = value;
            if (value) {
                this.element.addClass('with-face');
            }
            else {
                this.element.removeClass('with-face');
            }
            if (changed && silent !== true) {
                this.onFaceVisibleChanged();
            }
        }
        set faceVisible(value) {
            this.setFaceVisible(value);
        }
        get flatSide() {
            return this._flatSide;
        }
        set flatSide(value) {
            this._flatSide = value;
            this.element.removeClass('flat-bottom flat-right flat-left flat-top');
            if ((value & latte.Side.BOTTOM) == latte.Side.BOTTOM)
                this.element.addClass('flat-bottom');
            if ((value & latte.Side.RIGHT) == latte.Side.RIGHT)
                this.element.addClass('flat-right');
            if ((value & latte.Side.LEFT) == latte.Side.LEFT)
                this.element.addClass('flat-left');
            if ((value & latte.Side.TOP) == latte.Side.TOP)
                this.element.addClass('flat-top');
        }
        get openSide() {
            return this._openSide;
        }
        set openSide(value) {
            this._openSide = value;
            this.element.removeClass('open-at-bottom open-at-right open-at-left open-at-top');
            if ((value & latte.Side.BOTTOM) == latte.Side.BOTTOM)
                this.element.addClass('open-at-bottom');
            if ((value & latte.Side.RIGHT) == latte.Side.RIGHT)
                this.element.addClass('open-at-right');
            if ((value & latte.Side.LEFT) == latte.Side.LEFT)
                this.element.addClass('open-at-left');
            if ((value & latte.Side.TOP) == latte.Side.TOP)
                this.element.addClass('open-at-top');
        }
        get pressed() {
            return this._pressed;
        }
        set pressed(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value != this._pressed;
            this._pressed = value;
            if (value) {
                this.element.addClass('pressed');
            }
            else {
                this.element.removeClass('pressed');
            }
            if (changed) {
                this.onPressedChanged();
            }
        }
        get selectable() {
            return this._selectable;
        }
        set selectable(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._selectable = value;
        }
        get selected() {
            return this.getSelected();
        }
        set selected(value) {
            this.setSelected(value);
        }
        get withContext() {
            return this._withContext;
        }
        set withContext(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value != this._withContext;
            this._withContext = value;
            if (value) {
                this.element.addClass('with-context');
            }
            else {
                this.element.removeClass('with-context');
            }
            if (changed) {
                this.onWithContextChanged();
            }
        }
    }
    latte.ClickableItem = ClickableItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ButtonItem extends latte.ClickableItem {
        constructor(text = '', icon = null, click = null, tab = null) {
            super();
            this.element.addClass('button');
            latte.UiElement.disableTextSelection(this.element);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.loadItems = new latte.LatteEvent(this);
            this.itemsShown = new latte.LatteEvent(this);
            this.label = new latte.LabelItem();
            this.label.appendTo(this);
            this.element.clear();
            this.itemsEdge = latte.Side.AUTO;
            this.itemsSide = latte.Side.AUTO;
            this.direction = latte.Direction.HORIZONTAL;
            this.split = false;
            this.element.hover(() => {
                if (this.split && !this.faceVisible) {
                    this.element.addClass('with-face');
                    this.dropdown.element.addClass('with-face');
                }
            }, () => {
                if (this.split && this.contextAt == null) {
                    this.element.removeClass('with-face');
                    this.dropdown.element.removeClass('with-face');
                    this.dropdown.setSelected(false, true);
                }
            });
            this.label.descriptionChanged.add(() => { this._updateLabelFlag(); });
            this.label.iconChanged.add(() => { this._updateLabelFlag(); });
            this.label.textChanged.add(() => { this._updateLabelFlag(); });
            this.text = text;
            this.icon = icon;
            if (click)
                this.click.add(click);
            this.tab = tab;
        }
        _dropdownClick() {
            if (this.dropdownVisible && !this.split) {
                this.onClick();
            }
            if (this.split) {
                this._showOrHideItems();
            }
        }
        _dropdownPressedChanged() {
        }
        _dropdownSelectedChanged() {
            if (this.dropdownVisible && this.selected && !this.dropdown.selected) {
                this.dropdown.selected = true;
            }
            if (this.split) {
                this.setSelected(!this.dropdown.selected, true);
            }
        }
        _onAddItem(item) {
            if (this.dropdownVisible !== false) {
                this.dropdownVisible = true;
                if (this.glyph == null) {
                    this.glyph = latte.Glyph[ButtonItem.defaultGlyph];
                }
            }
            this.clickPropagation = false;
        }
        _onRemoveItem(item) {
        }
        _showOrHideItems() {
            if (this.showingItems)
                this.hideItems();
            else
                this.showItems();
        }
        _updateDropdownProperties() {
            var openSide = this.direction == latte.Direction.VERTICAL ?
                latte.Side.TOP : latte.Side.LEFT;
            this.dropdown.flatSide = openSide;
            if (this.split) {
                this.dropdown.openSide = null;
            }
            else {
                this.dropdown.openSide = openSide;
            }
        }
        _updateLabelFlag() {
            if (!this.label.icon) {
                this.element.addClass('no-icon');
            }
            else {
                this.element.removeClass('no-icon');
            }
        }
        createDropdownButton() {
            this._dropdown = new latte.ClickableItem();
            this._dropdown.appendTo(this);
            this._dropdown.visible = false;
            this._dropdown.clickPropagation = false;
            this._dropdown.selectedChanged.add(() => { this._dropdownSelectedChanged(); });
            this._dropdown.pressedChanged.add(() => { this._dropdownPressedChanged(); });
            this._dropdown.click.add(() => { this._dropdownClick(); });
        }
        getContextAt() {
            if (this.split) {
                return this.dropdown.contextAt;
            }
            else {
                return super.getContextAt();
            }
        }
        get hasItems() {
            return this.items.count > 0 || this.willLoadItems;
        }
        hideItems() {
            if (!this._itemsMenu)
                return;
            this.itemsMenu.close();
            this._itemsMenu = null;
            var item;
            while ((item = this.items.next())) {
                if (item instanceof ButtonItem)
                    item.hideItems();
            }
        }
        onClick(e = null) {
            if (!(this.hasItems && !this.split)) {
                super.onClick(e);
            }
            if (!this.split && this.hasItems) {
                this._showOrHideItems();
            }
        }
        onEnabledChanged() {
            super.onEnabledChanged();
            if (this._dropdown) {
                this.dropdown.enabled = this.enabled;
            }
        }
        onFaceVisibleChanged() {
            super.onFaceVisibleChanged();
            this.dropdown.faceVisible = this.faceVisible;
        }
        onItemsShown(menuItem) {
            this.itemsShown.raise(menuItem);
        }
        onPressedChanged() {
            super.onPressedChanged();
            if (this.dropdownVisible && !this.split && !this.contextAt) {
                this.dropdown.pressed = this.pressed;
            }
        }
        onSelectedChanged() {
            super.onSelectedChanged();
            if (this.dropdownVisible && !this.split) {
                this.dropdown.selected = this.selected;
            }
            if (this.showingItems && this.selected) {
                this.selected = false;
            }
            if (this.split) {
                if (this.selected) {
                    this.dropdown.element.addClass('with-face');
                }
                else {
                    this.dropdown.element.removeClass('with-face');
                }
            }
        }
        onWithContextChanged() {
            super.onWithContextChanged();
            if (this.dropdownVisible && !this.split) {
                this.dropdown.withContext = this.withContext;
            }
        }
        setContextAt(value) {
            if (this.split) {
                this.dropdown.contextAt = value;
                if (value === null) {
                    this.direction = this.direction;
                    if (!this.faceVisible) {
                        this.element.removeClass('with-face');
                        this.dropdown.element.removeClass('with-face');
                        this.dropdown.setSelected(false, true);
                    }
                }
            }
            else {
                super.setContextAt(value);
            }
        }
        showItems(side = null, edge = null) {
            if (this.parentIsMenu) {
                this.parentMenu.closeChildrenMenus();
            }
            else {
                latte.MenuOverlay.closeAll();
            }
            if (!side)
                side = this.itemsSide;
            if (!edge)
                edge = this.itemsEdge;
            var menu = new latte.MenuOverlay();
            this._itemsMenu = menu;
            if (this.willLoadItems) {
                this.loadItems.raise();
            }
            menu.items.addCollection(this.items);
            if (side === latte.Side.AUTO) {
                if (this.glyph && !latte._undef(latte.Side[this.glyph.name.toUpperCase()])) {
                    side = latte.Side[this.glyph.name.toUpperCase()];
                }
                else {
                    side = latte.Side.BOTTOM;
                }
            }
            if (this.split && !this.faceVisible) {
                this.element.addClass('with-face');
            }
            if (side == latte.Side.AUTO && this.split) {
                edge = latte.Side.RIGHT;
            }
            menu.showByItem(this, side, edge);
            menu.closed.add(() => {
                latte.ZIndex.removeElement(this.element);
                if (this.split && !this.faceVisible) {
                    this.element.removeClass('with-face');
                }
            });
            menu.setParentButton(this);
            latte.ZIndex.bringToFront(this.element);
            this.onItemsShown(menu);
        }
        get description() {
            return this.label.description;
        }
        set description(value) {
            this.label.description = value;
        }
        get direction() {
            return this.label.direction;
        }
        set direction(value) {
            this.label.direction = value;
            if (value == latte.Direction.VERTICAL) {
                this.element.removeClass('horizontal').addClass('vertical');
            }
            else {
                this.element.removeClass('vertical').addClass('horizontal');
            }
            this._updateDropdownProperties();
        }
        get dropdown() {
            if (!this._dropdown) {
                this._dropdown = new latte.ClickableItem();
                this._dropdown.appendTo(this);
                this._dropdown.visible = false;
                this._dropdown.selectedChanged.add(() => { this._dropdownSelectedChanged(); });
                this._dropdown.pressedChanged.add(() => { this._dropdownPressedChanged(); });
                this._dropdown.click.add(() => { this._dropdownClick(); });
            }
            return this._dropdown;
        }
        get dropdownVisible() {
            return this._dropdownVisible;
        }
        set dropdownVisible(value) {
            this._dropdownVisible = value;
            this.dropdown.visible = !!value;
            if (!!value) {
                this.element.addClass('with-dropdown');
            }
            else {
                this.element.removeClass('with-dropdown');
            }
        }
        get glyph() {
            return this._glyph;
        }
        set glyph(value) {
            if (value && !(value instanceof latte.IconItem))
                throw new latte.InvalidArgumentEx('value', value);
            this._glyph = value;
            this.dropdown.element.empty();
            if (value) {
                this.dropdown.element.append(value.element);
            }
        }
        get icon() {
            return this.label.icon;
        }
        set icon(value) {
            this.label.icon = value;
        }
        get itemsEdge() {
            return this._itemsEdge;
        }
        set itemsEdge(value) {
            this._itemsEdge = value;
        }
        get itemsMenu() {
            return this._itemsMenu;
        }
        set itemsMenu(value) {
            this._itemsMenu = value;
        }
        get itemsSide() {
            return this._itemsSide;
        }
        set itemsSide(value) {
            this._itemsSide = value;
        }
        get showingItems() {
            return this.itemsMenu ? true : false;
        }
        get split() {
            return this._split;
        }
        set split(value) {
            this._split = value;
            if (value) {
                this.element.addClass('split');
            }
            else {
                this.element.removeClass('split');
            }
            this._updateDropdownProperties();
        }
        get text() {
            return this.label.text;
        }
        set text(value) {
            this.label.text = value;
        }
        get willLoadItems() {
            return latte._isArray(this.loadItems.handlers) && this.loadItems.handlers.length ? true : false;
        }
    }
    ButtonItem.defaultGlyph = 'down';
    latte.ButtonItem = ButtonItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class PaginationItem extends latte.ButtonGroupItem {
        constructor() {
            super();
            this._page = 1;
            this._pages = 1;
            this.addClass('pagination');
            this.pageChanged = new latte.LatteEvent(this);
            this.btnCurrent = new latte.ButtonItem();
            this.btnNext = new latte.ButtonItem();
            this.btnNext.icon = latte.LinearIcon.chevron_right;
            this.btnPrevious = new latte.ButtonItem();
            this.btnPrevious.icon = latte.LinearIcon.chevron_left;
            this.btnPrevious.addClass('previous');
            this.btnCurrent.addClass('current');
            this.btnNext.addClass('next');
            this.btnCurrent.items.add(this.btnOverlay);
            this.btnCurrent.dropdownVisible = false;
            this.buttons.addArray([
                this.btnPrevious, this.btnCurrent, this.btnNext
            ]);
            this.btnNext.faceVisible = this.btnPrevious.faceVisible = this.btnCurrent.faceVisible = false;
            this.btnNext.click.add(() => { this.nextPage(); });
            this.btnPrevious.click.add(() => { this.previousPage(); });
            this.page = 1;
            this.pages = 1;
        }
        nextPage() {
            if (this.page < this.pages) {
                this.page = this.page + 1;
            }
        }
        onPageChanged() {
            this.pageChanged.raise();
        }
        previousPage() {
            if (this.page > 0) {
                this.page = this.page - 1;
            }
        }
        txtPage_enterPressed() {
            if (!(+this.txtPage.value > this.pages)) {
                if (this.txtPage.value == "" || +this.txtPage.value <= 0 || isNaN(+this.txtPage.value))
                    this.txtPage.value = this.page + "";
                this.page = parseInt(this.txtPage.value, 10);
            }
            else {
                this.txtPage.value = this.page + "";
            }
        }
        get page() {
            return this.getPage();
        }
        set page(value) {
            this.setPage(value);
        }
        getPage() {
            return this._page;
        }
        setPage(value, silent = false) {
            var changed = this._page != value;
            this._page = value;
            this.btnCurrent.text = this._page + '/' + this._pages;
            this.btnNext.enabled = this._page < this.pages;
            this.btnPrevious.enabled = this._page > 1;
            this.txtPage.enabled = this._page <= this.pages && this._page >= 1;
            if (changed && silent !== true) {
                this.onPageChanged();
            }
        }
        get pages() {
            return this._pages;
        }
        set pages(value) {
            this._pages = value;
            this.btnCurrent.text = this._page + '/' + this._pages;
            this.enabled = value > 1;
            if (this.enabled)
                this.page = this.page;
        }
        get txtPage() {
            if (!this._txtPage) {
                this._txtPage = new latte.TextboxItem();
                this._txtPage.value = this.page + "";
                this._txtPage.input.width(20);
                this._txtPage.input.height(14);
                this._txtPage.enabled = false;
                this._txtPage.enterPressed.add(this.txtPage_enterPressed, this);
                this._txtPage.element.css({ float: 'left' });
            }
            return this._txtPage;
        }
        get lblPages() {
            if (!this._lblPages) {
                this._lblPages = new latte.LabelItem(latte.strings.goToPage);
                this._lblPages.element.css({ float: 'left', paddingTop: 5, paddingRight: 5, color: 'black' });
            }
            return this._lblPages;
        }
        get btnGo() {
            if (!this._btnGo) {
                this._btnGo = new latte.ButtonItem("Ir");
                this._btnGo.removeClass('clickable');
                this._btnGo.element.css({ float: 'left' });
                this._btnGo.click.add(this.txtPage_enterPressed, this);
            }
            return this._btnGo;
        }
        get btnOverlay() {
            if (!this._btnOverlay) {
                this._btnOverlay = new latte.ButtonItem();
                this._btnOverlay.faceVisible = false;
                this._btnOverlay.removeClass('clickable');
                this._btnOverlay.height = 28;
                this._btnOverlay.label.contentElement.append(this.lblPages.element);
                this._btnOverlay.label.contentElement.append(this.txtPage.element);
                this._btnOverlay.label.contentElement.clear();
            }
            return this._btnOverlay;
        }
    }
    latte.PaginationItem = PaginationItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TabItem extends latte.ButtonItem {
        constructor(text = '', icon = null, click = null, tab = null) {
            super(text, icon, click);
            this.activeChanged = new latte.LatteEvent(this);
            this.element.addClass('tab');
            this.faceVisible = false;
            this.flatSide = latte.Side.BOTTOM;
        }
        _applyActiveProperties() {
            if (this.active) {
                this.addClass('active');
                this.openSide = this.contentSide;
            }
            else {
                this.removeClass('active');
                this.openSide = null;
            }
        }
        onActiveChanged() {
            this.activeChanged.raise();
        }
        get active() {
            return this._active;
        }
        set active(value) {
            var changed = value !== this._active;
            this._active = value;
            this._applyActiveProperties();
            if (changed) {
                this.onActiveChanged();
            }
        }
        get contentSide() {
            return this._contentSide;
        }
        set contentSide(value) {
            this._contentSide = value;
            this.flatSide = value;
            this._applyActiveProperties();
        }
    }
    latte.TabItem = TabItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ColorPicker extends latte.ItemStack {
        constructor() {
            super();
            this._color = null;
            this._swatches = [];
            var wrapper = new latte.Item();
            wrapper.element.append(this.canvas);
            this.items.add(wrapper);
            this.items.add(this.toolbar);
            this.toolbar.sideItems.addArray([
                this.lblIndicator,
                this.txtHex
            ]);
            this.color = latte.Color.transparent;
        }
        canvasMouseMove(screenX, screenY) {
            var swatch = this.swatchAt(screenX, screenY);
            if (swatch) {
            }
        }
        canvasMouseDown(screenX, screenY) {
            var swatch = this.swatchAt(screenX, screenY);
            if (swatch) {
                this.color = swatch.color;
            }
        }
        drawPalette() {
            var canvasWidth = this.canvas.width();
            var canvasHeight = this.canvas.height();
            this.context.clearRect(0, 0, canvasWidth, canvasHeight);
            var swatchSize = canvasWidth / 20;
            this._swatches = [];
            var selectedSwatch = null;
            var swatch = (x, y, color) => {
                var r = new latte.Rectangle(x * swatchSize, y * swatchSize, swatchSize, swatchSize);
                var colorObj = (color == 'transparent' ? latte.Color.transparent : latte.Color.fromHex(color));
                this.context.fillStyle = color;
                this.context.fillRect(r.left, r.top, r.width, r.height);
                var swatch = {
                    bounds: r,
                    color: colorObj
                };
                this.swatches.push(swatch);
                if (colorObj.isTransparent) {
                    this.context.lineWidth = 3;
                    this.context.strokeStyle = 'red';
                    this.context.beginPath();
                    this.context.moveTo(r.right, r.top);
                    this.context.lineTo(r.left, r.bottom);
                    this.context.stroke();
                    this.context.lineWidth = 1;
                }
                if (!selectedSwatch && colorObj.toString() == this.color.toString()) {
                    selectedSwatch = swatch;
                }
            };
            var swatchGroup = (x, y, initialRed) => {
                var startX = x;
                var startY = y;
                var colorValues = ['0', '3', '6', '9', 'C', 'F'];
                var r = colorValues[initialRed];
                var g = '0';
                var b = '0';
                for (var j = 0; j < colorValues.length; j++) {
                    b = colorValues[j];
                    for (var i = 0; i < colorValues.length; i++) {
                        g = colorValues[i];
                        swatch(startX + i, startY + j, latte.sprintf('#%s%s%s%s%s%s', r, r, g, g, b, b));
                    }
                    g = colorValues[0];
                }
            };
            swatchGroup(2, 0, 0);
            swatchGroup(8, 0, 1);
            swatchGroup(14, 0, 2);
            swatchGroup(2, 6, 3);
            swatchGroup(8, 6, 4);
            swatchGroup(14, 6, 5);
            swatch(0, 0, '#000000');
            swatch(0, 1, '#333333');
            swatch(0, 2, '#666666');
            swatch(0, 3, '#999999');
            swatch(0, 4, '#CCCCCC');
            swatch(0, 5, '#FFFFFF');
            swatch(0, 6, '#FF0000');
            swatch(0, 7, '#00FF00');
            swatch(0, 8, '#0000FF');
            swatch(0, 9, '#FFFF00');
            swatch(0, 10, '#00FFFF');
            swatch(0, 11, '#FF00FF');
            for (var i = 0; i <= 10; i++)
                swatch(1, i, '#000');
            swatch(1, 11, 'transparent');
            this.context.strokeStyle = 'black';
            var gridX = 0;
            var gridY = 0;
            for (var i = 0; i < Math.ceil(canvasWidth / swatchSize) + 1; i++) {
                this.context.beginPath();
                this.context.moveTo(i * swatchSize, 0);
                this.context.lineTo(i * swatchSize, canvasHeight);
                this.context.stroke();
            }
            for (var i = 0; i < Math.ceil(canvasHeight / swatchSize) + 1; i++) {
                this.context.beginPath();
                this.context.moveTo(0, i * swatchSize);
                this.context.lineTo(canvasWidth, i * swatchSize);
                this.context.stroke();
            }
            if (selectedSwatch) {
                this.context.lineWidth = 2;
                this.context.strokeStyle = 'white';
                this.context.strokeRect(selectedSwatch.bounds.left, selectedSwatch.bounds.top, selectedSwatch.bounds.width, selectedSwatch.bounds.height);
                this.context.lineWidth = 1;
            }
        }
        onColorChanged() {
            if (this._colorChanged) {
                this._colorChanged.raise();
            }
            this.txtHex.value = this.color.toString().toUpperCase();
            this.lblIndicator.css({ background: this.color.toString() });
            this.drawPalette();
        }
        onLayout() {
            super.onLayout();
            var swatchSize = this.element.width() / 20;
            var swatchesHeight = swatchSize * 12;
            this.canvas.attr('width', this.element.width());
            this.canvas.attr('height', swatchesHeight);
            this.drawPalette();
        }
        swatchAt(screenX, screenY) {
            var offset = this.canvas.offset();
            var x = screenX - offset.left;
            var y = screenY - offset.top;
            for (var i = 0; i < this.swatches.length; i++) {
                var colorPickerSwatch = this.swatches[i];
                if (colorPickerSwatch.bounds.contains(x, y)) {
                    return colorPickerSwatch;
                }
            }
            return null;
        }
        get colorChanged() {
            if (!this._colorChanged) {
                this._colorChanged = new latte.LatteEvent(this);
            }
            return this._colorChanged;
        }
        get canvas() {
            if (!this._canvas) {
                this._canvas = jQuery('<canvas>');
                this._canvas.mousemove((e) => { this.canvasMouseMove(e.pageX, e.pageY); });
                this._canvas.mousedown((e) => { this.canvasMouseDown(e.pageX, e.pageY); });
            }
            return this._canvas;
        }
        get lblIndicator() {
            if (!this._lblIndicator) {
                this._lblIndicator = new latte.LabelItem();
                this._lblIndicator.css({
                    border: 'solid 1px black',
                    width: 50,
                    minHeight: 25,
                    marginTop: -1,
                    marginLeft: 10
                });
            }
            return this._lblIndicator;
        }
        get toolbar() {
            if (!this._toolbar) {
                this._toolbar = new latte.Toolbar();
            }
            return this._toolbar;
        }
        get txtHex() {
            if (!this._txtHex) {
                this._txtHex = new latte.TextboxItem();
                this._txtHex.enterPressed.add(() => {
                    this.color = latte.Color.fromHex(this._txtHex.value);
                });
            }
            return this._txtHex;
        }
        get color() {
            return this._color;
        }
        set color(value) {
            var changed = value !== this._color;
            this._color = value;
            if (changed) {
                this.onColorChanged();
            }
        }
        get context() {
            if (!this._context) {
                this._context = this.canvas.get(0).getContext('2d');
            }
            return this._context;
        }
        get swatches() {
            return this._swatches;
        }
    }
    latte.ColorPicker = ColorPicker;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ConversationItem extends latte.Item {
        constructor() {
            super();
            this._allowNewComments = true;
            this._ignoreEnter = false;
            var __this = this;
            this.element.addClass('conversation');
            this.commentAdded = new latte.LatteEvent(this);
            this.pendentPagesSolicited = new latte.LatteEvent(this);
            this.commentsChanged = new latte.LatteEvent(this);
            this.comments = new latte.Collection(this._onAddComment, this._onRemoveComment, this);
            this.pendentPagesElement = $('<div>').addClass('hidden-comments').hide().appendTo(this.element);
            this.commentsElement = $('<div>').addClass('comments').appendTo(this.element);
            this.newCommentElement = $('<div>').addClass('new-comment').appendTo(this.element);
            this.setTextbox(new latte.TextboxItem());
            this.pendentPagesElement.click(function () {
                __this.onPendentPagesSolicited();
            });
        }
        setTextbox(t) {
            var replace = !!this.textbox;
            var old = this.textbox;
            this.textbox = t;
            this.textbox.multiline = true;
            this.textbox.placeholder = latte.strings.writeComment;
            this.textbox.appendTo(this.newCommentElement);
            if (replace) {
                old.element.replaceWith(this.textbox);
            }
            else {
                this.textbox.appendTo(this.newCommentElement);
            }
            this.element.clear();
            this.textbox.enterPressed.add(() => {
                if (this.ignoreEnter) {
                    return;
                }
                if (this.textbox.value.length > 0) {
                    setTimeout(() => {
                        this.onCommentAdded(this.textbox.value);
                        this.textbox.value = ('');
                    }, 100);
                }
            });
        }
        _onAddComment(comment) {
            this.commentsElement.append(comment.element);
            this.onCommentsChanged();
        }
        _onRemoveComment(comment) {
            comment.element.detach();
            this.onCommentsChanged();
        }
        onCommentAdded(text) {
            return this.commentAdded.raise(text);
        }
        onCommentsChanged() {
            this.commentsChanged.raise();
        }
        onHiddenCommentsRequested() {
            this.pendentPagesSolicited.raise();
        }
        onLayout() {
            super.onLayout();
            this.textbox.onLayout();
            this.textbox.width = this.width;
        }
        onPendentPagesSolicited() {
            this.pendentPagesSolicited.raise();
        }
        prependComment(comment) {
            this.commentsElement.prepend(comment.element);
        }
        get allowNewComments() {
            return this._allowNewComments;
        }
        set allowNewComments(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            if (value) {
                this.newCommentElement.show();
            }
            else {
                this.newCommentElement.hide();
            }
            this._allowNewComments = value;
        }
        get ignoreEnter() {
            return this._ignoreEnter;
        }
        set ignoreEnter(value) {
            this._ignoreEnter = value;
        }
        get pendentPages() {
            return this._pendentPages;
        }
        set pendentPages(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._pendentPages = value;
            if (value <= 0) {
                this.pendentPagesElement.hide();
            }
            else {
                this.pendentPagesElement.show();
                this.pendentPagesElement.text(latte.sprintf(latte.strings.showMoreCommentsS, value));
            }
            this._pendentPages = value;
        }
    }
    latte.ConversationItem = ConversationItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DateItem extends latte.Item {
        constructor() {
            super();
            this._columns = 1;
            this._draggingSelection = null;
            this._rows = 1;
            this.element.addClass('date');
            this.selectionChanged = new latte.LatteEvent(this);
            this.selectionEndChanged = new latte.LatteEvent(this);
            this.selectionStartChanged = new latte.LatteEvent(this);
            this.selectionModeChanged = new latte.LatteEvent(this);
            this.selectionStart = latte.DateTime.today;
        }
        _createMonth(year, month) {
            if (year < 0)
                throw new latte.InvalidArgumentEx('year');
            if (month < 1 || month > 12)
                throw new latte.InvalidArgumentEx('year');
            var __this = this;
            var i = 0, j = 0;
            var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            var monthNames = "january,february,march,april,may,june,july,august,september,october,november,december".split(',');
            var container = $('<div>').addClass('month');
            var monthName = latte.strings[monthNames[month - 1]] + ' ' + year;
            var table = $('<table>').addClass('month').appendTo(container);
            var tr = null;
            var today = latte.DateTime.today;
            var monthDate = new latte.DateTime(year, month, 1);
            var firstDay = monthDate.addDays(monthDate.dayOfWeek * -1);
            var cur = firstDay.date;
            tr = $('<tr>').appendTo(table);
            $('<td>').addClass('previous').appendTo(tr);
            let monthNameEl = $('<td>', { colspan: 5 }).addClass('month-name').text(monthName).appendTo(tr);
            monthNameEl.click(() => {
                let newYear = prompt(latte.strings.jumpToYear, String(year));
                let parsedYear = parseInt(newYear, 10);
                if (!isNaN(parsedYear)) {
                    this.selectionStart = new latte.DateTime(parsedYear, month);
                    this.selectionEnd = this.selectionStart;
                }
            });
            $('<td>').addClass('next').appendTo(tr);
            tr = $('<tr>').addClass('day-names').appendTo(table);
            for (i = 0; i < 7; i++)
                tr.append($('<td>')
                    .addClass('day-name')
                    .text(latte.strings[(dayNames[i]) + 'Short']));
            for (i = 0; i < 6; i++) {
                tr = $('<tr>').appendTo(table);
                for (j = 0; j < 7; j++) {
                    var cell = $('<td>');
                    var sel = new latte.SelectableItem();
                    var grayed = cur.month != monthDate.month;
                    sel.element.append($('<span>').text(cur.day.toString()));
                    sel.element.appendTo(cell);
                    sel.tag = cur;
                    sel.element.mousedown(function (e) { __this._dayMouseDown(e, $(this).data('instance')); });
                    sel.element.mousemove(function (e) { __this._dayMouseMove(e, $(this).data('instance')); });
                    sel.element.mouseup(function (e) { __this._dayMouseUp(e, $(this).data('instance')); });
                    cell.addClass('day date-' + cur.year + '-' + cur.month + '-' + cur.day);
                    cell.appendTo(tr);
                    if (cur.compareTo(today) === 0) {
                        cell.addClass('today');
                    }
                    if (grayed) {
                        cell.addClass('grayed');
                        if (cur.compareTo(monthDate) < 1) {
                            cell.addClass('before');
                        }
                        else {
                            cell.addClass('after');
                        }
                    }
                    cur = cur.addDays(1);
                }
            }
            return container;
        }
        _dayMouseDown(e, day) {
            var daytag = day.tag;
            switch (this._selectionMode) {
                case latte.DateSelectionMode.WORKWEEK:
                    var monday = daytag.addDays(-daytag.dayOfWeek + 1);
                    var friday = monday.addDays(4);
                    this.setSelectionRange(monday, friday, false, false);
                    break;
                case latte.DateSelectionMode.WEEK:
                    var sunday = daytag.addDays(-daytag.dayOfWeek);
                    var saturday = monday.addDays(6);
                    this.setSelectionRange(monday, friday, false, false);
                    break;
                case latte.DateSelectionMode.MONTH:
                    var first = new latte.DateTime(daytag.year, daytag.month, 1);
                    var last = first.addDays(latte.DateTime.daysInMonth(first.year, first.month) - 1);
                    this.setSelectionRange(first, last, false, false);
                    break;
                default:
                    this.setSelectionRange(daytag, daytag, false, false);
                    break;
            }
            this._draggingSelection = daytag;
        }
        _dayMouseMove(e, day) {
            if (this._draggingSelection !== null) {
                this.setSelectionRange(this._draggingSelection, day.tag, false, false);
                this.setSelectionRange(this._draggingSelection, day.tag, false, false);
                this.selectionMode = latte.DateSelectionMode.MANUAL;
            }
        }
        _dayMouseUp(e, day) {
            if (this._draggingSelection !== null) {
                this._draggingSelection = null;
                this.setSelectionRange(this.selectionStart, this.selectionEnd, false, true);
            }
        }
        _selectDay(date) {
            this.element.find('td.date-' + date.year + '-' + date.month + '-' + date.day + ' > .latte-item.selectable').addClass('selected');
        }
        getSelectionStart() {
            return this._selectionStart;
        }
        isOnDisplay(date) {
            return this.element.find('td.date-' + date.year + '-' + date.month + '-' + date.day + ':not(.grayed)').length > 0;
        }
        onSelectionChanged() {
            this.selectionChanged.raise();
        }
        onSelectionEndChanged() {
            this.selectionEndChanged.raise();
        }
        onSelectionModeChanged() {
            this.selectionModeChanged.raise();
        }
        onSelectionStartChanged() {
            this.selectionStartChanged.raise();
        }
        getSelectionEnd() {
            return this._selectionEnd;
        }
        setSelectionEnd(value = null, raiseEvent = false) {
            var changed = this._selectionEnd ? this._selectionEnd.compareTo(value) != 0 : true;
            if (changed && !(raiseEvent === false)) {
                this.setSelectionRange(this._selectionStart ? this._selectionStart : value, value);
                this.onSelectionEndChanged();
                this.onSelectionChanged();
            }
            this._selectionEnd = value;
        }
        setSelectionRange(start, end, rebuild = false, raiseEvents = false) {
            if (!(start instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('start');
            if (!(end instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('end');
            if (start.compareTo(end) > 0) {
                var tmp = start;
                start = end;
                end = tmp;
            }
            var cur = start.date;
            var sel = null;
            if (!this.isOnDisplay(start) || rebuild === true) {
                this.setViewStart(start);
            }
            this.unselectAll();
            while (cur.compareTo(end) <= 0) {
                this._selectDay(cur);
                cur = cur.addDays(1);
            }
            if (latte._undef(raiseEvents)) {
                var changes = false;
                if (this._selectionStart && start.compareTo(this._selectionStart) != 0) {
                    changes = true;
                    this._selectionStart = start;
                    this.onSelectionStartChanged();
                }
                if (this._selectionEnd && end.compareTo(this._selectionEnd) != 0) {
                    changes = true;
                    this._selectionEnd = end;
                    this.onSelectionEndChanged();
                }
                if (changes) {
                    this.onSelectionChanged();
                }
            }
            else {
                this._selectionStart = start;
                this._selectionEnd = end;
                if (raiseEvents === true) {
                    this.onSelectionStartChanged();
                    this.onSelectionEndChanged();
                    this.onSelectionChanged();
                }
            }
        }
        setSelectionStart(value = null, raiseEvent = true) {
            var changed = this._selectionStart ? this._selectionStart.compareTo(value) != 0 : true;
            if (changed && raiseEvent !== false) {
                this.setSelectionRange(value, this._selectionEnd ? this._selectionEnd : value);
                this.onSelectionStartChanged();
                this.onSelectionChanged();
            }
            if (this._selectionEnd === null)
                this._selectionEnd = value;
            this._selectionStart = value;
        }
        setViewStart(date) {
            let i = 0, j = 0;
            let curMonth = new latte.DateTime(date.year, date.month, 1);
            let start = this._selectionStart;
            let end = this._selectionEnd;
            this.element.empty();
            let months = $('<table>').addClass('months').appendTo(this.element);
            for (i = 0; i < this.rows; i++) {
                var row = $('<tr>').appendTo(months);
                for (j = 0; j < this.columns; j++) {
                    var cell = $('<td>').appendTo(row);
                    var month = this._createMonth(curMonth.year, curMonth.month).appendTo(cell);
                    if (!(j == 0 && i == 0))
                        month.find('.grayed.before').addClass('hidden');
                    if (!(j == this.columns - 1 && i == this.rows - 1))
                        month.find('.grayed.after').addClass('hidden');
                    curMonth = curMonth.addMonths(1);
                }
            }
            let prev = new latte.ButtonItem();
            prev.faceVisible = false;
            prev.icon = latte.LinearIcon.chevron_left;
            prev.clickPropagation = false;
            let next = new latte.ButtonItem();
            next.faceVisible = false;
            next.icon = latte.LinearIcon.chevron_right;
            next.clickPropagation = false;
            months.find('table.month').first().find('td.previous').append(prev.element);
            months.find('tr').first().find('table.month').last().find('td.next').append(next.element);
            prev.click.add(() => { this.viewPrevious(); });
            next.click.add(() => { this.viewNext(); });
            this.table = months;
            let days = start && end ? end.subtractDate(start).totalDays + 1 : 0;
            for (i = 0; i < days; i++)
                this._selectDay(start.addDays(i));
        }
        unselectAll() {
            this.element.find('.selectable').removeClass('selected');
        }
        viewNext() {
            this.setViewStart(this.viewStart.addMonths(this.rows * this.columns));
        }
        viewPrevious() {
            this.setViewStart(this.viewStart.addMonths(this.rows * this.columns * -1));
        }
        get columns() {
            return this._columns;
        }
        set columns(value) {
            if (value < 1)
                throw new latte.InvalidArgumentEx('value');
            this._columns = value;
            this.setSelectionRange(this.selectionStart, this.selectionEnd, true);
        }
        get monthSize() {
            var m = this.element.find('table.month').first();
            return {
                width: m.width(),
                height: m.height()
            };
        }
        get rows() {
            return this._rows;
        }
        set rows(value) {
            if (value < 1)
                throw new latte.InvalidArgumentEx('value');
            this._rows = value;
            this.setSelectionRange(this.selectionStart, this.selectionEnd, true);
        }
        get selectionEnd() {
            return this.getSelectionEnd();
        }
        set selectionEnd(value) {
            this.setSelectionEnd(value);
        }
        get selectionMode() {
            return this._selectionMode;
        }
        set selectionMode(value) {
            var start = this.selectionStart || latte.DateTime.today;
            var first = new latte.DateTime(start.year, start.month, 1);
            var sunday = start.addDays(-start.dayOfWeek);
            var monday = sunday.addDays(1);
            switch (value) {
                case latte.DateSelectionMode.DAY:
                    this.setSelectionRange(start, start);
                    break;
                case latte.DateSelectionMode.WEEK:
                    this.setSelectionRange(sunday, sunday.addDays(6));
                    break;
                case latte.DateSelectionMode.WORKWEEK:
                    this.setSelectionRange(monday, monday.addDays(4));
                    break;
                case latte.DateSelectionMode.MONTH:
                    this.setSelectionRange(first, first.addDays(latte.DateTime.daysInMonth(first.year, first.month) - 1));
                    break;
            }
            this._selectionMode = value;
            this.onSelectionModeChanged();
        }
        get selectionStart() {
            return this.getSelectionStart();
        }
        set selectionStart(value) {
            this.setSelectionStart(value);
        }
        get viewEnd() {
            return this.element.find('td.day').last().children().first().data('instance').tag;
        }
        get viewStart() {
            return this.element.find('td.day:not(.grayed)').first().children().first().data('instance').tag;
        }
    }
    latte.DateItem = DateItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Ribbon extends latte.Item {
        constructor() {
            super();
            this._itemsInGroup = 2;
            this.addClass('ribbon');
            var ribbon = this;
            this.collapsedChanged = new latte.LatteEvent(this);
            this.selectedTabChanged = new latte.LatteEvent(this);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.tabs = new latte.Collection(this._onAddTab, this._onRemoveTab, this);
            this.tabsElement = $('<div>').addClass('tabs').appendTo(this.element);
            this.face = $('<div>').addClass('face').appendTo(this.element);
            this.itemsContainer = $('<div>').addClass('items-container').appendTo(this.face);
            this.startButton = new latte.ButtonItem();
            this.startButton.appendTo(this.tabsElement);
            this.startButton.text = ("Untitled");
            this.startButton.dropdownVisible = false;
            this.startButton.addClass('start-button');
            this.collapseButton = new latte.ButtonItem();
            this.collapseButton.appendTo(this.element);
            this.collapseButton.faceVisible = false;
            this.collapseButton.text = null;
            this.collapseButton.icon = latte.Glyph.collapseRibbon;
            this.collapseButton.click.add(() => { this.collapsed = !this.collapsed; });
            this.collapseButton.addClass('collapse');
            this.face.mouseleave(() => {
                if (this.collapsed) {
                    this.faceVisible = false;
                }
            });
            this.tabsElement.height(this.startButton.element.height());
            latte.UiElement.disableTextSelection(this.element);
        }
        _addToFace(item) {
            if (this._goesWrapped(item)) {
                this._addWrappedItem(item);
            }
            else {
                item.appendTo(this.itemsContainer);
                this._cutLastWrapper();
            }
        }
        _cutLastWrapper() {
            if (this._lastWrapper) {
                var ch = this._lastWrapper.children();
                if (ch.length == 2) {
                    this._lastWrapper.css('paddingTop', 13);
                }
                else if (ch.length == 1) {
                    this._lastWrapper.css('paddingTop', 20);
                }
            }
            this._lastWrapper = null;
        }
        _addWrappedItem(item) {
            if (!this._lastWrapper || (this._lastWrapper && this._lastWrapper.children().length == this.itemsInGroup)) {
                if (this._lastWrapper) {
                    this._cutLastWrapper();
                }
                this._lastWrapper = $('<div>')
                    .addClass('ribbon-wrapper')
                    .appendTo(this.itemsContainer);
            }
            item.appendTo(this._lastWrapper);
        }
        _clearTabsMarks() {
            var tab;
            while ((tab = this.tabs.next())) {
                tab.withContext = (false);
                tab.openSide = (null);
                tab.faceVisible = (false);
            }
        }
        _getItemTab(item) {
            var t = null;
            if (typeof item.tab === null) {
                console.warn("The item must have 'tab' property: ");
                latte.log(item);
            }
            else if (item.tab instanceof latte.ButtonItem) {
                t = item.tab;
            }
            else if (!isNaN(item.tab)) {
                t = this.tabs.item(item.tab);
            }
            return t;
        }
        _goesWrapped(item) {
            if (item instanceof latte.SeparatorItem) {
                return false;
            }
            else if (item instanceof latte.ButtonItem) {
                return item.direction != latte.Direction.VERTICAL;
            }
            else {
                return true;
            }
        }
        _onAddItem(item) {
            if (!item.tab)
                console.warn("The item must have 'tab' property: " + item);
            if (item instanceof latte.ButtonItem) {
                var b = item;
                b.faceVisible = false;
                b.description = null;
                if (b.icon && b.icon.size == 32) {
                    b.direction = latte.Direction.VERTICAL;
                }
            }
            if (this._getItemTab(item) === this.selectedTab) {
                this._addToFace(item);
            }
        }
        _onAddTab(tab) {
            tab.appendTo(this.tabsElement);
            tab.click.add(() => { this.selectedTab = tab; });
            this.onLayout();
        }
        _onRemoveItem(item) {
            if (this._getItemTab(item) === this.selectedTab) {
                item.element.detach();
            }
        }
        _onRemoveTab(tab) {
            tab.element.detach();
        }
        addTab(text) {
            var t = new latte.TabItem();
            t.text = text;
            this.tabs.add(t);
            return t;
        }
        addSeparator(tab) {
            var s = new latte.SeparatorItem();
            s.tab = tab;
            this.items.add(s);
        }
        onCollapsedChanged() {
            this.collapsedChanged.raise();
        }
        onLayout() {
            super.onLayout();
            if (this.tabs.count > 0) {
                this.tabsElement.height(this.tabs.first.element.outerHeight() - 1);
            }
            else {
                this.tabsElement.height(this.startButton.height);
            }
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].onLayout();
            }
        }
        onSelectedTabChanged() {
            this.selectedTabChanged.raise();
        }
        get collapsed() {
            return this.element.hasClass('collapsed');
        }
        set collapsed(value) {
            if (value) {
                this.addClass('collapsed');
                this.faceVisible = false;
                this.collapseButton.checked = true;
                this._clearTabsMarks();
            }
            else {
                this.removeClass('collapsed');
                this.collapseButton.checked = false;
                this.selectedTab = this.selectedTab;
                this.face.show().css('opacity', 1);
            }
            this.onCollapsedChanged();
        }
        get faceVisible() {
            return this.face.is(':visible');
        }
        set faceVisible(value) {
            if (!this.collapsed)
                return;
            if (value) {
                this.face.show().animate({ top: this.tabsElement.outerHeight(), opacity: 1 }, 100, 'swing', () => { this.onLayout(); });
                this.addClass('face-visible');
                this.removeClass('face-hidden');
            }
            else {
                this._clearTabsMarks();
                this.face.animate({ top: '-=50', opacity: 0 }, 100, 'swing', () => { this.face.hide(); this.onLayout(); });
                this.removeClass('face-visible');
                this.addClass('face-hidden');
            }
        }
        get itemsInGroup() {
            return this._itemsInGroup;
        }
        set itemsInGroup(value) {
            this._itemsInGroup = value;
        }
        get selectedTab() {
            return this._selectedTab;
        }
        set selectedTab(tab) {
            if (!(tab instanceof latte.ButtonItem))
                throw new latte.InvalidArgumentEx('tab', tab);
            this._clearTabsMarks();
            tab.contextAt = latte.Side.BOTTOM;
            this.itemsContainer.children().detach();
            this.itemsContainer.empty();
            var item;
            while ((item = this.items.next())) {
                if (this._getItemTab(item) === tab) {
                    this._addToFace(item);
                }
            }
            this._cutLastWrapper();
            var changed = this._selectedTab !== tab;
            this._selectedTab = tab;
            if (this.collapsed) {
                this.faceVisible = true;
            }
            if (changed) {
                this.onSelectedTabChanged();
            }
        }
    }
    latte.Ribbon = Ribbon;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SelectableStack extends latte.ItemStack {
        constructor() {
            super();
            this._selectedItem = null;
            this.element.addClass('selectable');
        }
        clearSelection() {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i] instanceof latte.SelectableItem) {
                    this.items[i].selected = false;
                }
            }
            this._selectedItem = null;
            this.onSelectedItemChanged();
        }
        onAddItem(item) {
            super.onAddItem(item);
            if (item instanceof latte.SelectableItem) {
                item.selectedChanged.add(() => {
                    if (item.selected) {
                        this.selectedItem = item;
                    }
                });
            }
        }
        onSelectedItemChanged() {
            if (this._selectedItemChanged) {
                this._selectedItemChanged.raise();
            }
            this.items.each(item => {
                if (item instanceof latte.SelectableItem) {
                    item.selected = this.selectedItem == item;
                }
            });
        }
        selectNextItem() {
            let index = 0;
            let current = this.selectedItemIndex;
            if (current < this.items.length - 1 && current >= 0) {
                index = current + 1;
            }
            else if (current < 0) {
                index = 0;
            }
            else {
                index = this.items.length - 1;
            }
            this.selectedItem = this.items[index];
        }
        selectPreviousItem() {
            let index = 0;
            if (this.selectedItemIndex > 0) {
                index = this.selectedItemIndex - 1;
            }
            else {
                index = 0;
            }
            this.selectedItem = this.items[index];
        }
        get selectedItemChanged() {
            if (!this._selectedItemChanged) {
                this._selectedItemChanged = new latte.LatteEvent(this);
            }
            return this._selectedItemChanged;
        }
        get selectedItem() {
            return this._selectedItem;
        }
        set selectedItem(value) {
            let changed = value !== this._selectedItem;
            this._selectedItem = value;
            if (changed) {
                this.onSelectedItemChanged();
            }
        }
        get selectedItemIndex() {
            if (!this.selectedItem) {
                return -1;
            }
            return this.items.indexOf(this.selectedItem);
        }
    }
    latte.SelectableStack = SelectableStack;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TabContainer extends latte.ItemStack {
        constructor() {
            super();
            this.element.addClass('tab-container');
            this.tabToolbar = new latte.TabToolbar();
            this.tabToolbar.faceVisible = false;
            this.tabs = new latte.Collection(this.onTabAdded, this.onTabRemoved, this);
            this.content = new latte.Collection(this.onContentAdded, this.onContentRemoved, this);
            this.selectedTabChanged = new latte.LatteEvent(this);
            this.tabToolbar.selectedTabChanged.add(() => {
                this.onSelectedTabChanged();
            });
        }
        updateVisibility() {
            var index = this.tabs.indexOf(this.selectedTab);
            var item = this.content[index];
            for (var i = 0; i < this.content.length; i++) {
                var checker = this.content[i];
                if (checker === item) {
                    checker.element.show();
                }
                else {
                    checker.element.hide();
                }
            }
        }
        onTabAdded(tab) {
            this.tabToolbar.tabs.add(tab);
            this.onLayout();
        }
        onTabRemoved(tab) {
            this.tabToolbar.tabs.remove(tab);
        }
        onContentAdded(item) {
            this.contentSide = this.contentSide;
            item.addClass('content');
        }
        onContentRemoved(item) {
        }
        onSelectedTabChanged() {
            this.updateVisibility();
            this.selectedTabChanged.raise();
        }
        get selectedTab() {
            return this.tabToolbar.selectedTab;
        }
        set selectedTab(value) {
            this.tabToolbar.selectedTab = value;
            this.onSelectedTabChanged();
        }
        get contentSide() {
            return this.tabToolbar.contentSide;
        }
        set contentSide(value) {
            this.tabToolbar.contentSide = value;
            this.element.removeClass('content-at-top content-at-bottom content-at-left content-at-right');
            switch (value) {
                case latte.Side.TOP:
                    this.element.addClass('content-at-top');
                    break;
                case latte.Side.BOTTOM:
                    this.element.addClass('content-at-bottom');
                    break;
                case latte.Side.LEFT:
                    this.element.addClass('content-at-left');
                    break;
                case latte.Side.RIGHT:
                    this.element.addClass('content-at-right');
                    break;
            }
            this.items.clear();
            var addViews = () => {
                for (var i = 0; i < this.content.length; i++) {
                    this.items.add(this.content[i]);
                }
            };
            if (value == latte.Side.BOTTOM) {
                this.items.add(this.tabToolbar);
                addViews();
            }
            else if (value == latte.Side.TOP) {
                addViews();
                this.items.add(this.tabToolbar);
            }
            this.updateVisibility();
        }
    }
    latte.TabContainer = TabContainer;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Toolbar extends latte.Item {
        constructor() {
            super();
            this.element.addClass('toolbar');
            latte.UiElement.disableTextSelection(this.element);
            this.itemsChanged = new latte.LatteEvent(this);
            this.sideItemsChanged = new latte.LatteEvent(this);
            this.faceElement = $('<div>').addClass('face').appendTo(this.element);
            this.holderElement = $('<div>').addClass('holder').appendTo(this.faceElement);
            this.itemsElement = $('<div>').addClass('items-container').appendTo(this.holderElement);
            this.sideItemsElement = $('<div>').addClass('side-items-container').appendTo(this.holderElement);
            this.faceElement.clear();
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.sideItems = new latte.Collection(this._onAddSideItem, this._onRemoveSideItem, this);
            this.direction = latte.Direction.HORIZONTAL;
            this.faceVisible = true;
        }
        _onAddItem(item) {
            if (item instanceof latte.ButtonItem) {
                item.faceVisible = false;
            }
            item.appendTo(this.itemsElement);
            if (this.padding)
                item.element.css('marginRight', this.padding);
            this.onItemsChanged();
        }
        _onAddSideItem(item) {
            if (item instanceof latte.ButtonItem) {
                item.faceVisible = false;
            }
            item.appendTo(this.sideItemsElement);
            if (this.padding)
                item.element.css('marginRight', this.padding);
            this.onSideItemsChanged();
        }
        _onRemoveItem(item) {
            item.element.detach();
            this.onItemsChanged();
        }
        _onRemoveSideItem(item) {
            item.element.detach();
            this.onSideItemsChanged();
        }
        onItemsChanged() {
            this.itemsChanged.raise();
        }
        onSideItemsChanged() {
            this.sideItemsChanged.raise();
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            var changed = value !== this._direction;
            this._direction = value;
            if (changed) {
                if (value === latte.Direction.HORIZONTAL) {
                    this.removeClass('vertical');
                    this.addClass('horizontal');
                }
                else {
                    this.removeClass('horizontal');
                    this.addClass('vertical');
                }
                this.onLayout();
            }
        }
        get faceVisible() {
            return this._faceVisible;
        }
        set faceVisible(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            if (value)
                this.element.addClass('with-face');
            else
                this.element.removeClass('with-face');
            this._faceVisible = value;
        }
        get holderWide() {
            return this._holderWide;
        }
        set holderWide(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value');
            if (value > 0) {
                this.holderElement.width(value);
            }
            else {
                this.css('width', '');
            }
            this._holderWide = value;
        }
        get padding() {
            return this._padding;
        }
        set padding(value) {
            if (value == null)
                value = 0;
            this._padding = value;
            this.itemsElement.children().css('marginRight', value);
            this.itemsElement.css('paddingLeft', value);
            this.sideItemsElement.children().css('marginLeft', value);
            this.sideItemsElement.css('paddingRight', value);
        }
    }
    latte.Toolbar = Toolbar;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TabToolbar extends latte.Toolbar {
        constructor() {
            super();
            this.element.addClass('tab');
            this.tabs = new latte.Collection(this.onTabAdded, this.onTabRemoved, this);
            this.selectedTabChanged = new latte.LatteEvent(this);
            this.contentSide = latte.Side.BOTTOM;
        }
        onSelectedTabChanged() {
            this.selectedTabChanged.raise();
        }
        onTabAdded(tab) {
            this.items.add(tab);
            tab.contentSide = this.contentSide;
            tab.click.add(() => {
                this.selectedTab = tab;
            });
        }
        onTabRemoved(tab) {
            this.items.remove(tab);
        }
        get contentSide() {
            return this._contentSide;
        }
        set contentSide(value) {
            this._contentSide = value;
            for (var i = 0; i < this.tabs.length; i++) {
                this.tabs[i].contentSide = value;
            }
            this.element.removeClass('content-at-top content-at-bottom content-at-left content-at-right');
            switch (value) {
                case latte.Side.TOP:
                    this.element.addClass('content-at-top');
                    break;
                case latte.Side.BOTTOM:
                    this.element.addClass('content-at-bottom');
                    break;
                case latte.Side.LEFT:
                    this.element.addClass('content-at-left');
                    break;
                case latte.Side.RIGHT:
                    this.element.addClass('content-at-right');
                    break;
            }
        }
        get selectedTab() {
            return this._selectedTab;
        }
        set selectedTab(value) {
            var changed = value !== this._selectedTab;
            this._selectedTab = value;
            if (changed) {
                for (var i = 0; i < this.tabs.length; i++) {
                    var tab = this.tabs[i];
                    if (tab !== value) {
                        tab.active = false;
                    }
                }
                value.active = true;
                this.onSelectedTabChanged();
            }
        }
    }
    latte.TabToolbar = TabToolbar;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ViewItem extends latte.Item {
        constructor(view = null) {
            super();
            this.element.addClass('view');
            if (view)
                this.view = view;
        }
        get autoHeight() {
            return this._autoHeight;
        }
        set autoHeight(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._autoHeight = value;
            if (value) {
                this.view.element.css('bottom', 'inherit');
                this.view.container.css('bottom', 'inherit');
            }
            else {
                this.view.element.css('bottom', '');
                this.view.container.css('bottom', '');
            }
        }
        get height() {
            return this.element.height();
        }
        set height(value) {
            this.element.height(value);
        }
        get view() {
            return this._view;
        }
        set view(value) {
            this._view = value;
            this.element.empty();
            value.appendTo(this.element);
        }
    }
    latte.ViewItem = ViewItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class LabelItem extends latte.Item {
        constructor(text = '', description = '', icon = null, title = 0) {
            super();
            this._iconAndTextPadding = 0;
            this._preformatted = true;
            this._text = '';
            this.element.addClass('label');
            this.descriptionChanged = new latte.LatteEvent(this);
            this.iconChanged = new latte.LatteEvent(this);
            this.navigate = new latte.LatteEvent(this);
            this.iconElement = $('<div>').addClass('icon').appendTo(this.element);
            this.contentElement = $('<div>').addClass('label-content').appendTo(this.element);
            this.textElement = $('<div>').addClass('text').appendTo(this.contentElement);
            this.descriptionElement = $('<div>').addClass('description').appendTo(this.contentElement);
            this.element.clear();
            this.direction = latte.Direction.HORIZONTAL;
            this.element.click(() => {
                if (this.linkStyle) {
                    this.onNavigate();
                }
            });
            this.text = text;
            this.description = description;
            this.icon = icon;
            this.title = title;
        }
        _updateWhitespace() {
            var p = this.preformatted;
            var w = this.textWrap;
            if (p) {
                if (w) {
                    this.contentElement.css('white-space', 'pre-wrap');
                }
                else {
                    this.contentElement.css('white-space', 'pre');
                }
            }
            else {
                this.contentElement.css('whiteSpace', 'normal');
            }
        }
        updateIconAndTextFlag() {
            if (this.icon instanceof latte.IconItem && (this.text || this.description || this.textElement.children().length > 0 || this.descriptionElement.children().length > 0)) {
                this.element.addClass('icon-and-text');
            }
            else {
                this.element.removeClass('icon-and-text');
            }
            if (this.element.hasClass('icon-and-text') && this.direction == latte.Direction.HORIZONTAL && this.icon) {
                this.contentElement.css({ marginLeft: this.icon.size + this.iconAndTextPadding });
            }
            else {
                this.contentElement.css({ marginLeft: '' });
            }
        }
        onDescriptionChanged() {
            this.descriptionChanged;
        }
        onIconChanged() {
            this.iconChanged.raise();
        }
        onNavigate() {
            this.navigate.raise();
        }
        onTextChanged() {
            if (this._textChanged) {
                this._textChanged.raise();
            }
            this.textElement.html(this.text || '');
            this.updateIconAndTextFlag();
        }
        get textChanged() {
            if (!this._textChanged) {
                this._textChanged = new latte.LatteEvent(this);
            }
            return this._textChanged;
        }
        get description() {
            return this.descriptionElement.html();
        }
        set description(value) {
            this.descriptionElement.html(value);
            this.updateIconAndTextFlag();
            this.onDescriptionChanged();
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            if (value != latte.Direction.VERTICAL && value != latte.Direction.HORIZONTAL)
                throw new latte.InvalidArgumentEx('value', value);
            if (value == latte.Direction.VERTICAL) {
                this.element.removeClass('horizontal').addClass('vertical');
            }
            else {
                this.element.removeClass('vertical').addClass('horizontal');
            }
            this._direction = value;
            this.updateIconAndTextFlag();
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            if (value != null && !(value instanceof latte.IconItem))
                throw new latte.InvalidArgumentEx('value', value);
            this._icon = value;
            this.iconElement.empty();
            if (value) {
                this.iconElement.append(value.element);
            }
            this.updateIconAndTextFlag();
            this.onIconChanged();
        }
        get iconAndTextPadding() {
            return this._iconAndTextPadding;
        }
        set iconAndTextPadding(value) {
            this._iconAndTextPadding = value;
            this.updateIconAndTextFlag();
        }
        get linkStyle() {
            return this._linkStyle;
        }
        set linkStyle(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value');
            this._linkStyle = value;
            if (value)
                this.addClass('link-style');
            else
                this.removeClass('link-style');
        }
        get preformatted() {
            return this._preformatted;
        }
        set preformatted(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._preformatted = value;
            this._updateWhitespace();
        }
        get text() {
            return this._text;
        }
        set text(value) {
            let changed = value !== this._text;
            this._text = value;
            if (changed) {
                this.onTextChanged();
            }
        }
        get textWrap() {
            return this._textWrap;
        }
        set textWrap(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._textWrap = value;
            this._updateWhitespace();
        }
        get title() {
            return this._title;
        }
        set title(value) {
            if (!latte._isNumber(value) || (value < 0 && value > 5))
                throw new latte.InvalidArgumentEx('value');
            this.element.removeClass('title-1 title-2 title-3');
            if (value > 0)
                this.element.addClass('title-' + value);
            this._title = value;
        }
    }
    latte.LabelItem = LabelItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ColumnHeader extends latte.LabelItem {
        constructor(text = '', width = 150) {
            super();
            this.mouseDownRect = null;
            this.mouseDownPoint = null;
            this.bodyMouseMoveHandler = null;
            this.bodyMouseUpHandler = null;
            this._sortable = false;
            this._width = 0;
            this.element.addClass('column-header');
            this.element.append(this.resizer);
            this.element.click(() => { if (this.sortable)
                this.onSortRequested(); });
            this.width = width;
            this.text = text;
        }
        resizer_MouseDown(e) {
            this.addClass('resizing');
            this.mouseDownPoint = new latte.Point(e.clientX, e.clientY);
            this.mouseDownRect = this.element.get(0).getBoundingClientRect();
            this.bodyMouseMoveHandler = (e) => this.body_MouseMove(e);
            this.bodyMouseUpHandler = (e) => this.body_MouseUp(e);
            document.body.addEventListener('mousemove', this.bodyMouseMoveHandler);
            document.body.addEventListener('mouseup', this.bodyMouseUpHandler);
        }
        body_MouseUp(e) {
            this.removeClass('resizing');
            document.body.removeEventListener('mousemove', this.bodyMouseMoveHandler);
            document.body.removeEventListener('mouseup', this.bodyMouseUpHandler);
        }
        body_MouseMove(e) {
            e.preventDefault();
            this.width = e.clientX - this.mouseDownRect.left;
        }
        onAutoResize() {
            if (this._autoResize) {
                return this._autoResize.raise();
            }
        }
        onAutoResizeAll() {
            if (this._autoResizeAll) {
                this._autoResizeAll.raise();
            }
        }
        onSortableChanged() {
            if (this._sortableChanged) {
                return this._sortableChanged.raise();
            }
            this.ensureClass('sortable', this.sortable);
        }
        onWidthChanged() {
            if (this._widthChanged) {
                this._widthChanged.raise();
            }
            this.element.width(this._width);
        }
        get autoResize() {
            if (!this._autoResize) {
                this._autoResize = new latte.LatteEvent(this);
            }
            return this._autoResize;
        }
        get autoResizeAll() {
            if (!this._autoResizeAll) {
                this._autoResizeAll = new latte.LatteEvent(this);
            }
            return this._autoResizeAll;
        }
        get sortableChanged() {
            if (!this._sortableChanged) {
                this._sortableChanged = new latte.LatteEvent(this);
            }
            return this._sortableChanged;
        }
        get sortRequested() {
            if (!this._sortRequested) {
                this._sortRequested = new latte.LatteEvent(this);
            }
            return this._sortRequested;
        }
        onSortRequested() {
            if (this._sortRequested) {
                return this._sortRequested.raise();
            }
        }
        get widthChanged() {
            if (!this._widthChanged) {
                this._widthChanged = new latte.LatteEvent(this);
            }
            return this._widthChanged;
        }
        get sortable() {
            return this._sortable;
        }
        set sortable(value) {
            let changed = value !== this._sortable;
            this._sortable = value;
            if (changed) {
                this.onSortableChanged();
            }
        }
        get width() {
            return this._width;
        }
        set width(value) {
            let original = this._width;
            let changed = value !== this._width;
            this._width = value;
            if (changed) {
                this.onWidthChanged();
            }
        }
        get resizer() {
            if (!this._resizer) {
                this._resizer = document.createElement('div');
                this._resizer.className = 'resizer';
                this._resizer.addEventListener('mousedown', (e) => this.resizer_MouseDown(e));
                this._resizer.addEventListener('dblclick', (e) => {
                    if (e.ctrlKey || e.metaKey) {
                        this.onAutoResizeAll();
                    }
                    else {
                        this.onAutoResize();
                    }
                });
            }
            return this._resizer;
        }
    }
    latte.ColumnHeader = ColumnHeader;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CommentItem extends latte.Item {
        constructor() {
            super();
            this._relativeDate = true;
            var item = this;
            this.element.addClass('comment');
            latte.UiElement.enableTextSelection(this.element);
            this.userDetail = new latte.LatteEvent(this);
            this.blinkerElement = $('<div>').addClass('blinker').appendTo(this.element);
            this.container = $('<div>').addClass('comment-content').appendTo(this.element);
            this.iconSideElement = $('<div>').addClass('icon-side').appendTo(this.container);
            this.commentSideElement = $('<div>').addClass('comment-side').appendTo(this.container);
            this.userElement = $('<a>', { href: 'javascript:void(0)' }).addClass('user').appendTo(this.commentSideElement);
            this.textElement = $('<span>').addClass('text').appendTo(this.commentSideElement);
            this.dateElement = $('<div>').addClass('date').appendTo(this.commentSideElement);
            this.container.clear();
            this.element.clear();
            this.userElement.click(() => { item.onUserDetail(); });
            this.iconSideElement.click(() => { item.onUserDetail(); });
            this.dateElement.click(() => { item.relativeDate = !item.relativeDate; });
            this.icon = latte.IconItem.empty(32);
        }
        blink(milliseconds = 0) {
            if (latte._undef(milliseconds))
                milliseconds = 3000;
            var __this = this;
            this.blinkerElement
                .show()
                .animate({ opacity: 0 }, milliseconds, 'swing', function () {
                __this.blinkerElement.hide().css({ opacity: 1 });
            });
        }
        onUserDetail() {
            this.userDetail.raise();
        }
        get date() {
            return this._date;
        }
        set date(value) {
            if (!(value instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('value');
            if (this.relativeDate) {
                this.dateElement.html(value.toRelativeString());
                this.dateElement.attr('title', value.toString());
            }
            else {
                this.dateElement.html(value.toString());
                this.dateElement.attr('title', value.toRelativeString());
            }
            this._date = value;
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            this.iconSideElement.empty();
            if (value instanceof latte.IconItem)
                this.iconSideElement.append(value.element);
            this._icon = value;
        }
        get relativeDate() {
            return this._relativeDate;
        }
        set relativeDate(value) {
            this._relativeDate = value;
            this.date = this.date;
        }
        get text() {
            return this._text;
        }
        set text(value) {
            this.textElement.html(value);
            this._text = value;
        }
        get user() {
            return this._user;
        }
        set user(value) {
            this.userElement.html(value);
            this._user = value;
        }
    }
    latte.CommentItem = CommentItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DateTimeLabel extends latte.LabelItem {
        constructor(value = null) {
            super();
            this._relative = true;
            this.addClass('datetime');
            this.element.click(() => {
                this.relative = !this.relative;
            });
            if (value)
                this.value = value;
        }
        _updateText() {
            if (this.value) {
                if (this.relative) {
                    this.text = this.value.toRelativeString();
                    this.tooltip = this.value.toFormattedString();
                }
                else {
                    this.text = this.value.toFormattedString();
                    this.tooltip = this.value.toRelativeString();
                }
            }
        }
        get relative() {
            return this._relative;
        }
        set relative(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value');
            this._relative = value;
            this._updateText();
        }
        get value() {
            return this._value;
        }
        set value(value) {
            if (latte._isString(value))
                value = latte.DateTime.fromString(value);
            if (!(value instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('value');
            this._value = value;
            this._updateText();
        }
    }
    latte.DateTimeLabel = DateTimeLabel;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class NothingToShowLabelItem extends latte.LabelItem {
        constructor(message = null) {
            super();
            this.addClass('nothing-to-show');
            this.text = message || latte.strings.nothingToShow;
        }
    }
    latte.NothingToShowLabelItem = NothingToShowLabelItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class UiText extends latte.UiElement {
        constructor(text = null) {
            super();
            this.addClass('text');
            if (text !== null) {
                this.text = text;
            }
        }
        static ellipsis(text, length = 50) {
            if (!latte._isString(text) || text.length < length) {
                return text;
            }
            return text.substr(0, length) + '...';
        }
        get text() {
            return this.element.html();
        }
        set text(value) {
            this.element.html(value);
        }
    }
    latte.UiText = UiText;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SelectableItem extends latte.Item {
        constructor() {
            super();
            this._innerItem = null;
            this._selected = false;
            this.element.addClass('selectable');
            this.element.mouseover((e) => { this._thisMouseOver(e); });
            this.element.mouseout((e) => { this._thisMouseOut(e); });
            this.element.click((e) => { this._thisClick(e); });
            this.element.mousedown((e) => { this._thisMouseDown(e); });
        }
        static fromInnerItem(innerItem, tag = null) {
            let item = new SelectableItem();
            item.innerItem = innerItem;
            if (tag) {
                item.tag = tag;
            }
            return item;
        }
        _thisClick(e) {
            this.selected = true;
        }
        _thisMouseDown(e) {
            if (!this.enabled)
                return;
            this.element.removeClass('hover');
        }
        _thisMouseOut(e) {
            if (!this.enabled)
                return;
            this.element.removeClass('hover pressed');
        }
        _thisMouseOver(e) {
            if (!this.enabled)
                return;
            this.element.addClass('hover');
        }
        onInnerItemChanged() {
            if (this._innerItemChanged) {
                this._innerItemChanged.raise();
            }
            if (this.lastItem) {
                this.lastItem.raw.remove();
            }
            if (this.innerItem) {
                this.raw.appendChild(this.innerItem.raw);
            }
        }
        onSelectedChanged() {
            if (this._selectedChanged) {
                this._selectedChanged.raise();
            }
            this.ensureClass('selected', this.selected);
        }
        setSelected(value = false, raiseEvent = false) {
            if (raiseEvent) {
                this.selected = value;
            }
            else {
                this._selected = value;
                this.ensureClass('selected', this.selected);
            }
        }
        get innerItemChanged() {
            if (!this._innerItemChanged) {
                this._innerItemChanged = new latte.LatteEvent(this);
            }
            return this._innerItemChanged;
        }
        get selectedChanged() {
            if (!this._selectedChanged) {
                this._selectedChanged = new latte.LatteEvent(this);
            }
            return this._selectedChanged;
        }
        get innerItem() {
            return this._innerItem;
        }
        set innerItem(value) {
            let changed = value !== this._innerItem;
            this._innerItem = value;
            if (changed) {
                this.onInnerItemChanged();
            }
        }
        get selected() {
            return this._selected;
        }
        set selected(value) {
            let changed = value !== this._selected;
            this._selected = value;
            if (changed) {
                this.onSelectedChanged();
            }
        }
    }
    latte.SelectableItem = SelectableItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SelectableLabel extends latte.SelectableItem {
        constructor(text, description, icon, title) {
            super();
            this.addClass('with-label');
            this.label = new latte.LabelItem(text, description, icon, title);
            this.label.appendTo(this);
            this.element.clear();
        }
        toString() {
            return this.text;
        }
        get description() {
            return this.label.description;
        }
        set description(value) {
            this.label.description = value;
        }
        get icon() {
            return this.label.icon;
        }
        set icon(value) {
            this.label.icon = value;
        }
        get text() {
            return this.label.text;
        }
        set text(value) {
            this.label.text = value;
        }
    }
    latte.SelectableLabel = SelectableLabel;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CalendarItem extends latte.SelectableLabel {
        constructor() {
            super();
            this.element.addClass('calendar');
            this.rectangles = new latte.Collection(this._onAddRectangle, this._onRemoveRectangle, this);
            this.element.hide();
        }
        _onAddRectangle(r) {
            var clon = this.element.clone();
            clon.rectangle(r);
            this.element.parent().append(clon);
            clon.click((evt) => {
                this.selected = !this.selected;
                evt.stopPropagation();
            });
            clon.show();
            r.tag = clon;
        }
        _onRemoveRectangle(r) {
            if (r.tag instanceof jQuery)
                r.tag.remove();
        }
        clone() {
            var c = new CalendarItem();
            c.dateStart = this.dateStart;
            c.dateEnd = this.dateEnd;
            c.text = this.text;
            return c;
        }
        onSelectedChanged() {
            super.onSelectedChanged();
        }
        get allDay() {
            return this._dateStart.timeOfDay.totalMinutes == 0
                && this._dateEnd.timeOfDay.totalMinutes == 0;
        }
        get dateEnd() {
            return this._dateEnd;
        }
        set dateEnd(value) {
            if (!(value instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('value');
            this._dateEnd = value;
        }
        get dateStart() {
            return this._dateStart;
        }
        set dateStart(value) {
            if (!(value instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('value');
            this._dateStart = value;
        }
        get text() {
            return this.label.text;
        }
        set text(value) {
            this.label.text = value;
        }
    }
    latte.CalendarItem = CalendarItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ListViewItem extends latte.SelectableItem {
        constructor(listView = null) {
            super();
            this._iconPadding = 10;
            this._columns = [];
            this._items = [];
            this._listView = null;
            this.element.addClass('list');
            this.activated = new latte.LatteEvent(this);
            this.iconElement = $('<div>').addClass('icon').appendTo(this.element);
            this.columnsElement = $('<div>').addClass('columns').appendTo(this.element);
            this.element.clear();
            this.icon = latte.IconItem.empty(16);
            if (listView) {
                this._listView = listView;
                listView.items.add(this);
            }
        }
        addColumn(width = 200) {
            var column = $('<div>').width(width);
            this._columns.push(column);
            this.columnsElement.append(column);
            this.onLayout();
            return this;
        }
        getColumn(index) {
            latte.warnDeprecated("ListViewItem.getColumn", "ListViewItem.columns");
            return this.columns[index];
        }
        getColumnCount() {
            latte.warnDeprecated("ListViewItem.getColumnCount", "ListViewItem.columns.length");
            return this.columns.length;
        }
        item(index, value) {
            latte.warnDeprecated("ListViewItem.item", "ListViewItem.getItem and ListViewItem.setItem");
            if (!latte._isNumber(index) || index < 0 || index > this.columns.length)
                throw new latte.InvalidArgumentEx('index');
            if (latte._undef(value)) {
                return this._items[index];
            }
            this.setItem(index, value);
            return this;
        }
        onActivated() {
            this.activated.raise(this);
        }
        onLayout() {
            if (this.element.parent().length === 0)
                return;
            super.onLayout();
            var w = 0;
            for (var i = 0; i < this.columns.length; i++) {
                w += this.columns[i].outerWidth();
            }
            w += this._iconPadding;
            if (this._icon instanceof latte.IconItem)
                w += this._icon.size;
            this.columnsElement.width(w);
            this.iconElement.css('margin-right', this._iconPadding);
            if (this.listView)
                this.element.css('min-width', this.listView.columnHeadersWidth);
        }
        onSelectedChanged() {
            if (this.selected) {
                var lv = this.listView;
                if (lv) {
                    lv.informSelectedItem(this);
                }
            }
            super.onSelectedChanged();
            if (this.selected) {
                this.onActivated();
            }
        }
        setColumnWidth(index, width) {
            this._columns[index].width(width);
        }
        getItem(index) {
            return this._items[index];
        }
        getText(index) {
            if (this._items[index] instanceof latte.LabelItem) {
                return this._items[index].text;
            }
            else {
                latte.log("ListViewItem.getText should be not invoked on non-LabelItem items. This addresses performance.");
                return this._columns[index].text();
            }
        }
        setText(index, text) {
            this.setItem(index, new latte.LabelItem(text));
        }
        setItem(index, item) {
            if (!latte._isNumber(index) || index < 0 || index > this.columns.length) {
                throw new latte.InvalidArgumentEx('index');
            }
            this.columns[index].empty();
            this.columns[index].append(item.element);
            this._items[index] = item;
            this.onLayout();
        }
        text(index, value = '') {
            latte.warnDeprecated("ListViewItem.text", "ListViewItem.getText and ListViewItem.setText");
            if (!latte._isNumber(index) || index < 0 || index > this.columns.length)
                throw new latte.InvalidArgumentEx('index');
            if (latte._undef(value)) {
                var item = this.item(index);
                return item instanceof latte.Item ? item.element.text() : null;
            }
            var lbl = new latte.LabelItem();
            lbl.text = value;
            this.item(index, lbl);
            return value;
        }
        get columns() {
            return this._columns;
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            this.iconElement.empty();
            if (value instanceof latte.IconItem)
                this.iconElement.append(value.element).clear();
            this._icon = value;
            this.onLayout();
        }
        get listView() {
            return this._listView;
        }
        set listView(value) {
            this._listView = value;
        }
    }
    latte.ListViewItem = ListViewItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CheckboxItem extends latte.ValueItem {
        constructor() {
            super();
            this.checkedIconGetter = null;
            this.uncheckedIconGetter = null;
            this.element.addClass('checkbox');
            this.label.appendTo(this);
            this.value = false;
            this.addEventListener('click', () => this.value = !this.value);
        }
        getIconForValue(value) {
            if (value) {
                return this.checkedIconGetter ? this.checkedIconGetter() : CheckboxItem.globalCheckedIconGetter();
            }
            return this.uncheckedIconGetter ? this.uncheckedIconGetter() : CheckboxItem.globalUncheckedIconGetter();
        }
        onValueChanged() {
            super.onValueChanged();
            let value = this.value;
            if (!latte._isBoolean(value) && latte._isString(value) && latte._isNumeric(value)) {
                this.value = !!parseInt(value);
            }
            this.label.icon = this.getIconForValue(this.value);
        }
        serialize() {
            return this.value ? "1" : "0";
        }
        unserialize(value) {
            this.value = !!parseInt(value);
        }
        get text() {
            return this.label.text;
        }
        set text(value) {
            this.label.text = value;
        }
        get label() {
            if (!this._label) {
                this._label = new latte.LabelItem();
            }
            return this._label;
        }
    }
    CheckboxItem.globalCheckedIconGetter = () => latte.Glyph.checked;
    CheckboxItem.globalUncheckedIconGetter = () => latte.Glyph.unchecked;
    latte.CheckboxItem = CheckboxItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ColorValueItem extends latte.ValueItem {
        constructor(color = null) {
            super();
            this._color = null;
            this.element.append(this.button.element);
            if (!color) {
                color = latte.Color.black;
            }
            this.color = color;
        }
        setValue(value) {
            this.color = latte.Color.fromHex(value);
        }
        get value() {
            return this.color.toHexString();
        }
        onLayout() {
            super.onLayout();
            this.button.onLayout();
        }
        get colorPicker() {
            if (!this._colorPicker) {
                this._colorPicker = new latte.ColorPicker();
                this._colorPicker.colorChanged.add(() => {
                    this.color = this._colorPicker.color;
                    this.onValueChanged();
                });
            }
            return this._colorPicker;
        }
        get button() {
            if (!this._button) {
                this._button = new latte.ButtonItem();
                this._button.items.add(this.colorPicker);
                this._button.icon = this.icon;
            }
            return this._button;
        }
        get color() {
            return this._color;
        }
        set color(value) {
            this._color = value;
            this.icon.color = value;
        }
        get icon() {
            if (!this._icon) {
                this._icon = new latte.ColorIconItem(latte.Color.black);
            }
            return this._icon;
        }
    }
    latte.ColorValueItem = ColorValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ComboItem extends latte.ValueItem {
        constructor() {
            super();
            this.element.addClass('combo');
            this.button = new latte.ButtonItem();
            this.button.text = latte.strings.pleaseSelect;
            this.button.appendTo(this.element);
        }
        onGetValueString() {
            for (let i = 0; i < this.button.items.length; i++) {
                if (this.button.items[i].tag == this.value) {
                    return this.button.items[i].text;
                }
            }
            return '';
        }
        onValueChanged() {
            super.onValueChanged();
            this.button.text = this.value === null ? latte.strings.pleaseSelect : this.valueString;
        }
        get options() {
            return this._options;
        }
        set options(options) {
            var __this = this;
            this.button.items.clear();
            for (let i in options) {
                let b = new latte.ButtonItem();
                b.text = String(options[i]);
                b.tag = i;
                b.click.add(function () {
                    __this.value = this.tag;
                    __this.button.text = this.text;
                });
                this.button.items.add(b);
            }
            this._options = options;
        }
    }
    latte.ComboItem = ComboItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DatePickerItem extends latte.ValueItem {
        constructor() {
            super();
            this._dateVisible = true;
            this._isNull = false;
            this._nullable = false;
            this._timeVisible = false;
            this.element.addClass('date-picker');
            this._dateButton = new latte.ButtonItem();
            this._dateButton.dropdownVisible = true;
            this._dateButton.faceVisible = false;
            this._dateButton.glyph = latte.LinearIcon.chevron_down.goSmall();
            this._dateButton.appendTo(this.element);
            this._dateButton.element.css({ marginRight: 15 });
            this._dateButton.loadItems.add(() => {
                this._dateButton.items.add(this.dateItem);
            });
            this.value = latte.DateTime.today;
        }
        zeroPad(i) {
            return i < 10 ? '0' + i : i.toString();
        }
        onDateVisibleChanged() {
            if (this._dateVisibleChanged) {
                this._dateVisibleChanged.raise();
            }
            this.dateButton.visible = this.dateVisible;
        }
        onIsNullChanged() {
            if (this._isNullChanged) {
                this._isNullChanged.raise();
            }
            this.dateButton.enabled = !this.isNull;
            if (this._hourCombo) {
                this.hourCombo.enabled = this.minuteCombo.enabled = !this.isNull;
            }
            if (this.isNull) {
                this.setValue(null, false);
            }
            else {
                this.setValue(this.lastDate || latte.DateTime.now, false);
            }
        }
        onNullableChanged() {
            if (this._nullableChanged) {
                this._nullableChanged.raise();
            }
            this.checkbox.visible = !!this.nullable;
            this._dateButton.enabled = this.nullable ? this.checkbox.value : true;
            this.checkbox.value = this.value && this.value.thisEpoch;
            this._isNull = !this.checkbox.value;
            this.dateButton.enabled = !this._isNull;
        }
        onTimeVisibleChanged() {
            if (this._timeVisibleChanged) {
                this._timeVisibleChanged.raise();
            }
            if (this.timeVisible) {
                if (!this._hourCombo) {
                    let colon = new latte.UiText(' : ');
                    colon.css({
                        'float': 'left',
                        marginTop: 5,
                        marginLeft: 2,
                        marginRight: 3
                    });
                    this.element.append(this.hourCombo.element);
                    this.element.append(colon.element);
                    this.element.append(this.minuteCombo.element);
                }
                this.hourCombo.visible = this.minuteCombo.visible = true;
            }
            else if (this._hourCombo) {
                this.hourCombo.visible = this.minuteCombo.visible = false;
            }
        }
        onValueChanged() {
            super.onValueChanged();
            if (!this.value) {
                this.dateButton.text = latte.strings.pleaseSelect;
            }
            else {
                this.lastDate = this.value.thisEpoch ? this.value : null;
                this.dateButton.text = this.value.thisEpoch ?
                    latte.sprintf("%s / %s / %s", this.value.day, this.value.monthString, this.value.year) :
                    latte.strings.pleaseSelect;
                if (this.timeVisible) {
                    this._hourCombo.value = this.value.timeOfDay.hours;
                    this._minuteCombo.value = this.value.minute;
                    this._hourCombo.button.text = this.zeroPad(this.value.timeOfDay.hours);
                    this._minuteCombo.button.text = this.zeroPad(this.value.minute);
                }
                if (this.value.thisEpoch) {
                    this.dateItem.selectionStart = this.dateItem.selectionEnd = this.value;
                }
            }
            if (this.nullable) {
                this.checkbox.value = this.value && this.value.thisEpoch;
            }
        }
        get dateVisibleChanged() {
            if (!this._dateVisibleChanged) {
                this._dateVisibleChanged = new latte.LatteEvent(this);
            }
            return this._dateVisibleChanged;
        }
        get isNullChanged() {
            if (!this._isNullChanged) {
                this._isNullChanged = new latte.LatteEvent(this);
            }
            return this._isNullChanged;
        }
        get nullableChanged() {
            if (!this._nullableChanged) {
                this._nullableChanged = new latte.LatteEvent(this);
            }
            return this._nullableChanged;
        }
        get timeVisibleChanged() {
            if (!this._timeVisibleChanged) {
                this._timeVisibleChanged = new latte.LatteEvent(this);
            }
            return this._timeVisibleChanged;
        }
        get dateVisible() {
            return this._dateVisible;
        }
        set dateVisible(value) {
            let changed = value !== this._dateVisible;
            this._dateVisible = value;
            if (changed) {
                this.onDateVisibleChanged();
            }
        }
        get dateButton() {
            return this._dateButton;
        }
        get isNull() {
            return this._isNull;
        }
        set isNull(value) {
            let changed = value !== this._isNull;
            this._isNull = value;
            if (changed) {
                this.onIsNullChanged();
            }
        }
        get nullable() {
            return this._nullable;
        }
        set nullable(value) {
            var changed = value !== this._nullable;
            this._nullable = value;
            if (changed) {
                this.onNullableChanged();
            }
        }
        get timeVisible() {
            return this._timeVisible;
        }
        set timeVisible(value) {
            let changed = value !== this._timeVisible;
            this._timeVisible = value;
            if (changed) {
                this.onTimeVisibleChanged();
            }
        }
        get dateItem() {
            if (!this._dateItem) {
                this._dateItem = new latte.DateItem();
                this._dateItem.selectionChanged.add(() => {
                    if (this.timeVisible) {
                        this.value = latte.DateTime.fromDateAndTime(this.dateItem.selectionStart, (this.value || latte.DateTime.today).timeOfDay);
                    }
                    else {
                        this.value = this.dateItem.selectionStart;
                    }
                });
            }
            return this._dateItem;
        }
        get checkbox() {
            if (!this._checkbox) {
                this._checkbox = new latte.CheckboxItem();
                this._checkbox.valueChanged.add(() => this.isNull = !this._checkbox.value);
                this.element.prepend(this.checkbox.element);
            }
            return this._checkbox;
        }
        get hourCombo() {
            if (!this._hourCombo) {
                this._hourCombo = new latte.ComboItem();
                this._hourCombo.button.loadItems.add(() => {
                    let hours = {};
                    for (let i = 0; i <= 23; i++) {
                        hours[i] = this.zeroPad(i);
                    }
                    this._hourCombo.options = hours;
                });
                this._hourCombo.value = 0;
                this._hourCombo.button.dropdownVisible = false;
                this._hourCombo.valueChanged.add(() => {
                    this.value = new latte.DateTime(this.value.year, this.value.month, this.value.day, parseInt(this._hourCombo.value, 10), parseInt(this._minuteCombo.value, 10));
                });
            }
            return this._hourCombo;
        }
        get minuteCombo() {
            if (!this._minuteCombo) {
                this._minuteCombo = new latte.ComboItem();
                this._minuteCombo.button.loadItems.add(() => {
                    let minutes = {};
                    for (let i = 0; i <= 59; i++) {
                        minutes[i] = this.zeroPad(i);
                    }
                    this._minuteCombo.options = minutes;
                });
                this._minuteCombo.value = 0;
                this._minuteCombo.button.dropdownVisible = false;
                this._minuteCombo.valueChanged.add(() => {
                    this.value = new latte.DateTime(this.value.year, this.value.month, this.value.day, parseInt(this._hourCombo.value, 10), parseInt(this._minuteCombo.value, 10));
                });
            }
            return this._minuteCombo;
        }
    }
    latte.DatePickerItem = DatePickerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class FileValueItem extends latte.ValueItem {
        constructor() {
            super();
            this.addClass('file');
            this.resetInput();
        }
        getValue() {
            return this.fileInput.get(0).files;
        }
        resetInput() {
            this.fileInput = $('<input multiple type="file">').appendTo(this.element.empty());
            this.fileInput.change(() => {
                this.onValueChanged();
            });
        }
        setValue(value, silently = false) {
        }
    }
    latte.FileValueItem = FileValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class FlagsValueItem extends latte.ValueItem {
        constructor() {
            super();
            this.ignoreUpdateChecks = false;
            this.ignoreUpdateValue = false;
            this._options = null;
            this.addClass('flags');
            this.element.append(this.stack.element);
        }
        updateChecks() {
            if (this.ignoreUpdateChecks) {
                this.ignoreUpdateChecks = false;
                return;
            }
            for (let i = 0; i < this.checks.length; i++) {
                let check = this.checks[i];
                let flag = check.tag;
                this.ignoreUpdateValue = true;
                check.value = (this.value & flag) == flag;
            }
            this.ignoreUpdateValue = false;
        }
        updateValue() {
            if (this.ignoreUpdateValue) {
                this.ignoreUpdateValue = false;
                return;
            }
            let val = 0;
            for (let i = 0; i < this.checks.length; i++) {
                let check = this.checks[i];
                let flag = check.tag;
                if (check.value) {
                    val = val | flag;
                }
            }
            this.ignoreUpdateChecks = true;
            this.value = val;
        }
        onGetValueString() {
            let list = [];
            let f = this.value;
            for (let i in this.options) {
                let flag = parseInt(i);
                if ((f & flag) == flag) {
                    list.push(this.options[i]);
                }
            }
            return list.join(', ') || latte.strings.flagsNone;
        }
        onOptionsChanged() {
            if (this._optionsChanged) {
                this._optionsChanged.raise();
            }
            this.checks.clear();
            for (let i in this.options) {
                let check = new latte.CheckboxItem();
                check.label.text = this.options[i];
                check.tag = i;
                check.valueChanged.add(() => this.updateValue());
                this.checks.add(check);
            }
            this.updateChecks();
        }
        onValueChanged() {
            super.onValueChanged();
            if (!this.ignoreUpdateChecks) {
                this.updateChecks();
            }
            this.ignoreUpdateChecks = false;
        }
        get optionsChanged() {
            if (!this._optionsChanged) {
                this._optionsChanged = new latte.LatteEvent(this);
            }
            return this._optionsChanged;
        }
        get checks() {
            if (!this._checks) {
                this._checks = new latte.Collection((check) => {
                    this.stack.items.add(check);
                }, (check) => {
                    this.stack.items.remove(check);
                });
            }
            return this._checks;
        }
        get options() {
            return this._options;
        }
        set options(value) {
            let changed = value !== this._options;
            this._options = value;
            if (changed) {
                this.onOptionsChanged();
            }
        }
        get stack() {
            if (!this._stack) {
                this._stack = new latte.ItemStack();
            }
            return this._stack;
        }
    }
    latte.FlagsValueItem = FlagsValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class HtmlEditorCommands {
    }
    HtmlEditorCommands.BOLD = 'bold';
    HtmlEditorCommands.CODE = 'code';
    HtmlEditorCommands.CLEAR_FORMAT = 'clearformat';
    HtmlEditorCommands.FORMAT_BLOCK = 'formatblock';
    HtmlEditorCommands.ITALIC = 'italic';
    HtmlEditorCommands.SUPER_SCRIPT = 'superscript';
    HtmlEditorCommands.SUB_SCRIPT = 'subscript';
    HtmlEditorCommands.JUSTIFY_LEFT = 'justifyleft';
    HtmlEditorCommands.JUSTIFY_CENTER = 'justifycenter';
    HtmlEditorCommands.JUSTIFY_RIGHT = 'justifyright';
    HtmlEditorCommands.JUSTIFY_FULL = 'justifyfull';
    HtmlEditorCommands.OUTDENT = 'outdent';
    HtmlEditorCommands.INDENT = 'indent';
    HtmlEditorCommands.INSERT_HTML = 'inserthtml';
    HtmlEditorCommands.INSERT_IMAGE = 'insertimage';
    HtmlEditorCommands.INSERT_LINK = 'insertlink';
    HtmlEditorCommands.INSERT_ORDERED_LIST = 'insertorderedlist';
    HtmlEditorCommands.INSERT_UNORDERED_LIST = 'insertunorderedlist';
    HtmlEditorCommands.INSERT_YOUTUBE = 'insertyoutube';
    HtmlEditorCommands.UNDERLINE = 'underline';
    latte.HtmlEditorCommands = HtmlEditorCommands;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class HtmlEditorItem extends latte.ValueItem {
        constructor() {
            super();
            this.addClass('html-editor');
            this.toolbar = new latte.Toolbar();
            this.toolbar.appendTo(this);
            this._addToolbarButtons();
            if (!HtmlEditorItem.rangyLoaded) {
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = HtmlEditorItem.rangyPath;
                document.body.appendChild(script);
                HtmlEditorItem.rangyLoaded = true;
            }
        }
        static clearFormattingOf(e) {
            let $e = $(e);
            $e.find('*').removeAttr('style');
            $e.find('font').removeAttr('face');
        }
        static get rangyPath() {
            return latte._latteUrl() + '/releases/latte.ui/support/js/rangy.js';
        }
        _addToolbarButtons() {
            let btn = (icon, tooltip, cmd) => {
                let b = new latte.ButtonItem();
                b.icon = icon;
                b.tooltip = tooltip;
                b.click.add(() => { this.execCommand(cmd); });
                return b;
            };
            let sep = function () { return new latte.SeparatorItem(); };
            this.toolbar.items.addArray([
                btn(latte.LinearIcon.bold, latte.strings.bold, latte.HtmlEditorCommands.BOLD),
                btn(latte.LinearIcon.italic, latte.strings.italics, latte.HtmlEditorCommands.ITALIC),
                sep(),
                btn(latte.LinearIcon.text_align_left, latte.strings.alignLeft, latte.HtmlEditorCommands.JUSTIFY_LEFT),
                btn(latte.LinearIcon.text_align_center, latte.strings.alignCenter, latte.HtmlEditorCommands.JUSTIFY_CENTER),
                btn(latte.LinearIcon.text_align_right, latte.strings.alignRight, latte.HtmlEditorCommands.JUSTIFY_RIGHT),
                btn(latte.LinearIcon.text_align_justify, latte.strings.alignJustify, latte.HtmlEditorCommands.JUSTIFY_FULL),
                sep(),
                btn(latte.LinearIcon.indent_increase, latte.strings.indent, latte.HtmlEditorCommands.INDENT),
                btn(latte.LinearIcon.indent_decrease, latte.strings.outdent, latte.HtmlEditorCommands.OUTDENT),
                sep(),
                btn(latte.LinearIcon.menu, latte.strings.numberedList, latte.HtmlEditorCommands.INSERT_ORDERED_LIST),
                btn(latte.LinearIcon.list, latte.strings.bulletList, latte.HtmlEditorCommands.INSERT_UNORDERED_LIST),
                sep(),
                btn(latte.LinearIcon.highlight, latte.strings.eraseFormat, latte.HtmlEditorCommands.CLEAR_FORMAT),
                sep(),
                btn(latte.LinearIcon.text_format, latte.strings.insertLink, latte.HtmlEditorCommands.INSERT_LINK),
                btn(latte.LinearIcon.picture, latte.strings.insertImage, latte.HtmlEditorCommands.INSERT_IMAGE)
            ]);
        }
        _assignElementHandlers() {
            if (this._mustInit())
                return;
            var __this = this;
            this.body()
                .find('img')
                .unbind('.editor')
                .bind('click.editor', function () {
                __this.selectElement($(this));
                __this.onImageSelected($(this));
            })
                .bind('load.editor', function () {
                __this.onLayout();
            })
                .each(function () {
                if (this.complete) {
                    __this.onLayout();
                }
            });
        }
        _canInit() {
            return this.element.parents(':last').is('html');
        }
        _clearFormatting() {
            HtmlEditorItem.clearFormattingOf(this.body().get(0));
        }
        _ensureNode(obj) {
            if (window['rangy'] && !rangy.initialized) {
                rangy.init();
            }
            if (latte._isString(obj)) {
                return jQuery(obj).get(0);
            }
            else if (obj instanceof jQuery) {
                return obj.get(0);
            }
            else {
                if (typeof Element == 'undefined') {
                    return obj;
                }
                else {
                    if (obj instanceof Element) {
                        return obj;
                    }
                    else {
                        throw new latte.InvalidArgumentEx('obj');
                    }
                }
            }
        }
        _ensureReady() {
            if (this._mustInit()) {
                this._initEditor();
            }
            return this.ready();
        }
        _initEditor() {
            if (this._mustInit()) {
                this._ready = false;
                if (!this._canInit()) {
                    return;
                }
            }
            else {
                return;
            }
            var __this = this;
            if (this.iframe instanceof jQuery)
                this.iframe.remove();
            if (window['rangy'])
                rangy.init();
            this.iframe = $('<iframe>').attr({ frameborder: 0 }).appendTo(this.element);
            this.document().open();
            this.document().write('<html><head>');
            this.document().write('<link rel=stylesheet href="' + $('link').attr('href') + '">');
            this.document().write('</head>');
            this.document().write('<body class=html-editor contenteditable=true></body>');
            this.document().write('</html>');
            this.document().close();
            this._ready = true;
            if (this._valueHtml) {
                this.body().html(this._valueHtml);
                this._assignElementHandlers();
                this.onLayout();
            }
            this.body()
                .css({
                minHeight: 20,
                overflow: 'hidden',
                fontFamily: this.element.css('font-family'),
                fontSize: 14
            })
                .focus(function () { __this.onFocused(); })
                .blur(function () { __this.onBlur(); })
                .click(function () { __this.onSelectionChanged(); })
                .keyup(function () { __this._valueHtml = $(this).html(); __this.onSelectionChanged(); __this.onValueChanged(); })
                .change(function () { __this._valueHtml = $(this).html(); __this.onValueChanged(); });
            this.body().get(0).addEventListener('paste', e => {
                setTimeout(() => this._clearFormatting(), 100);
            });
        }
        _insertHTML() {
            var txt = new latte.TextboxItem();
            var d = new latte.DialogView();
            txt.multiline = true;
            txt.css({ margin: 20 });
            txt.input.css({ minHeight: 100 });
            txt.setRelativeWidth('100%');
            d.title = latte.strings.insertHTML;
            d.view = (new latte.ItemView(txt));
            d.addOkButton(() => {
                this.insertElement($('<div class=cms-html-insert>').html(txt.value));
            });
            d.show();
        }
        _insertImage(value = '') {
            var url = latte._isString(value) ? value : prompt(latte.strings.imageUrl, 'http://');
            if (!url)
                return;
            var elem = $('<img>').attr('src', url);
            this.insertElement(elem);
        }
        _insertLink() {
            var url = prompt(latte.strings.linkUrl, 'http://');
            if (!url)
                return;
            var elem = $('<a>').attr({
                href: url,
                target: '_blank'
            });
            if (this.selection.isCollapsed) {
                elem.text(url);
                this.insertElement(elem);
            }
            else {
                this.surroundSelectionWith(elem);
            }
        }
        _insertYouTube() {
            var __this = this;
            var txt = new latte.TextboxItem();
            var d = new latte.DialogView();
            txt.css({ margin: 20 });
            txt.setRelativeWidth('100%');
            txt.placeholder = latte.strings.videoURL;
            d.title = latte.strings.insertYouTube;
            d.view = (new latte.ItemView(txt));
            d.addOkButton(function () {
                var videoId = txt.value.split('v=')[1];
                var ampersandPosition = videoId.indexOf('&');
                if (ampersandPosition != -1) {
                    videoId = videoId.substring(0, ampersandPosition);
                }
                if (videoId) {
                    var iframe = $('<iframe width="420" height="345" frameborder="0" allowfullscreen />').attr({
                        src: 'http://www.youtube.com/embed/' + videoId
                    });
                    __this.insertElement($('<div class=cms-html-youtube>').append(iframe));
                }
                else {
                    alert(latte.strings.urlNotYouTube);
                }
            });
            d.show();
        }
        _mustInit() {
            try {
                return (this.ready() && !this.body().hasClass('html-editor'))
                    || !this.ready();
            }
            catch (e) {
                return true;
            }
        }
        body() {
            return this.iframe.contents().find('body');
        }
        document() {
            var iframe = this.iframe.get(0);
            return iframe.contentDocument ? iframe.contentDocument : (iframe.contentWindow.document || iframe.document);
        }
        execCommand(command, value = null) {
            if (!this._ensureReady())
                throw new latte.InvalidCallEx();
            switch (command) {
                case latte.HtmlEditorCommands.BOLD:
                case latte.HtmlEditorCommands.FORMAT_BLOCK:
                case latte.HtmlEditorCommands.INDENT:
                case latte.HtmlEditorCommands.INSERT_ORDERED_LIST:
                case latte.HtmlEditorCommands.INSERT_UNORDERED_LIST:
                case latte.HtmlEditorCommands.ITALIC:
                case latte.HtmlEditorCommands.JUSTIFY_CENTER:
                case latte.HtmlEditorCommands.JUSTIFY_FULL:
                case latte.HtmlEditorCommands.JUSTIFY_LEFT:
                case latte.HtmlEditorCommands.JUSTIFY_RIGHT:
                case latte.HtmlEditorCommands.OUTDENT:
                case latte.HtmlEditorCommands.SUB_SCRIPT:
                case latte.HtmlEditorCommands.SUPER_SCRIPT:
                case latte.HtmlEditorCommands.UNDERLINE:
                    this.document().execCommand(command, false, value);
                    break;
                case latte.HtmlEditorCommands.CLEAR_FORMAT:
                    this._clearFormatting();
                    break;
                case latte.HtmlEditorCommands.INSERT_IMAGE:
                    this._insertImage(value);
                    break;
                case latte.HtmlEditorCommands.INSERT_LINK:
                    this._insertLink();
                    break;
                case latte.HtmlEditorCommands.CODE:
                    this.surroundSelectionWith($('<code>'));
                    break;
                case latte.HtmlEditorCommands.INSERT_HTML:
                    this._insertHTML();
                    break;
                case latte.HtmlEditorCommands.INSERT_YOUTUBE:
                    this._insertYouTube();
                    break;
            }
            this.onValueChanged();
        }
        getValue() {
            if (!this._mustInit()) {
                return this.body().html() || "";
            }
            else {
                return this._valueHtml || "";
            }
        }
        insertElement(element) {
            var range = this.selectionRange;
            if (range) {
                var actualElement = this._ensureNode(element);
                range.insertNode(actualElement);
                this.onValueChanged();
                this._assignElementHandlers();
                return jQuery(actualElement);
            }
            return null;
        }
        onImageSelected(image) {
            if (this._imageSelected) {
                return this._imageSelected.raise(image);
            }
        }
        onLayout() {
            super.onLayout();
            if (this._ensureReady()) {
                var shouldHeight = this.body().get(0).scrollHeight + (this.toolbar.visible ? this.toolbar.height : 0);
                this.element.height(shouldHeight);
                this.iframe.css('height', this.body().get(0).scrollHeight);
                if (!window['b'])
                    window['b'] = this.body().get(0);
            }
        }
        onSelectionChanged() {
            this.selectionChanged.raise();
            var sel = this.selectionRange;
            if (sel) {
                var start = $(sel.startContainer);
            }
        }
        onValueChanged() {
            this.onLayout();
            super.onValueChanged();
        }
        ready() {
            return this._ready;
        }
        selectElement(element) {
            var el = this._ensureNode(element);
            var range = rangy.createRange();
            range.selectNode(el);
            var sel = rangy.getSelection();
            sel.setSingleRange(range);
            this.onSelectionChanged();
            return jQuery(element);
        }
        selectElementContents(element) {
            element = this._ensureNode(element);
            var range = rangy.createRange();
            range.selectNodeContents(element);
            var sel = rangy.getSelection();
            sel.setSingleRange(range);
            this.onSelectionChanged();
            return jQuery(element);
        }
        selectionEnd() {
            var sel = this.selectionRange;
            if (sel) {
                return $(sel.endContainer.parentElement);
            }
            return null;
        }
        selectionParents(selector = '') {
            var range = this.selectionRange;
            if (range) {
                var container = jQuery(range.startContainer);
                return container.parents(selector);
            }
            return null;
        }
        selectionStart() {
            var sel = this.selectionRange;
            if (sel) {
                return $(sel.startContainer.parentElement);
            }
            return null;
        }
        setValue(value) {
            value = value || '';
            this._valueHtml = value;
            if (this._ensureReady()) {
                this.body().html(value);
                this._assignElementHandlers();
                this.onLayout();
            }
        }
        surroundSelectionWith(element) {
            element = this._ensureNode(element);
            var savedSel = rangy.saveSelection(this.window);
            var range = this.selectionRange;
            if (range) {
                if (!range.canSurroundContents()) {
                    return null;
                }
                range.surroundContents(element);
                rangy.restoreSelection(savedSel);
                this.onValueChanged();
            }
            return jQuery(element);
        }
        get selectionChanged() {
            if (!this._selectionChanged) {
                this._selectionChanged = new latte.LatteEvent(this);
            }
            return this._selectionChanged;
        }
        get imageSelected() {
            if (!this._imageSelected) {
                this._imageSelected = new latte.LatteEvent(this);
            }
            return this._imageSelected;
        }
        get selection() {
            if (window['rangy'] && !rangy.initialized) {
                rangy.init();
            }
            return rangy.getSelection();
        }
        get selectionRange() {
            var sel = this.selection;
            if (!sel.rangeCount)
                return null;
            return this.selection.getRangeAt(0);
        }
        get value() {
            return this.getValue();
        }
        set value(value) {
            this.setValue(value);
        }
        get window() {
            return this.iframe.get(0).contentWindow;
        }
    }
    HtmlEditorItem.rangyLoaded = false;
    latte.HtmlEditorItem = HtmlEditorItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    var DateTime = latte.DateTime;
    class InputItem extends latte.ValueItem {
        constructor(text = '', type = null, value = null, readOnly = null, name = null) {
            super();
            this._textWidth = 0.3;
            this._hintItem = null;
            this._meta = null;
            this._options = null;
            this._readOnly = false;
            this._readOnlyValue = null;
            this._separator = false;
            this._text = null;
            this._type = null;
            this._valueItem = null;
            this._valid = true;
            this.element.addClass('input');
            this.textElement = $('<div>').addClass('text').appendTo(this.element).hide();
            this.valueElement = $('<div>').addClass('value').appendTo(this.element);
            this.separatorElement = $('<div>').addClass('separator').appendTo(this.element);
            this.element.clear();
            this.label = new latte.LabelItem();
            this.label.appendTo(this.textElement);
            this.readOnlyLabel = new latte.LabelValueItem();
            this.readOnlyLabel.appendTo(this.valueElement);
            this.readOnlyLabel.addClass('read-only');
            this.readOnlyLabel.visible = (false);
            this.readOnlyLabel.valueChanged.add(() => {
            });
            this.type = 'string';
            this.direction = latte.View.smallScreen ? latte.Direction.VERTICAL : latte.Direction.HORIZONTAL;
            if (text)
                this.text = (text);
            if (type)
                this.type = (type);
            if (value)
                this.value = (value);
            if (readOnly)
                this.readOnly = (readOnly);
            if (name)
                this.name = name;
        }
        static format(value, type, options = null) {
            switch (type) {
                case 'switch':
                    return value === true || value === 1 ? latte.strings.switchOn : latte.strings.switchOff;
                case 'boolean':
                    return value === true || value === 1 ? latte.strings.yes : latte.strings.no;
                case 'record-combo':
                    var c = new latte['DataRecordCollection']();
                    if (options)
                        try {
                            c.add(options);
                        }
                        catch (e) {
                            throw new latte.InvalidArgumentEx('value');
                        }
                    var r = c.byId(value);
                    if (r)
                        return r.getMetadata().name;
                    return value;
                case 'combo':
                    if ((latte._isArray(options) || (typeof options === 'object')) && !latte._undef(options[value]))
                        return options[value];
                    return value;
                case 'flags':
                    let list = [];
                    let flags = parseInt(value);
                    for (let i in options) {
                        let flag = parseInt(i);
                        if ((flags & flag) == flag) {
                            list.push(options[i]);
                        }
                    }
                    return list.join(', ') || latte.strings.flagsNone;
                default:
                    return value;
            }
        }
        static fromItem(text, item) {
            var input = new InputItem(text, 'custom');
            input.valueItem = item;
            return input;
        }
        static fromIInput(input, name = null, value = null) {
            let item = new InputItem();
            item.name = name;
            item.meta = input;
            item.value = value;
            return item;
        }
        static isEmptyValue(value) {
            if (value instanceof DateTime) {
                return value._span.totalMilliseconds == 0;
            }
            else {
                return !value;
            }
        }
        updateReadonlyLabel() {
            if (this.readOnlyValue) {
                this.readOnlyLabel.value = this.readOnlyValue;
            }
            else {
                this.readOnlyLabel.value = this.valueItem.valueString;
            }
        }
        valueItemFromType(value) {
            let item;
            switch (value) {
                case "auto":
                case "label":
                    item = new latte.LabelValueItem();
                    break;
                case "string":
                    item = new latte.TextboxItem();
                    break;
                case "text":
                    item = new latte.TextboxItem();
                    item.multiline = (true);
                    break;
                case "html":
                    item = new latte.HtmlEditorItem();
                    break;
                case "number":
                    item = new latte.TextboxItem();
                    item.filter = latte.TextboxFilter.NUMBER;
                    item.validationRegex = latte.Culture.current.floatValidator;
                    break;
                case "integer":
                    item = new latte.TextboxItem();
                    item.filter = latte.TextboxFilter.INTEGER;
                    item.validationRegex = latte.Culture.current.intValidator;
                    break;
                case "float":
                    item = new latte.TextboxItem();
                    item.filter = latte.TextboxFilter.NUMBER;
                    item.validationRegex = latte.Culture.current.floatValidator;
                    break;
                case "boolean":
                    item = new latte.CheckboxItem();
                    break;
                case "switch":
                    item = new latte.SwitchItem();
                    break;
                case "password":
                    item = new latte.TextboxItem();
                    item.password = (true);
                    break;
                case "md5-password":
                    item = new latte.TextboxItem();
                    item.password = (true);
                    break;
                case "date":
                    item = new latte.DatePickerItem();
                    break;
                case "time":
                    item = new latte.TimePickerItem();
                    break;
                case "datetime":
                    item = new latte.DatePickerItem();
                    item.timeVisible = (true);
                    break;
                case "enumeration":
                    item = new latte.ComboItem();
                    break;
                case "combo":
                    item = new latte.ComboItem();
                    break;
                case "radio":
                    item = new latte.RadioGroup();
                    break;
                case "record-combo":
                    item = new latte.ComboItem();
                    break;
                case "flags":
                    item = new latte.FlagsValueItem();
                    break;
                case "color":
                    item = new latte.ColorValueItem();
                    break;
                case "file":
                    item = new latte.FileValueItem();
                    break;
                case "image":
                    item = new latte.LabelValueItem();
                    break;
                case "custom":
                    if (latte._isFunction(this.meta.customFunction)) {
                        item = this.meta.customFunction();
                    }
                    else {
                        item = new latte.LabelValueItem();
                    }
                    break;
                case "record":
                    item = new latte['DataRecordValueItem']();
                    break;
                default:
                    throw new latte.InvalidArgumentEx('value');
            }
            return item;
        }
        getValueString() {
            if (this.valueItem) {
                return this.valueItem.valueString;
            }
            else {
                return super.onGetValueString();
            }
        }
        isValid() {
            var value = this.value;
            switch (this.type) {
                case "integer":
                    var allowed = "1234567890";
                    for (var i = 0; i < value.length; i++)
                        if (allowed.indexOf(value.charAt(i)) < 0)
                            return false;
                    return true;
                case "number":
                case "float":
                    return !isNaN(value);
            }
            return true;
        }
        onLayout() {
            super.onLayout();
            this.valueItem.onLayout();
        }
        onMetaChanged() {
            if (this._metaChanged) {
                this._metaChanged.raise();
            }
            if (this.meta) {
                if ('text' in this.meta) {
                    this.text = this.meta.text;
                }
                if ('type' in this.meta) {
                    this.type = this.meta.type;
                }
                if ('options' in this.meta) {
                    this.options = this.meta.options;
                    if (this.meta.defaultValue) {
                        this.value = this.meta.defaultValue;
                    }
                }
                if ('hint' in this.meta) {
                    this.setHint(this.meta.hint);
                }
                if (latte._isBoolean(this.meta.readOnly)) {
                    this.readOnly = !!this.meta.readOnly;
                }
                if (this.meta.nullable === true) {
                    if (this.valueItem instanceof latte.DatePickerItem) {
                        let datePicker = this.valueItem;
                        datePicker.nullable = true;
                    }
                }
            }
        }
        onValueChanged() {
            super.onValueChanged();
            if (this.readOnly) {
                this.readOnly = this.readOnly;
            }
        }
        onGetValueString() {
            if (this.valueItem) {
                return this.valueItem.valueString;
            }
            else {
                return super.onGetValueString();
            }
        }
        onHintItemChanged() {
            if (this._hintItemChanged) {
                this._hintItemChanged.raise();
            }
            if (this._lastHintItem) {
                this._lastHintItem.raw.remove();
            }
            if (this.hintItem) {
                this.hintItem.addClass('input-hint');
                this.valueElement.append(this.hintItem.raw);
            }
            this._lastHintItem = this.hintItem;
        }
        onOptionsChanged() {
            if (this._optionsChanged) {
                this._optionsChanged.raise();
            }
            if (this.valueItem instanceof latte.ComboItem) {
                this.valueItem.options = this.options;
            }
            if (this.valueItem instanceof latte.RadioGroup) {
                this.valueItem.options = this.options;
            }
            if (this.valueItem instanceof latte.FlagsValueItem) {
                this.valueItem.options = this.options;
            }
        }
        onReadOnlyChanged() {
            if (this._readOnlyChanged) {
                this._readOnlyChanged.raise();
            }
            this.updateReadonlyLabel();
            this.readOnlyLabel.visible = this.readOnly;
            this.valueItem.visible = !this.readOnly;
        }
        onReadOnlyValueChanged() {
            if (this._readOnlyValueChanged) {
                this._readOnlyValueChanged.raise();
            }
            this.updateReadonlyLabel();
        }
        onSeparatorChanged() {
            if (this._separatorChanged) {
                this._separatorChanged.raise();
            }
            if (this.separator) {
                this.separatorElement.addClass('visible');
            }
            else {
                this.separatorElement.addClass('visible');
            }
        }
        onTextChanged() {
            if (this._textChanged) {
                this._textChanged.raise();
            }
            this.textVisible = !!this.text;
            if (this.text) {
                this.label.text = this.text;
            }
        }
        onTypeChanged() {
            if (this._typeChanged) {
                this._typeChanged.raise();
            }
            let item;
            if (latte._isFunction(this.type)) {
                item = new (this.value)();
            }
            else if (latte._isString(this.type)) {
                item = this.valueItemFromType(this.type);
            }
            this.valueItem = item;
        }
        onValidChanged() {
            if (this._validChanged) {
                this._validChanged.raise();
            }
            if (this.valid) {
                this.removeClass('invalid');
            }
            else {
                this.addClass('invalid');
            }
        }
        onValueItemChanged() {
            if (this._valueItemChanged) {
                this._valueItemChanged.raise();
            }
            if (this._lastValueItem) {
                this._lastValueItem.raw.remove();
            }
            if (this.valueItem) {
                this.valueElement.append(this.valueItem.raw);
                this.valueItem.valueChanged.add(() => this.onValueChanged());
            }
            this._lastValueItem = this.valueItem;
        }
        setHint(hint) {
            if (hint) {
                let l = new latte.LabelItem(hint);
                this.hintItem = l;
            }
            else {
                this.hintItem = null;
            }
        }
        get hintItemChanged() {
            if (!this._hintItemChanged) {
                this._hintItemChanged = new latte.LatteEvent(this);
            }
            return this._hintItemChanged;
        }
        get metaChanged() {
            if (!this._metaChanged) {
                this._metaChanged = new latte.LatteEvent(this);
            }
            return this._metaChanged;
        }
        get optionsChanged() {
            if (!this._optionsChanged) {
                this._optionsChanged = new latte.LatteEvent(this);
            }
            return this._optionsChanged;
        }
        get readOnlyChanged() {
            if (!this._readOnlyChanged) {
                this._readOnlyChanged = new latte.LatteEvent(this);
            }
            return this._readOnlyChanged;
        }
        get readOnlyValueChanged() {
            if (!this._readOnlyValueChanged) {
                this._readOnlyValueChanged = new latte.LatteEvent(this);
            }
            return this._readOnlyValueChanged;
        }
        get separatorChanged() {
            if (!this._separatorChanged) {
                this._separatorChanged = new latte.LatteEvent(this);
            }
            return this._separatorChanged;
        }
        get textChanged() {
            if (!this._textChanged) {
                this._textChanged = new latte.LatteEvent(this);
            }
            return this._textChanged;
        }
        get typeChanged() {
            if (!this._typeChanged) {
                this._typeChanged = new latte.LatteEvent(this);
            }
            return this._typeChanged;
        }
        get validChanged() {
            if (!this._validChanged) {
                this._validChanged = new latte.LatteEvent(this);
            }
            return this._validChanged;
        }
        get valueItemChanged() {
            if (!this._valueItemChanged) {
                this._valueItemChanged = new latte.LatteEvent(this);
            }
            return this._valueItemChanged;
        }
        get direction() {
            return this._direction;
        }
        set direction(value) {
            if (value !== latte.Direction.VERTICAL && value !== latte.Direction.HORIZONTAL)
                throw new latte.InvalidArgumentEx('value', value);
            if (value === latte.Direction.VERTICAL) {
                this.element.removeClass('horizontal').addClass('vertical');
            }
            else {
                this.element.removeClass('vertical').addClass('horizontal');
            }
            this._direction = value;
        }
        get hintItem() {
            return this._hintItem;
        }
        set hintItem(value) {
            let changed = value !== this._hintItem;
            this._hintItem = value;
            if (changed) {
                this.onHintItemChanged();
            }
        }
        get meta() {
            return this._meta;
        }
        set meta(value) {
            let changed = value !== this._meta;
            this._meta = value;
            if (changed) {
                this.onMetaChanged();
            }
        }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get options() {
            return this._options;
        }
        set options(value) {
            let changed = value !== this._options;
            this._options = value;
            if (changed) {
                this.onOptionsChanged();
            }
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            let changed = value !== this._readOnly;
            this._readOnly = value;
            if (changed) {
                this.onReadOnlyChanged();
            }
        }
        get readOnlyValue() {
            return this._readOnlyValue;
        }
        set readOnlyValue(value) {
            let changed = value !== this._readOnlyValue;
            this._readOnlyValue = value;
            if (changed) {
                this.onReadOnlyValueChanged();
            }
        }
        get separator() {
            return this._separator;
        }
        set separator(value) {
            let changed = value !== this._separator;
            this._separator = value;
            if (changed) {
                this.onSeparatorChanged();
            }
        }
        get text() {
            return this._text;
        }
        set text(value) {
            let changed = value !== this._text;
            this._text = value;
            if (changed) {
                this.onTextChanged();
            }
        }
        get textVisible() {
            return this.textElement.is(':visible');
        }
        set textVisible(value) {
            if (value) {
                this.textElement.show();
                this.element.removeClass('no-text');
            }
            else {
                this.textElement.hide();
                this.element.addClass('no-text');
            }
        }
        get textWidth() {
            return this._textWidth;
        }
        set textWidth(value) {
            this._textWidth = value;
            if (value < 0) {
                this.textElement.css('width', (value * 100) + '%');
                this.valueElement.css('width', ((100 - value - 0.05) * 100) + '%');
            }
            else {
                this.textElement.css('width', (value) + '%');
                this.valueElement.css('width', ((value - 0.1)) + '%');
            }
            this.onLayout();
        }
        get type() {
            return this._type;
        }
        set type(value) {
            let changed = value !== this._type;
            this._type = value;
            if (changed) {
                this.onTypeChanged();
            }
        }
        get value() {
            return this.valueItem.value;
        }
        set value(value) {
            this.valueItem.value = (value);
            this.updateReadonlyLabel();
        }
        get valueItem() {
            return this._valueItem;
        }
        set valueItem(value) {
            let changed = value !== this._valueItem;
            this._valueItem = value;
            if (changed) {
                this.onValueItemChanged();
            }
        }
        get valid() {
            return this._valid;
        }
        set valid(value) {
            let changed = value !== this._valid;
            this._valid = value;
            if (changed) {
                this.onValidChanged();
            }
        }
    }
    latte.InputItem = InputItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class LabelValueItem extends latte.ValueItem {
        constructor() {
            super();
            this.element.addClass('label-value');
            this.label = new latte.LabelItem();
            this.label.appendTo(this.element);
        }
        onValueChanged() {
            super.onValueChanged();
            this.label.text = this.value;
        }
    }
    latte.LabelValueItem = LabelValueItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ProgressItem extends latte.ValueItem {
        constructor() {
            super();
            this._maxValue = 100;
            this._minValue = 0;
            this._animated = true;
            this.element.addClass('progress');
            this.container = $('<div>').addClass('container').appendTo(this.element);
            this.bar = $('<div>').addClass('bar').appendTo(this.container);
            this.onLayout(false);
        }
        getPercentage() {
            var diff = this.maxValue - this.minValue;
            var curr = this.value - this.minValue;
            return Math.ceil(curr * 100 / diff);
        }
        onLayout(animate = true) {
            var w = this.getPercentage();
            if (animate !== false && this.animated !== false)
                this.bar.animate({ width: w + '%' });
            else
                this.bar.css('width', w + '%');
        }
        onValueChanged() {
            super.onValueChanged();
            let value = this.value;
            if (value > this.maxValue) {
                value = this.maxValue;
                this.bar.css('backgroundColor', 'red');
            }
            else {
                this.bar.css('backgroundColor', '');
            }
            if (value < this.minValue) {
                value = this.minValue;
                this.container.css('borderColor', 'red');
            }
            else {
                this.container.css('borderColor', '');
            }
            this.onLayout();
        }
        get animated() {
            return this._animated;
        }
        set animated(value) {
            this._animated = value;
        }
        get maxValue() {
            return this._maxValue;
        }
        set maxValue(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value != this._maxValue;
            this._maxValue = value;
            if (changed)
                this.onLayout();
        }
        get minValue() {
            return this._minValue;
        }
        set minValue(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value', value);
            var changed = value != this._minValue;
            this._minValue = value;
            if (changed)
                this.onLayout();
        }
    }
    latte.ProgressItem = ProgressItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class RadioGroup extends latte.ValueItem {
        constructor(options = null) {
            super();
            this.element.addClass('radio-group');
            this.stack = new latte.ItemStack();
            this.stack.element.appendTo(this.element);
            if (options) {
                this.options = options;
            }
        }
        onGetValueString() {
            for (var i = 0; i < this.radios.length; i++) {
                if (this.radios[i].tag == this.value) {
                    return this.radios[i].text;
                }
            }
            return '';
        }
        onValueChanged() {
            super.onValueChanged();
            for (var i = 0; i < this.radios.length; i++) {
                if (this.radios[i].tag == this.value) {
                    this.radios[i].value = true;
                }
            }
        }
        get options() {
            return this._options;
        }
        set options(options) {
            if (!latte._isArray(options) && !latte._isObject(options))
                throw new latte.InvalidArgumentEx('options', options);
            for (var i in options) {
                ((name, option) => {
                    var r = new latte.RadioItem();
                    r.text = option.toString();
                    r.tag = name;
                    this.radios.add(r);
                })(i, options[i]);
            }
            this._options = options;
        }
        get radios() {
            if (!this._radios) {
                this._radios = new latte.Collection((radio) => {
                    this.stack.items.add(radio);
                    radio.valueChanged.add(() => {
                        if (radio.value) {
                            this.value = radio.tag;
                            for (var i = 0; i < this.radios.length; i++) {
                                if (this.radios[i] !== radio) {
                                    this.radios[i].value = false;
                                }
                            }
                        }
                    });
                }, (radio) => { this.stack.items.remove(radio); }, this);
            }
            return this._radios;
        }
    }
    latte.RadioGroup = RadioGroup;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class RadioItem extends latte.ValueItem {
        constructor(text = null, value = null) {
            super();
            this.element.addClass('radio');
            this.label = new latte.LabelItem();
            this.label.appendTo(this);
            this.addEventListener('click', () => this.value = !this.value);
            if (latte._isBoolean(value)) {
                this.value = value;
            }
            else {
                this.value = false;
            }
            if (text) {
                this.text = text;
            }
        }
        onValueChanged() {
            super.onValueChanged();
            if (this.value) {
                this.label.icon = latte.Glyph.checkedRadio;
            }
            else {
                this.label.icon = latte.Glyph.uncheckedRadio;
            }
        }
        get text() {
            return this.label.text;
        }
        set text(value) {
            this.label.text = value;
        }
    }
    latte.RadioItem = RadioItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SwitchItem extends latte.ValueItem {
        constructor() {
            super();
            this.addClass('switch');
            this.element.append(this.orb);
            this.addEventListener('click', () => this.value = !this.value);
        }
        onGetValueString() {
            return this.value ? latte.strings.switchOn : latte.strings.switchOff;
        }
        onValueChanged() {
            super.onValueChanged();
            let value = this.value;
            if (!latte._isBoolean(value) && latte._isString(value) && latte._isNumeric(value)) {
                this.value = !!parseInt(value);
            }
            else {
                this.ensureClass('on', this.value);
            }
        }
        serialize() {
            return this.value ? "1" : "0";
        }
        unserialize(value) {
            this.value = !!parseInt(value);
        }
        get orb() {
            if (!this._orb) {
                this._orb = document.createElement('div');
                this._orb.classList.add('orb');
            }
            return this._orb;
        }
    }
    latte.SwitchItem = SwitchItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    let TextboxFilter;
    (function (TextboxFilter) {
        TextboxFilter[TextboxFilter["NONE"] = 0] = "NONE";
        TextboxFilter[TextboxFilter["NUMBER"] = 1] = "NUMBER";
        TextboxFilter[TextboxFilter["INTEGER"] = 2] = "INTEGER";
    })(TextboxFilter = latte.TextboxFilter || (latte.TextboxFilter = {}));
    class TextboxItem extends latte.ValueItem {
        constructor() {
            super();
            this._minLenToSuggest = 4 - 1;
            this.selectedIndex = -1;
            this._loadingSuggestions = false;
            this.ignorePassToTextbox = false;
            this._allowedKeys = null;
            this._autoGrow = true;
            this._filter = null;
            this._readOnly = false;
            this._valid = true;
            this._validationRegex = null;
            this._suggestionOverlay = null;
            this.element.addClass('textbox');
            this._inputContainer = $('<div>').addClass('input').appendTo(this.element);
            this._invisible = $('<div>').addClass('invisible').appendTo(this.element);
            this._updateInput();
        }
        _updateInput() {
            this._inputContainer.empty();
            if (this.password) {
                this.input = $('<input type=password>').appendTo(this._inputContainer);
            }
            else {
                if (this.multiline) {
                    this.input = $('<textarea>').appendTo(this._inputContainer);
                }
                else {
                    this.input = $('<input type=text>').appendTo(this._inputContainer);
                }
            }
            if (this.maxLength > 0)
                this.maxLength = this.maxLength;
            this.input.click((e) => {
                e.stopPropagation();
                return false;
            });
            this.input.keydown((evt) => {
                if (latte._isArray(this.allowedKeys)) {
                    let found = false;
                    if (!(evt.ctrlKey || evt.altKey || evt.metaKey || evt.shiftKey
                        || evt.keyCode == latte.Key.ENTER || evt.keyCode == latte.Key.TAB
                        || evt.keyCode == latte.Key.ESCAPE || evt.keyCode == latte.Key.ARROW_DOWN
                        || evt.keyCode == latte.Key.ARROW_LEFT || evt.keyCode == latte.Key.ARROW_RIGHT
                        || evt.keyCode == latte.Key.ARROW_UP)) {
                        for (let i in this.allowedKeys) {
                            if (evt.keyCode == this.allowedKeys[i]) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            evt.preventDefault();
                            evt.stopImmediatePropagation();
                            return false;
                        }
                    }
                }
                if (evt.keyCode === latte.Key.ENTER) {
                    this.onEnterPressed();
                }
                this.setValueSilently(this.input.val());
                if (this.onKeyDown(evt) === false) {
                    return false;
                }
            });
            this.input.keypress((e) => {
                this.onLayout();
                this.setValueSilently(this.input.val());
                this.onKeyPress(e);
            });
            this.input.keyup((e) => {
                this.onLayout();
                this.setValueSilently(this.input.val());
                return this.onKeyUp(e) !== false;
            });
            this.input.focus(() => {
                if (this.minLengthToActivateSuggestions == 0) {
                    this.onFilterSuggestions();
                }
            });
            this.input.blur(() => {
                this.hideSuggestions();
            });
        }
        hideSuggestions() {
            this.suggestionOverlay.items.clear();
            this.suggestionOverlay.close();
            this._suggestionOverlay = null;
        }
        onAddSuggestion(item) {
            this.suggestionOverlay.items.add(item);
            if (item instanceof latte.ButtonItem) {
                item.click.add(() => this.hideSuggestions());
                item.raw.addEventListener('mousedown', e => item.onClick());
            }
        }
        onEnterPressed() {
            if (this._enterPressed) {
                this._enterPressed.raise();
            }
        }
        onFilterSuggestions() {
            if (this._filterSuggestions) {
                this._filterSuggestions.raise();
            }
        }
        onKeyDown(e) {
            this.keyDown.raise();
            if (this.suggestionsVisible) {
                if (e.keyCode == latte.Key.ARROW_UP) {
                    this.selectPreviousSuggestion();
                    e.stopImmediatePropagation();
                    return false;
                }
                else if (e.keyCode == latte.Key.ARROW_DOWN) {
                    this.selectNextSuggestion();
                    e.stopImmediatePropagation();
                    return false;
                }
                else if (e.keyCode == latte.Key.ENTER) {
                    if (this._selectedSuggestion instanceof latte.ButtonItem) {
                        this._selectedSuggestion.onClick();
                    }
                    e.stopImmediatePropagation();
                    return false;
                }
                else if (e.keyCode == latte.Key.ESCAPE) {
                    this.hideSuggestions();
                    e.stopImmediatePropagation();
                    return false;
                }
            }
        }
        onKeyUp(e) {
            this.keyUp.raise();
            if (e.keyCode != latte.Key.ARROW_DOWN && e.keyCode != latte.Key.ARROW_UP
                && e.keyCode != latte.Key.TAB && e.keyCode != latte.Key.ENTER && e.keyCode != latte.Key.ESCAPE) {
                if (!this._loadingSuggestions) {
                    if (this.value.length >= this.minLengthToActivateSuggestions) {
                        this._loadingSuggestions = true;
                        setInterval(() => { this._loadingSuggestions = false; }, 1000);
                        this.onFilterSuggestions();
                    }
                    else {
                        this.hideSuggestions();
                    }
                }
            }
        }
        onKeyPress(e) {
            if (this._keyPress) {
                return this._keyPress.raise(e);
            }
        }
        onLayout() {
            super.onLayout();
            if (this.multiline && this.autoGrow && this.input) {
                this._invisible
                    .width(this.input.width())
                    .text(this.input.val() + '.');
                this.input.height(Math.max(13, this._invisible.height()));
            }
        }
        onReadOnlyChanged() {
            if (this._readOnlyChanged) {
                this._readOnlyChanged.raise();
            }
            if (this.readOnly) {
                this.input.attr('readonly', 'yes');
            }
            else {
                this.input.removeAttr('readonly');
            }
        }
        onRemoveSuggestion(item) {
            this.suggestionOverlay.items.remove(item);
        }
        onValidChanged() {
            if (this._validChanged) {
                return this._validChanged.raise();
            }
            this.ensureClass('invalid', !this.valid);
        }
        onValueChanged() {
            super.onValueChanged();
            if (this.ignorePassToTextbox) {
                this.ignorePassToTextbox = false;
            }
            else {
                this.input.val(this.value);
            }
            if (this._placeholderLabel) {
                this.placeholderLabel.visible = this.value.length === 0;
            }
            if (this.value.length < this.minLengthToActivateSuggestions && this.suggestionsVisible) {
                this.hideSuggestions();
            }
            if (this.validationRegex && String(this.value).length > 0) {
                this.valid = this.validationRegex.test(this.value);
            }
        }
        selectFirstSuggestion() {
            this.selectSuggestion(0);
        }
        selectNextSuggestion() {
            if (this.suggestionsVisible && this.selectedIndex < this._suggestionOverlay.items.length) {
                this.selectSuggestion(this.selectedIndex + 1);
            }
        }
        selectPreviousSuggestion() {
            if (this.suggestionsVisible && this.selectedIndex > 0) {
                this.selectSuggestion(this.selectedIndex - 1);
            }
        }
        selectSuggestion(index) {
            if (this.suggestionsVisible) {
                if (index < 0 || index >= this._suggestionOverlay.items.length) {
                    throw new latte.Ex();
                }
                for (var i = 0; i < this._suggestionOverlay.items.length; i++) {
                    var b = this._suggestionOverlay.stack.items[i];
                    b.checked = i == index;
                    if (i == index)
                        this._selectedSuggestion = b;
                }
                this.selectedIndex = index;
            }
            else {
                this.selectedIndex = -1;
            }
        }
        setRelativeWidth(width) {
            this.input.css('width', width);
        }
        setSideAsCleaner(icon = null) {
            if (!icon) {
                icon = latte.IconItem.standard(8, 10);
            }
            this.sideLabel.tooltip = latte.strings.clearText;
            this.sideLabel.css('cursor', 'pointer');
            this.sideLabel.element.click(() => { this.value = ''; });
            this.valueChanged.add(() => {
                if (this.value.length > 0) {
                    this.sideLabel.icon = icon;
                }
                else {
                    this.sideLabel.icon = null;
                }
            });
        }
        setValueSilently(value) {
            if (value !== this.value) {
                this.ignorePassToTextbox = true;
                this.value = value;
            }
        }
        get enterPressed() {
            if (!this._enterPressed) {
                this._enterPressed = new latte.LatteEvent(this);
            }
            return this._enterPressed;
        }
        get filterSuggestions() {
            if (!this._filterSuggestions) {
                this._filterSuggestions = new latte.LatteEvent(this);
            }
            return this._filterSuggestions;
        }
        get keyPress() {
            if (!this._keyPress) {
                this._keyPress = new latte.LatteEvent(this);
            }
            return this._keyPress;
        }
        get keyDown() {
            if (!this._keyDown) {
                this._keyDown = new latte.LatteEvent(this);
            }
            return this._keyDown;
        }
        get keyUp() {
            if (!this._keyUp) {
                this._keyUp = new latte.LatteEvent(this);
            }
            return this._keyUp;
        }
        get readOnlyChanged() {
            if (!this._readOnlyChanged) {
                this._readOnlyChanged = new latte.LatteEvent(this);
            }
            return this._readOnlyChanged;
        }
        get validChanged() {
            if (!this._validChanged) {
                this._validChanged = new latte.LatteEvent(this);
            }
            return this._validChanged;
        }
        get allowedKeys() {
            return this._allowedKeys;
        }
        set allowedKeys(value) {
            this._allowedKeys = value;
        }
        get autoGrow() {
            return this._autoGrow;
        }
        set autoGrow(value) {
            this._autoGrow = value;
        }
        get filter() {
            return this._filter;
        }
        set filter(value) {
            this._filter = value;
            let navs = [latte.Key.ARROW_LEFT, latte.Key.ARROW_RIGHT, latte.Key.TAB,
                latte.Key.SHIFT, latte.Key.ALT, latte.Key.DELETE, latte.Key.BACKSPACE];
            let numbers = [latte.Key.NUMBER_0, latte.Key.NUMBER_1, latte.Key.NUMBER_2, latte.Key.NUMBER_3, latte.Key.NUMBER_4, latte.Key.NUMBER_5,
                latte.Key.NUMBER_6, latte.Key.NUMBER_7, latte.Key.NUMBER_8, latte.Key.NUMBER_9, latte.Key.NUMPAD_0, latte.Key.NUMPAD_1, latte.Key.NUMPAD_2,
                latte.Key.NUMPAD_3, latte.Key.NUMPAD_4, latte.Key.NUMPAD_5, latte.Key.NUMPAD_6, latte.Key.NUMPAD_7, latte.Key.NUMPAD_8, latte.Key.NUMPAD_9];
            let period = [latte.Key.PERIOD];
            let comma = [latte.Key.COMMA];
            if (value && value == TextboxFilter.NUMBER) {
                this.allowedKeys = navs.concat(numbers).concat(period).concat(comma);
            }
            else if (value && value == TextboxFilter.INTEGER) {
                this.allowedKeys = navs.concat(numbers);
            }
        }
        get maxLength() {
            return this._maxLength;
        }
        set maxLength(value) {
            if (!latte._isNumber(value))
                throw new latte.InvalidArgumentEx('value');
            this._maxLength = value;
            if (value > 0)
                this.input.attr('maxlength', value);
        }
        get minHeight() {
            return this._minHeight;
        }
        get minLengthToActivateSuggestions() {
            return this._minLenToSuggest;
        }
        set minLengthToActivateSuggestions(value) {
            this._minLenToSuggest = value;
        }
        set minHeight(value) {
            this._minHeight = value;
            this.input.css({ minHeight: value });
        }
        get multiline() {
            return this._multiline;
        }
        set multiline(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._multiline = value;
            this._updateInput();
        }
        get password() {
            return this._password;
        }
        set password(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value', value);
            this._password = value;
            this._updateInput();
        }
        get placeholder() {
            return this.placeholderLabel.text;
        }
        set placeholder(value) {
            this.placeholderLabel.text = value;
        }
        get readOnly() {
            return this._readOnly;
        }
        set readOnly(value) {
            var changed = value !== this._readOnly;
            this._readOnly = value;
            if (changed) {
                this.onReadOnlyChanged();
            }
        }
        get suggestions() {
            if (!this._suggestions) {
                this._suggestions = new latte.Collection(this.onAddSuggestion, this.onRemoveSuggestion, this);
            }
            return this._suggestions;
        }
        get suggestionsVisible() {
            return this._suggestionOverlay instanceof latte.Overlay;
        }
        get valid() {
            return this._valid;
        }
        set valid(value) {
            let changed = value !== this._valid;
            this._valid = value;
            if (changed) {
                this.onValidChanged();
            }
        }
        get validationRegex() {
            return this._validationRegex;
        }
        set validationRegex(value) {
            this._validationRegex = value;
        }
        get width() {
            return this.input.width();
        }
        set width(value) {
            this.input.width(value - Math.abs(this.input.width() - this.input.outerWidth()));
        }
        get placeholderLabel() {
            if (!this._placeholderLabel) {
                this._placeholderLabel = new latte.LabelItem();
                this._placeholderLabel.addClass('placeholder');
                this._placeholderLabel.appendTo(this);
                this._placeholderLabel.addEventListener('click', () => this.input.focus());
                latte.UiElement.disableTextSelection(this.placeholderLabel.element);
            }
            return this._placeholderLabel;
        }
        get sideLabel() {
            if (!this._sideLabel) {
                this._sideLabel = new latte.LabelItem();
                this._sideLabel.addClass('side-label');
                this._sideLabel.appendTo(this);
            }
            return this._sideLabel;
        }
        get suggestionOverlay() {
            if (!this._suggestionOverlay) {
                this._suggestionOverlay = new latte.SuggestionOverlay();
                this._suggestionOverlay.element.appendTo('body');
                this._suggestionOverlay.stack.items.addItem.add(() => {
                    if (this._suggestionOverlay.stack.items.length > 0) {
                        this._suggestionOverlay.showAtSide(latte.Side.BOTTOM, this);
                    }
                    if (this._suggestionOverlay.items.length == 1) {
                        this.selectFirstSuggestion();
                    }
                });
                this._suggestionOverlay.stack.items.removeItem.add(() => {
                    if (this._suggestionOverlay.stack.items.length == 0) {
                        this.hideSuggestions();
                    }
                });
            }
            return this._suggestionOverlay;
        }
    }
    latte.TextboxItem = TextboxItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TimePickerItem extends latte.ValueItem {
        constructor() {
            super();
            this.ignorePassToCombos = false;
            this.element.addClass('time-picker');
            this.element.append(this.hourCombo);
            this.element.append(this.minuteCombo);
            this.element.append(this.secondCombo);
        }
        zeroPad(i) {
            return i < 10 ? '0' + i : i.toString();
        }
        onValueChanged() {
            super.onValueChanged();
            if (this.ignorePassToCombos) {
                this.ignorePassToCombos = false;
            }
            else {
                this.hourCombo.value = this.value.hours;
                this.minuteCombo.value = this.value.minutes;
                this.secondCombo.value = this.value.seconds;
            }
        }
        onGetValueString() {
            return String(this.value);
        }
        setHourSilently(hours) {
            this.setValueSilently(new latte.TimeSpan(0, hours, this.value.minutes, this.value.seconds, this.value.milliseconds));
        }
        setMinuteSilently(minutes) {
            this.setValueSilently(new latte.TimeSpan(0, this.value.hours, minutes, this.value.seconds, this.value.milliseconds));
        }
        setSecondSilently(seconds) {
            this.setValueSilently(new latte.TimeSpan(0, this.value.hours, this.value.minutes, seconds, this.value.milliseconds));
        }
        setValueSilently(value) {
            this.ignorePassToCombos = true;
            this.value = value;
        }
        get hourCombo() {
            if (!this._hourCombo) {
                this._hourCombo = new latte.ComboItem();
                this._hourCombo.valueChanged.add(() => this.setHourSilently(this.hourCombo.value));
                this._hourCombo.button.loadItems.add(() => {
                    var hours = [];
                    for (var i = 0; i <= 23; i++) {
                        hours[i] = this.zeroPad(i);
                    }
                    this._hourCombo.options = hours;
                });
                this._hourCombo.value = 0;
                this._hourCombo.button.dropdownVisible = false;
            }
            return this._hourCombo;
        }
        get minuteCombo() {
            if (!this._minuteCombo) {
                this._minuteCombo = new latte.ComboItem();
                this._minuteCombo.valueChanged.add(() => this.setMinuteSilently(this.minuteCombo.value));
                this._minuteCombo.button.loadItems.add(() => {
                    var minutes = [];
                    for (var i = 0; i <= 59; i++) {
                        minutes[i] = this.zeroPad(i);
                    }
                    this._minuteCombo.options = minutes;
                });
                this._minuteCombo.value = 0;
                this._minuteCombo.button.dropdownVisible = false;
            }
            return this._minuteCombo;
        }
        get secondCombo() {
            if (!this._secondCombo) {
                this._secondCombo = new latte.ComboItem();
                this._secondCombo.valueChanged.add(() => this.setSecondSilently(this.secondCombo.value));
                this._secondCombo.button.loadItems.add(() => {
                    var minutes = [];
                    for (var i = 0; i <= 59; i++) {
                        minutes[i] = this.zeroPad(i);
                    }
                    this._secondCombo.options = minutes;
                });
                this._secondCombo.value = 0;
                this._secondCombo.button.dropdownVisible = false;
            }
            return this._secondCombo;
        }
    }
    latte.TimePickerItem = TimePickerItem;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Overlay extends latte.UiElement {
        constructor() {
            super();
            this._isClosed = false;
            this._result = null;
            this.element.addClass('latte-overlay');
        }
        ensureOnTree() {
            if (this.element.parent().length == 0) {
                this.element.appendTo('body');
            }
        }
        onDismisserAdded(d) {
            d.overlay = this;
        }
        onDismisserRemoved(d) {
            d.uninstall();
        }
        setIsClosed(value) {
            this._isClosed = value;
        }
        setIsShown(value) {
            this._isShown = value;
        }
        close() {
            this.setIsClosed(true);
            this.element.remove();
            this.dismissers.each(d => d.uninstall());
        }
        setFirstInParent(parent) {
            this._parent = parent;
            parent.element.prepend(this.element);
        }
        onResultChanged() {
            if (this._resultChanged) {
                this._resultChanged.raise();
            }
        }
        onShown() {
            if (this._shown) {
                this._shown.raise();
            }
            this.setIsShown(true);
        }
        show() {
            this.ensureOnTree();
            this.onShown();
        }
        showAt(left, top) {
            this.left = left;
            this.top = top;
            this.ensureOnTree();
            this.onShown();
        }
        showAtSide(side, uielement) {
            let r = uielement.element.rectangle();
            switch (side) {
                case latte.Side.TOP:
                    this.top = r.top - this.height;
                    this.left = r.left;
                    this.width = r.width;
                    break;
                case latte.Side.BOTTOM:
                    this.top = r.bottom;
                    this.left = r.left;
                    this.width = r.width;
                    break;
                default:
                    throw new latte.Ex();
            }
            this.ensureOnTree();
            this.onShown();
        }
        showAtVieportCenter() {
            if (this.element.parent().length == 0) {
                this.left = -100000;
                this.element.appendTo('body');
            }
            setTimeout(() => {
                let uaBounds = new latte.Rectangle(0, 0, window.innerWidth, window.innerHeight);
                let bounds = latte.Rectangle.fromElement(this.raw);
                let centered = bounds.centerOn(uaBounds);
                this.left = centered.left;
                this.top = centered.top;
            }, 0);
            this.onShown();
        }
        get shown() {
            if (!this._shown) {
                this._shown = new latte.LatteEvent(this);
            }
            return this._shown;
        }
        get dismissers() {
            if (!this._dismissers) {
                let lazy = this._dismissers = new latte.Collection(d => this.onDismisserAdded(d), d => this.onDismisserRemoved(d));
            }
            return this._dismissers;
        }
        get isClosed() {
            return this._isClosed;
        }
        get isShown() {
            return this._isShown;
        }
        get left() {
            return this._left;
        }
        set left(value) {
            this._left = value;
            this.element.css('left', value);
        }
        get parent() {
            return this._parent;
        }
        set parent(value) {
            this._parent = value;
            this.element.detach().appendTo(value.element);
        }
        get resultChanged() {
            if (!this._resultChanged) {
                this._resultChanged = new latte.LatteEvent(this);
            }
            return this._resultChanged;
        }
        get result() {
            return this._result;
        }
        set result(value) {
            let changed = value !== this._result;
            this._result = value;
            if (changed) {
                this.onResultChanged();
            }
        }
        get top() {
            return this._top;
        }
        set top(value) {
            this._top = value;
            this.element.css('top', value);
        }
    }
    latte.Overlay = Overlay;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ItemOverlay extends latte.Overlay {
        constructor(item) {
            super();
            this._item = null;
            if (item) {
                this.item = item;
            }
        }
        get item() {
            return this._item;
        }
        set item(value) {
            var changed = value !== this._item;
            this._item = value;
            if (changed) {
                this.onItemChanged();
            }
        }
        get itemChanged() {
            if (!this._itemChanged) {
                this._itemChanged = new latte.LatteEvent(this);
            }
            return this._itemChanged;
        }
        onItemChanged() {
            if (this._itemChanged) {
                this._itemChanged.raise();
            }
            this.element.clear().append(this.item.element);
        }
    }
    latte.ItemOverlay = ItemOverlay;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class Loader extends latte.Overlay {
        constructor(text = '', modal = false) {
            super();
            this.element.addClass('loader');
            this.cancelled = new latte.LatteEvent(this);
            this.element.addClass('loader').appendTo('body');
            this.labelElement = $('<div>').addClass('label').appendTo(this.element);
            this.cancelElement = $('<div>').addClass('cancel').appendTo(this.element);
            this.progress = new latte.ProgressItem();
            this.progress.visible = false;
            this.progress.appendTo(this.element);
            this.text = latte._undef(text) ? latte.strings.working : text;
            this.modal = modal === true;
            this.start();
        }
        static add(loader) {
            if (!(loader instanceof Loader))
                throw new latte.InvalidArgumentEx('loader');
            var a = Loader._active;
            var found = false;
            for (var i = 0; i < a.length; i++) {
                if (a[i] === loader) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                a.unshift(loader);
            }
        }
        static remove(loader) {
            if (!(loader instanceof Loader))
                throw new latte.InvalidArgumentEx('loader');
            var a = Loader._active;
            var arr = [];
            for (var i = 0; i < a.length; i++) {
                if (a[i] != loader)
                    arr.push(a[i]);
            }
            Loader._active = arr;
        }
        static update() {
            Loader.updateModalVisibility();
            Loader.updateLayout();
        }
        static updateLayout() {
            var loaders = Loader._active;
            if (!loaders.length)
                return;
            var loader = null;
            var curTop = 0;
            var s = Loader.separation;
            var sampleHeight = loaders[0].element.outerHeight();
            var r = new latte.Rectangle(s, 0, Loader.maxWidth, (sampleHeight + s) * loaders.length);
            r = r.centerOn($(document).rectangle());
            if (!Loader.modalShouldBeVisible) {
                r.top = s;
            }
            curTop = r.top;
            for (var i = 0; i < loaders.length; i++) {
                loader = loaders[i];
                loader
                    .element
                    .css({
                    left: r.left
                })
                    .show()
                    .animate({
                    opacity: 1,
                    top: curTop
                }, 'fast');
                curTop += sampleHeight + s;
            }
        }
        static updateModalVisibility() {
            Loader.modalVisible = Loader.modalShouldBeVisible;
        }
        static get maxWidth() {
            var max = 0;
            var a = Loader._active;
            for (var i = 0; i < a.length; i++) {
                a[i].element.css('width', null);
                max = Math.max(max, a[i].element.width());
            }
            return max;
        }
        static get modalShouldBeVisible() {
            var shouldBeVisible = false;
            var a = Loader._active;
            for (var i = 0; i < a.length; i++) {
                if (a[i].modal === true) {
                    shouldBeVisible = true;
                    break;
                }
            }
            return shouldBeVisible;
        }
        static get modalVisible() {
            var m = $('.latte-loader-modal');
            return m.is(':visible') || m.hasClass('fading-out');
        }
        static set modalVisible(visible) {
            var m = $('.latte-loader-modal');
            if (m.length == 0) {
                m = $('<div>')
                    .addClass('latte-loader-modal')
                    .hide()
                    .appendTo('body')
                    .css({
                    position: 'fixed',
                    left: 0, top: 0, right: 0, bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)'
                });
            }
            m.detach();
            var loaders = $('body > div.loader');
            if (loaders.length == 0)
                $('body').append(m);
            else
                loaders.first().before(m);
            if (visible === true) {
                if (!m.is(':visible')) {
                    m.show().css('opacity', 0).animate({
                        opacity: 1
                    }, 'fast');
                }
            }
            else {
                if (m.is(':visible') && !m.hasClass('fading-out')) {
                    m.addClass('fading-out').css('opacity', 1).animate({
                        opacity: 0
                    }, 'fast', 'swing', function () { $(this).removeClass('fading-out').hide(); });
                }
            }
        }
        onCancelled() {
            this.cancelled.raise();
        }
        start() {
            Loader.add(this);
            var screen = $(document).rectangle();
            var r = this.element.rectangle();
            r = r.centerOn(screen);
            this.element.css({
                top: -this.element.height() - 10,
                left: r.left,
                opacity: 0
            });
            Loader.update();
        }
        stop() {
            var inst = this;
            Loader.remove(this);
            this.element
                .animate({
                opacity: 0,
                top: -(this.element.height())
            }, 'fast', 'swing', () => { inst.element.remove(); });
            Loader.update();
        }
        get cancellable() {
            return this._cancellable;
        }
        set cancellable(value) {
            this._cancellable = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
        }
        get modal() {
            return this._modal;
        }
        set modal(value) {
            this._modal = value;
        }
        get text() {
            return this.labelElement.html();
        }
        set text(value) {
            this.labelElement.html(value);
            Loader.update();
        }
    }
    Loader._active = [];
    Loader.separation = 5;
    latte.Loader = Loader;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class MenuOverlay extends latte.Overlay {
        constructor() {
            super();
            this.closed = new latte.LatteEvent(this);
            this.willShowAtX = new latte.LatteEvent(this);
            this.willShowAtY = new latte.LatteEvent(this);
            this._side = latte.Side.AUTO;
            this._edge = latte.Side.AUTO;
            this.element.addClass('menu');
            this.element.addClass('menu-face');
            this.element.css({
                minWidth: 100, minHeight: 20
            });
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
        }
        static _initialize() {
            if (MenuOverlay.initialized === true) {
                return;
            }
            MenuOverlay.closingAll = new latte.LatteEvent(this);
            $(document)
                .click(function () {
                MenuOverlay.closeAll();
            })
                .keydown(function (evt) {
                if (evt.keyCode == latte.Key.ESCAPE) {
                    MenuOverlay.closeAll();
                }
            });
            MenuOverlay.initialized = true;
        }
        static closeAll() {
            MenuOverlay.onClosingAll();
            $('.latte-overlay.menu').each(function () {
                $(this).data('instance').close();
            });
        }
        static mark(elem, side = null) {
            if (!(elem instanceof jQuery))
                throw new latte.InvalidArgumentEx('elem', elem);
            elem.removeClass('with-menu with-menu-at-top with-menu-at-bottom ' +
                'with-menu-at-right with-menu-at-left hover pressed');
            if (side) {
                var str = '';
                switch (side) {
                    case latte.Side.BOTTOM:
                        str = 'bottom';
                        break;
                    case latte.Side.LEFT:
                        str = 'left';
                        break;
                    case latte.Side.RIGHT:
                        str = 'right';
                        break;
                    case latte.Side.TOP:
                        str = 'top';
                        break;
                }
                elem.addClass('with-menu with-menu-at-' + str);
            }
        }
        static onClosingAll() {
            MenuOverlay.closingAll.raise();
        }
        _onAddItem(item) {
            if (item instanceof latte.ButtonItem) {
                var b = item;
                b.faceVisible = false;
                if (b.items.count > 0 || b.willLoadItems)
                    b.glyph = latte.Glyph.right;
                else
                    b.glyph = null;
                b.click.add(() => { MenuOverlay.closeAll(); });
            }
            this.element.append(item.element);
        }
        _onRemoveItem(item) {
            item.element.detach();
        }
        close() {
            var m = this;
            if (this._parentButton)
                this._parentButton.itemsMenu = null;
            if (this.domElement) {
            }
            if (this.item instanceof latte.ClickableItem) {
                this.item.contextAt = null;
            }
            latte.ZIndex.removeElement(this.element);
            this.onClosed();
            this.element.fadeOut('fast', function () {
                m.element.detach();
            });
            return this;
        }
        closeChildrenMenus() {
            var item;
            while ((item = this.items.next())) {
                if (item instanceof latte.ButtonItem)
                    item.hideItems();
            }
            return this;
        }
        onClosed() {
            this.closed.raise();
        }
        onLayout() {
            super.onLayout();
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].onLayout();
            }
        }
        onWillShowAtX(x) {
            return this.willShowAtX.raise(x);
        }
        onWillShowAtY(y) {
            return this.willShowAtY.raise(y);
        }
        setParentButton(b) {
            this._parentButton = b;
        }
        showByItem(item, side, edge) {
            if (!(item instanceof latte.Item))
                throw new latte.InvalidArgumentEx('item', item);
            this.parent = item;
            var s = latte.Side;
            var $element = item instanceof latte.ButtonItem ? (item.split ? item.dropdown.element : item.element) : item.element;
            var e = item.element.rectangle();
            var r = this.element.rectangle();
            var x = 0;
            var y = 0;
            var iterations = 0;
            var offset = 2;
            this._item = item;
            this._domElement = $element;
            if (latte._undef(side) || !side)
                side = s.BOTTOM;
            if (latte._undef(edge) || !edge)
                edge = s.AUTO;
            this.element.hide();
            while (iterations++ < 2) {
                $element.removeClass('hover pressed');
                if (item instanceof latte.ClickableItem) {
                    item.contextAt = side;
                }
                switch (side) {
                    case s.TOP:
                        y = e.top - r.height + offset;
                        break;
                    case s.BOTTOM:
                        y = e.bottom - offset;
                        break;
                    case s.LEFT:
                        x = e.left - r.width + offset;
                        break;
                    case s.RIGHT:
                        x = e.right - offset;
                        break;
                }
                if (side == s.TOP || side == s.BOTTOM) {
                    var minWidth = Math.round(e.width * 1.3);
                    this.element.css('min-width', minWidth);
                    r = this.element.rectangle();
                    if (edge == s.RIGHT)
                        x = e.right - r.width;
                    else
                        x = e.left;
                }
                if (side == s.LEFT || side == s.RIGHT) {
                    var minHeight = Math.round(e.height * 1.3);
                    this.element.css('min-height', minHeight);
                    r = this.element.rectangle();
                    if (edge == s.BOTTOM)
                        y = e.bottom - r.height;
                    else
                        y = e.top;
                }
                var viewport = $(window).rectangle();
                var rect = new latte.Rectangle(x, y, this.element.width(), this.element.height());
                if (iterations <= 1 && !viewport.containsRectangle(rect)) {
                    if (side == s.RIGHT && rect.right > viewport.right
                        || side == s.LEFT && rect.left < viewport.left
                        || side == s.BOTTOM && rect.bottom > viewport.bottom
                        || side == s.TOP && rect.top < viewport.top) {
                        switch (side) {
                            case s.TOP:
                                side = s.BOTTOM;
                                break;
                            case s.BOTTOM:
                                side = s.TOP;
                                break;
                            case s.RIGHT:
                                side = s.LEFT;
                                break;
                            case s.LEFT:
                                side = s.RIGHT;
                                break;
                        }
                        if ((item instanceof latte.ButtonItem) && item.split) {
                            $element = item.element;
                        }
                        continue;
                    }
                }
                if (rect.bottom > viewport.bottom) {
                    rect.top = viewport.bottom - rect.height - offset;
                }
                if (rect.top < viewport.top) {
                    rect.top = viewport.top;
                }
                if (rect.right > viewport.right) {
                    rect.left = viewport.right - rect.width - offset;
                }
                if (rect.left < viewport.left) {
                    rect.left = viewport.left;
                }
            }
            this._edge = edge;
            this._side = side;
            this.showAt(rect.left, rect.top);
            return this;
        }
        showAt(x, y) {
            if (!latte._isNumber(x))
                throw new latte.InvalidArgumentEx('x', x);
            if (!latte._isNumber(y))
                throw new latte.InvalidArgumentEx('y', y);
            var newX = this.onWillShowAtX(x);
            var newY = this.onWillShowAtY(y);
            if (latte._isNumber(newX))
                x = newX;
            if (latte._isNumber(newY))
                y = newY;
            this.element.hide();
            var viewport = $(window).rectangle();
            var rect = new latte.Rectangle(x, y, this.element.width(), this.element.height());
            var offset = 30;
            var time = 100;
            var animStart = { opacity: 0 };
            var animEnd = { opacity: 1 };
            var side = this.side;
            if (rect.bottom > viewport.bottom) {
                latte.log("FITTING!");
                this.element.height(viewport.bottom - rect.top);
                this.element.css('overflow', 'auto');
            }
            this.element.css({
                left: x,
                top: y
            });
            if (latte.View.smallScreen) {
                this.element.css({
                    left: 0,
                    right: 0,
                    bottom: 0
                });
            }
            else {
                if (side) {
                    switch (side) {
                        case latte.Side.RIGHT:
                            animStart.left = '-=' + offset;
                            animEnd.left = '+=' + offset;
                            break;
                        case latte.Side.LEFT:
                            animStart.left = '+=' + offset;
                            animEnd.left = '-=' + offset;
                            break;
                        case latte.Side.BOTTOM:
                            animStart.top = '-=' + offset;
                            animEnd.top = '+=' + offset;
                            break;
                        case latte.Side.TOP:
                            animStart.top = '+=' + offset;
                            animEnd.top = '-=' + offset;
                            break;
                    }
                }
            }
            if ($.fx.off || latte.View.smallScreen) {
                this.element.show();
            }
            else {
                this.element
                    .show()
                    .css(animStart).animate(animEnd, time, 'swing', () => { this.onLayout(); });
            }
        }
        get domElement() {
            return this._domElement;
        }
        get edge() {
            return this._edge;
        }
        get item() {
            return this._item;
        }
        get side() {
            return this._side;
        }
    }
    latte.MenuOverlay = MenuOverlay;
    $(() => { MenuOverlay._initialize(); });
})(latte || (latte = {}));
var latte;
(function (latte) {
    class OverlayDismisser {
        constructor() {
            this._overlay = null;
        }
        execute() {
            if (this.overlay) {
                this.overlay.result = false;
                this.overlay.close();
            }
            this.uninstall();
        }
        install() {
        }
        onOverlayChanged() {
            if (this._overlayChanged) {
                this._overlayChanged.raise();
            }
            if (this.overlay) {
                this.install();
            }
        }
        uninstall() {
        }
        get overlayChanged() {
            if (!this._overlayChanged) {
                this._overlayChanged = new latte.LatteEvent(this);
            }
            return this._overlayChanged;
        }
        get overlay() {
            return this._overlay;
        }
        set overlay(value) {
            let changed = value !== this._overlay;
            this._overlay = value;
            if (changed) {
                this.onOverlayChanged();
            }
        }
    }
    latte.OverlayDismisser = OverlayDismisser;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class OverlayClickDismisser extends latte.OverlayDismisser {
        constructor() {
            super();
            this.handler = e => {
                this.execute();
            };
        }
        install() {
            setTimeout(() => window.addEventListener('click', this.handler), 300);
            this.overlay.raw.addEventListener('click', e => e.stopPropagation());
        }
        uninstall() {
            window.removeEventListener('click', this.handler);
        }
    }
    latte.OverlayClickDismisser = OverlayClickDismisser;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class OverlayEscDismisser extends latte.OverlayDismisser {
        constructor() {
            super();
            this.handler = e => {
                if (e.keyCode == latte.Key.ESCAPE) {
                    this.execute();
                }
            };
        }
        install() {
            window.addEventListener('keydown', this.handler);
        }
        uninstall() {
            window.removeEventListener('keydown', this.handler);
        }
    }
    latte.OverlayEscDismisser = OverlayEscDismisser;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SidebarOverlay extends latte.Overlay {
        constructor(side = latte.Side.RIGHT, size = SidebarOverlay.DEFAULT_SIZE) {
            super();
            this._side = null;
            this._size = null;
            this.addClass('sidebar');
            this.raw.appendChild(this.btnClose.raw);
            this.dismissers.add(new latte.OverlayClickDismisser());
            this.dismissers.add(new latte.OverlayEscDismisser());
            this.side = side;
            this.size = size;
        }
        static sideString(side) {
            switch (side) {
                case latte.Side.AUTO: return 'auto';
                case latte.Side.TOP: return 'top';
                case latte.Side.LEFT: return 'left';
                case latte.Side.RIGHT: return 'right';
                case latte.Side.BOTTOM: return 'bottom';
            }
            return 'auto';
        }
        onSideChanged() {
            if (this._sideChanged) {
                this._sideChanged.raise();
            }
            if (this.lastSide) {
                this.removeClass(this.lastSide);
            }
            let side = SidebarOverlay.sideString(this.side);
            this.addClass(side);
            this.lastSide = side;
        }
        onSizeChanged() {
            if (this._sizeChanged) {
                this._sizeChanged.raise();
            }
            let px = a => String(a) + 'px';
            this.raw.style.width = this.raw.style.height = null;
            let vertical = this.side == latte.Side.TOP || this.side == latte.Side.BOTTOM;
            this.raw.style[vertical ? 'height' : 'width'] = px(this.size);
            if (!this.isShown) {
                let auto = 'auto !important';
                "top,left,right,bottom".split(',').forEach(n => this.raw.style[n] = null);
                switch (this.side) {
                    case latte.Side.TOP:
                        this.raw.style.top = px(-this.size);
                        break;
                    case latte.Side.BOTTOM:
                        this.raw.style.bottom = px(-this.size);
                        break;
                    case latte.Side.LEFT:
                        this.raw.style.left = px(-this.size);
                        break;
                    case latte.Side.RIGHT:
                    case latte.Side.AUTO:
                        this.raw.style.right = px(-this.size);
                        break;
                }
            }
        }
        show() {
            super.show();
            setTimeout(() => {
                this.element.css(SidebarOverlay.sideString(this.side), 0);
            });
        }
        close() {
            this.setIsClosed(true);
            this.element.css(SidebarOverlay.sideString(this.side), -400);
            setTimeout(() => super.close(), 1000);
        }
        get sideChanged() {
            if (!this._sideChanged) {
                this._sideChanged = new latte.LatteEvent(this);
            }
            return this._sideChanged;
        }
        get sizeChanged() {
            if (!this._sizeChanged) {
                this._sizeChanged = new latte.LatteEvent(this);
            }
            return this._sizeChanged;
        }
        get side() {
            return this._side;
        }
        set side(value) {
            let changed = value !== this._side;
            this._side = value;
            if (changed) {
                this.onSideChanged();
            }
        }
        get size() {
            return this._size;
        }
        set size(value) {
            let changed = value !== this._size;
            this._size = value;
            if (changed) {
                this.onSizeChanged();
            }
        }
        get btnClose() {
            if (!this._btnClose) {
                let lazy = this._btnClose = new latte.ButtonItem(null, latte.LinearIcon.cross, () => this.close());
                lazy.addClass('close');
                lazy.faceVisible = false;
            }
            return this._btnClose;
        }
    }
    SidebarOverlay.DEFAULT_SIZE = 300;
    latte.SidebarOverlay = SidebarOverlay;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class StackOverlay extends latte.Overlay {
        constructor() {
            super();
            this.stack = new latte.ItemStack();
            this.stack.appendTo(this);
        }
        get items() {
            return this.stack.items;
        }
    }
    latte.StackOverlay = StackOverlay;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class SuggestionOverlay extends latte.StackOverlay {
        constructor() {
            super();
            this.addClass('suggestion');
            this.items.addItem.add((item) => {
                if (item instanceof latte.ButtonItem) {
                    item.faceVisible = false;
                }
            });
        }
    }
    latte.SuggestionOverlay = SuggestionOverlay;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class RibbonView extends latte.AnchorView {
        constructor() {
            super();
            this.element.addClass('ribbon');
            this.ribbon = new latte.Ribbon();
            this.anchorTop = this.ribbon;
            this.ribbon.collapsedChanged.add(() => {
                this.onLayout();
            });
        }
        onLayoutHIDDEN() {
            super.onLayout();
            this.ribbon.onLayout();
            this.container.css('top', this.ribbon.element.height());
        }
    }
    latte.RibbonView = RibbonView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TabView extends latte.AnchorView {
        constructor() {
            super();
            this._tabsSide = latte.Side.AUTO;
            this.element.addClass('tab');
            this.tabToolbar = new latte.TabToolbar();
            this.anchorTop = this.tabToolbar;
            this.tabs = new latte.Collection(this.onTabAdded, this.onTabRemoved, this);
            this.views = new latte.Collection();
            this.selectedTabChanged = new latte.LatteEvent(this);
            this.tabToolbar.selectedTabChanged.add(() => {
                this.onSelectedTabChanged();
            });
        }
        onTabAdded(tab) {
            this.tabToolbar.tabs.add(tab);
            this.onLayout();
        }
        onTabRemoved(tab) {
            this.tabToolbar.tabs.remove(tab);
        }
        onSelectedTabChanged() {
            var index = this.tabs.indexOf(this.selectedTab);
            if (this.views[index] instanceof latte.View) {
                this.view = this.views[index];
            }
            this.selectedTabChanged.raise();
        }
        onAnchorTopChanged() {
            super.onAnchorTopChanged();
            this.tabToolbar.contentSide = latte.Side.BOTTOM;
        }
        onAnchorRightChanged() {
            super.onAnchorRightChanged();
            this.tabToolbar.contentSide = latte.Side.LEFT;
        }
        onAnchorBottomChanged() {
            super.onAnchorBottomChanged();
            this.tabToolbar.contentSide = latte.Side.TOP;
        }
        onAnchorLeftChanged() {
            super.onAnchorLeftChanged();
            this.tabToolbar.contentSide = latte.Side.LEFT;
        }
        get selectedTab() {
            return this.tabToolbar.selectedTab;
        }
        set selectedTab(value) {
            this.tabToolbar.selectedTab = value;
            this.onSelectedTabChanged();
        }
        get tabsSide() {
            return this._tabsSide;
        }
        set tabsSide(value) {
            this._tabsSide = value;
            this.anchorTop = null;
            this.anchorRight = null;
            this.anchorBottom = null;
            this.anchorLeft = null;
            switch (value) {
                case latte.Side.AUTO:
                case latte.Side.TOP:
                    this.anchorTop = this.tabToolbar;
                    break;
                case latte.Side.RIGHT:
                    this.anchorRight = this.tabToolbar;
                    break;
                case latte.Side.BOTTOM:
                    this.anchorBottom = this.tabToolbar;
                    break;
                case latte.Side.LEFT:
                    this.anchorLeft = this.tabToolbar;
                    break;
            }
        }
    }
    latte.TabView = TabView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CalendarDayView extends latte.View {
        constructor() {
            super();
            this._allDayOffset = 30;
            this._itemPadding = 4;
            this._minuteSpan = 30;
            this.element.addClass('calendar-day');
            this.focusable = true;
            this.userAddItem = new latte.LatteEvent(this);
            this.userRemoveItem = new latte.LatteEvent(this);
            this.viewRangeChanged = new latte.LatteEvent(this);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this._content = $('<div>').addClass('content').appendTo(this.element);
            this._timeline = $('<div>').addClass('timeline').appendTo(this._content);
            this._columnsGrid = $('<div>').addClass('columns-grid').appendTo(this._content);
            this._columns = $('<div>').addClass('columns').appendTo(this._columnsGrid);
            this._columnsItems = $('<div>').addClass('columns-items').appendTo(this._columnsGrid);
            this._separator = $('<div>').addClass('separator').appendTo(this._content);
            this._daysGrid = $('<div>').addClass('days-grid').appendTo(this._content);
            this._timeSpans = $('<div>').addClass('time-spans').appendTo(this._daysGrid);
            this._timeIndicator = $('<div>').addClass('time-indicator').appendTo(this._daysGrid);
            this._daysItems = $('<div>').addClass('days-items').appendTo(this._daysGrid);
            this._workDayStart = new latte.TimeSpan(0, 8);
            this._workDayEnd = new latte.TimeSpan(0, 17);
            this._scrollStart = new latte.TimeSpan(0, 7);
            this.element.keydown((e) => { this._keyDown(e); });
            this._columnsGrid.mousedown((e) => { this._columnsMouseDown(e); })
                .mousemove((e) => { this._columnsMouseMove(e); })
                .mouseup((e) => { this._columnsMouseUp(e); })
                .mouseleave((e) => { this._columnsMouseLeave(e); });
            this._daysGrid.mousedown((e) => { this._daysGridMouseDown(e); })
                .mouseup((e) => { this._daysGridMouseUp(e); })
                .mousemove((e) => { this._daysGridMouseMove(e); })
                .mouseleave((e) => { this._daysGridMouseUp(e); });
            this.setViewRange(latte.DateTime.today.addDays(-latte.DateTime.today.dayOfWeek + 1), latte.DateTime.today.addDays(-latte.DateTime.today.dayOfWeek + 1).addDays(4));
        }
        _columnsMouseDown(e) {
            if (!this.allowItemCreate) {
                return;
            }
            var x = e.pageX;
            var y = e.pageY;
            if (this._onHeadersZone(x, y)) {
                this._columns.children().each(function () {
                    var $this = $(this);
                    var r = $this.data('rectangle');
                    var d = $this.data('date');
                    if (r.contains(x, y)) {
                        this._draggingHeaderSelection = d;
                        latte.UiElement.disableTextSelection(this.element);
                        this.setSelectionRange(d, d);
                    }
                });
            }
        }
        _columnsMouseLeave(e) {
        }
        _columnsMouseMove(e) {
            if (this._draggingHeaderSelection) {
                var __this = this;
                var x = e.pageX;
                var y = e.pageY;
                if (this._onHeadersZone(x, y)) {
                    this._columns.children().each(function () {
                        var $this = $(this);
                        var r = $this.data('rectangle');
                        var d = $this.data('date');
                        if (r.contains(x, y)) {
                            __this.setSelectionRange(__this._draggingHeaderSelection, d);
                        }
                    });
                }
            }
        }
        _columnsMouseUp(e) {
            if (this._draggingHeaderSelection) {
                latte.UiElement.enableTextSelection(this.element);
                this._draggingHeaderSelection = null;
            }
        }
        _createMatrix() {
            var i, j, k, item, itemDays, startspan, endspan, start, end, date, dayIndex, col;
            var m = [];
            var empty = undefined;
            var columns = this._columns.children();
            var spans = this.element.find('.time-span');
            var lastSpan = spans.length - 1;
            var printm = function () {
                var s = "";
                var i, j, k;
                for (i = 0; i < m.length; i++) {
                    for (j = 0; j < m[i].length; j++) {
                        if (m[i][j].length > 0)
                            for (k = 0; k < m[i][j].length; k++)
                                s += latte._undef(m[i][j][k]) ? '.' : m[i][j][k];
                        s += '\t\t';
                    }
                    s += '\n';
                }
                latte.log(s);
            };
            var isAvailable = function (day, depth, startspan, endspan) {
                for (var i = startspan; i <= endspan; i++)
                    if (m[i][day][depth] != empty)
                        return false;
                return true;
            };
            var placeIndex = function (day, depth, startspan, endspan, index) {
                for (var i = startspan; i <= endspan; i++)
                    m[i][day][depth] = index;
            };
            var dayDepth = function (day) {
                return m.length > 0 ? m[0][day].length : 0;
            };
            for (i = 0; i < spans.length; i++)
                for (j = (m[i] = []).length; j < columns.length; j++)
                    m[i].push([]);
            for (i = 0; i < this.items.count; i++) {
                item = this.items.item(i);
                if (item.allDay)
                    continue;
                start = item.dateStart;
                end = item.dateEnd;
                itemDays = Math.ceil(end.date.subtractDate(start.date).totalDays) + 1;
                for (j = 0; j < itemDays; j++) {
                    date = start.date.addDays(j);
                    dayIndex = this._dayColumn(date).index();
                    startspan = start.date.equals(date) ? this._timeSpanIndexOf(start.timeOfDay) : 0;
                    endspan = end.date.equals(date) ? this._timeSpanIndexOf(end.timeOfDay) - 1 : lastSpan;
                    if (dayIndex >= 0) {
                        var depth = 0;
                        while (!isAvailable(dayIndex, depth, startspan, endspan))
                            depth++;
                        placeIndex(dayIndex, depth, startspan, endspan, i);
                        if (latte._undef(item.matrixAttributes))
                            item.matrixAttributes = [];
                        var obj = {
                            day: dayIndex,
                            depth: depth,
                            start: startspan,
                            end: endspan,
                            wide: 1
                        };
                        item.matrixAttributes.push(obj);
                    }
                }
            }
            for (j = 0; j < m[0].length; j++) {
                col = 0;
                for (i = 0; i < m.length; i++)
                    col = Math.max(col, m[i][j].length);
                for (i = 0; i < m.length; i++)
                    for (k = m[i][j].length; k < col; k++)
                        m[i][j].push(empty);
            }
            for (i = 0; i < this.items.count; i++) {
                item = this.items.item(i);
                if (item.allDay)
                    continue;
                for (j = 0; j < item.matrixAttributes.length; j++) {
                    var r = item.matrixAttributes[j];
                    for (k = r.depth + 1; k < dayDepth(r.day); k++) {
                        if (isAvailable(r.day, k, r.start, r.end)) {
                            placeIndex(r.day, k, r.start, r.end, i);
                            r.wide++;
                        }
                        else {
                            break;
                        }
                    }
                    r.index = r.depth;
                    r.count = dayDepth(r.day);
                }
            }
        }
        _createTopMatrix() {
            var i, j, item, start, end, startColumn, endColumn, depth, maxdepth = -1;
            var m = [];
            var empty = undefined;
            var printm = function () {
                var s = '', i, j;
                for (i = 0; i <= maxdepth; i++) {
                    for (j = 0; j < m.length; j++) {
                        s += latte._undef(m[j][i]) ? '.' : m[j][i];
                        s += '\t';
                    }
                    s += '\n';
                }
                latte.log(s);
            };
            var isAvailable = function (depth, start, end) {
                for (var i = start; i <= end; i++)
                    if (m[i][depth] != empty)
                        return false;
                return true;
            };
            var placeIndex = function (index, depth, start, end) {
                for (var i = start; i <= end; i++)
                    m[i][depth] = index;
            };
            this._columns.children().each(function () { m.push([]); });
            for (i = 0; i < this.items.count; i++) {
                item = this.items.item(i);
                if (!item.allDay)
                    continue;
                startColumn = item.dateStart.compareTo(this._viewStart) < 0 ? this._columns.children().first() : this._dayColumn(item.dateStart);
                endColumn = item.dateEnd.compareTo(this._viewEnd) > 0 ? this._columns.children().last() : this._dayColumn(item.dateEnd);
                start = startColumn.index();
                end = endColumn.index();
                depth = 0;
                while (!isAvailable(depth, start, end))
                    depth++;
                placeIndex(i, depth, start, end);
                item._matrixDepth = depth;
            }
            for (i = 0; i < m.length; i++)
                maxdepth = Math.max(maxdepth, m[i].length);
            return maxdepth;
        }
        _dayColumn(date) {
            return this._columns.find(latte.sprintf('.day-%s-%s-%s', date.year, date.month, date.day));
        }
        _daysGridMouseDown(e) {
            var hit = this._timeSpanHitTest(e.pageX, e.pageY);
            var col = hit.day;
            var span = hit.timespan;
            if (col && span) {
                var date = col.data('date');
                var time = span.data('time');
                var start = date.date.add(time);
                var end = start.add(new latte.TimeSpan(0, 0, this._minuteSpan));
                this._draggingSelection = start;
                this.setSelectionRange(start, end);
            }
        }
        _daysGridMouseMove(e) {
            if (this._draggingSelection instanceof latte.DateTime) {
                var hit = this._timeSpanHitTest(e.pageX, e.pageY);
                var col = hit.day;
                var span = hit.timespan;
                if (col && span) {
                    var date = col.data('date');
                    var time = span.data('time');
                    var start = this._draggingSelection;
                    var end = date.date.add(time);
                    if (end.compareTo(start) < 0) {
                        start = start.addMinutes(this._minuteSpan);
                        var tmp = end;
                        end = start;
                        start = tmp;
                    }
                    else {
                        end = end.addMinutes(this._minuteSpan);
                    }
                    var changed = this._selectionStart.compareTo(start) != 0
                        || this._selectionEnd.compareTo(end) != 0;
                    if (changed) {
                        this.setSelectionRange(start, end);
                    }
                }
            }
        }
        _daysGridMouseUp(e) {
            if (this._draggingSelection) {
                this._draggingSelection = null;
            }
        }
        _keyDown(e) {
            if (e.keyCode === latte.Key.ENTER) {
                this.createItemAtSelection();
            }
        }
        _onAddItem(item) {
            if (item.allDay) {
                item.element.appendTo(this._columnsItems);
                this.onLayout();
            }
            else {
                item.element.appendTo(this._daysItems);
                this.onLayoutItems();
            }
        }
        _onHeadersZone(x, y) {
            var sep = this._separator.rectangle();
            var allday = this._columns.rectangle();
            allday.bottom = sep.top;
            return allday.contains(x, y);
        }
        _onRemoveItem(item) {
            item.rectangles.each(function (r) {
                if (r.tag instanceof jQuery)
                    r.tag.remove();
            });
            item.element.remove();
        }
        _rectanglesFor(start, end) {
            var rects = [], rect = null;
            var days = Math.ceil(end.date.subtractDate(start.date).totalDays) + 1;
            if (start.timeOfDay.totalMinutes == 0 && end.timeOfDay.totalMinutes == 0) {
                rect = new latte.Rectangle();
                rects.push(rect);
                if (start.onRange(start, end)) {
                    rect.left = (this._dayColumn(start).position().left);
                }
                if (end.onRange(start, end)) {
                    rect.right = (this._dayColumn(end).rectangle(null, true).right);
                }
                else {
                    rect.right = (this._dayColumn(this._viewEnd).right());
                }
                rect.bottom = (this._separator.position().top);
            }
            else {
                var lastspan = this._timeSpans.find('.time-span').last();
                var fullbottom = lastspan.position().top + lastspan.height() + this._daysGrid.scrollTop();
                var starttop = this._heightOf(start.timeOfDay);
                var endbottom = this._heightOf(end.timeOfDay);
                for (var i = 0; i < days; i++) {
                    rect = new latte.Rectangle();
                    var date = start.date.addDays(i);
                    var dayelem = this._columns.find(latte.sprintf('.day-%s-%s-%s', date.year, date.month, date.day));
                    if (dayelem.length == 0)
                        continue;
                    rect.left = dayelem.position().left + this._timeline.outerWidth();
                    rect.width = dayelem.width();
                    rect.height = fullbottom;
                    if (start.date.compareTo(date) == 0) {
                        rect.top = starttop;
                        rect.bottom = fullbottom;
                    }
                    if (end.date.compareTo(date) == 0) {
                        rect.bottom = (endbottom);
                    }
                    rects.push(rect);
                }
            }
            return rects;
        }
        _timeSpanHitTest(x, y) {
            var col = null;
            var row = null;
            this._columns.children().each(function () {
                var $this = $(this);
                var rect = $this.data('rectangle');
                if (rect instanceof latte.Rectangle) {
                    if (x >= rect.left && x <= rect.right) {
                        col = $this;
                    }
                }
            });
            this._timeSpans.find('.time-span').each(function () {
                var $this = $(this);
                var rect = $this.innerRectangle();
                if (rect instanceof latte.Rectangle) {
                    if (y >= rect.top && y <= rect.bottom) {
                        row = $this;
                    }
                }
            });
            return { timespan: row, day: col };
        }
        _updateBoard() {
            var i = 0;
            var today = latte.DateTime.today;
            var dayNames = "sunday,monday,tuesday,wednesday,thursday,friday,saturday".split(',');
            var dayCount = this._viewEnd.subtractDate(this._viewStart).totalDays + 1;
            var evenSpan = false;
            var firstSpan = true;
            this._columns.empty();
            this._timeSpans.empty();
            for (i = 0; i < dayCount; i++) {
                var date = this._viewStart.addDays(i);
                var name = latte.strings[dayNames[date.dayOfWeek]];
                var c = $('<div>').addClass('column').appendTo(this._columns)
                    .addClass('day-' + date.year + '-' + date.month + '-' + date.day)
                    .data('date', date);
                var d = $('<div>').addClass('date').appendTo(c)
                    .text(date.day + ' ' + name);
                if (date.compareTo(today) == 0) {
                    d.text(date.day + ' ' + name + ' - ' + latte.strings.today);
                    c.addClass('today');
                    if (dayCount == 1)
                        c.addClass('only-day');
                }
            }
            for (var time = new latte.TimeSpan(); time.totalMinutes < 24 * 60; time = time.add(new latte.TimeSpan(0, 0, this._minuteSpan))) {
                var span = $('<div>').addClass('time-span').appendTo(this._timeSpans)
                    .addClass('time-' + time.hours + '-' + time.minutes)
                    .data('time', time);
                if (time.minutes == 0)
                    span.addClass('hour');
                if (firstSpan)
                    span.addClass('first');
                if ((!evenSpan || this._minuteSpan == 60) && !firstSpan) {
                    var hour = time.hours;
                    var pm = hour > 12;
                    var ampm = pm ? 'PM' : 'AM';
                    var minutes = time.minutes == 0 ? ' ' + ampm : ':' + time.minutes;
                    var t = (pm ? hour - 12 : hour) + minutes;
                    span.append($('<div>').addClass('label').text(t));
                }
                if (!(time.compareTo(this._workDayStart) >= 0 && time.compareTo(this._workDayEnd) < 0)) {
                    span.addClass('non-working');
                }
                evenSpan = !evenSpan;
                firstSpan = false;
            }
        }
        clearSelection() {
            this.element.find('.selection').remove();
            this._selectionStart = null;
            this._selectionEnd = null;
        }
        createItemAtSelection(text = '') {
            if (!this._selectionStart || !this._selectionEnd)
                return null;
            var item = new latte.CalendarItem();
            item.text = text;
            item.element.addClass('item-' + this.items.count);
            item.dateStart = this._selectionStart;
            item.dateEnd = this._selectionEnd;
            this.clearSelection();
            this.items.add(item);
            this.onUserAddItem(item);
            return item;
        }
        onLayout() {
            super.onLayout();
            var dayCount = this._columns.children().length;
            var allDayDepth = this._createTopMatrix();
            var allDayItemHeight = this.element.find('.time-span').first().height();
            var allDayHeight = Math.max(55, this._allDayOffset + allDayDepth * allDayItemHeight + this._itemPadding);
            var colwidth = Math.floor(this._columns.width() / dayCount);
            var left = 0;
            this._columns.children().each(function () {
                var c = $(this);
                c.width(colwidth);
                c.css('left', left);
                c.data('rectangle', c.innerRectangle());
                left += colwidth;
            });
            this._timeSpans.find('.time-span').each(function () {
                var $this = $(this);
                $this.data('rectangle', $this.innerRectangle());
            });
            this._separator.css('top', allDayHeight);
            this._daysGrid.css('top', allDayHeight + this._separator.outerHeight());
            if (this._selectionStart && this._selectionEnd)
                this.setSelectionRange(this._selectionStart, this._selectionEnd);
            this._timeIndicator.animate({ 'top': this._heightOf(latte.DateTime.now.timeOfDay) });
            this.onLayoutItems();
            if (!this._firstScroll && this.element.height() > 0) {
                this._daysGrid.scrollTop(this._heightOf(this._scrollStart) + 1);
                this._firstScroll = true;
            }
        }
        onLayoutItems() {
            var i = 0;
            var j = 0;
            var padding = this._itemPadding;
            var colw = 0;
            var alldaystart = this._allDayOffset;
            var alldayh = this.element.find('.time-span').first().height();
            for (i = 0; i < this.items.count; i++) {
                this.items.item(i).rectangles.clear();
                this.items.item(i).matrixAttributes = [];
            }
            this._createTopMatrix();
            this._createMatrix();
            for (i = 0; i < this.items.count; i++) {
                var item = this.items.item(i);
                var rects = this._rectanglesFor(item.dateStart, item.dateEnd);
                for (j = 0; j < rects.length; j++) {
                    var r = rects[j];
                    var att = item.matrixAttributes[j];
                    if (item.allDay) {
                        r.top = alldaystart + item._matrixDepth * alldayh;
                        r.height = alldayh - padding;
                        r.width = r.width - padding;
                    }
                    else {
                        colw = r.width / att.count;
                        r.left = r.left + colw * att.index;
                        r.width = colw * att.wide - padding;
                        r.height = r.height - padding;
                    }
                    item.rectangles.add(r);
                }
            }
        }
        onUserAddItem(item) {
            this.userAddItem.raise(item);
        }
        onUserRemoveItem(item) {
            this.userRemoveItem.raise(item);
        }
        onViewRangeChanged() {
            this.viewRangeChanged.raise();
        }
        selectionOnHeader() {
            return this._selectionStart instanceof latte.DateTime &&
                this._selectionEnd instanceof latte.DateTime &&
                this._selectionStart.timeOfDay.totalMinutes == 0 &&
                this._selectionEnd.timeOfDay.totalMinutes == 0;
        }
        setSelectionRange(start, end) {
            if (!(start instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('start');
            if (!(end instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('end');
            if (end.compareTo(start) < 0) {
                var tmp = start;
                start = end;
                end = tmp;
            }
            if (start.compareTo(this._viewStart) < 0)
                throw new latte.InvalidArgumentEx('start');
            if (end.compareTo(this._viewEnd.addHours(24)) > 0)
                throw new latte.InvalidArgumentEx('end');
            this.clearSelection();
            var rects = this._rectanglesFor(start, end);
            for (var i = 0; i < rects.length; i++) {
                var selection = $('<div>').addClass('selection');
                selection.rectangle(rects[i]);
                if (start.timeOfDay.totalMinutes == 0 && end.timeOfDay.totalMinutes == 0) {
                    this._columnsGrid.prepend(selection);
                }
                else {
                    this._timeSpans.append(selection);
                }
            }
            this._selectionStart = start;
            this._selectionEnd = end;
        }
        setViewRange(start, end) {
            this._viewStart = start;
            this._viewEnd = end;
            this.clearSelection();
            this._updateBoard();
            this.onLayout();
            this._daysGrid.scrollTop(this._heightOf(this._scrollStart) + 1);
            this.onViewRangeChanged();
        }
        _heightOf(time) {
            var span = this._timeSpanOf(time);
            var diff = null;
            var minutes = 0;
            var extraheight = 0;
            if (span.length == 0)
                return 0;
            diff = time.subtract(span.data('time'));
            minutes = diff.totalMinutes;
            if (minutes > 0) {
                extraheight = Math.round(minutes * span.height() / this._minuteSpan);
            }
            return span.position().top + extraheight + this._daysGrid.scrollTop();
        }
        _timeSpanIndexOf(time) {
            return Math.floor(time.totalMinutes / this._minuteSpan);
        }
        _timeSpanOf(time) {
            return this._daysGrid.find('.time-span').eq(this._timeSpanIndexOf(time));
        }
        get allowItemCreate() {
            return this._allowItemCreate;
        }
        set allowItemCreate(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value');
            this._allowItemCreate = value;
        }
        get viewEnd() {
            return this._viewEnd;
        }
        get viewStart() {
            return this._viewStart;
        }
    }
    latte.CalendarDayView = CalendarDayView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CalendarMonthView extends latte.View {
        constructor() {
            super();
            this._itemItemHeight = 25;
            this._itemItemTopStart = 20;
            this._itemPadding = 4;
            var __this = this;
            this.element.addClass('calendar-month');
            this.focusable = true;
            this.userAddItem = new latte.LatteEvent(this);
            this.userRemoveItem = new latte.LatteEvent(this);
            this.viewRangeChanged = new latte.LatteEvent(this);
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this._content = $('<div>').addClass('content').appendTo(this.element);
            this._createBoard();
            this.element.keydown(function (e) { this._keyDown(e); });
            this._content.find('.day')
                .mousedown(function (e) { __this._dayMouseDown(e, $(this)); })
                .mouseup(function (e) { __this._dayMouseUp(e, $(this)); })
                .mousemove(function (e) { __this._dayMouseMove(e, $(this)); });
            this.setViewRange(latte.DateTime.today);
        }
        _createBoard() {
            for (var row = 0; row < 7; row++) {
                for (var col = 0; col < 7; col++) {
                    this._content.append($('<div>').addClass(latte.sprintf('day day-%s-%s%s%s', row, col, (row == 0 ? ' with-top' : ''), (col == 0 ? ' with-left' : ''))));
                }
            }
        }
        _createMatrix() {
            var i, j, item, start, end, startColumn, endColumn, depth, maxdepth = -1;
            var m = [];
            var empty = undefined;
            var printm = function () {
                var s = '', i, j;
                for (i = 0; i <= maxdepth; i++) {
                    for (j = 0; j < m.length; j++) {
                        s += latte._undef(m[j][i]) ? '.' : m[j][i];
                        s += '\t';
                    }
                    s += '\n';
                }
                latte.log(s);
            };
            var isAvailable = function (depth, start, end) {
                for (var i = start; i <= end; i++)
                    if (m[i][depth] != empty)
                        return false;
                return true;
            };
            var placeIndex = function (index, depth, start, end) {
                for (var i = start; i <= end; i++)
                    m[i][depth] = index;
            };
            this.element.find('.day').each(function () { m.push([]); });
            for (i = 0; i < this.items.count; i++) {
                item = this.items.item(i);
                startColumn = item.dateStart.compareTo(this._viewStart) < 0 ? this.element.find('.day:first') : this._dayElement(item.dateStart);
                endColumn = item.dateEnd.compareTo(this._viewEnd) > 0 ? this.element.find('.day:last') : this._dayElement(item.dateEnd);
                start = startColumn.index();
                end = endColumn.index();
                depth = 0;
                while (!isAvailable(depth, start, end))
                    depth++;
                placeIndex(i, depth, start, end);
                item._matrixDepth = depth;
            }
            for (i = 0; i < m.length; i++)
                maxdepth = Math.max(maxdepth, m[i].length);
            return maxdepth;
        }
        _dayElement(date) {
            return this.element.find(latte.sprintf('.day-%s-%s-%s', date.year, date.month, date.day));
        }
        _dayMouseDown(e, dayElement) {
            var date = dayElement.data('date');
            this._draggingSelection = date;
            this.setSelectionRange(date, date);
        }
        _dayMouseMove(e, dayElement) {
            if (this._draggingSelection) {
                var date = dayElement.data('date');
                this.setSelectionRange(this._draggingSelection, date);
            }
        }
        _dayMouseUp(e, dayElement) {
            if (this._draggingSelection) {
                this._draggingSelection = null;
            }
        }
        _keyDown(e) {
            if (e.keyCode === latte.Key.ENTER) {
                this.createItemAtSelection();
            }
        }
        _onAddItem(item) {
            var i;
            item.appendTo(this._content);
            item.selectedChanged.add(() => {
                while ((i = this.items.next())) {
                    if (i != item) {
                        i.selected = (false);
                    }
                }
            });
            this.onLayout();
        }
        _onRemoveItem(item) {
            var r;
            item.element.remove();
            while ((r = item.rectangles.next())) {
                r._element.remove();
            }
        }
        _rectanglesFor(start, end) {
            var rects = [];
            var rect;
            var week = start.addDays(-start.dayOfWeek);
            var weeks = end.weekOfYear - start.weekOfYear + 1;
            for (var i = 0; i < weeks; i++) {
                week = week.addDays(i == 0 ? 0 : 7);
                rect = this._weekRectangle(week);
                if (start.onRange(week, week.addDays(6))) {
                    var r = rect.right;
                    rect.left = this._dayElement(start).rectangle(null, true).left;
                    rect.right = r;
                }
                if (end.onRange(week, week.addDays(6))) {
                    rect.right = this._dayElement(end).rectangle(null, true).right;
                }
                rects.push(rect);
            }
            return rects;
        }
        _weekRectangle(date) {
            var start = date.addDays(-date.dayOfWeek);
            var end = start.addDays(6);
            var startRect = this._dayElement(start).rectangle(null, true);
            var endRect = this._dayElement(end).rectangle(null, true);
            return startRect.union(endRect);
        }
        clearSelection() {
            this.element.find('.selection').remove();
            this._selectionStart = this._selectionEnd = null;
        }
        createItemAtSelection(text = '') {
            if (!this._selectionStart || !this._selectionEnd)
                return null;
            var item = new latte.CalendarItem();
            item.text = text;
            item.element.addClass('item-' + this.items.count);
            item.dateStart = this._selectionStart;
            item.dateEnd = this._selectionEnd;
            this.clearSelection();
            this.items.add(item);
            this.onUserAddItem(item);
            return item;
        }
        onLayout() {
            super.onLayout();
            var depth = this._createMatrix();
            var w = Math.floor(this._content.width() / 7);
            var h = Math.max(Math.floor(this._content.height() / 7), depth * this._itemItemHeight + this._itemItemTopStart);
            for (var row = 0; row < 7; row++)
                for (var col = 0; col < 7; col++)
                    this.element.find(latte.sprintf('.day-%s-%s', row, col))
                        .css({ left: w * col, top: h * row })
                        .width(w).height(h);
            if (this._selectionStart && this._selectionEnd)
                this.setSelectionRange(this._selectionStart, this._selectionEnd);
            this.onLayoutItems();
        }
        onLayoutItems() {
            var i = 0;
            var j = 0;
            var padding = this._itemPadding;
            var topstart = this._itemItemTopStart;
            var itemh = this._itemItemHeight;
            for (i = 0; i < this.items.count; i++) {
                this.items.item(i).rectangles.clear();
                this.items.item(i).matrixAttributes = [];
            }
            this._createMatrix();
            for (i = 0; i < this.items.count; i++) {
                var item = this.items.item(i);
                var rects = this._rectanglesFor(item.dateStart, item.dateEnd);
                for (j = 0; j < rects.length; j++) {
                    var r = rects[j];
                    var att = item.matrixAttributes[j];
                    r.top = r.top + topstart + item._matrixDepth * itemh;
                    r.height = itemh - padding;
                    r.width = r.width - padding;
                    item.rectangles.add(r);
                }
            }
        }
        onUserAddItem(item) {
            this.userAddItem.raise(item);
        }
        onUserRemoveItem(item) {
            this.userRemoveItem.raise(item);
        }
        onViewRangeChanged() {
            this.viewRangeChanged.raise();
        }
        setSelectionRange(start, end) {
            if (!(start instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('start');
            if (!(end instanceof latte.DateTime))
                throw new latte.InvalidArgumentEx('end');
            if (end.compareTo(start) < 0) {
                var tmp = start;
                start = end;
                end = tmp;
            }
            if (start.compareTo(this._viewStart) < 0)
                start = this._viewStart;
            if (end.compareTo(this._viewEnd.addHours(24)) > 0)
                end = this._viewEnd;
            this.clearSelection();
            var rects = this._rectanglesFor(start, end);
            for (var i = 0; i < rects.length; i++) {
                var selection = $('<div>').addClass('selection');
                selection.rectangle(rects[i]);
                this._content.prepend(selection);
            }
            this._selectionStart = start;
            this._selectionEnd = end;
        }
        setViewRange(date) {
            var div, olddate, current;
            var daynames = "sunday,monday,tuesday,wednesday,thursday,friday,saturday".split(',');
            var monthFirst = new latte.DateTime(date.year, date.month, 1);
            var start = monthFirst.addDays(-monthFirst.dayOfWeek);
            var today = latte.DateTime.today;
            this.clearSelection();
            for (var row = 0; row < 7; row++) {
                for (var col = 0; col < 7; col++) {
                    div = this.element.find(latte.sprintf('.day-%s-%s', row, col));
                    olddate = div.data('date');
                    current = start.addDays(row * 7 + col);
                    if (current.month != date.month) {
                        div.addClass('grayed');
                    }
                    else {
                        div.removeClass('grayed');
                    }
                    if (olddate) {
                        div.removeClass(latte.sprintf('day-%s-%s-%s', olddate.year, olddate.month, olddate.day));
                    }
                    div.data('date', current);
                    div.addClass(latte.sprintf('day-%s-%s-%s', current.year, current.month, current.day));
                    div.empty().append($('<div>').addClass('number').text((row == 0 ? latte.strings[daynames[current.dayOfWeek]] + ' ' : '') + current.day));
                    if (col == 0) {
                        div.append($('<div>').addClass('week-number').text(current.weekOfYear));
                    }
                }
            }
            this.element.find('.day.today').removeClass('today');
            this.element.find(latte.sprintf('.day-%s-%s-%s', today.year, today.month, today.day)).addClass('today');
            this._viewStart = start;
            this._viewEnd = current;
            this._monthOnView = monthFirst;
            this.onViewRangeChanged();
        }
        get monthOnView() {
            return this._monthOnView;
        }
        set monthOnView(value) {
            if (value instanceof latte.DateTime)
                this.setViewRange(value);
        }
        get viewEnd() {
            return this._viewEnd;
        }
        get viewStart() {
            return this._viewStart;
        }
    }
    latte.CalendarMonthView = CalendarMonthView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class CalendarView extends latte.SplitView {
        constructor() {
            super();
            this.element.addClass('calendar');
            this.userAddItem = new latte.LatteEvent(this);
            this.userRemoveItem = new latte.LatteEvent(this);
            this.viewRangeChanged = new latte.LatteEvent(this);
            this.selectionChanged = new latte.LatteEvent(this);
            this._controls = $('<div>').addClass('controls').appendTo(this.element);
            this.dateView = new latte.DateView();
            this.dayView = new latte.CalendarDayView();
            this.monthView = new latte.CalendarMonthView();
            this.titleItem = new latte.LabelItem();
            this.titleItem.title = 1;
            this.buttonPrevious = new latte.ButtonItem();
            this.buttonPrevious.icon = latte.Glyph.left;
            this.buttonNext = new latte.ButtonItem();
            this.buttonNext.icon = latte.Glyph.right;
            this.buttonToday = new latte.ButtonItem();
            this.buttonToday.text = latte.strings.today;
            this.buttonGroup = new latte.ButtonGroupItem();
            this.titleItem.appendTo(this._controls);
            this.buttonGroup.buttons.addArray([this.buttonPrevious, this.buttonToday, this.buttonNext]);
            this.buttonGroup.appendTo(this._controls);
            this.dateView.dateItem.selectionChanged.add(() => { this.onSelectionChanged(); });
            this.dayView.userAddItem.add((i) => { this.onUserAddItem(i); });
            this.dayView.userRemoveItem.add((i) => { this.onUserRemoveItem(i); });
            this.dayView.viewRangeChanged.add(() => { this.onViewRangeChanged(); });
            this.monthView.userAddItem.add((i) => { this.onUserAddItem(i); });
            this.monthView.userRemoveItem.add((i) => { this.onUserRemoveItem(i); });
            this.monthView.viewRangeChanged.add(() => { this.onViewRangeChanged(); });
            this.buttonToday.click.add(() => { this.goToday(); });
            this.buttonPrevious.click.add(() => { this.goPrevious(); });
            this.buttonNext.click.add(() => { this.goNext(); });
            this.side = latte.Side.RIGHT;
            this.sideSize = 250;
            this.view = this.dayView;
            this.sideView = this.dateView;
            this.dateView.dateItem.setSelectionRange(latte.DateTime.today, latte.DateTime.today);
            this.dateView.dateItem.selectionMode = latte.DateSelectionMode.WORKWEEK;
        }
        goNext() {
            if (this.view === this.monthView) {
                var first = this.monthView.monthOnView.addMonths(1);
                var last = first.addDays(latte.DateTime.daysInMonth(first.year, first.month) - 1);
                this.dateView.dateItem.setSelectionRange(first, last);
            }
            else {
                var start = this.dayView.viewStart, end = this.dayView.viewEnd;
                var days = Math.floor(end.subtractDate(start).totalDays) + 1;
                if (this.dateView.dateItem.selectionMode === latte.DateSelectionMode.WORKWEEK) {
                    start = start.addDays(7);
                    var monday = start.addDays(-start.dayOfWeek + 1);
                    this.dateView.dateItem.setSelectionRange(monday, monday.addDays(4));
                }
                else {
                    this.dateView.dateItem.setSelectionRange(end.addDays(1), end.addDays(days));
                }
            }
        }
        goPrevious() {
            if (this.view === this.monthView) {
                var first = this.monthView.monthOnView.addMonths(-1);
                var last = first.addDays(latte.DateTime.daysInMonth(first.year, first.month) - 1);
                this.dateView.dateItem.setSelectionRange(first, last);
            }
            else {
                var start = this.dayView.viewStart, end = this.dayView.viewEnd;
                var days = Math.floor(end.subtractDate(start).totalDays) + 1;
                if (this.dateView.dateItem.selectionMode === latte.DateSelectionMode.WORKWEEK) {
                    start = start.addDays(-7);
                    var monday = start.addDays(-start.dayOfWeek + 1);
                    this.dateView.dateItem.setSelectionRange(monday, monday.addDays(4));
                }
                else {
                    this.dateView.dateItem.setSelectionRange(start.addDays(-days), start.addDays(-1));
                }
            }
        }
        goToday() {
            this.dateView.dateItem.selectionMode = latte.DateSelectionMode.DAY;
            this.dateView.dateItem.setSelectionRange(latte.DateTime.today, latte.DateTime.today);
        }
        onLayout() {
            super.onLayout();
            this.container.css({
                top: '+=50'
            });
            var r = this.container.rectangle(null, true);
            this._controls.css({
                top: r.top - 50,
                left: r.left,
                right: r.right,
                width: r.width
            });
            this.buttonGroup.onLayout();
        }
        onSelectionChanged() {
            var months = "january,february,march,april,may,june,july,august,september,october,november,december".split(",");
            var start = this.dateView.dateItem.selectionStart;
            var end = this.dateView.dateItem.selectionEnd;
            var days = Math.floor(end.subtractDate(start).totalDays);
            var smonth = start.month, syear = start.year, emonth = end.month, eyear = end.year;
            if (days > 7) {
                if (this.view !== this.monthView) {
                    this.view = this.monthView;
                }
                this.titleItem.text = latte.strings[months[start.month - 1]] + ' ' + start.year + (start.date.equals(latte.DateTime.today) ? ' - ' + latte.strings.today : '');
            }
            else {
                if (this.view !== this.dayView) {
                    this.view = this.dayView;
                }
                if (days === 0) {
                    this.titleItem.text = start.day + ' ' + latte.strings[months[smonth - 1]] + ' ' + syear;
                }
                else {
                    this.titleItem.text = start.day + (smonth !== emonth ? ' ' + latte.strings[months[smonth - 1]] : '') + (syear != eyear ? ' ' + syear : '') + ' - ' +
                        end.day + ' ' + latte.strings[months[emonth - 1]] + ' ' + eyear;
                }
            }
            this.view.setViewRange(start, end);
            this.selectionChanged.raise();
        }
        onUserAddItem(item) {
            this.userAddItem.raise(item);
        }
        onUserRemoveItem(item) {
            this.userRemoveItem.raise(item);
        }
        onViewRangeChanged() {
            this.viewRangeChanged.raise();
        }
        workDayEnd(day, value = null) {
            throw new latte.Ex();
        }
        workDayStart(day, value = null) {
            throw new latte.Ex();
        }
        get allowItemCreate() {
            return this.view.allowItemCreate;
        }
        set allowItemCreate(value) {
            this.view.allowItemCreate = value;
        }
        get allowItemDrag() {
            throw new latte.Ex();
        }
        set allowItemDrag(value) {
            throw new latte.Ex();
        }
        get allowItemEdit() {
            throw new latte.Ex();
        }
        set allowItemEdit(value) {
            throw new latte.Ex();
        }
        get allowItemRemove() {
            throw new latte.Ex();
        }
        set allowItemRemove(value) {
            throw new latte.Ex();
        }
        get allowItemResize() {
            throw new latte.Ex();
        }
        set allowItemResize(value) {
            throw new latte.Ex();
        }
        get dayEnd() {
            throw new latte.Ex();
        }
        set dayEnd(value) {
            throw new latte.Ex();
        }
        get dayStart() {
            throw new latte.Ex();
        }
        set dayStart(value) {
            throw new latte.Ex();
        }
        get editMode() {
            throw new latte.Ex();
        }
        set editMode(value) {
            throw new latte.Ex();
        }
        get editModeItem() {
            throw new latte.Ex();
        }
        set editModeItem(value) {
            throw new latte.Ex();
        }
        get firstDayOfWeek() {
            throw new latte.Ex();
        }
        set firstDayOfWeek(value) {
            throw new latte.Ex();
        }
        get navigatorVisible() {
            throw new latte.Ex();
        }
        set navigatorVisible(value) {
            throw new latte.Ex();
        }
        get selectionEnd() {
            throw new latte.Ex();
        }
        set selectionEnd(value) {
            throw new latte.Ex();
        }
        get selectionMode() {
            return this.dateView.dateItem.selectionMode;
        }
        set selectionMode(value) {
            this.dateView.dateItem.selectionMode = value;
        }
        get selectionStart() {
            throw new latte.Ex();
        }
        set selectionStart(value) {
            throw new latte.Ex();
        }
        get viewEnd() {
            return this.view.viewEnd;
        }
        get viewStart() {
            return this.view.viewStart;
        }
        get workWeekEnd() {
            throw new latte.Ex();
        }
        set workWeekEnd(value) {
            throw new latte.Ex();
        }
        get workWeekStart() {
            throw new latte.Ex();
        }
        set workWeekStart(value) {
            throw new latte.Ex();
        }
    }
    latte.CalendarView = CalendarView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class DateView extends latte.View {
        constructor() {
            super();
            this.element.addClass('date');
            this.dateItem = new latte.DateItem();
            this.dayButton = new latte.ButtonItem();
            this.dayButton.text = latte.strings.day;
            this.workWeekButton = new latte.ButtonItem();
            this.workWeekButton.text = latte.strings.week;
            this.weekButton = new latte.ButtonItem();
            this.weekButton.text = latte.strings.fullWeek;
            this.monthButton = new latte.ButtonItem();
            this.monthButton.text = latte.strings.month;
            this.dayButton.faceVisible = false;
            this.weekButton.faceVisible = false;
            this.monthButton.faceVisible = false;
            this.workWeekButton.faceVisible = false;
            this.dayButton.element.css('opacity', .5);
            this.weekButton.element.css('opacity', .5);
            this.monthButton.element.css('opacity', .5);
            this.workWeekButton.element.css('opacity', .5);
            this.weekButton.visible = false;
            this.dateItem.appendTo(this.container);
            this.dayButton.appendTo(this.element);
            this.weekButton.appendTo(this.element);
            this.workWeekButton.appendTo(this.element);
            this.monthButton.appendTo(this.element);
            this.dateItem.selectionModeChanged.add(() => { this.updateSelectionMode(); });
            this.dayButton.click.add(() => { this.dateItem.selectionMode = latte.DateSelectionMode.DAY; });
            this.weekButton.click.add(() => { this.dateItem.selectionMode = latte.DateSelectionMode.WEEK; });
            this.workWeekButton.click.add(() => { this.dateItem.selectionMode = latte.DateSelectionMode.WORKWEEK; });
            this.monthButton.click.add(() => { this.dateItem.selectionMode = latte.DateSelectionMode.MONTH; });
            this.dayButton.visibleChanged.add(() => { this.onLayout(); });
            this.weekButton.visibleChanged.add(() => { this.onLayout(); });
            this.workWeekButton.visibleChanged.add(() => { this.onLayout(); });
            this.monthButton.visibleChanged.add(() => { this.onLayout(); });
        }
        hideButtons() {
            this.weekButton.visible = false;
            this.workWeekButton.visible = false;
            this.monthButton.visible = false;
            this.dayButton.visible = false;
        }
        onLayout() {
            super.onLayout();
            this.container.css('bottom', this.dayButton.element.height() + 2);
            var size = this.dateItem.monthSize;
            var cols = Math.floor(this.container.width() / size.width);
            var rows = Math.floor(this.container.height() / size.height);
            var cont = this.container.rectangle();
            cont.top = 0;
            cont.left = 0;
            var elem = this.dateItem.element;
            if (this.dateItem.columns != cols && cols > 0)
                this.dateItem.columns = cols;
            if (this.dateItem.rows != rows && rows > 0)
                this.dateItem.rows = rows;
            if (this.dateItem.table)
                elem.rectangle(this.dateItem.table.rectangle().centerOn(cont));
            this.onLayoutButtons();
        }
        onLayoutButtons() {
            var btns = [];
            if (this.dayButton.visible)
                btns.push(this.dayButton);
            if (this.workWeekButton.visible)
                btns.push(this.workWeekButton);
            if (this.weekButton.visible)
                btns.push(this.weekButton);
            if (this.monthButton.visible)
                btns.push(this.monthButton);
            var w = Math.floor(this.element.width() / btns.length);
            for (var i = 0; i < btns.length; i++)
                btns[i].element.width(w - 22).css('left', w * i);
        }
        showButtons() {
            this.weekButton.visible = true;
            this.workWeekButton.visible = true;
            this.monthButton.visible = true;
            this.dayButton.visible = true;
        }
        updateSelectionMode() {
            this.dayButton.checked = (this.dateItem.selectionMode == latte.DateSelectionMode.DAY);
            this.workWeekButton.checked = (this.dateItem.selectionMode == latte.DateSelectionMode.WORKWEEK);
            this.weekButton.checked = (this.dateItem.selectionMode == latte.DateSelectionMode.WEEK);
            this.monthButton.checked = (this.dateItem.selectionMode == latte.DateSelectionMode.MONTH);
        }
    }
    latte.DateView = DateView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class HtmlView extends latte.View {
        constructor(html) {
            super();
            this.element.addClass('html');
            if (html instanceof jQuery)
                this.append(html);
            else if (typeof html == 'string')
                this.html = html;
        }
        append(element) {
            this.container.append(element);
        }
        get html() {
            return this.container.html();
        }
        set html(value) {
            this.container.html(value);
        }
    }
    latte.HtmlView = HtmlView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ItemView extends latte.View {
        constructor(item = null) {
            super();
            this.element.addClass('item');
            if (item)
                this.item = item;
        }
        onLayout() {
            super.onLayout();
            if (this.item)
                this.item.onLayout();
        }
        get item() {
            return this._item;
        }
        set item(value) {
            this._item = value;
            this.container.empty().append(value.element);
        }
    }
    latte.ItemView = ItemView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class MessageView extends latte.View {
        constructor() {
            super();
            this.element.addClass('message');
            this.iconElement = $('<div>').addClass('icon').appendTo(this.element);
            this.messageElement = $('<div>').addClass('message').appendTo(this.element);
            this.descriptionElement = $('<div>').addClass('description').appendTo(this.element);
            this.container.detach().appendTo(this.element);
        }
        iconAlert() {
            var icon = latte.IconItem.standard(4, 8);
            icon.size = 32;
            this.icon = icon;
            return this;
        }
        iconError() {
            var icon = latte.IconItem.standard(5, 8);
            icon.size = 32;
            this.icon = icon;
            return this;
        }
        iconInfo() {
            var icon = latte.IconItem.standard(5, 7);
            icon.size = 32;
            this.icon = icon;
            return this;
        }
        iconQuestion() {
            var icon = latte.IconItem.standard(4, 9);
            icon.size = 32;
            this.icon = icon;
            return this;
        }
        get description() {
            return this.descriptionElement.html();
        }
        set description(value) {
            this.descriptionElement.html(value);
        }
        get icon() {
            return this._icon;
        }
        set icon(value) {
            this._icon = value;
            this.iconElement.empty();
            if (value instanceof latte.IconItem)
                this.iconElement.append(value.element);
        }
        get message() {
            return this.messageElement.html();
        }
        set message(value) {
            this.messageElement.html(value);
        }
    }
    latte.MessageView = MessageView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TextView extends latte.View {
        constructor() {
            super();
            this.element.addClass('text');
            this.textElement = $('<textarea>').appendTo(this.container);
        }
        get text() {
            return this.textElement.val();
        }
        set text(value) {
            this.textElement.val(value);
        }
    }
    latte.TextView = TextView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ProgressDialogView extends latte.DialogView {
        constructor() {
            super();
            this.columnView.items.addArray([this.label, this.progress]);
            this.view = this.columnView;
        }
        updateProgress(value, status = null, max = -1, min = -1) {
            this.progress.value = value;
            if (status)
                this.label.text = status;
            if (min >= 0)
                this.progress.minValue = min;
            if (max >= 0)
                this.progress.maxValue = max;
        }
        get columnView() {
            if (!this._columnView) {
                this._columnView = new latte.ColumnView(1);
            }
            return this._columnView;
        }
        get label() {
            if (!this._label) {
                this._label = new latte.LabelItem();
            }
            return this._label;
        }
        get progress() {
            if (!this._progress) {
                this._progress = new latte.ProgressItem();
            }
            return this._progress;
        }
    }
    latte.ProgressDialogView = ProgressDialogView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class ListView extends latte.View {
        constructor() {
            super();
            this.element.addClass('list');
            this.items = new latte.Collection(this._onAddItem, this._onRemoveItem, this);
            this.columnHeaders = new latte.Collection(this._onAddColumn, this._onRemoveColumn, this);
            this.columnHeadersElement = $('<div>').addClass('column-headers').appendTo(this.element);
            this.columnHeadersElement.append($('<div>').addClass('spacer'));
            var lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna ac est ultrices adipiscing. Nulla eros justo, tristique venenatis ultricies et, congue ut orci. Donec vitae augue eros, nec pretium velit. Cras id nisl a sapien elementum mollis. Aenean augue turpis, sodales accumsan porttitor ut, sagittis quis massa. Etiam consequat, lectus ut tempor dapibus, dui lorem pharetra tellus, a luctus nunc tortor non nibh. Aliquam eros nisl, porta et consequat eleifend, rhoncus vel justo. Aliquam vel diam sit amet arcu suscipit aliquet. Morbi sed metus ut lectus condimentum interdum. Duis eu orci vel mauris luctus interdum. Proin sem lacus, dictum eget vehicula in, tempus ac felis. Mauris vitae purus nibh, et malesuada urna. Sed sit amet nunc leo, et vehicula dui.".split(' ');
            var word = function () { return lipsum[Math.round(Math.random() * (lipsum.length - 1))]; };
            var words = function () { var r = ''; for (var i = 0; i < Math.random() * 8; i++)
                r += word() + ' '; return r; };
            this.element.get(0).addEventListener('keydown', (e) => {
                if (e.keyCode == latte.Key.ARROW_DOWN || e.keyCode == latte.Key.ARROW_LEFT) {
                    this.selectNextItem();
                }
                else if (e.keyCode == latte.Key.ARROW_UP || e.keyCode == latte.Key.ARROW_RIGHT) {
                    this.selectPreviousItem();
                }
            });
        }
        selectNextItem() {
            let index = this.selectedItem ? this.items.indexOf(this.selectedItem) : -1;
            if (index < 0) {
                return;
            }
            else {
            }
            index++;
            if (index >= this.items.length) {
                return;
            }
            if (index >= 0) {
                this.items[index].selected = true;
            }
        }
        selectPreviousItem() {
            let index = this.selectedItem ? this.items.indexOf(this.selectedItem) : -1;
            index--;
            if (index < 0) {
                return;
            }
            if (index < this.items.length) {
                this.items[index].selected = true;
            }
        }
        informSelectedItem(item) {
            var changed = item !== this._selectedItem;
            this._selectedItem = item;
            if (changed) {
                this.onSelectedItemChanged();
            }
        }
        _itemSelected(item) {
            for (var i = 0; i < this.items.count; i++) {
                if (this.items.item(i) !== item) {
                    this.items.item(i).selected = false;
                }
            }
        }
        _onAddColumn(column) {
            this.columnHeadersElement.append(column.element);
            for (var i = 0; i < this.items.count; i++) {
                this.items.item(i).addColumn(column.width);
            }
            let index = this.columnHeaders.length - 1;
            column.widthChanged.add(() => this.updateWidthOfColumn(index, column));
            column.autoResize.add(() => this.autoSizeColumn(index));
            column.autoResizeAll.add(() => this.autoSizeAllColumns());
            column.sortRequested.add(() => this.sortByColumn(index));
            this.onLayout();
        }
        _onAddItem(item) {
            var __this = this;
            this.container.append(item.element);
            item.selectedChanged.add(function () { if (this.selected)
                __this._itemSelected(this); });
            for (var i = 0; i < this.columnHeaders.count; i++) {
                item.addColumn(this.columnHeaders.item(i).width);
            }
            item.onLayout();
        }
        _onRemoveColumn(column) {
            column.element.detach();
            this.onLayout();
        }
        _onRemoveItem(item) {
            item.element.detach();
        }
        autoSizeAllColumns() {
            for (let i = 0; i < this.columnHeaders.length; i++) {
                this.autoSizeColumn(i);
            }
        }
        autoSizeColumn(index) {
            let max = 50;
            this.items.each((item) => max = Math.max(max, item.getItem(index).element.width()));
            this.columnHeaders[index].width = max + 20;
        }
        updateWidthOfColumn(index, column) {
            this.items.each((item) => item.setColumnWidth(index, column.width));
            this.onLayout();
        }
        onLayout() {
            super.onLayout();
            if (this.element.parent().length == 0)
                return;
            let i = 0;
            if (this.columnHeadersVisible) {
                if (this.columnHeaders.count > 0) {
                    var maxHeight = 23;
                    var widthSum = 36;
                    for (i = 0; i < this.columnHeaders.count; i++) {
                        maxHeight = Math.max(maxHeight, this.columnHeaders.item(i).element.outerHeight());
                        widthSum += this.columnHeaders.item(i).width;
                    }
                    this.columnHeadersElement.height(maxHeight);
                    this.columnHeadersElement.css('min-width', widthSum);
                    this.container.css('top', maxHeight);
                    this.container.css('min-width', widthSum);
                    this._columnHeadersWidth = widthSum;
                }
            }
            else {
                this.container.css('top', 0);
            }
            for (i = 0; i < this.items.count; i++)
                this.items.item(i).onLayout();
        }
        sortByColumn(index) {
        }
        get columnHeadersVisible() {
            return this.columnHeadersElement.is(':visible');
        }
        set columnHeadersVisible(value) {
            if (!latte._isBoolean(value))
                throw new latte.InvalidArgumentEx('value');
            if (value)
                this.columnHeadersElement.show();
            else
                this.columnHeadersElement.hide();
        }
        get columnHeadersWidth() {
            return this._columnHeadersWidth;
        }
        get selectedItem() {
            return this._selectedItem;
        }
        set selectedItem(value) {
            var changed = value !== this._selectedItem;
            this._selectedItem = value;
            if (changed) {
                this.onSelectedItemChanged();
            }
        }
        get selectedItemChanged() {
            if (!this._selectedItemChanged) {
                this._selectedItemChanged = new latte.LatteEvent(this);
            }
            return this._selectedItemChanged;
        }
        onSelectedItemChanged() {
            if (this._selectedItemChanged) {
                this._selectedItemChanged.raise();
            }
        }
    }
    latte.ListView = ListView;
})(latte || (latte = {}));
var latte;
(function (latte) {
    class TreeView extends latte.View {
        constructor() {
            super();
            this._navigatingPath = [];
            this.element.addClass('tree');
            latte.UiElement.disableTextSelection(this.element);
            this.itemSelected = new latte.LatteEvent(this);
            this.itemItemsLoaded = new latte.LatteEvent(this);
            this.items = new latte.Collection(this.onAddItem, this.onRemoveItem, this);
        }
        informSelectedItem(item) {
            if (!(item instanceof latte.TreeItem))
                throw new latte.InvalidArgumentEx('item');
            this._selectedItem = item;
            this.onItemSelected(item);
        }
        _navigateToSection(items, index) {
            if (index >= this._navigatingPath.length) {
                this._navigating = false;
                return;
            }
            this._navigatingCurrent = index;
            for (var i = 0; i < items.count; i++) {
                if (items[i].text == this._navigatingPath[index]) {
                    var mustWait = items.item(i).items.count == 0 && items.item(i).hasItems;
                    if (!items[i].expanded) {
                        items[i].expanded = (true);
                    }
                    if (!mustWait) {
                        this._navigateToSection(items[i].items, index + 1);
                    }
                    if (index == this._navigatingPath.length - 1) {
                        this._navigating = false;
                        items.item(i).selected = true;
                        items.item(i).onClick();
                    }
                }
            }
        }
        onAddItem(item) {
            item.appendTo(this.container);
            item._updateGlyph();
        }
        onRemoveItem(item) {
            item.element.detach();
        }
        navigateToPath(path) {
            this._navigating = true;
            this._navigatingCurrent = 0;
            this._navigatingPath = path;
            this._navigateToSection(this.items, 0);
        }
        onItemItemsLoaded(item) {
            if (!(item instanceof latte.TreeItem))
                throw new latte.InvalidArgumentEx('item');
            if (this._navigating)
                this._navigateToSection(item.items, this._navigatingCurrent + 1);
            this.itemItemsLoaded.raise(item);
        }
        onItemSelected(item) {
            if (!(item instanceof latte.TreeItem))
                throw new latte.InvalidArgumentEx('item');
            this.itemSelected.raise(item);
        }
        get addItem() {
            if (!this._addItem) {
                this._addItem = new latte.LatteEvent(this);
            }
            return this._addItem;
        }
        get defaultGlyphCollapse() {
            return this._defaultGlyphCollapse;
        }
        set defaultGlyphCollapse(value) {
            this._defaultGlyphCollapse = value;
        }
        get defaultGlyphCollapseSelected() {
            return this._defaultGlyphCollapseSelected;
        }
        set defaultGlyphCollapseSelected(value) {
            this._defaultGlyphCollapseSelected = value;
        }
        get defaultGlyphExpand() {
            return this._defaultGlyphExpand;
        }
        set defaultGlyphExpand(value) {
            this._defaultGlyphExpand = value;
        }
        get defaultGlyphExpandSelected() {
            return this._defaultGlyphExpandSelected;
        }
        set defaultGlyphExpandSelected(value) {
            this._defaultGlyphExpandSelected = value;
        }
        get navigating() {
            return this._navigating;
        }
        get path() {
            if (this.selectedItem instanceof latte.TreeItem) {
                return this.selectedItem.path;
            }
            return "/";
        }
        get selectedItem() {
            return this._selectedItem;
        }
        set selectedItem(item) {
            item.selected = true;
        }
        get removeItem() {
            if (!this._removeItem) {
                this._removeItem = new latte.LatteEvent(this);
            }
            return this._removeItem;
        }
    }
    latte.TreeView = TreeView;
})(latte || (latte = {}));

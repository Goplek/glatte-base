/// <reference path="base/I18.ts"/>
module latte{

    import I18 = late.I18;

    export class strings{

        static get DataLatte(): string{
            return I18.resolve({
                "en": "DataLatte",
                "es": "DataLatte"
            });
        }

        static get info(): string{
            return I18.resolve({
                "en": "Info",
                "es": "Info"
            });
        }

        static get edit(): string{
            return I18.resolve({
                "en": "Edit",
                "es": "Editar"
            });
        }

        static get save(): string{
            return I18.resolve({
                "en": "Save",
                "es": "Guardar"
            });
        }

        static get saveAndClose(): string{
            return I18.resolve({
                "en": "Save and Close",
                "es": "Guardar y Cerrar"
            });
        }

        static get saveAndNew(): string{
            return I18.resolve({
                "en": "Save and New",
                "es": "Guardar y Nuevo"
            });
        }

        static get selectMonth(): string{
            return I18.resolve({
                "en": "Select",
                "es": "Seleccionar"
            });
        }

        static get defaultBool(): string{
            return I18.resolve({
                "en": "Yes/No",
                "es": "Sí/No"
            });
        }

        static get add(): string{
            return I18.resolve({
                "en": "Add",
                "es": "Agregar"
            });
        }

        static get addNew(): string{
            return I18.resolve({
                "en": "Add New",
                "es": "Agregar Nuevo"
            });
        }

        static get change(): string{
            return I18.resolve({
                "en": "Change",
                "es": "Cambiar"
            });
        }

        static get see(): string{
            return I18.resolve({
                "en": "See",
                "es": "Ver"
            });
        }

        static get newKey(): string{
            return I18.resolve({
                "en": "new",
                "es": "Nuevo"
            });
        }

        static get listof(): string{
            return I18.resolve({
                "en": "List of %s",
                "es": "Lista de %s"
            });
        }

        static get ok(): string{
            return I18.resolve({
                "en": "OK",
                "es": "Aceptar"
            });
        }

        static get cancel(): string{
            return I18.resolve({
                "en": "Cancel",
                "es": "Cancelar"
            });
        }

        static get selectObject(): string{
            return I18.resolve({
                "en": "Select Object",
                "es": "Seleccionar objeto"
            });
        }

        static get listOfVar(): string{
            return I18.resolve({
                "en": "List of (%s)",
                "es": "Lista de (%s)"
            });
        }

        static get pick(): string{
            return I18.resolve({
                "en": "Pick",
                "es": "Elegir"
            });
        }

        static get createNew(): string{
            return I18.resolve({
                "en": "Create New",
                "es": "Crear nuevo"
            });
        }

        static get create(): string{
            return I18.resolve({
                "en": "Create",
                "es": "Crear"
            });
        }

        static get secretPassword(): string{
            return I18.resolve({
                "en": "(Secret)",
                "es": "(Secreto)"
            });
        }

        static get passphrase(): string{
            return I18.resolve({
                "en": "Passphrase",
                "es": "Passphrase"
            });
        }

        static get managerDisabled(): string{
            return I18.resolve({
                "en": "Manager Disabled",
                "es": "Manager Disabled"
            });
        }

        static get managerCheckingEnabled(): string{
            return I18.resolve({
                "en": "Checking if Manager Enabled",
                "es": "Checking if Manager Enabled"
            });
        }

        static get managerCheckingReady(): string{
            return I18.resolve({
                "en": "Checking if Manager Ready",
                "es": "Checking if Manager Ready"
            });
        }

        static get managerCheckingLoggedIn(): string{
            return I18.resolve({
                "en": "Checking if logged in",
                "es": "Checking if logged in"
            });
        }

        static get enterPassphrase(): string{
            return I18.resolve({
                "en": "Enter Passphrase:",
                "es": "Enter Passphrase:"
            });
        }

        static get managerNotEnabled(): string{
            return I18.resolve({
                "en": "No passphrase configured. Please create a file named passphrase.php in datalatte-files directory. It must contain a PHP const named PASSPHRASE with the passphrase you wish to use for DataLatte Manager.",
                "es": "No passphrase configured. Please create a file named passphrase.php in datalatte-files directory. It must contain a PHP const named PASSPHRASE with the passphrase you wish to use for DataLatte Manager."
            });
        }

        static get managerNotReady(): string{
            return I18.resolve({
                "en": "Directory datalatte-files/ must have permissions to write.",
                "es": "Directory datalatte-files/ must have permissions to write."
            });
        }

        static get invalidPassphrase(): string{
            return I18.resolve({
                "en": "Invalid Passphrase.",
                "es": "Invalid Passphrase."
            });
        }

        static get logout(): string{
            return I18.resolve({
                "en": "Log Out",
                "es": "Cerrar sesión"
            });
        }

        static get connection(): string{
            return I18.resolve({
                "en": "Connection",
                "es": "Conexión"
            });
        }

        static get enterConnectionData(): string{
            return I18.resolve({
                "en": "Enter MYSQL connection data:",
                "es": "Datos de conexión MySQL"
            });
        }

        static get userName(): string{
            return I18.resolve({
                "en": "User name",
                "es": "Nombre de usuario"
            });
        }

        static get password(): string{
            return I18.resolve({
                "en": "Password",
                "es": "Contaseña"
            });
        }

        static get host(): string{
            return I18.resolve({
                "en": "Host",
                "es": "Servidor"
            });
        }

        static get dbName(): string{
            return I18.resolve({
                "en": "DataBase name",
                "es": "Base de datos"
            });
        }

        static get parametersError(): string{
            return I18.resolve({
                "en": "Can't establish connection using parameters:",
                "es": "No se puee establecer conexión con los parámetros:"
            });
        }

        static get recordsUpdated(): string{
            return I18.resolve({
                "en": "Records updated",
                "es": "Registros actualizados"
            });
        }

        static get fieldNotValid(): string{
            return I18.resolve({
                "en": "The field is not valid",
                "es": "El campo no es válido"
            });
        }

        static get fieldNotNumber(): string{
            return I18.resolve({
                "en": "The field is not a numeric value",
                "es": "El campo no es numérico"
            });
        }

        static get minValueIsS(): string{
            return I18.resolve({
                "en": "The minimum value is %s",
                "es": "El valor mínimo es: s%"
            });
        }

        static get maxValueIsS(): string{
            return I18.resolve({
                "en": "The maximum value is %s",
                "es": "The maximum value is %s"
            });
        }

        static get minLenValueIsS(): string{
            return I18.resolve({
                "en": "The minimum of characters is %s",
                "es": "Mínimo de caracteres es %s"
            });
        }

        static get maxLenValueIsS(): string{
            return I18.resolve({
                "en": "The maximum of characters is %s",
                "es": "Máximo de caracteres es %s"
            });
        }

        static get valueNotInteger(): string{
            return I18.resolve({
                "en": "Value is not an integer number",
                "es": "El valor no es un número entero"
            });
        }

        static get fieldMustHaveValue(): string{
            return I18.resolve({
                "en": "The field is mandatory. Must have a value.",
                "es": "El campo es obligatoio"
            });
        }

        static get home(): string{
            return I18.resolve({
                "en": "Home",
                "es": "Inicio"
            });
        }

        static get api(): string{
            return I18.resolve({
                "en": "API",
                "es": "API"
            });
        }

        static get datalatte(): string{
            return I18.resolve({
                "en": "DataLatte",
                "es": "DataLatte"
            });
        }

        static get dbConnection(): string{
            return I18.resolve({
                "en": "Connection",
                "es": "Conexión"
            });
        }

        static get updateRecords(): string{
            return I18.resolve({
                "en": "Update Records",
                "es": "Actualizar registros"
            });
        }

        static get settings(): string{
            return I18.resolve({
                "en": "Settings",
                "es": "Ajustes"
            });
        }

        static get cantConnectToServer(): string{
            return I18.resolve({
                "en": "Can't connect to server %s (user %s)",
                "es": "No se puede conectar al servidor %s (Usuario %s)"
            });
        }

        static get cantSelectDbS(): string{
            return I18.resolve({
                "en": "Can't select database %s",
                "es": "No se puede seleccionar la base de datos: %s"
            });
        }

        static get errorOnQueryS(): string{
            return I18.resolve({
                "en": "Error when executing a query: %s <sql>%s</sql>",
                "es": "Error al ejecutar el query: %s <sql>%s</sql>"
            });
        }

        static get greatScott(): string{
            return I18.resolve({
                "en": "Great Scott! Automatic Initialization througn connection.php failed!",
                "es": "Great Scott! Automatic Initialization through connection.php failed!"
            });
        }

        static get datalatteInitFailed(): string{
            return I18.resolve({
                "en": "No ConnectionParameters class defined and no datalatte-files/connection.php file. You may configure a connection in /datalatte with your web DetailView.",
                "es": "No ConnectionParameters class defined and no datalatte-files/connection.php file. You may configure a connection in /datalatte with your web DetailView."
            });
        }

        static get loading(): string{
            return I18.resolve({
                "en": "Loading",
                "es": "Cargando"
            });
        }

        static get saving(): string{
            return I18.resolve({
                "en": "Saving...",
                "es": "Guardando"
            });
        }

        static get tableData(): string{
            return I18.resolve({
                "en": "Data",
                "es": "Datos"
            });
        }

        static get tableColumns(): string{
            return I18.resolve({
                "en": "Columns",
                "es": "Columnas"
            });
        }

        static get insertNow(): string{
            return I18.resolve({
                "en": "Insert Now",
                "es": "Insertar ahora"
            });
        }

        static get columnName(): string{
            return I18.resolve({
                "en": "Column Name",
                "es": "Nombre de la columna"
            });
        }

        static get type(): string{
            return I18.resolve({
                "en": "Type",
                "es": "Tipo"
            });
        }

        static get lengthStr(): string{
            return I18.resolve({
                "en": "Length",
                "es": "Ancho"
            });
        }

        static get flags(): string{
            return I18.resolve({
                "en": "Flags",
                "es": "Flags"
            });
        }

        static get strNull(): string{
            return I18.resolve({
                "en": "Null",
                "es": "Null"
            });
        }

        static get strDefault(): string{
            return I18.resolve({
                "en": "Default",
                "es": "Default"
            });
        }

        static get extra(): string{
            return I18.resolve({
                "en": "Extra",
                "es": "Extra"
            });
        }

        static get yes(): string{
            return I18.resolve({
                "en": "Yes",
                "es": "Sí"
            });
        }

        static get no(): string{
            return I18.resolve({
                "en": "No",
                "es": "No"
            });
        }

        static get commit(): string{
            return I18.resolve({
                "en": "Commit",
                "es": "Cometer"
            });
        }

        static get revert(): string{
            return I18.resolve({
                "en": "Revert",
                "es": "Revertir"
            });
        }

        static get apply(): string{
            return I18.resolve({
                "en": "Apply",
                "es": "Aplicar"
            });
        }

        static get deleteRow(): string{
            return I18.resolve({
                "en": "Delete Row",
                "es": "Eliminar renglón"
            });
        }

        static get copy(): string{
            return I18.resolve({
                "en": "Copy",
                "es": "Copiar"
            });
        }

        static get paste(): string{
            return I18.resolve({
                "en": "Paste",
                "es": "Pegar"
            });
        }

        static get setAsNull(): string{
            return I18.resolve({
                "en": "Set as Null",
                "es": "Marcar como Null"
            });
        }

        static get autoIncrement(): string{
            return I18.resolve({
                "en": "Auto Increment",
                "es": "Auto Incremental"
            });
        }

        static get primaryKey(): string{
            return I18.resolve({
                "en": "Primary Key",
                "es": "Llave primaria"
            });
        }

        static get createTable(): string{
            return I18.resolve({
                "en": "Create table",
                "es": "Crear tabla"
            });
        }

        static get tableName(): string{
            return I18.resolve({
                "en": "Table name",
                "es": "Nombre de la tabla"
            });
        }

        static get dropTable(): string{
            return I18.resolve({
                "en": "Drop Table",
                "es": "Eliminar tabla"
            });
        }

        static get confirmDropTable(): string{
            return I18.resolve({
                "en": "Do you want to drop the table %s?",
                "es": "Deseas eliminar la tabla %s?"
            });
        }

        static get php(): string{
            return I18.resolve({
                "en": "PHP",
                "es": "PHP"
            });
        }

        static get userAgent(): string{
            return I18.resolve({
                "en": "User Agent",
                "es": "User Agent"
            });
        }

        static get database(): string{
            return I18.resolve({
                "en": "Database",
                "es": "Base de datos"
            });
        }

        static get app(): string{
            return I18.resolve({
                "en": "App",
                "es": "App"
            });
        }

        static get query(): string{
            return I18.resolve({
                "en": "Query",
                "es": "Query"
            });
        }

        static get execute(): string{
            return I18.resolve({
                "en": "Execute",
                "es": "Ejecutar"
            });
        }

        static get passphraseExplain(): string{
            return I18.resolve({
                "en": "Please enter the passphrase configured on datalatte-files/",
                "es": "Escribe el passphrase"
            });
        }

        static get errorExecutingQuery(): string{
            return I18.resolve({
                "en": "Error executing query",
                "es": "Error executing query"
            });
        }

        static get close(): string{
            return I18.resolve({
                "en": "Close",
                "es": "Cerrar"
            });
        }

        static get secret(): string{
            return I18.resolve({
                "en": "Secret",
                "es": "Secreto"
            });
        }

        static get writeComment(): string{
            return I18.resolve({
                "en": "Write Comment",
                "es": "Escribir comentario"
            });
        }

        static get showMoreCommentsS(): string{
            return I18.resolve({
                "en": "Show more comments (%s)",
                "es": "Mostrar más comentarios (%s)"
            });
        }

        static get uploadingS(): string{
            return I18.resolve({
                "en": "Uploading %s",
                "es": "Subiendo %s"
            });
        }

        static get uploadingSSPercent(): string{
            return I18.resolve({
                "en": "Uploading %s %s",
                "es": "Subiendo %s %s"
            });
        }

        static get error(): string{
            return I18.resolve({
                "en": "Error",
                "es": "Error"
            });
        }

        static get nameStr(): string{
            return I18.resolve({
                "en": "Name",
                "es": "Nombre"
            });
        }

        static get working(): string{
            return I18.resolve({
                "en": "Working",
                "es": "Trabajando"
            });
        }

        static get day(): string{
            return I18.resolve({
                "en": "Day",
                "es": "Día"
            });
        }

        static get week(): string{
            return I18.resolve({
                "en": "Week",
                "es": "Semana"
            });
        }

        static get workWeek(): string{
            return I18.resolve({
                "en": "Work Week",
                "es": "Semana laboral"
            });
        }

        static get month(): string{
            return I18.resolve({
                "en": "Month",
                "es": "Mes"
            });
        }

        static get fullWeek(): string{
            return I18.resolve({
                "en": "Full Week",
                "es": "Semana completa"
            });
        }

        static get pleaseSelect(): string{
            return I18.resolve({
                "en": "Select...",
                "es": "Seleccionar..."
            });
        }

        static get askSaveChanges(): string{
            return I18.resolve({
                "en": "Do you want to save your changes?",
                "es": "¿Deseas guardar los cambios?"
            });
        }

        static get unsavedChanges(): string{
            return I18.resolve({
                "en": "Unsaved Changes",
                "es": "Cambios sin guardar"
            });
        }

        static get yesSaveChanges(): string{
            return I18.resolve({
                "en": "Yes, save changes",
                "es": "Sí, guardar cambios"
            });
        }

        static get noIgnoreChanges(): string{
            return I18.resolve({
                "en": "No, ignore changes",
                "es": "No, ignorar los cambios"
            });
        }

        static get imageUrl(): string{
            return I18.resolve({
                "en": "Image's URL:",
                "es": "URL Imagen:"
            });
        }

        static get linkUrl(): string{
            return I18.resolve({
                "en": "Link's URL:",
                "es": " URL Hipervínculo:"
            });
        }

        static get bold(): string{
            return I18.resolve({
                "en": "Bold",
                "es": "Negrita"
            });
        }

        static get italics(): string{
            return I18.resolve({
                "en": "Italics",
                "es": "Cursiva"
            });
        }

        static get alignLeft(): string{
            return I18.resolve({
                "en": "Align left",
                "es": "Alinear a la izquierda"
            });
        }

        static get alignRight(): string{
            return I18.resolve({
                "en": "Align right",
                "es": "Alienar a la derecha"
            });
        }

        static get alignCenter(): string{
            return I18.resolve({
                "en": "Center text",
                "es": "Centrar Texto"
            });
        }

        static get alignJustify(): string{
            return I18.resolve({
                "en": "Justify text",
                "es": "Justificar texto"
            });
        }

        static get indent(): string{
            return I18.resolve({
                "en": "Indent",
                "es": "Indentar"
            });
        }

        static get outdent(): string{
            return I18.resolve({
                "en": "Outdent",
                "es": "Des-indentar"
            });
        }

        static get numberedList(): string{
            return I18.resolve({
                "en": "Numbered list",
                "es": "Lista numerada"
            });
        }

        static get bulletList(): string{
            return I18.resolve({
                "en": "List",
                "es": "Lista"
            });
        }

        static get eraseFormat(): string{
            return I18.resolve({
                "en": "Erase format",
                "es": "Borrar formato"
            });
        }

        static get insertImage(): string{
            return I18.resolve({
                "en": "Insert image",
                "es": "Insertar imagen"
            });
        }

        static get insertLink(): string{
            return I18.resolve({
                "en": "Insert link",
                "es": "Insertar Hipervínculo"
            });
        }

        static get nextPage(): string{
            return I18.resolve({
                "en": "Next page",
                "es": "Siguiente página"
            });
        }

        static get previousPage(): string{
            return I18.resolve({
                "en": "Previous page",
                "es": "Página anterior"
            });
        }

        static get underline(): string{
            return I18.resolve({
                "en": "Underline",
                "es": "Subrayar"
            });
        }

        static get insertHTML(): string{
            return I18.resolve({
                "en": "Insert HTML",
                "es": "Insertar HTML"
            });
        }

        static get videoURL(): string{
            return I18.resolve({
                "en": "Video URL",
                "es": "URL Video"
            });
        }

        static get urlNotYouTube(): string{
            return I18.resolve({
                "en": "URL is not recognized as YouTube",
                "es": "URL no es reconocido como YouTube"
            });
        }

        static get makeRelease(): string{
            return I18.resolve({
                "en": "Make Release",
                "es": "Crear Release"
            });
        }

        static get insertYouTube(): string{
            return I18.resolve({
                "en": "Insert YouTube",
                "es": "Insertar YouTube"
            });
        }

        static get clearText(): string{
            return I18.resolve({
                "en": "Clear Text",
                "es": "Limpiar texto"
            });
        }

        static get developedBy(): string{
            return I18.resolve({
                "en": "Developed by Goplek.com",
                "es": "Desarrollado por Goplek.com"
            });
        }

        static get confirmDeleteS(): string{
            return I18.resolve({
                "en": "Do you want to delete\"%s\"?",
                "es": "¿Desea eliminar \"%s\"?"
            });
        }

        static get cantBeUndone(): string{
            return I18.resolve({
                "en": "This action can't be undone.",
                "es": "Esta acción no se puede deshacer."
            });
        }

        static get yesDeleteS(): string{
            return I18.resolve({
                "en": "Yes, delete %s",
                "es": "Sí, eliminar %s"
            });
        }

        static get goToPage(): string{
            return I18.resolve({
                "en": "Go to page",
                "es": "Ir a página"
            });
        }

        static get refresh(): string{
            return I18.resolve({
                "en": "Refresh",
                "es": "Actualizar"
            });
        }

        static get switchOn(): string{
            return I18.resolve({
                "en": "On",
                "es": "Sí"
            });
        }

        static get switchOff(): string{
            return I18.resolve({
                "en": "Off",
                "es": "No"
            });
        }

        static get flagsNone(): string{
            return I18.resolve({
                "en": "(None)",
                "es": "(Ninguno)"
            });
        }

        static get nothingToShow(): string{
            return I18.resolve({
                "en": "Nothing to Show",
                "es": "Nada que mostrar"
            });
        }

        static get jumpToYear(): string{
            return I18.resolve({
                "en": "Jump to Year",
                "es": "Ir al año"
            });
        }

        static get justNow(): string{
            return I18.resolve({
                "en": "Now",
                "es": "Ahora"
            });
        }

        static get oneMinuteAgo(): string{
            return I18.resolve({
                "en": "One minute ago",
                "es": "Hace un minuto"
            });
        }

        static get SMinutesAgo(): string{
            return I18.resolve({
                "en": "%s minutes ago",
                "es": "Hace %s minutos"
            });
        }

        static get oneHourAgo(): string{
            return I18.resolve({
                "en": "One hour ago",
                "es": "Hace una hora"
            });
        }

        static get SHoursAgo(): string{
            return I18.resolve({
                "en": "%s hours ago",
                "es": "Hace %s horas"
            });
        }

        static get yesterday(): string{
            return I18.resolve({
                "en": "Yesterday",
                "es": "Ayer"
            });
        }

        static get SDaysAgo(): string{
            return I18.resolve({
                "en": "%s days ago",
                "es": "Hace %s días"
            });
        }

        static get oneWeekAgo(): string{
            return I18.resolve({
                "en": "One week ago",
                "es": "Hace una semana"
            });
        }

        static get SWeeksAgo(): string{
            return I18.resolve({
                "en": "%s weeks ago",
                "es": "Hace %s semanas"
            });
        }

        static get oneYearAgo(): string{
            return I18.resolve({
                "en": "One year ago",
                "es": "Hace un año"
            });
        }

        static get SYearsAgo(): string{
            return I18.resolve({
                "en": "%s years ago",
                "es": "Hace %s años"
            });
        }

        static get sunday(): string{
            return I18.resolve({
                "en": "Sunday",
                "es": "Domingo"
            });
        }

        static get monday(): string{
            return I18.resolve({
                "en": "Monday",
                "es": "Lunes"
            });
        }

        static get tuesday(): string{
            return I18.resolve({
                "en": "Tuesday",
                "es": "Martes"
            });
        }

        static get wednesday(): string{
            return I18.resolve({
                "en": "Wednesday",
                "es": "Miércoles"
            });
        }

        static get thursday(): string{
            return I18.resolve({
                "en": "Thursday",
                "es": "Jueves"
            });
        }

        static get friday(): string{
            return I18.resolve({
                "en": "Friday",
                "es": "Viernes"
            });
        }

        static get saturday(): string{
            return I18.resolve({
                "en": "Saturday",
                "es": "Sábado"
            });
        }

        static get sundayShort(): string{
            return I18.resolve({
                "en": "Sun",
                "es": "Dom"
            });
        }

        static get mondayShort(): string{
            return I18.resolve({
                "en": "Mon",
                "es": "Lun"
            });
        }

        static get tuesdayShort(): string{
            return I18.resolve({
                "en": "Tue",
                "es": "Mar"
            });
        }

        static get wednesdayShort(): string{
            return I18.resolve({
                "en": "Wed",
                "es": "Mié"
            });
        }

        static get thursdayShort(): string{
            return I18.resolve({
                "en": "Thu",
                "es": "Jue"
            });
        }

        static get fridayShort(): string{
            return I18.resolve({
                "en": "Fri",
                "es": "Vie"
            });
        }

        static get saturdayShort(): string{
            return I18.resolve({
                "en": "Sat",
                "es": "Sab"
            });
        }

        static get sundayInitial(): string{
            return I18.resolve({
                "en": "S",
                "es": "D"
            });
        }

        static get mondayInitial(): string{
            return I18.resolve({
                "en": "M",
                "es": "L"
            });
        }

        static get tuesdayInitial(): string{
            return I18.resolve({
                "en": "T",
                "es": "M"
            });
        }

        static get wednesdayInitial(): string{
            return I18.resolve({
                "en": "W",
                "es": "M"
            });
        }

        static get thursdayInitial(): string{
            return I18.resolve({
                "en": "T",
                "es": "J"
            });
        }

        static get fridayInitial(): string{
            return I18.resolve({
                "en": "F",
                "es": "V"
            });
        }

        static get saturdayInitial(): string{
            return I18.resolve({
                "en": "S",
                "es": "S"
            });
        }

        static get january(): string{
            return I18.resolve({
                "en": "January",
                "es": "Enero"
            });
        }

        static get february(): string{
            return I18.resolve({
                "en": "February",
                "es": "Febrero"
            });
        }

        static get march(): string{
            return I18.resolve({
                "en": "March",
                "es": "Marzo"
            });
        }

        static get april(): string{
            return I18.resolve({
                "en": "April",
                "es": "Abril"
            });
        }

        static get may(): string{
            return I18.resolve({
                "en": "May",
                "es": "Mayo"
            });
        }

        static get june(): string{
            return I18.resolve({
                "en": "June",
                "es": "Junio"
            });
        }

        static get july(): string{
            return I18.resolve({
                "en": "July",
                "es": "Julio"
            });
        }

        static get august(): string{
            return I18.resolve({
                "en": "August",
                "es": "Augosto"
            });
        }

        static get september(): string{
            return I18.resolve({
                "en": "September",
                "es": "Septiembre"
            });
        }

        static get october(): string{
            return I18.resolve({
                "en": "October",
                "es": "Octubre"
            });
        }

        static get november(): string{
            return I18.resolve({
                "en": "November",
                "es": "Noviembre"
            });
        }

        static get december(): string{
            return I18.resolve({
                "en": "December",
                "es": "Diciembre"
            });
        }

        static get januaryShort(): string{
            return I18.resolve({
                "en": "Jan",
                "es": "Ene"
            });
        }

        static get februaryShort(): string{
            return I18.resolve({
                "en": "Feb",
                "es": "Feb"
            });
        }

        static get marchShort(): string{
            return I18.resolve({
                "en": "Mar",
                "es": "Mar"
            });
        }

        static get aprilShort(): string{
            return I18.resolve({
                "en": "Apr",
                "es": "Abr"
            });
        }

        static get mayShort(): string{
            return I18.resolve({
                "en": "May",
                "es": "May"
            });
        }

        static get juneShort(): string{
            return I18.resolve({
                "en": "Jun",
                "es": "Jun"
            });
        }

        static get julyShort(): string{
            return I18.resolve({
                "en": "Jul",
                "es": "Jul"
            });
        }

        static get augustShort(): string{
            return I18.resolve({
                "en": "Aug",
                "es": "Ago"
            });
        }

        static get septemberShort(): string{
            return I18.resolve({
                "en": "Sept",
                "es": "Sep"
            });
        }

        static get octoberShort(): string{
            return I18.resolve({
                "en": "Oct",
                "es": "Oct"
            });
        }

        static get novemberShort(): string{
            return I18.resolve({
                "en": "Nov",
                "es": "Nov"
            });
        }

        static get decemberShort(): string{
            return I18.resolve({
                "en": "Dec",
                "es": "Dic"
            });
        }

        static get januaryInitial(): string{
            return I18.resolve({
                "en": "J",
                "es": "E"
            });
        }

        static get februaryInitial(): string{
            return I18.resolve({
                "en": "F",
                "es": "F"
            });
        }

        static get marchInitial(): string{
            return I18.resolve({
                "en": "M",
                "es": "M"
            });
        }

        static get aprilInitial(): string{
            return I18.resolve({
                "en": "A",
                "es": "A"
            });
        }

        static get mayInitial(): string{
            return I18.resolve({
                "en": "M",
                "es": "M"
            });
        }

        static get juneInitial(): string{
            return I18.resolve({
                "en": "J",
                "es": "J"
            });
        }

        static get julyInitial(): string{
            return I18.resolve({
                "en": "J",
                "es": "J"
            });
        }

        static get augustInitial(): string{
            return I18.resolve({
                "en": "A",
                "es": "A"
            });
        }

        static get septemberInitial(): string{
            return I18.resolve({
                "en": "S",
                "es": "S"
            });
        }

        static get octoberInitial(): string{
            return I18.resolve({
                "en": "O",
                "es": "O"
            });
        }

        static get novemberInitial(): string{
            return I18.resolve({
                "en": "N",
                "es": "N"
            });
        }

        static get decemberInitial(): string{
            return I18.resolve({
                "en": "D",
                "es": "D"
            });
        }

        static get Smillis(): string{
            return I18.resolve({
                "en": "%s milliseconds",
                "es": "%s milisegundos"
            });
        }

        static get oneSecond(): string{
            return I18.resolve({
                "en": "1 second",
                "es": "1 segundo"
            });
        }

        static get Sseconds(): string{
            return I18.resolve({
                "en": "%s seconds",
                "es": "%s segundos"
            });
        }

        static get oneMinute(): string{
            return I18.resolve({
                "en": "1 minute",
                "es": "1 minuto"
            });
        }

        static get Sminutes(): string{
            return I18.resolve({
                "en": "%s minutes",
                "es": "%s minutos"
            });
        }

        static get oneHour(): string{
            return I18.resolve({
                "en": "1 hour",
                "es": "1 hora"
            });
        }

        static get Shours(): string{
            return I18.resolve({
                "en": "%s hours",
                "es": "%s horas"
            });
        }

        static get oneDay(): string{
            return I18.resolve({
                "en": "1 day",
                "es": "1 día"
            });
        }

        static get Sdays(): string{
            return I18.resolve({
                "en": "%s days",
                "es": "%s días"
            });
        }

        static get oneWeek(): string{
            return I18.resolve({
                "en": "1 week",
                "es": "1 semana"
            });
        }

        static get Sweeks(): string{
            return I18.resolve({
                "en": "%s weeks",
                "es": "%s semanas"
            });
        }

        static get SmillisShort(): string{
            return I18.resolve({
                "en": "= %sms",
                "es": "= %sms"
            });
        }

        static get oneSecondShort(): string{
            return I18.resolve({
                "en": "1s",
                "es": "1s"
            });
        }

        static get SsecondsShort(): string{
            return I18.resolve({
                "en": "%ss",
                "es": "%ss"
            });
        }

        static get oneMinuteShort(): string{
            return I18.resolve({
                "en": "1m",
                "es": "1m"
            });
        }

        static get SminutesShort(): string{
            return I18.resolve({
                "en": "%sm",
                "es": "%sm"
            });
        }

        static get oneHourShort(): string{
            return I18.resolve({
                "en": "1h",
                "es": "1h"
            });
        }

        static get ShoursShort(): string{
            return I18.resolve({
                "en": "%sh",
                "es": "%sh"
            });
        }

        static get oneDayShort(): string{
            return I18.resolve({
                "en": "1d",
                "es": "1d"
            });
        }

        static get SdaysShort(): string{
            return I18.resolve({
                "en": "%sd",
                "es": "%sd"
            });
        }

        static get oneWeekShort(): string{
            return I18.resolve({
                "en": "1w",
                "es": "1w"
            });
        }

        static get SweeksShort(): string{
            return I18.resolve({
                "en": "%sw",
                "es": "%sw"
            });
        }

        static get tomorrow(): string{
            return I18.resolve({
                "en": "Tomorrow",
                "es": "Mañana"
            });
        }

        static get today(): string{
            return I18.resolve({
                "en": "Today",
                "es": "Hoy"
            });
        }

        static get nextWeekDayS(): string{
            return I18.resolve({
                "en": "Next %s",
                "es": "Próximo %s"
            });
        }

        static get SWeeksFromNow(): string{
            return I18.resolve({
                "en": "%s weeks from now",
                "es": "En %s semanas"
            });
        }

        static get SYearsFromNow(): string{
            return I18.resolve({
                "en": "%s years from now",
                "es": "En %s años"
            });
        }

        static get oneYearFromNow(): string{
            return I18.resolve({
                "en": "One year from now",
                "es": "En un año"
            });
        }

        static get reconnecting(): string{
            return I18.resolve({
                "en": "Reconnecting",
                "es": "Reconectando"
            });
        }

        static get reconnectingInS(): string{
            return I18.resolve({
                "en": "Reconnecting in %s seconds",
                "es": "Reconnectando en %s segundos"
            });
        }

    }
}
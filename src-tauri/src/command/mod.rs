use tauri::Runtime;
use tauri_specta::{Commands, collect_commands};

pub fn commands<R: Runtime>() -> Commands<R> {
    collect_commands![greet]
}

#[tauri::command]
#[specta::specta]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

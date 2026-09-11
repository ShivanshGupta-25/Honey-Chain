import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import SettingsSidebar from "../../components/beekeeper/settings/SettingsSidebar";
import GeneralSettings from "../../components/beekeeper/settings/GeneralSettings";
import NotificationSettings from "../../components/beekeeper/settings/NotificationSettings";
import SecuritySettings from "../../components/beekeeper/settings/SecuritySettings";
import PrivacySettings from "../../components/beekeeper/settings/PrivacySettings";
import DangerZone from "../../components/beekeeper/settings/DangerZone";
import ChangePasswordModal from "../../components/beekeeper/account/ChangePasswordModal";

import {
  getSettings,
  updateGeneralSettings,
  updateNotificationSettings,
  updatePrivacySettings,
} from "../../api/settingsApi";

import { getUser, logout } from "../../utils/auth";
import { changePassword } from "../../api/authApi";

const defaultSettings = {
  language: "en",
  timezone: "Asia/Kolkata",
  dateFormat: "DD/MM/YYYY",

  notifications: {
    hiveHealth: true,
    batchUpdates: true,
    system: true,
    email: true,
  },

  privacy: {
    profileVisibility: "private",
  },
};

const Settings = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] =
    useState("general");

  const [settings, setSettings] =
    useState(defaultSettings);

  const [profile, setProfile] =
    useState(getUser());

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [error, setError] =
    useState("");

    const [isPasswordOpen, setIsPasswordOpen] =
    useState(false);

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [passwordError, setPasswordError] =
    useState("");

  const [passwordSuccess, setPasswordSuccess] =
    useState("");

  // ========================================
  // Load Settings
  // ========================================

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await getSettings();

        if (data?.settings) {
          setSettings({
            ...defaultSettings,
            ...data.settings,

            notifications: {
              ...defaultSettings.notifications,
              ...data.settings.notifications,
            },

            privacy: {
              ...defaultSettings.privacy,
              ...data.settings.privacy,
            },
          });
        }

      } catch (error) {
        console.error(
          "Failed to load settings:",
          error
        );

        setError(
          error?.response?.data?.message ||
            "Failed to load settings."
        );

      } finally {
        setLoading(false);
      }
    };

    loadSettings();
  }, []);

  // ========================================
  // Clear Messages
  // ========================================

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // ========================================
  // Update Local Settings
  // ========================================

  const updateLocalSettings = (
    changes
  ) => {
    setSettings((prev) => ({
      ...prev,
      ...changes,
    }));
  };

  // ========================================
  // Save General
  // ========================================

  const handleGeneralSave = async () => {
    try {
      setSaving(true);
      setError("");

      const data =
        await updateGeneralSettings({
          language: settings.language,
          timezone: settings.timezone,
          dateFormat: settings.dateFormat,
        });

      if (data?.settings) {
        setSettings(data.settings);
      }

      showMessage(
        "General settings saved successfully."
      );

    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Failed to save general settings."
      );
    } finally {
      setSaving(false);
    }
  };

  // ========================================
  // Save Notifications
  // ========================================

  const handleNotificationSave =
    async () => {
      try {
        setSaving(true);
        setError("");

        const data =
          await updateNotificationSettings(
            settings.notifications
          );

        if (data?.settings) {
          setSettings(data.settings);
        }

        showMessage(
          "Notification preferences saved."
        );

      } catch (error) {
        setError(
          error?.response?.data?.message ||
            "Failed to save notification settings."
        );
      } finally {
        setSaving(false);
      }
    };

  // ========================================
  // Save Privacy
  // ========================================

  const handlePrivacySave = async () => {
    try {
      setSaving(true);
      setError("");

      const data =
        await updatePrivacySettings(
          settings.privacy
        );

      if (data?.settings) {
        setSettings(data.settings);
      }

      showMessage(
        "Privacy settings saved successfully."
      );

    } catch (error) {
      setError(
        error?.response?.data?.message ||
          "Failed to save privacy settings."
      );
    } finally {
      setSaving(false);
    }
  };

  

  // ========================================
  // Change Password 
  // ========================================

  const handleChangePassword = async (
    passwordData
  ) => {
    try {
      setPasswordLoading(true);
      setPasswordError("");
      setPasswordSuccess("");

      const data =
        await changePassword(passwordData);

      setPasswordSuccess(
        data?.message ||
          "Password changed successfully."
      );

      setTimeout(() => {
        setIsPasswordOpen(false);
        setPasswordSuccess("");
      }, 1500);

    } catch (error) {
      console.error(
        "Change password error:",
        error
      );

      setPasswordError(
        error?.response?.data?.message ||
          "Failed to change password."
      );

    } finally {
      setPasswordLoading(false);
    }
  };

  // ========================================
  // Logout
  // ========================================

  const handleLogout = () => {
    logout();

    navigate("/login", {
      replace: true,
    });
  };

  // ========================================
  // Loading
  // ========================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex min-h-screen items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2
              size={28}
              className="animate-spin text-amber-600"
            />

            <p className="text-sm text-slate-500">
              Loading settings...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <div className="mb-6">
          <Link
            to="/beekeeper/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-800">
            Settings
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your Honey Chain preferences,
            notifications and account settings.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="mb-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* Settings Layout */}
        <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

          {/* Sidebar */}
          <SettingsSidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Content */}
          <div>
            {activeSection ===
              "general" && (
              <GeneralSettings
                settings={settings}
                onChange={updateLocalSettings}
                onSave={handleGeneralSave}
                loading={saving}
              />
            )}

            {activeSection ===
              "notifications" && (
              <NotificationSettings
                settings={settings}
                onChange={updateLocalSettings}
                onSave={
                  handleNotificationSave
                }
                loading={saving}
              />
            )}

            {activeSection ===
              "security" && (
              <SecuritySettings
                profile={profile}
                onChangePassword={() => {
                  setPasswordError("");
                  setPasswordSuccess("");
                  setIsPasswordOpen(true);
                }}
              />
            )}

            {activeSection ===
              "privacy" && (
              <PrivacySettings
                settings={settings}
                onChange={updateLocalSettings}
                onSave={handlePrivacySave}
                loading={saving}
              />
            )}

            {activeSection ===
              "danger" && (
              <DangerZone
                onLogout={handleLogout}
              />
            )}
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={isPasswordOpen}
        onClose={() => {
          if (!passwordLoading) {
            setIsPasswordOpen(false);
            setPasswordError("");
            setPasswordSuccess("");
          }
        }}
        onSave={handleChangePassword}
        loading={passwordLoading}
        error={passwordError}
        success={passwordSuccess}
      />

    </div>
  );
};

export default Settings;
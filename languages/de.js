module.exports = {
    overview: require("../locales.config.js")["de"],
    navbar: {
        home: 'Zuhause',
        dashboard: 'Kontrol Panel',
        discover: 'Erkunde',
        partners: 'Partners',
        team: 'Team',
        support: 'Hilfs Server',
        invite: 'Bot Hinzufügen',
        login: 'Einloggen'
    },
    footer: {
        rights: 'Alle rechte vorbehalten.',
        description: 'Der beste Giveaway Bot auf Discord. Verbessern Sie Ihre Social-Media-Accounts organisch, indem Sie Award erstellen. Es liegt in deinen Händen...',
        menus: {
            first: {
                title: 'Wichtig',
                items: {
                    home: 'Zuhause',
                    dashboard: 'Kontrol Panel',
                    support: 'Hilfs Server',
                    add: 'Bot Hinzufügen'
                }
            },
            second: {
                title: 'Award',
                items: {
                    partners: 'Partners',
                    team: 'Team'
                }
            },
            third: {
                title: 'Unternehmen',
                items: {
                    tos: 'Terms of Service',
                    privacy: 'Privacy Policy'
                }
            },
        },
        developedWith: 'Entwickelt mit ❤️ von clqu & Swôth & Bearbeited von Award Team.',
        allServices: 'Alle services sind online.',
        someServices: 'Ein paar services sind offline.'
    },
    index: {
        title: 'Der beste Giveaway bot auf Discord.',
        description: 'Indem Sie mit Award fortschrittliche Werbegeschenke erstellen, können Sie Ihre Social-Media-Konten verbessern und organischen Auftrieb gewinnen!',
        buttons: {
            dashboard: 'Kontrol Panel',
            support: 'Hilfs Server',
            with_discord: 'Einloggen mit Discord'
        },
        features: {
            title: 'Warum <span class="text-amber-500 font-bold">Award</span>',
            description: 'Mit Award können Sie Ihre Social-Media-Konten verbessern und organische Zuwächse erzielen, indem Sie fortschrittliche Verlosungen erstellen!',
            buttonText: 'Zu Discord hinzufügen',
            items: [
                 { icon: 'fal fa-star', title: 'Einfaches Erstellen bedingter Werbegeschenke', description: 'Sie können die Mitglieder Ihrer Träume in kurzer Zeit haben. Sie können organischen Zuwachs erhalten, indem Sie ein bedingtes Werbegeschenk eröffnen, indem Sie Ihren sozialen Medienkonten wie youtube, twitch, tiktok auf Award folgen. Warum versuchen Sie nicht, ein Gewinnspiel für mehr Informationen zu eröffnen?' },
                 { icon: 'fal fa-star', title: 'Erstellen Sie Ihre eigenen Werbegeschenke', description: 'Sie können den Bot schnell zum Server hinzufügen und Ihr eigenes Giveaway auf der Website erstellen und anpassen. Über das Dashboard können Sie im Detail überprüfen, wer an der Werbeaktion teilgenommen hat.'},
                 { icon: 'fal fa-star', title: 'Werbegeschenke entdecken ', description: 'Sie können an der Verlosung in der Rubrik Entdecken teilnehmen und Preise gewinnen, und Sie können die verbleibende Zeit und detaillierte Informationen auf dem Panel sehen.' },
                 { icon: 'fal fa-star', title: 'Selbst Fühlen Special', description: 'Mit dem Kauf von Boost können Sie mehr als 20 Werbegeschenke gleichzeitig auf Ihrem Server verschenken, allerdings können Sie ein Werbegeschenk 20 Mal wiederholen und einbetten. Sie können Ihre Werbegeschenke mit einem Passwort schützen.' }
            ]
        },
        advanced: [
            { placement: "left", imageUrl: 'https://i.imgur.com/twQBhV3.png', title: 'Vergrößern Sie Ihre Konten', description: 'Entwickeln Sie Ihre Konten mit Award organisch und wachsen Sie.'},
            { placement: "right", imageUrl: 'https://i.imgur.com/aQFJbiI.png', title: 'Sperren Sie Ihre Werbegeschenke', description: "Verschlüsseln Sie Ihre Werbegeschenke privat mit dem Award-Schließsystem." },
            { placement: "left", imageUrl: 'https://i.imgur.com/KsBUSAB.png', title: 'Erweitern Sie Ihren Server', description: "Sie können Ihre Server schneller wachsen lassen, indem Sie eine Einladungspflicht zu ihren Werbegeschenken hinzufügen." }
        ],
        statistics: {
            chosen: 'Ausgewählt von <span class="text-amber-500">{server_count}</span> Servern',
            labels: {
                guilds: 'Server',
                members: 'Nutzer',
                giveaways: 'Werbegeschenke',
                joins: 'Beitritte'
            }
        }
    },
    discover: {
        title: 'Entdecken',
        description: 'Entdecken Sie hier öffentliche Verlosungen und nehmen Sie an den Verlosungen teil, um den Preis zu finden und zu gewinnen, den Sie brauchen!',
        searchInput: 'Suche nach Geschenken, Titel, Servernamen usw.',
        settings: {
            title: 'Einstellungen',
            description: 'Die Werbegeschenke sind die Sortiereinstellungen.',
            amount: {
                title: 'Wie viele?',
                description: 'Hier können Sie die Anzahl der aufzulistenden Werbegeschenke ändern.'
            },
            sort: {
                title: 'Sortierung',
                miniNote: 'Sortierung nach Preis',
                description: 'Ermöglicht es Ihnen, die Reihenfolge der Auflistung zu ändern.'
            }
        },
        az: '(A-Z) Alphabetisch',
        za: '(Z-A) Alphabetisch',
        noreq: 'Keine Anforderungen.',
        reqs: 'Anforderungen'
    },
    spotify: {
      not: 'Hört nichts auf Spotify.',
      current: 'Hört sich auf Spotify etwas an.'
    },
    team: {
        title: 'Sage hallo zu helden!',
        description: 'Hier finden Sie alle, die an Award mitarbeiten und mitgestalten <br>. Vielen Dank an unser Team. <3',
        linkcordLang: 'en',
        noWidget: 'Kein Widget',
        roles: {
            'Founder': 'Founder',
            'Co-Founder': 'Co-Founder',
            'Community-Manager': 'Community Manager',
            'Developer': 'Developer',
            'Designer': 'Designer',
            'Moderator': 'Moderator'
        }
    },
    create: {
        title: 'Erstellen Sie ein Werbegeschenk!',
        description: 'Verteilen Sie Geschenke an Ihre Mitglieder, indem Sie ein Werbegeschenk erstellen!',
        inputs: {
            title: {
                title: 'Titel',
                description: 'Geben Sie den Titel Ihres Werbegeschenks ein'
            },
            description: {
                title: 'Beschreibung',
                description: 'Geben Sie Ihre Giveaway-Beschreibung ein'
            },
            prize: {
                title: 'Preis',
                description: 'Geben Sie Ihren Werbegeschenkpreis ein'
            },
            enddate: {
                title: 'Enddatum',
                description: 'Geben Sie das Datum ein, an dem die Aktion endet'
            },
            winners: {
                title: 'Gewinner Anzahl',
                description: 'Geben Sie die Anzahl der Gewinner ein'
            },
            channel: {
                title: 'Kanal',
                description: 'Die Werbebotschaft wird in diesem Kanal gesendet.'
            },
            requirements: {
                title: 'Anforderungen',
                description: 'Sobald Ihre Mitglieder die von Ihnen festgelegten Bedingungen erfüllen, können sie an der Verlosung teilnehmen'
            },
            role: {
                title: 'Erforderliche Rolle',
                description: 'Wählen Sie die Discord-Rolle, die an der Verlosung teilnehmen kann.'
            },
            invite: {
                title: 'Anzahl der Einladungen die erforderlich sind',
                description: 'Wählen Sie aus, wie viele Einladungen sie benötigt, um an der Verlosung teilzunehmen. (Beispiel: 3)'
            },
            presentation: {
                title: 'Präsentation',
                description: 'Wenn Sie "Privat" wählen, wird Ihr Werbegeschenk nicht in Discover erscheinen, wenn Sie jedoch "Öffentlich" wählen, wird Ihr Werbegeschenk in Discover erscheinen.'
            },
        },
        button: "Einreichen",
        presentationPrivate: 'Privat',
        presentationPublic: 'Öffentlich',
        requirementsDropdownText: 'Sie suchen weitere Optionen? Schauen Sie sich Ihre Verbindungen an.',
        presentationTippy: 'Wichtige Einstellung',
        unReachTippy: 'Dies ist Ihr Recht, ein Werbegeschenk zu eröffnen. Sie haben das Recht, {MORE} weitere Werbegeschenke zu öffnen.',
        reachTippy: 'Sie haben Ihr Giveaway-Limit erreicht.',
        reachedText: 'Du has das Werbegeschenk limit erreicht.<br /> <span class="text-amber-400/50 ml-1 hover:underline cursor-pointer"><i class="fad fa-diamond"></i> Booste</span> den server für mehr kapazität.'
    },
    user: {
        profile: {
            giveaways: {
                title: '{USER}\' sind dem Werbegeschenk beigetreten.'
            }
        },
        dropdown: {
            profile: 'Profil',
            guilds: 'Server',
            connections: 'Verbindungen',
            panel: 'Admin Bereich',
            redeem: 'Einlösen',
            logout: 'Ausloggen',
            _profile: 'Sehe dein profil!',
            _guilds: 'Wähle einen Server!',
            _connections: 'Verwalten Sie Ihre Verbindungen!',
            _panel: 'Sehr, sehr geheim :)',
            _redeem: 'Verwenden Sie den Promo-Code!',
            _logout: 'Beenden Sie die Sitzung der Website!'
        },
        connections: {
            title: 'Verbindungen',
            description: 'Sie können die Konten der sozialen Medien auf Award hier verwalten.',
            button: {
                logout: 'Zum Abmelden anklicken',
                connect: 'Verbinde dich mit <b>{PROVIDER}</b>',
                connectMini: 'Zum Verbinden klicken',
                logged: 'Eingeloggt als <b>{ACCOUNT}</b>'
            }
        },
        redeem: {
            title: 'Einlösen',
            description: 'Sie können Ihren Code hier einlösen!',
            inputPlaceholder: 'Ihr Geschenkcode hier',
            button: 'Einlösen',
            didntWork: 'Der Code hat nicht funktioniert?',
            success: '🎉 Herzlichen Glückwunsch! {COUNT} boosts wurden zu deinem accoun hinzugefügt!'
        }
    },
    dashboard: {
        selectServer: {
            title: 'Server auswählen',
            description: 'Wenn Ihr Server nicht hier ist, <u>login</u> wieder!',
            serverUnderText: 'Zum Auswählen anklicken!',
            buttons: {
                manage: 'Verwalten',
                add: 'Bot einrichten'
            }
        },
        stats: {
            total: 'Alle Werbegeschenke',
            active: 'Aktive Werbegeschenke',
            activeTippy: 'Boost zur Erhöhung des Limits!',
            ended: 'Beendete Werbegeschänke',
            participants: 'Insgesamte Teilnehmer'
        },
        auditLog: {
            title: 'Audit-Protokoll',
            description: 'Das Protokoll der Änderungen, die an Award auf diesem Server vorgenommen wurden, kann hier eingesehen werden.',
            table: {
                user: 'Benutzer',
                date: 'Datum',
                action: 'Aktion',
                message: 'Nachricht'
            },
            boost: 'Hat den server geboostet!',
            unboost: 'Hat den server ge unboosted!',
            giveaway_delete: 'Hat ein Werbegeschenk gelöscht.',
            giveaway_create: 'Hat ein Werbegeschenk gestartet.',
            giveaway_finish: 'Werbegeschenk beendet.',
            giveaway_join: 'Ist einem Werbegeschenk beigetreten.',
            giveawaY_reroll: 'Hat ein Werbegeschenk neu ausgelosst.'
        },
    },
};

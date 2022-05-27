--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: prestation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prestation (
    id integer NOT NULL,
    date_debut timestamp without time zone,
    date_fin timestamp without time zone,
    etat character varying(255),
    market character varying(255),
    titre character varying(255),
    type character varying(255)
);


ALTER TABLE public.prestation OWNER TO postgres;

--
-- Name: prestation_index; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prestation_index
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prestation_index OWNER TO postgres;

--
-- Name: ressource; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ressource (
    matricule character varying(255) NOT NULL,
    dateambauche timestamp without time zone,
    datenaissance timestamp without time zone,
    firstname character varying(255),
    genre character varying(255),
    lastname character varying(255),
    status character varying(255)
);


ALTER TABLE public.ressource OWNER TO postgres;

--
-- Data for Name: prestation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prestation (id, date_debut, date_fin, etat, market, titre, type) FROM stdin;
2	2022-03-31 00:00:00	2022-03-30 00:00:00	cloture	offshore	sassas	cloture
1	2022-04-21 00:00:00	2022-04-27 00:00:00	sasasa	sasas	sasasas	sas
\.


--
-- Data for Name: ressource; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ressource (matricule, dateambauche, datenaissance, firstname, genre, lastname, status) FROM stdin;
2c91808180aadae30180aadbd2c10000	2022-04-27 00:00:00	2022-04-27 00:00:00	hhhhh	hhh	hhhh	hh
8a8a872880ad12c70180ad1b3cf80000	2022-05-04 00:00:00	2022-05-02 00:00:00	sasasa	femme	sasasa	sasasas
\.


--
-- Name: prestation_index; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prestation_index', 2, true);


--
-- Name: prestation prestation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prestation
    ADD CONSTRAINT prestation_pkey PRIMARY KEY (id);


--
-- Name: ressource ressource_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ressource
    ADD CONSTRAINT ressource_pkey PRIMARY KEY (matricule);


--
-- PostgreSQL database dump complete
--

